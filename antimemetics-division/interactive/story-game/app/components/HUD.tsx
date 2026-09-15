'use client';

interface HUDProps {
  progress: { visitedCount: number; totalCount: number; percentage: number };
  tracksUnlocked: number;
  realityModesAligned: number;
  isComplete: boolean;
}

export default function HUD({
  progress,
  tracksUnlocked,
  realityModesAligned,
  isComplete,
}: HUDProps) {
  return (
    <div className="hud">
      <div className="hud-section">
        <h3>Journey</h3>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
        <p className="progress-text">
          {progress.visitedCount} / {progress.totalCount} scenes
        </p>
      </div>

      <div className="hud-section">
        <h3>Unlocked</h3>
        <div className="stats">
          <div className="stat">
            <span className="stat-icon">♪</span>
            <span className="stat-value">{tracksUnlocked}</span>
            <span className="stat-label">Tracks</span>
          </div>
          <div className="stat">
            <span className="stat-icon">⟡</span>
            <span className="stat-value">{realityModesAligned}</span>
            <span className="stat-label">Realities</span>
          </div>
        </div>
      </div>

      {isComplete && (
        <div className="hud-section completion-indicator">
          <h3>✦ COMPLETE ✦</h3>
          <p className="completion-text">Journey finished</p>
        </div>
      )}
    </div>
  );
}
