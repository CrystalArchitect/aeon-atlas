'use client';

interface SearchPanelProps {
  query: string;
  onQueryChange: (query: string) => void;
  selectedTheme: string | null;
  onThemeChange: (theme: string | null) => void;
  selectedEvidence: string | null;
  onEvidenceChange: (evidence: string | null) => void;
  selectedRealityMode: string | null;
  onRealityModeChange: (mode: string | null) => void;
  themes: string[];
}

export default function SearchPanel({
  query,
  onQueryChange,
  selectedTheme,
  onThemeChange,
  selectedEvidence,
  onEvidenceChange,
  selectedRealityMode,
  onRealityModeChange,
  themes,
}: SearchPanelProps) {
  const REALITY_MODES = ['Alpha (Tides)', 'Beta (Spire)', 'Gamma (Sky)'];
  const EVIDENCE_TIERS = ['Built', 'Vision', 'Unknown', 'Contested'];

  return (
    <div style={{
      flex: '0 0 280px',
      borderRight: '1px solid #ccc',
      paddingRight: '1.5rem',
      overflow: 'auto',
    }}>
      <h2 style={{ margin: '0 0 1.5rem 0' }}>Search & Filter</h2>

      {/* Query Search */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
          Query
        </label>
        <input
          type="text"
          placeholder="Search tracks, themes..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #999',
            borderRadius: '4px',
            fontFamily: 'monospace',
          }}
        />
      </div>

      {/* Theme Filter */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
          Theme
        </label>
        <select
          value={selectedTheme || ''}
          onChange={(e) => onThemeChange(e.target.value || null)}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #999',
            borderRadius: '4px',
          }}
        >
          <option value="">All themes</option>
          {themes.map(theme => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>

      {/* Evidence Tier Filter */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
          Evidence Tier
        </label>
        <select
          value={selectedEvidence || ''}
          onChange={(e) => onEvidenceChange(e.target.value || null)}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #999',
            borderRadius: '4px',
          }}
        >
          <option value="">All tiers</option>
          {EVIDENCE_TIERS.map(tier => (
            <option key={tier} value={tier}>
              {tier}
            </option>
          ))}
        </select>
      </div>

      {/* Reality Mode Filter */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
          Reality Mode
        </label>
        <select
          value={selectedRealityMode || ''}
          onChange={(e) => onRealityModeChange(e.target.value || null)}
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #999',
            borderRadius: '4px',
          }}
        >
          <option value="">All modes</option>
          {REALITY_MODES.map(mode => (
            <option key={mode} value={mode}>
              {mode}
            </option>
          ))}
        </select>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          onQueryChange('');
          onThemeChange(null);
          onEvidenceChange(null);
          onRealityModeChange(null);
        }}
        style={{
          width: '100%',
          padding: '0.5rem',
          backgroundColor: '#f0f0f0',
          border: '1px solid #999',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Clear All Filters
      </button>
    </div>
  );
}
