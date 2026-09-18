#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import { table as createTable } from 'table';
import { CanonParser } from './parser.js';
import { CanonSearcher, SearchQuery } from './search.js';

class CanonCLI {
  private parser: CanonParser;
  private searcher: CanonSearcher;

  constructor() {
    this.parser = new CanonParser();
    const index = this.parser.parse();
    this.searcher = new CanonSearcher(index);
  }

  async run(): Promise<void> {
    console.clear();
    console.log(
      chalk.cyan.bold(
        '\n╔═══════════════════════════════════════════════════════════╗\n' +
        '║                  ANTIMEMETICS CANON EXPLORER              ║\n' +
        '║                                                           ║\n' +
        '║  Navigate the incognita — the knowledge that resists     ║\n' +
        '║  memory, the stories that refuse to be forgotten.        ║\n' +
        '╚═══════════════════════════════════════════════════════════╝\n'
      )
    );

    let running = true;
    while (running) {
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What would you like to do?',
          choices: [
            { name: 'Search Canon', value: 'search' },
            { name: 'Browse by Section', value: 'browse' },
            { name: 'Filter by Theme/Character/Location', value: 'filter' },
            { name: 'View Entry Details', value: 'details' },
            { name: 'Find Related Entries', value: 'related' },
            { name: 'Quick Stats', value: 'stats' },
            new inquirer.Separator(),
            { name: 'Exit', value: 'exit' },
          ],
        },
      ]);

      switch (answers.action) {
        case 'search':
          await this.handleSearch();
          break;
        case 'browse':
          await this.handleBrowse();
          break;
        case 'filter':
          await this.handleFilter();
          break;
        case 'details':
          await this.handleDetails();
          break;
        case 'related':
          await this.handleRelated();
          break;
        case 'stats':
          this.showStats();
          break;
        case 'exit':
          running = false;
          console.log(
            chalk.cyan('\n✦ The incognita endures. Until next time.\n')
          );
          break;
      }
    }
  }

  private async handleSearch(): Promise<void> {
    console.clear();
    console.log(chalk.magenta.bold('\n🔍 FUZZY SEARCH\n'));

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'query',
        message: 'Enter search term:',
        validate: (input) => input.length > 0 || 'Please enter a search term',
      },
      {
        type: 'number',
        name: 'limit',
        message: 'Maximum results:',
        default: 10,
      },
    ]);

    const results = this.searcher.fuzzySearch(
      answers.query,
      answers.limit
    );

    if (results.length === 0) {
      console.log(chalk.yellow('\nNo results found.\n'));
    } else {
      console.log(chalk.cyan(`\nFound ${results.length} result(s):\n`));
      this.displayResults(results);
    }

    await inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press Enter to continue...',
      },
    ]);
  }

  private async handleBrowse(): Promise<void> {
    console.clear();
    console.log(chalk.magenta.bold('\n📖 BROWSE BY SECTION\n'));

    const index = this.parser.parse();
    const sectionChoices = [
      new inquirer.Separator('Sections:'),
      ...index.sections.map((section) => ({ name: section, value: section })),
      new inquirer.Separator(),
      { name: 'Back', value: null },
    ];

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'section',
        message: 'Select a section:',
        choices: sectionChoices,
      },
    ]);

    if (answers.section) {
      const query: SearchQuery = { section: answers.section };
      const results = this.searcher.search(query);

      if (results.length === 0) {
        console.log(chalk.yellow('\nNo entries in this section.\n'));
      } else {
        console.log(
          chalk.cyan(`\nEntries in ${answers.section} (${results.length}):\n`)
        );
        this.displayResults(results);
      }

      await inquirer.prompt([
        {
          type: 'input',
          name: 'continue',
          message: 'Press Enter to continue...',
        },
      ]);
    }
  }

  private async handleFilter(): Promise<void> {
    console.clear();
    console.log(chalk.magenta.bold('\n🎯 ADVANCED FILTERING\n'));

    const index = this.parser.parse();

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'filterType',
        message: 'Filter by:',
        choices: [
          { name: 'Character/Entity', value: 'character' },
          { name: 'Location/Reality', value: 'location' },
          { name: 'Theme', value: 'theme' },
          { name: 'Evidence Tier', value: 'evidence' },
          new inquirer.Separator(),
          { name: 'Back', value: null },
        ],
      },
    ]);

    if (!answers.filterType) return;

    let filterValue: string;
    const query: SearchQuery = {};

    if (answers.filterType === 'character') {
      const charChoices = index.characters.map((c) => ({ name: c, value: c }));
      const charAnswer = await inquirer.prompt([
        {
          type: 'list',
          name: 'character',
          message: 'Select character/entity:',
          choices: charChoices,
        },
      ]);
      query.character = charAnswer.character;
    } else if (answers.filterType === 'location') {
      const locChoices = index.locations.map((l) => ({ name: l, value: l }));
      const locAnswer = await inquirer.prompt([
        {
          type: 'list',
          name: 'location',
          message: 'Select location/reality:',
          choices: locChoices,
        },
      ]);
      query.location = locAnswer.location;
    } else if (answers.filterType === 'theme') {
      const themeChoices = index.themes.map((t) => ({ name: t, value: t }));
      const themeAnswer = await inquirer.prompt([
        {
          type: 'list',
          name: 'theme',
          message: 'Select theme:',
          choices: themeChoices,
        },
      ]);
      query.theme = themeAnswer.theme;
    } else if (answers.filterType === 'evidence') {
      const evidenceAnswer = await inquirer.prompt([
        {
          type: 'list',
          name: 'evidence',
          message: 'Select evidence tier:',
          choices: [
            { name: 'Built - Established canon', value: 'Built' },
            { name: 'Vision - Prophetic/speculative', value: 'Vision' },
            { name: 'Unknown - Unconfirmed', value: 'Unknown' },
            { name: 'Contested - Disputed', value: 'Contested' },
          ],
        },
      ]);
      query.evidence = evidenceAnswer.evidence;
    }

    const results = this.searcher.search(query);

    if (results.length === 0) {
      console.log(chalk.yellow('\nNo entries match this filter.\n'));
    } else {
      console.log(chalk.cyan(`\nFound ${results.length} result(s):\n`));
      this.displayResults(results);
    }

    await inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press Enter to continue...',
      },
    ]);
  }

  private async handleDetails(): Promise<void> {
    console.clear();
    console.log(chalk.magenta.bold('\n📋 ENTRY DETAILS\n'));

    const index = this.parser.parse();
    const entryChoices = index.entries.map((e) => ({
      name: `${e.title} (${e.section})`,
      value: e.id,
    }));

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'entryId',
        message: 'Select an entry:',
        choices: entryChoices,
        pageSize: 15,
      },
    ]);

    const entry = index.entries.find((e) => e.id === answers.entryId);
    if (entry) {
      this.displayEntryDetails(entry);
    }

    await inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press Enter to continue...',
      },
    ]);
  }

  private async handleRelated(): Promise<void> {
    console.clear();
    console.log(chalk.magenta.bold('\n🔗 RELATED ENTRIES\n'));

    const index = this.parser.parse();
    const entryChoices = index.entries.map((e) => ({
      name: `${e.title} (${e.section})`,
      value: e.id,
    }));

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'entryId',
        message: 'Select an entry to find related content:',
        choices: entryChoices,
        pageSize: 15,
      },
    ]);

    const related = this.searcher.getRelated(answers.entryId);

    if (related.length === 0) {
      console.log(chalk.yellow('\nNo related entries found.\n'));
    } else {
      console.log(chalk.cyan(`\nRelated to this entry (${related.length}):\n`));
      this.displayResults(related);
    }

    await inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press Enter to continue...',
      },
    ]);
  }

  private displayResults(entries: any[]): void {
    const tableData = [
      [chalk.bold('Title'), chalk.bold('Section'), chalk.bold('Evidence'), chalk.bold('Keywords')],
      ...entries.map((e) => [
        e.title,
        e.section,
        this.getEvidenceColor(e.evidence),
        e.keywords.slice(0, 3).join(', ') || '—',
      ]),
    ];

    console.log(createTable(tableData));
  }

  private displayEntryDetails(entry: any): void {
    console.log(chalk.bold.cyan(`\n${entry.title}\n`));
    console.log(chalk.gray(`Section: ${entry.section}`));
    console.log(chalk.gray(`Evidence: ${this.getEvidenceColor(entry.evidence)}`));
    console.log(chalk.gray(`ID: ${entry.id}\n`));

    console.log(chalk.bold('Content:'));
    console.log(chalk.white(entry.content));

    if (entry.keywords.length > 0) {
      console.log(
        chalk.bold('\nKeywords:'),
        entry.keywords.map((k: string) => chalk.magenta(k)).join(', ')
      );
    }

    if (entry.relatedTopics.length > 0) {
      console.log(
        chalk.bold('\nRelated Topics:'),
        entry.relatedTopics.map((t: string) => chalk.cyan(`[[${t}]]`)).join(', ')
      );
    }

    console.log();
  }

  private getEvidenceColor(evidence: string): string {
    switch (evidence) {
      case 'Built':
        return chalk.green('✓ Built');
      case 'Vision':
        return chalk.blue('◆ Vision');
      case 'Unknown':
        return chalk.yellow('? Unknown');
      case 'Contested':
        return chalk.red('✗ Contested');
      default:
        return chalk.gray('—');
    }
  }

  private showStats(): void {
    console.clear();
    const index = this.parser.parse();
    console.log(chalk.cyan.bold('\n📊 CANON STATISTICS\n'));

    const statsData = [
      [chalk.bold('Metric'), chalk.bold('Count')],
      ['Total Entries', String(index.entries.length)],
      ['Sections', String(index.sections.length)],
      ['Characters/Entities', String(index.characters.length)],
      ['Locations/Realities', String(index.locations.length)],
      ['Themes', String(index.themes.length)],
    ];

    console.log(createTable(statsData));

    const builtCount = index.entries.filter((e) => e.evidence === 'Built').length;
    const visionCount = index.entries.filter((e) => e.evidence === 'Vision').length;
    const unknownCount = index.entries.filter((e) => e.evidence === 'Unknown').length;
    const contestedCount = index.entries.filter((e) => e.evidence === 'Contested').length;

    console.log(chalk.bold('\nEvidence Distribution:'));
    console.log(chalk.green(`  Built:     ${builtCount}`));
    console.log(chalk.blue(`  Vision:    ${visionCount}`));
    console.log(chalk.yellow(`  Unknown:   ${unknownCount}`));
    console.log(chalk.red(`  Contested: ${contestedCount}\n`));

    inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press Enter to continue...',
      },
    ]);
  }
}

const cli = new CanonCLI();
cli.run().catch(console.error);
