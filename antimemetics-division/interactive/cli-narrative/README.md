# Antimemetics Canon Explorer — CLI

A terminal-based interactive interface for exploring the antimemetics knowledge base. Navigate the incognita — the stories that resist memory and refuse to be forgotten.

## What This Is

The **Canon Explorer CLI** is part of the Antimemetics Division interactive layer. It provides command-line access to the same canonical knowledge base used by the Story Game and Web Research Explorer, but optimized for research, rapid lookup, and deep exploration in the terminal.

## Features

- **Fuzzy Search**: Find entries by partial matches across titles, content, and keywords
- **Browse by Section**: Navigate organized sections of the canon (Gnostic Theology, Tri-Split Realities, Antimemetic Mechanics, etc.)
- **Advanced Filtering**: Filter by:
  - Character/Entity (Sophia, Barbelo, Archons, Aeons)
  - Location/Reality (Tides, Spire, Sky, Trench)
  - Theme (Information-Resistance, Emergence, Silence, Structure)
  - Evidence Tier (Built, Vision, Unknown, Contested)
- **Related Entries**: Discover thematically connected content
- **Entry Details**: View full content with metadata (keywords, related topics, evidence status)
- **Canon Statistics**: Quick overview of the knowledge base structure

## Installation

```bash
cd interactive/cli-narrative
npm install
npm run build
```

## Usage

```bash
# Run the CLI
npm run start

# Or directly with Node
node dist/index.js
```

### Interactive Menu

The CLI presents an interactive menu with these options:

1. **Search Canon** — Fuzzy search across all entries
2. **Browse by Section** — Navigate the canon by topic area
3. **Filter by Theme/Character/Location** — Drill down by metadata
4. **View Entry Details** — Read full content of a specific entry
5. **Find Related Entries** — Discover thematic connections
6. **Quick Stats** — See overview of the knowledge base
7. **Exit** — Leave the CLI

### Example Workflow

```
1. Select "Search Canon"
2. Type "Sophia" (enters fuzzy search)
3. Results show all entries mentioning Sophia
4. Select an entry to view details
5. Choose "Find Related Entries" to explore connections
6. Use "Filter by Character" to see all Sophia-related lore
```

## Evidence Tiers

Entries are classified by evidence confidence:

- **Built** ✓ — Established canon, core knowledge
- **Vision** ◆ — Prophetic or speculative content
- **Unknown** ? — Unconfirmed or ambiguous
- **Contested** ✗ — Disputed interpretations

The CLI color-codes these for quick visual identification:
- Built: Green
- Vision: Blue
- Unknown: Yellow
- Contested: Red

## Architecture

The CLI is built in TypeScript and uses these components:

- **parser.ts** — `CanonParser` class reads and parses the canon.md file
- **search.ts** — `CanonSearcher` class provides fuzzy search and filtering
- **index.ts** — Main CLI interface using inquirer for prompts and chalk for colors

### Data Flow

```
canon.md → CanonParser → CanonIndex → CanonSearcher → CLI Display
```

## Canonical Knowledge

The CLI accesses the canonical knowledge base at `../../../narrative/canon.md` which contains:

### Sections
- **Gnostic Theology** — Foundational metaphysics (Sophia, Barbelo, Archons, Aeons)
- **Tri-Split Realities** — Three modes of perceiving reality (Alpha/Tides, Beta/Spire, Gamma/Sky)
- **Antimemetic Mechanics** — How information-resistance operates
- **Incognita Entities** — Specific antimemetic instances and manifestations
- **Governance Principles** — Incognita Rule and related doctrine

### Metadata Types
- **Characters/Entities**: Sophia, Barbelo, Archons, Aeons, and specific antimemetic instances
- **Locations/Realities**: Tides, Spire, Sky, Trench, and other spatial-metaphysical loci
- **Themes**: Information-Resistance, Emergence, Silence, Structure
- **Evidence**: Built, Vision, Unknown, Contested

## Development

### Build

```bash
npm run build
```

Outputs TypeScript compilation to `dist/` directory.

### Lint

```bash
npm run lint
```

Uses `eslint` to check code style.

### Watch Mode

```bash
npm run dev
```

Rebuilds on file changes (if configured).

## Dependencies

- **chalk** — Terminal color styling
- **inquirer** — Interactive CLI prompts
- **console-table-printer** — Formatted terminal tables
- **yaml** — YAML file parsing
- **typescript** — Type checking and compilation

## Design Principles

1. **Never Invent Canon** — The CLI reads from canon.md; it doesn't generate or speculate
2. **Incognita Rule** — Respect the governance principle that prevents false claims
3. **Preserve Ambiguity** — The CLI displays evidence tiers and contested claims as-is
4. **Search is Discovery** — Every feature aims to help researchers find connections in existing knowledge

## Related Tools

- **Story Game** — Interactive narrative game exploring the canon through player choices
- **Web Research Explorer** — Browser-based three-panel search interface
- **Canon Editor** — (Future) Tool for maintaining and extending canonical knowledge

## License

Part of the Antimemetics Division interactive layer. See repository root for license.

## Architecture Notes

### Parser Strategy

The `CanonParser` reads markdown sections and creates `CanonEntry` objects:
- Section headers (`## Section`) organize entries
- Subsection headers (`### Entry`) define entry boundaries
- Keywords are extracted from capitalized terms
- Related topics are parsed from `[[wiki-link]]` syntax
- Evidence tier is detected from keywords in content

### Search Strategy

The `CanonSearcher` provides multiple query modes:
- **Fuzzy Search**: Scores entries by title match (10pts), ID match (8pts), keyword match (3pts), content match (1pt)
- **Exact Filters**: Section, character, location, theme, evidence tier
- **Composite Queries**: Combine filters for precise results
- **Related Discovery**: Find entries sharing keywords or topics with a given entry

### CLI Philosophy

The interface prioritizes:
1. **Clarity** — Evidence tiers and metadata clearly visible
2. **Navigation** — Multiple pathways to the same content (search, browse, filter)
3. **Context** — Always show metadata alongside content
4. **Respect** — Never claim to know more than the canon itself states

---

*The incognita endures. This tool merely helps you navigate its silence.*
