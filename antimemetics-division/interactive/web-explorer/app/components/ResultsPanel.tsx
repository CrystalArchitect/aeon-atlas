'use client';

import type { Track } from '../data';

interface ResultsPanelProps {
  tracks: Track[];
  selectedTrackId: string | null;
  onSelectTrack: (trackId: string) => void;
}

export default function ResultsPanel({
  tracks,
  selectedTrackId,
  onSelectTrack,
}: ResultsPanelProps) {
  const getEvidenceBgColor = (status: string) => {
    switch (status) {
      case 'Built': return '#e8f5e9';
      case 'Vision': return '#e3f2fd';
      case 'Unknown': return '#fff3e0';
      case 'Contested': return '#fce4ec';
      default: return '#f5f5f5';
    }
  };

  return (
    <div style={{
      flex: '0 0 300px',
      borderRight: '1px solid #ccc',
      paddingRight: '1.5rem',
      overflow: 'auto',
    }}>
      <h2 style={{ margin: '0 0 1rem 0' }}>
        Tracks ({tracks.length})
      </h2>

      {tracks.length === 0 ? (
        <p style={{ color: '#666' }}>No tracks match your filters</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {tracks.map(track => (
            <div
              key={track.id}
              onClick={() => onSelectTrack(track.id)}
              style={{
                padding: '0.75rem',
                backgroundColor: selectedTrackId === track.id ? '#f0f0f0' : 'white',
                border: selectedTrackId === track.id ? '2px solid #666' : '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                if (selectedTrackId !== track.id) {
                  e.currentTarget.style.backgroundColor = '#fafafa';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTrackId !== track.id) {
                  e.currentTarget.style.backgroundColor = 'white';
                }
              }}
            >
              <div style={{ fontWeight: 500, marginBottom: '0.25rem' }}>
                {track.title}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: '#666',
                marginBottom: '0.5rem',
              }}>
                {track.description}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '0.7rem',
                  padding: '0.2rem 0.4rem',
                  backgroundColor: getEvidenceBgColor(track.status),
                  borderRadius: '2px',
                  fontWeight: 500,
                }}>
                  {track.status}
                </span>
                {track.themes.slice(0, 2).map(theme => (
                  <span
                    key={theme}
                    style={{
                      fontSize: '0.7rem',
                      padding: '0.2rem 0.4rem',
                      backgroundColor: '#e0e0e0',
                      borderRadius: '2px',
                    }}
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
