# Repository Structure

```
antimemetics-division/
│
├── README.md                   # Project overview & quick start
├── LICENSE.md                  # Dual licensing (MIT code + CC-BY content)
├── GOVERNANCE.md               # Decision-making & Incognita Rule
├── STRUCTURE.md                # This file
│
├── music/                      # Audio, tracks, playlists
│   ├── README.md              # Music sourcing & attribution guide
│   ├── tracks/                # Individual track folders
│   │   ├── suno-generated/    # AI-generated tracks (with IDs)
│   │   ├── community/         # User contributions
│   │   ├── youtube-embeds/    # Curated YouTube links
│   │   └── [track-name]/
│   │       ├── metadata.json  # Artist, date, license, narrative links
│   │       ├── cover.jpg      # Album art (if applicable)
│   │       └── notes.md       # Context, themes, related canon
│   ├── samples/               # Reusable audio segments
│   ├── playlists.json         # Curated listening experiences
│   └── archive-links.json     # Pointers to TerAustralis music
│
├── narrative/                  # Story, worldbuilding, canon
│   ├── README.md              # Knowledge system overview
│   ├── canon.md               # SINGLE SOURCE OF TRUTH
│   ├── research/              # Academic & theoretical papers
│   │   ├── theology/          # Gnostic, apophatic, religious framework
│   │   ├── information-theory/# Memetics, antimemetics, cognitive load
│   │   ├── mythology/         # Mythological parallels & analysis
│   │   └── [topic-name]/
│   ├── sessions/              # Session logs (YYYY-MM-DD.md)
│   ├── entities/              # Character/entity profiles
│   ├── timelines/             # Chronology & world events
│   └── lore/                  # Stories, myths, worldbuilding
│
├── interactive/               # Web apps, games, explorers
│   ├── README.md              # Tech stack options
│   ├── web/                   # React/Next.js projects
│   │   └── music-explorer/    # Browse music + narrative
│   ├── game/                  # Game engine (Godot/Unity/custom)
│   ├── cli/                   # Command-line narrative experiences
│   └── dashboard/             # Data visualization & knowledge graph
│
├── assets/                     # Images, icons, design
│   ├── icons/
│   ├── artwork/               # Visual interpretations of lore
│   ├── logos/                 # Project branding
│   └── brand-guidelines.md    # Design system
│
├── docs/                       # Documentation & guides
│   ├── README.md              # Docs table of contents
│   ├── getting-started.md     # For new contributors
│   ├── interactive-options.md # Detailed tech stack comparison
│   ├── music-guide.md         # How to add music
│   ├── research-guide.md      # How to contribute research
│   ├── architecture.md        # System design & data flow
│   └── api.md                 # Interactive layer API (if applicable)
│
├── scripts/                    # Build, sync, automation
│   ├── sync-from-archive.sh   # Pull music from TerAustralis
│   ├── verify-licenses.js     # Check licensing compliance
│   └── build.sh               # Build interactive layer
│
├── .github/                    # GitHub workflows & templates
│   ├── workflows/
│   │   ├── ci.yml             # Code quality checks
│   │   └── music-sync.yml     # Automated music updates
│   ├── ISSUE_TEMPLATE/        # Issue templates
│   └── PULL_REQUEST_TEMPLATE/ # PR template
│
├── package.json               # Node.js dependencies (if applicable)
└── .gitignore                 # Exclude build artifacts, secrets, etc.
```

---

## Key Files to Understand

### `narrative/canon.md` (READ FIRST)
- **Single source of truth** for all knowledge claims
- All claims tagged: Built / Vision / Unknown / Contested
- Session logs append-only (never rewrite)
- Sources cited with evidence links

### `music/tracks/*/metadata.json` (Example)
```json
{
  "title": "The Girl with the Stars in Her Chest",
  "artist": "Suno AI",
  "date": "2026-05-04",
  "source": {
    "platform": "suno",
    "id": "abc123def456"
  },
  "license": "CC-BY-4.0",
  "commercial_use": true,
  "narrative_themes": ["emergence", "consciousness", "celestial"],
  "canon_references": ["Sophia", "Barbelo reflection"],
  "duration_seconds": 187,
  "cover_art": "cover.jpg"
}
```

### `narrative/sessions/YYYY-MM-DD.md` (Append-only)
Records everything discovered in a session:
- New claims + evidence
- Verified facts
- Contradictions found
- Open questions for next session

---

## Workflows

### Adding Music
1. Create `music/tracks/[name]/` folder
2. Add track file (if audio, else link in metadata)
3. Create `metadata.json` with licensing + narrative links
4. Update `music/playlists.json` if thematic
5. PR to main

### Contributing Research
1. Create or edit file in `narrative/research/[topic]/`
2. Write in Markdown with citations
3. Link to canon in `narrative/canon.md` session log
4. Open PR for review

### Building Interactive Layer
1. Choose stack (React / Game Engine / CLI)
2. Create project in `interactive/[type]/[name]/`
3. Link to `narrative/canon.md` as data source
4. Document API/architecture in project README
5. PR to main

### Updating Canon
1. **Never directly edit** `narrative/canon.md` except as maintainer
2. Instead: propose in GitHub Discussion + provide evidence
3. Maintainer reviews + adds dated session entry
4. Updates reflect original proposer's name + source

---

## Numbering & Naming

- **Session files**: `narrative/sessions/2026-09-13.md` (ISO date)
- **Entities**: Kebab-case, e.g., `narrative/entities/sophia.md`
- **Music tracks**: URL-safe slugs, e.g., `music/tracks/suno-generated/the-girl-with-stars/`
- **Research topics**: Lowercase with hyphens, e.g., `narrative/research/information-theory/memetics.md`

---

## Data Flow

```
Music Sources (Suno, YouTube, Spotify)
    ↓
music/tracks/ + metadata.json
    ↓
music/playlists.json (thematic groupings)
    ↓
Interactive Layer (explorer, player, narrative UI)
    ↓
narrative/canon.md (contextual links)
    ↓
Research (theology, memetics, mythology)
```

---

## .gitignore Essentials

```
# Build artifacts
node_modules/
dist/
build/
*.o

# Secrets
.env
.env.local
secrets/

# IDE
.vscode/
.idea/
*.swp

# Large files (music should be referenced, not stored, where possible)
*.mp3
*.wav
*.flac
# (Unless explicitly committed for archival)

# OS
.DS_Store
Thumbs.db
```

---

## Next Steps

1. **Set up GitHub**: Create public repo, push this structure
2. **Migrate music**: Link/copy from TerAustralis archive
3. **Write canon.md**: Mirror TerAustralis CANON with references
4. **Choose interactive**: Decide on web/game/CLI based on your vision
5. **Invite collaborators**: Share the repo, onboard contributors

See `docs/getting-started.md` for detailed contributor onboarding.
