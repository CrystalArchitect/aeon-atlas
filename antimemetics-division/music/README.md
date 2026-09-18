# 🎵 Music & Audio

This directory contains all audio assets for the Antimemetics Division project.

## Structure

- **`tracks/suno-generated/`** — AI-generated compositions from Suno
- **`tracks/community/`** — Collaborator submissions
- **`tracks/youtube-embeds/`** — Curated YouTube links
- **`samples/`** — Reusable segments (loops, synths, field recordings)
- **`playlists.json`** — Thematic groupings and listening experiences

## Adding a Track

### 1. Create a folder in the appropriate subfolder

```bash
music/tracks/suno-generated/your-track-name/
```

### 2. Add metadata.json

```json
{
  "title": "Track Title",
  "artist": "Artist or 'Suno AI'",
  "date": "2026-09-13",
  "source": {
    "platform": "suno",
    "id": "song-id-from-suno"
  },
  "license": "CC-BY-4.0",
  "commercial_use": true,
  "narrative_themes": ["emergence", "consciousness"],
  "canon_references": ["entity-name", "concept-name"],
  "duration_seconds": 187,
  "cover_art": "cover.jpg"
}
```

### 3. Include attribution

- **Suno tracks**: Paste the Suno ID and share link
- **YouTube**: Include video URL and creator channel
- **Original compositions**: Your name + email
- **Community**: As provided in the PR

### 4. Update playlists.json (optional)

If your track fits a thematic group:

```json
{
  "playlists": {
    "emergence": ["track-a", "track-b", "your-track-name"],
    "silence": ["track-c", "your-track-name"]
  }
}
```

## Licensing

**Every track must have clear licensing.** Accepted licenses:

- **CC0** — Public domain
- **CC-BY-4.0** — Attribution required
- **CC-BY-NC** — Attribution required, non-commercial only
- **Suno terms** — As per your Suno subscription
- **Artist-specified** — Include full terms in metadata

**Cannot include:**
- Copyrighted music without explicit permission
- Sample-based tracks without clearance
- Commercial music without artist consent

## Music Archive Links

Existing music from The-Crystal-Vision-System lives at:
- `crystalarchitect/the-crystal-vision-system/archive/TerAustralis-Incognita/mythos/music/`

To reference:
```json
{
  "title": "Fermis Silent Line",
  "archive_link": "github.com/crystalarchitect/the-crystal-vision-system/archive/TerAustralis-Incognita/mythos/music/fermis-silent-line-2026-08-12.mp3"
}
```

## Narrative Integration

Link your track to canon concepts:

```json
{
  "canon_references": {
    "concepts": ["Sophia", "Barbelo reflection", "Tri-Split Realities"],
    "theories": ["information-resistance", "antimemetic-properties"],
    "characters": ["Crystal", "Drew Magenta Park"]
  }
}
```

## Platform Embeds

For YouTube/Spotify tracks, include embed code:

```json
{
  "embed": {
    "type": "youtube",
    "url": "https://youtu.be/...",
    "embed_code": "<iframe..."
  }
}
```

## Questions?

See `docs/music-guide.md` for detailed instructions.
