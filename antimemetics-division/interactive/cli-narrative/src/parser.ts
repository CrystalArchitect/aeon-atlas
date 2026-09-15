import fs from 'fs';
import path from 'path';

export interface CanonEntry {
  id: string;
  title: string;
  section: string;
  content: string;
  keywords: string[];
  relatedTopics: string[];
  evidence?: 'Built' | 'Vision' | 'Unknown' | 'Contested';
}

export interface CanonIndex {
  entries: CanonEntry[];
  sections: string[];
  characters: string[];
  locations: string[];
  themes: string[];
}

export class CanonParser {
  private canonPath: string;
  private index: CanonIndex | null = null;

  constructor(canonPath: string = '../../../narrative/canon.md') {
    this.canonPath = canonPath;
  }

  parse(): CanonIndex {
    if (this.index) return this.index;

    const fullPath = path.join(new URL(import.meta.url).pathname, '..', this.canonPath);
    const content = fs.readFileSync(fullPath, 'utf-8');

    const entries: CanonEntry[] = [];
    const sections = new Set<string>();
    const characters = new Set<string>();
    const locations = new Set<string>();
    const themes = new Set<string>();

    // Parse markdown sections
    const lines = content.split('\n');
    let currentSection = 'Overview';
    let currentEntry = '';
    let currentTitle = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('## ')) {
        currentSection = line.replace('## ', '').trim();
        sections.add(currentSection);
      } else if (line.startsWith('### ')) {
        if (currentEntry && currentTitle) {
          entries.push(this.createEntry(currentTitle, currentSection, currentEntry));
        }
        currentTitle = line.replace('### ', '').trim();
        currentEntry = '';
      } else if (line.length > 0) {
        currentEntry += line + '\n';
      }
    }

    if (currentEntry && currentTitle) {
      entries.push(this.createEntry(currentTitle, currentSection, currentEntry));
    }

    // Extract metadata
    entries.forEach(entry => {
      this.extractMetadata(entry, characters, locations, themes);
    });

    this.index = {
      entries,
      sections: Array.from(sections),
      characters: Array.from(characters),
      locations: Array.from(locations),
      themes: Array.from(themes),
    };

    return this.index;
  }

  private createEntry(title: string, section: string, content: string): CanonEntry {
    const id = title.toLowerCase().replace(/\s+/g, '-');
    const keywords = this.extractKeywords(content);
    const relatedTopics = this.extractRelatedTopics(content);
    const evidence = this.detectEvidence(content);

    return {
      id,
      title,
      section,
      content: content.trim(),
      keywords,
      relatedTopics,
      evidence,
    };
  }

  private extractKeywords(content: string): string[] {
    const keywords: string[] = [];
    const matches = content.match(/\b[A-Z][a-z]+(?:\s[A-Z][a-z]+)*\b/g);
    if (matches) {
      keywords.push(...new Set(matches.slice(0, 10)));
    }
    return keywords;
  }

  private extractRelatedTopics(content: string): string[] {
    const topics: string[] = [];
    const linkMatches = content.match(/\[\[([^\]]+)\]\]/g);
    if (linkMatches) {
      topics.push(...linkMatches.map(m => m.replace(/[\[\]]/g, '')));
    }
    return topics;
  }

  private detectEvidence(content: string): 'Built' | 'Vision' | 'Unknown' | 'Contested' {
    if (content.includes('Vision')) return 'Vision';
    if (content.includes('Unknown')) return 'Unknown';
    if (content.includes('Contested')) return 'Contested';
    return 'Built';
  }

  private extractMetadata(entry: CanonEntry, characters: Set<string>, locations: Set<string>, themes: Set<string>) {
    const gnosticChars = ['Sophia', 'Barbelo', 'Archons', 'Aeons'];
    const antimemeticLocations = ['Tides', 'Spire', 'Sky', 'Trench'];
    const antimemeticThemes = ['Information-Resistance', 'Emergence', 'Silence', 'Structure'];

    entry.keywords.forEach(keyword => {
      if (gnosticChars.includes(keyword)) characters.add(keyword);
      if (antimemeticLocations.includes(keyword)) locations.add(keyword);
      if (antimemeticThemes.includes(keyword)) themes.add(keyword);
    });
  }
}
