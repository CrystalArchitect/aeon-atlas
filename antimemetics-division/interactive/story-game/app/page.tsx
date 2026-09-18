'use client';

import { useGameStore } from './gameStore';
import SceneView from './components/SceneView';
import HUD from './components/HUD';
import './game.css';

export default function Game() {
  const currentScene = useGameStore((state) => state.getCurrentScene());
  const progress = useGameStore((state) => state.getProgress());
  const isGameComplete = useGameStore((state) => state.isGameComplete);
  const unlockedTracks = useGameStore((state) => state.unlockedTrackIds);
  const alignedModes = useGameStore((state) => state.alignedRealityModes);

  if (!currentScene) {
    return <div className="game-container">Loading...</div>;
  }

  return (
    <div className="game-container">
      <HUD
        progress={progress}
        tracksUnlocked={unlockedTracks.size}
        realityModesAligned={alignedModes.size}
        isComplete={isGameComplete}
      />

      <SceneView scene={currentScene} />

      {isGameComplete && (
        <div className="completion-modal">
          <div className="completion-content">
            <h2>Journey's End</h2>
            <p>You have traversed the antimemetic threshold.</p>
            <p>Tracks unlocked: {unlockedTracks.size}</p>
            <p>Reality modes aligned: {alignedModes.size}</p>
            <button
              onClick={() => useGameStore((state) => state.resetGame())}
              className="button-primary"
            >
              Begin Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
