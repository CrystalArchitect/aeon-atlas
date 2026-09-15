# Antimemetics Web Research Explorer

Interactive web dashboard for exploring music, narrative, and canonical knowledge in the Antimemetics Division knowledge system.

## Features

- **Search**: Full-text search across track titles, descriptions, and themes
- **Filter by Theme**: Browse by Emergence, Silence, Consciousness, Structure, Celestial, Sacrifice, Liminal, Entropy
- **Filter by Evidence Tier**: View tracks by status (Built, Vision, Unknown, Contested)
- **Filter by Reality Mode**: Explore Alpha (Tides), Beta (Spire), Gamma (Sky) realities separately or in combination
- **Details View**: Read full track narrative, canonical references, and metadata
- **Responsive Layout**: Three-panel interface (Search/Filter → Results → Details)

## Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: Inline CSS with dark/light theme support
- **State Management**: React hooks (useState, useMemo)
- **Language**: TypeScript

## Installation

```bash
cd interactive/web-explorer
npm install
```

## Development

```bash
npm run dev
# Opens at http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Data Structure

Track data is defined in `app/data.ts`:

```typescript
interface Track {
  id: string;
  title: string;
  description: string;
  realityModes: string[];
  themes: string[];
  canonicalReferences: string[];
  status: 'Built' | 'Vision' | 'Unknown' | 'Contested';
  narrative: string;
  sunoId?: string;
  date?: string;
}
```

## Usage

1. Enter a search query to find tracks by name, description, or theme
2. Use dropdowns to filter by theme, evidence tier, or reality mode
3. Click a track in the results list to view its full details
4. The details panel shows narrative, canonical references, and metadata

## Extending

To add new tracks:
1. Edit `app/data.ts` and add to the `TRACKS` array
2. The explorer automatically reflects new tracks

To customize styling:
- Edit `app/globals.css` for global styles
- Modify inline styles in component files for component-specific styling

## Future Enhancements

- Export/share filtered track collections
- Link to external resources (Suno, YouTube, Spotify)
- User contributions interface
- Related tracks graph visualization
- Full-text indexed search with ranking
- Dark mode toggle
