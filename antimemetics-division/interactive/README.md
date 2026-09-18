# Interactive Layer

Explorable, immersive experiences for the Antimemetics Division knowledge system.

## Knowledge Graph Explorer

**Live at:** [Knowledge Graph Explorer](https://claude.ai/code/artifact/e8d7071d-54e3-433a-97fd-bd7a32e5a61b)

A D3.js force-directed network visualization exploring:
- **27 music tracks** from the archive
- **8 thematic playlists** (emergence, silence, consciousness, structure, celestial, sacrifice, liminal, entropy)
- **8 canonical references** (Sophia, Barbelo, Aeons, Archons, Aurora, Biotwang, Crystal, Information-Resistance)
- **62 connections** linking tracks to themes and canonical concepts

### Features
- **Search**: Find tracks, themes, or references by name
- **Hover interactions**: Nodes highlight connected concepts
- **Thematic clustering**: Visual grouping by playlist membership
- **Canonical mapping**: See how each track relates to gnostic/antimemetic frameworks
- **Responsive design**: Works on desktop and tablet
- **Dark/light themes**: Respects system preference

### How to Use
1. Open the live link above
2. Use the search box to find specific tracks or concepts
3. Hover over any node to see its connections and metadata
4. Pan/zoom with mouse to explore the full graph
5. Look for thematic clusters (tracks grouped together share themes)

---

## Web Research Explorer

**Status**: ✅ Built (Development ready)  
**Location**: `interactive/web-explorer/`

A three-panel React/Next.js dashboard for exploring music, narrative, and canonical knowledge:

- **Left Panel**: Search and multi-filter interface (by query, theme, evidence tier, reality mode)
- **Center Panel**: Filtered track results with evidence badges and theme tags
- **Right Panel**: Full track details including narrative, canonical references, and metadata

### Features
- Full-text search across track titles, descriptions, and themes
- Filter by 8 themes: Emergence, Silence, Consciousness, Structure, Celestial, Sacrifice, Liminal, Entropy
- Filter by evidence tier: Built, Vision, Unknown, Contested
- Filter by reality mode: Alpha (Tides), Beta (Spire), Gamma (Sky)
- Responsive three-column layout
- Inline component styling with consistent visual hierarchy
- Batch filtering with "Clear All Filters" option

### Installation & Development
```bash
cd interactive/web-explorer
npm install
npm run dev
# Opens at http://localhost:3000
```

### Data Structure
All tracks defined in `app/data.ts` with fields:
- id, title, description
- realityModes, themes, canonicalReferences
- status (Built/Vision/Unknown/Contested)
- narrative, optional sunoId & date

Easily extensible — add new tracks to `TRACKS` array.

---

## Planned Interactions

### Story Game / Narrative Explorer
An immersive world where users:
- Navigate as a character encountering antimemetic concepts
- Unlock music tracks as narrative reveals them
- Make choices that reveal different canonical paths
- See how themes interconnect through gameplay

**Tech**: Godot or Unity; narrative scripted from `narrative/canon.md`

### CLI Narrative
A Node.js command-line tool to:
- Explore canon interactively via terminal
- Search across themes, references, music
- Export discoveries as markdown
- Pipe to other tools for analysis

**Tech**: Node.js + blessed/ink for TUI

---

## Contributing Interactive Features

To add a new interactive experience:

1. **Document your concept** in this README with:
   - What problem it solves (discovery, immersion, contribution)
   - What data it needs from `narrative/canon.md` and `music/`
   - How users interact with it

2. **Choose your stack** from planned options or propose new one

3. **Build from canonical sources**:
   - Read `narrative/canon.md` as the source of truth
   - Link back to music via `music/tracks/*/metadata.json`
   - Reference evidence tiers (Built/Vision/Unknown/Contested)

4. **Test with contributors** — usability matters

5. **Submit as PR** with your README documenting the experience

---

## Technical Notes

- The knowledge graph (D3.js) lives in `knowledge-graph.html` — static, no backend needed
- Music metadata is in `music/tracks/*/metadata.json` — source of truth for track info
- Canonical knowledge is in `narrative/canon.md` — always read this first
- All interactive features should respect the **Incognita Rule**: never invent canon

---

*"Make the invisible visible. Make the unforgettable memorable."*
