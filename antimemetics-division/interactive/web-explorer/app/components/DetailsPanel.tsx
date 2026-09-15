'use client';

import type { Track } from '../data';

interface DetailsPanelProps {
  track: Track;
}

export default function DetailsPanel({ track }: DetailsPanelProps) {
  const getEvidenceBgColor = (status: string) => {
    switch (status) {
      case 'Built': return '#c8e6c9';
      case 'Vision': return '#bbdefb';
      case 'Unknown': return '#ffe0b2';
      case 'Contested': return '#f8bbd0';
      default: return '#e0e0e0';
    }
  };

  const getEvidenceTextColor = (status: string) => {
    switch (status) {
      case 'Built': return '#1b5e20';
      case 'Vision': return '#0d47a1';
      case 'Unknown': return '#e65100';
      case 'Contested': return '#880e4f';
      default: return '#424242';
    }
  };

  return (
    <div style={{
      flex: '1 1 auto',
      paddingLeft: '1.5rem',
      overflow: 'auto',
    }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ margin: '0 0 0.5rem 0' }}>{track.title}</h1>
        <p style={{ color: '#666', margin: 0 }}>
          {track.description}
        </p>
      </div>

      {/* Evidence Tier */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Evidence Tier</h3>
        <span style={{
          display: 'inline-block',
          padding: '0.5rem 0.75rem',
          backgroundColor: getEvidenceBgColor(track.status),
          color: getEvidenceTextColor(track.status),
          borderRadius: '4px',
          fontWeight: 600,
        }}>
          {track.status}
        </span>
      </div>

      {/* Reality Modes */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Reality Modes</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {track.realityModes.map(mode => (
            <span
              key={mode}
              style={{
                padding: '0.4rem 0.75rem',
                backgroundColor: '#e8eaf6',
                borderRadius: '4px',
              }}
            >
              {mode}
            </span>
          ))}
        </div>
      </div>

      {/* Themes */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Themes</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {track.themes.map(theme => (
            <span
              key={theme}
              style={{
                padding: '0.4rem 0.75rem',
                backgroundColor: '#f3e5f5',
                borderRadius: '4px',
              }}
            >
              {theme}
            </span>
          ))}
        </div>
      </div>

      {/* Canonical References */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Canonical References</h3>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {track.canonicalReferences.map(ref => (
            <span
              key={ref}
              style={{
                padding: '0.4rem 0.75rem',
                backgroundColor: '#fff9c4',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
              }}
            >
              {ref}
            </span>
          ))}
        </div>
      </div>

      {/* Narrative */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Narrative</h3>
        <p style={{
          lineHeight: 1.6,
          color: '#333',
          margin: 0,
          padding: '0.75rem',
          backgroundColor: '#fafafa',
          borderRadius: '4px',
          borderLeft: '3px solid #999',
        }}>
          {track.narrative}
        </p>
      </div>

      {/* Metadata */}
      {track.sunoId && (
        <div style={{
          fontSize: '0.85rem',
          color: '#999',
          paddingTop: '1rem',
          borderTop: '1px solid #ddd',
        }}>
          <strong>Suno ID:</strong> {track.sunoId}
        </div>
      )}
      {track.date && (
        <div style={{
          fontSize: '0.85rem',
          color: '#999',
          paddingTop: '0.5rem',
        }}>
          <strong>Date:</strong> {track.date}
        </div>
      )}
    </div>
  );
}
