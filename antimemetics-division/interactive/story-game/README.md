# Antimemetics: Story Game

An immersive narrative experience that explores antimemetic concepts through choice-based storytelling, music unlocking, and reality mode alignment.

## Overview

The player awakens in the tides with no memory. Guided by Sophia, the Wisdom Keeper, they navigate three reality modes (Alpha: Tides, Beta: Spire, Gamma: Sky) and eight thematic realms (Emergence, Silence, Consciousness, Structure, Celestial, Sacrifice, Liminal, Entropy).

**Core mechanic**: Every choice unlocks music tracks and aligns the player with different reality modes. The story branches into three acts based on initial choices, converging in a final scene with three possible endings:

1. **The Seed Cast** — Share the knowledge, accepting that it will be forgotten and rediscovered
2. **The Archive Crystallizes** — Preserve it in structures that remember
3. **The Void Embraces** — Release it entirely and dissolve

## Scenes & Structure

- **Prologue**: "Awakening in the Tides" (Alpha reality, Emergence theme)
- **Act 1**: Meeting Sophia, learning about the three doors, first lesson
- **Act 2**: Three branching paths based on reality mode choice (Alpha/Beta/Gamma)
- **Act 3**: Convergence at the apex, choosing what to do with antimemetic knowledge
- **Epilogue**: Three ending scenes based on final choice

Total: 17 story scenes

## Track Integration

Each scene can unlock music tracks from the Antimemetics music archive:

- `come-into-the-new-dream` — Prologue
- `the-girl-with-the-stars-in-her-chest` — Act 1
- `fermis-silent-line` — Alpha path (Prophet of the Tides)
- `story-as-bridge` — Beta path (Scavenger of the Spire)
- `red-dust-axis` — Gamma path (Sky-Caller)
- Additional tracks available as exploration proceeds

## Game Mechanics

### State Management
- **Game Store** (Zustand): Manages scene progression, choices, unlocked tracks, and reality mode alignment
- **Scene Navigation**: Each choice points to the next scene; scene transitions trigger track unlocking
- **Progress Tracking**: HUD shows visited scenes, unlocked tracks, aligned reality modes

### UI Components
- **SceneView**: Displays narrative, scene metadata (reality mode, theme), and choices with consequences
- **HUD**: Progress bar, track counter, reality mode counter, completion indicator
- **Choice Buttons**: Interactive buttons with consequence flavor text

### Visual Design
- Dark aesthetic (gradients, rgba backgrounds)
- Georgia serif font for narrative immersion
- Color coding: Blue (Alpha), Purple (Beta), Orange (Gamma) for reality modes
- Color coding: Green (Emergence), Purple (Silence), etc. for themes
- Smooth transitions and hover effects

## Installation

```bash
cd interactive/story-game
npm install
```

## Development

```bash
npm run dev
# Opens at http://localhost:3000
```

## Build & Deployment

```bash
npm run build
npm start
```

## Data Structure

### Scene Definition
```typescript
interface Scene {
  id: string;
  title: string;
  narrative: string;
  realityMode?: 'Alpha' | 'Beta' | 'Gamma';
  theme?: Theme;
  musicTrackId?: string;        // Track playing during scene
  unlocksTrack?: string;         // Track unlocked when visiting
  choices: Choice[];
}
```

### Game State
```typescript
interface GameState {
  currentSceneId: string;
  visitedSceneIds: Set<string>;
  choicesMade: Array<{ sceneId: string; choiceId: string }>;
  unlockedTrackIds: Set<string>;
  alignedRealityModes: Set<'Alpha' | 'Beta' | 'Gamma'>;
  isGameComplete: boolean;
}
```

## Extending the Story

### Adding New Scenes
Edit `app/data.ts` and add to `STORY_SCENES` array:

```typescript
{
  id: 'new-scene-id',
  title: 'Scene Title',
  narrative: 'Your narrative text here.',
  realityMode: 'Alpha' | 'Beta' | 'Gamma',
  theme: 'Theme name',
  musicTrackId: 'track-id',
  unlocksTrack: 'track-id-to-unlock',
  choices: [
    {
      id: 'choice-id',
      text: 'Choice text',
      nextSceneId: 'next-scene-id',
      consequence: 'Consequence description'
    }
  ]
}
```

### Adding New Tracks
Simply reference new `musicTrackId` values in scenes; the game will display them in the track reference panel.

### Customizing Styling
- `app/game.css` contains all game styling
- Modify color schemes, fonts, spacing directly
- Responsive design already built in

## Future Enhancements

- **Music Playback**: Embed audio players for unlocked tracks
- **Save/Load**: Persist game state to localStorage or backend
- **Canvas/Sprite Graphics**: Replace text-based scene headers with visual representations
- **Audio Narration**: Voice-over for narrative text
- **Godot/Unity Port**: Export story structure and porting guide for engine ports
- **Multiple Playthroughs**: Track different endings and unlock alternate paths
- **Achievements**: Badge system for unlocking all tracks, reaching all endings, etc.

## Porting to Godot/Unity

The story structure in `app/data.ts` is engine-agnostic:
1. Export `STORY_SCENES` and `CHARACTERS` as JSON
2. Implement scene rendering with character sprites/visual effects
3. Wire choice buttons to scene transitions
4. Add music playback with track unlocking
5. Maintain same state management logic

See `docs/godot-port-guide.md` (future) for detailed porting instructions.

## Canonical Integration

This game adapts stories directly from `narrative/canon.md` and music from `music/`. All scene narratives are grounded in:
- Gnostic theology (Sophia, Barbelo, Aeons, Archons)
- Tri-Split Realities (Alpha/Beta/Gamma)
- Antimemetic principles from the knowledge base
- Character archetypes from canonical sources

No canon is invented in the game; all lore references back to the main knowledge system.

---

*"Information resists being remembered. But you choose whether to share it, preserve it, or release it."*
