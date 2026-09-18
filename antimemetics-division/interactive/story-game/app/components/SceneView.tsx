'use client';

import { useGameStore } from '../gameStore';
import type { Scene } from '../data';

interface SceneViewProps {
  scene: Scene;
}

export default function SceneView({ scene }: SceneViewProps) {
  const makeChoice = useGameStore((state) => state.makeChoice);

  const realityModeColor = {
    Alpha: '#4a90e2',
    Beta: '#7b68ee',
    Gamma: '#f5a623',
  };

  const themeColor = {
    Emergence: '#4caf50',
    Silence: '#9c27b0',
    Consciousness: '#2196f3',
    Structure: '#ff9800',
    Celestial: '#00bcd4',
    Sacrifice: '#f44336',
    Liminal: '#9e9e9e',
    Entropy: '#424242',
  };

  return (
    <div className="scene-view">
      {/* Scene Header */}
      <div className="scene-header">
        <h1>{scene.title}</h1>
        {scene.realityMode && (
          <span
            className="tag tag-reality"
            style={{ backgroundColor: realityModeColor[scene.realityMode] }}
          >
            {scene.realityMode}
          </span>
        )}
        {scene.theme && (
          <span
            className="tag tag-theme"
            style={{ backgroundColor: themeColor[scene.theme] }}
          >
            {scene.theme}
          </span>
        )}
      </div>

      {/* Narrative Text */}
      <div className="narrative">
        {scene.narrative.split('\n\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Music Track Reference */}
      {scene.musicTrackId && (
        <div className="track-reference">
          <span className="track-icon">♪</span>
          <span className="track-name">{scene.musicTrackId}</span>
        </div>
      )}

      {/* Choices */}
      {scene.choices.length > 0 ? (
        <div className="choices">
          <p className="choices-prompt">What do you choose?</p>
          {scene.choices.map((choice) => (
            <button
              key={choice.id}
              className="choice-button"
              onClick={() => makeChoice(scene.id, choice.id)}
            >
              <span className="choice-text">{choice.text}</span>
              {choice.consequence && (
                <span className="choice-consequence">{choice.consequence}</span>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="end-scene-message">
          <p>You have reached an end.</p>
          <p>Your journey shapes the world you leave behind.</p>
        </div>
      )}
    </div>
  );
}
