import { CanonEntry, CanonIndex } from './parser.js';

export interface SearchQuery {
  text?: string;
  section?: string;
  character?: string;
  location?: string;
  theme?: string;
  evidence?: string;
}

export class CanonSearcher {
  private index: CanonIndex;

  constructor(index: CanonIndex) {
    this.index = index;
  }

  search(query: SearchQuery): CanonEntry[] {
    let results = this.index.entries;

    if (query.text) {
      results = results.filter(entry =>
        entry.title.toLowerCase().includes(query.text!.toLowerCase()) ||
        entry.content.toLowerCase().includes(query.text!.toLowerCase()) ||
        entry.keywords.some(k => k.toLowerCase().includes(query.text!.toLowerCase()))
      );
    }

    if (query.section) {
      results = results.filter(entry => entry.section === query.section);
    }

    if (query.character) {
      results = results.filter(entry =>
        entry.keywords.includes(query.character!) ||
        entry.relatedTopics.includes(query.character!)
      );
    }

    if (query.location) {
      results = results.filter(entry =>
        entry.keywords.includes(query.location!) ||
        entry.content.toLowerCase().includes(query.location!.toLowerCase())
      );
    }

    if (query.theme) {
      results = results.filter(entry =>
        entry.keywords.includes(query.theme!) ||
        entry.content.toLowerCase().includes(query.theme!.toLowerCase())
      );
    }

    if (query.evidence) {
      results = results.filter(entry => entry.evidence === query.evidence);
    }

    return results;
  }

  fuzzySearch(text: string, limit: number = 10): CanonEntry[] {
    const scored = this.index.entries
      .map(entry => ({
        entry,
        score: this.calculateScore(text, entry),
      }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return scored.map(({ entry }) => entry);
  }

  private calculateScore(query: string, entry: CanonEntry): number {
    let score = 0;
    const queryLower = query.toLowerCase();

    if (entry.title.toLowerCase().includes(queryLower)) score += 10;
    if (entry.id.includes(queryLower)) score += 8;
    entry.keywords.forEach(keyword => {
      if (keyword.toLowerCase().includes(queryLower)) score += 3;
    });
    if (entry.content.toLowerCase().includes(queryLower)) score += 1;

    return score;
  }

  getSuggestions(prefix: string): string[] {
    const allTerms = new Set<string>();

    this.index.entries.forEach(entry => {
      allTerms.add(entry.title);
      entry.keywords.forEach(k => allTerms.add(k));
      entry.relatedTopics.forEach(t => allTerms.add(t));
    });

    return Array.from(allTerms)
      .filter(term => term.toLowerCase().startsWith(prefix.toLowerCase()))
      .slice(0, 5);
  }

  getRelated(entryId: string): CanonEntry[] {
    const entry = this.index.entries.find(e => e.id === entryId);
    if (!entry) return [];

    return this.index.entries
      .filter(e => 
        e.id !== entryId &&
        (entry.relatedTopics.some(t => e.title.includes(t)) ||
         entry.keywords.some(k => e.keywords.includes(k)))
      )
      .slice(0, 5);
  }
}
