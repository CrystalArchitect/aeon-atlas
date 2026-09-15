'use client';

import { useState, useMemo } from 'react';
import SearchPanel from './components/SearchPanel';
import ResultsPanel from './components/ResultsPanel';
import DetailsPanel from './components/DetailsPanel';
import { TRACKS, THEMES, CANONICAL_REFS } from './data';

export default function Home() {
  const [query, setQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);
  const [selectedRealityMode, setSelectedRealityMode] = useState<string | null>(null);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const filteredTracks = useMemo(() => {
    return TRACKS.filter(track => {
      const matchesQuery = query === '' ||
        track.title.toLowerCase().includes(query.toLowerCase()) ||
        track.description.toLowerCase().includes(query.toLowerCase()) ||
        track.themes.some(t => t.toLowerCase().includes(query.toLowerCase()));

      const matchesTheme = !selectedTheme || track.themes.includes(selectedTheme);
      const matchesEvidence = !selectedEvidence || track.status === selectedEvidence;
      const matchesReality = !selectedRealityMode || track.realityModes.includes(selectedRealityMode);

      return matchesQuery && matchesTheme && matchesEvidence && matchesReality;
    });
  }, [query, selectedTheme, selectedEvidence, selectedRealityMode]);

  const selectedTrackData = selectedTrack ? TRACKS.find(t => t.id === selectedTrack) : null;

  return (
    <main style={{ display: 'flex', height: '100vh', gap: '1rem', padding: '1rem' }}>
      {/* Left: Search & Filters */}
      <SearchPanel
        query={query}
        onQueryChange={setQuery}
        selectedTheme={selectedTheme}
        onThemeChange={setSelectedTheme}
        selectedEvidence={selectedEvidence}
        onEvidenceChange={setSelectedEvidence}
        selectedRealityMode={selectedRealityMode}
        onRealityModeChange={setSelectedRealityMode}
        themes={THEMES}
      />

      {/* Center: Results */}
      <ResultsPanel
        tracks={filteredTracks}
        selectedTrackId={selectedTrack}
        onSelectTrack={setSelectedTrack}
      />

      {/* Right: Details */}
      {selectedTrackData && (
        <DetailsPanel track={selectedTrackData} />
      )}
    </main>
  );
}
