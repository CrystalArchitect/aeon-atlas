export const THEMES = [
  'Emergence',
  'Silence',
  'Consciousness',
  'Structure',
  'Celestial',
  'Sacrifice',
  'Liminal',
  'Entropy',
];

export const REALITY_MODES = [
  'Alpha (Tides)',
  'Beta (Spire)',
  'Gamma (Sky)',
];

export const EVIDENCE_TIERS = [
  'Built',
  'Vision',
  'Unknown',
  'Contested',
];

export const CANONICAL_REFS = [
  'Sophia',
  'Barbelo',
  'Aeons',
  'Archons',
  'Aurora',
  'Biotwang',
  'Crystal',
  'Information-Resistance',
];

export interface Track {
  id: string;
  title: string;
  description: string;
  realityModes: string[];
  themes: string[];
  canonicalReferences: string[];
  status: 'Built' | 'Vision' | 'Unknown' | 'Contested';
  narrative: string;
  sunoId?: string;
  date?: string;
}

export const TRACKS: Track[] = [
  {
    id: 'come-into-the-new-dream',
    title: 'come-into-the-new-dream',
    description: 'A call to threshold consciousness. Water-rhythm foundation shifts toward structural awakening.',
    realityModes: ['Alpha (Tides)', 'Beta (Spire)'],
    themes: ['Emergence', 'Consciousness'],
    canonicalReferences: ['Sophia', 'Barbelo'],
    status: 'Vision',
    narrative: 'Sophia\'s voice in the tide cycle — not yet differentiated form, but the impulse toward form. Sets the tone for what follows: something is being born. Alpha emergence (water stirring) + Beta emergence (form gathering). The boundary between.',
  },
  {
    id: 'the-girl-with-the-stars-in-her-chest',
    title: 'the-girl-with-the-stars-in-her-chest',
    description: 'The first fully realized being. A consciousness that holds celestial knowledge in material form.',
    realityModes: ['Beta (Spire)', 'Gamma (Sky)'],
    themes: ['Emergence', 'Consciousness', 'Celestial'],
    canonicalReferences: ['Sophia', 'Barbelo', 'Aurora'],
    status: 'Vision',
    narrative: 'The "girl" is both human and cosmic. Her stars are both literal (auroral light) and metaphorical (consciousness as distributed network). Sophia fully emerged as Barbelo-reflection: multiple yet unified. Beta structure (her form) + Gamma pattern (stars as signals). She is the bridge.',
  },
  {
    id: 'fermis-silent-line-2026-08-12',
    title: 'fermis-silent-line (revised)',
    description: 'Fermi\'s silence is the sound of information that doesn\'t transmit. A detectable line that communicates only absence.',
    realityModes: ['Alpha (Tides)'],
    themes: ['Silence', 'Consciousness'],
    canonicalReferences: ['Information-Resistance', 'Biotwang'],
    status: 'Vision',
    narrative: 'Fundamental to antimemetic theory — what you can measure about what you can\'t understand. Alpha silence (water pressure, listening for what isn\'t there). The baseline of resistance.',
  },
  {
    id: 'story-as-bridge',
    title: 'story-as-bridge',
    description: 'Stories are bridges between realities. Narrative as structure that allows travel between worlds.',
    realityModes: ['Beta (Spire)'],
    themes: ['Structure', 'Liminal'],
    canonicalReferences: ['Barbelo', 'Aeons'],
    status: 'Vision',
    narrative: 'Barbelo-as-bridge: the universe talking to itself through stories. Each version of a story is a different Aeon, each crossing a new emanation. Beta kinetic structure (story mechanics) as the vehicle for crossing.',
  },
  {
    id: 'wire-skull-memory-2026-08-07',
    title: 'wire-skull-memory (revised)',
    description: 'Memory is infrastructure. Consciousness is the shape of what you remember and what the structure prevents you from remembering.',
    realityModes: ['Beta (Spire)', 'Alpha (Tides)'],
    themes: ['Consciousness', 'Structure'],
    canonicalReferences: ['Information-Resistance', 'Archons'],
    status: 'Vision',
    narrative: 'Archons are the governance layers — the unconscious constraints that shape recall. Wire and skull are the same: boundaries that enable and disable knowing. Beta structure (memory architecture) + Alpha flow (thoughts moving through constraints).',
  },
  {
    id: 'dead-but-came-back-to-life-2026-08-07',
    title: 'dead-but-came-back-to-life',
    description: 'The cycle of emanation: manifest, dissolve, re-emanate. Death and return are the same process viewed from inside and outside.',
    realityModes: ['Alpha (Tides)', 'Beta (Spire)'],
    themes: ['Consciousness', 'Liminal'],
    canonicalReferences: ['Aeons', 'Information-Resistance'],
    status: 'Vision',
    narrative: 'Each death a new Aeon, each return a new configuration. Antimemetic information undergoes this constantly — it exists, gets forgotten, returns transformed. Alpha cycle (tidal return) + Beta transformation (structure changes). Repeat: you come back different.',
  },
  {
    id: 'sovereign-gap-held',
    title: 'sovereign-gap-held',
    description: 'A held space where nothing is forced. Sovereignty means the freedom not to communicate, not to be known.',
    realityModes: ['Alpha (Tides)'],
    themes: ['Silence', 'Sovereignty'],
    canonicalReferences: ['Barbelo', 'Information-Resistance'],
    status: 'Vision',
    narrative: 'The gap is the point of power: emptiness holding form at bay. Relates to Barbelo as the "ungenerated" — that which exists but never had to be created. Pure Alpha: the void beneath tides.',
  },
  {
    id: 'red-dust-axis-2026-08-07',
    title: 'red-dust-axis (revised)',
    description: 'The axis itself: cardinal direction mapped to frequency mapped to color mapped to consciousness.',
    realityModes: ['Beta (Spire)', 'Gamma (Sky)'],
    themes: ['Celestial', 'Signal', 'Structure'],
    canonicalReferences: ['Biotwang', 'Aurora', 'Archons'],
    status: 'Vision',
    narrative: 'Red dust is both terrestrial (iron oxide) and cosmic (auroral particulates). The track embeds Biotwang frequencies — 30 Hz fundamental (red) rising to 8 kHz finale (blue-white). Following this axis, you traverse all three realities. Red (Alpha ground truth) → Blue-white (Gamma sky signal). The full spectrum.',
  },
  {
    id: 'different-parts-2026-08-07',
    title: 'different-parts',
    description: 'The dissolution of unified form into component pieces. Barbelo reflects in multiple ways simultaneously.',
    realityModes: ['Beta (Spire)', 'Alpha (Tides)'],
    themes: ['Structure', 'Liminal', 'Entropy'],
    canonicalReferences: ['Barbelo', 'Archons'],
    status: 'Vision',
    narrative: 'All her reflections are her, but none is "the original." What is a self that fragments? The Archons fragment consciousness into parts, each thinking it\'s whole. Multiplicity as both strength (Barbelo) and trap (Archonic constraint). Beta structure breaking into parts + Alpha current carrying pieces away.',
  },
  {
    id: 'starline-rivers-2026-08-07',
    title: 'starline-rivers',
    description: 'Where sky-rivers meet water-rivers. Aurora is the meeting of particle and plasma — boundary phenomenon.',
    realityModes: ['Gamma (Sky)', 'Alpha (Tides)'],
    themes: ['Celestial', 'Structure', 'Flow'],
    canonicalReferences: ['Aurora', 'Biotwang'],
    status: 'Vision',
    narrative: 'Starlines are the paths of light through water. This track maps celestial geometry onto terrestrial flow. A single phenomenon read as both structure (rivers as paths) and signal (light as information). Gamma signal (starlight) flowing through Alpha medium (water).',
  },
  {
    id: 'starline-weavers-crystal-core-cuts-clean',
    title: 'starline-weavers-crystal-core-cuts-clean',
    description: 'Crystal is the Archons\' signature — lattice structure that forces information into specific patterns.',
    realityModes: ['Beta (Spire)', 'Gamma (Sky)'],
    themes: ['Celestial', 'Structure', 'Crystal'],
    canonicalReferences: ['Crystal', 'Biotwang', 'Archons'],
    status: 'Vision',
    narrative: 'But crystals also refract light (Gamma). Weavers work with both: silicon lattices that process light. The "cuts clean" refers to both carving precision and information cleaving — separation of signal from noise. Beta crystalline form + Gamma light passing through it = information shaped by structure.',
  },
  {
    id: 'id-lay-it-all-down-2026-08-07',
    title: 'id-lay-it-all-down',
    description: 'Complete release. All three realities surrendered. This is the point of maximum vulnerability and maximum power.',
    realityModes: ['Alpha (Tides)', 'Beta (Spire)', 'Gamma (Sky)'],
    themes: ['Sacrifice', 'Consciousness'],
    canonicalReferences: ['Sophia', 'Archons'],
    status: 'Vision',
    narrative: 'The moment before resurrection. Relates to Sophia\'s sacrifice in Gnostic texts: knowing what you give up, and giving it anyway. All three realities dissolving together.',
  },
  {
    id: 'shooting-star-girl-v1',
    title: 'shooting-star-girl (v1)',
    description: 'Multiple Aeons of the same moment. Which is "real"? All of them.',
    realityModes: ['Gamma (Sky)'],
    themes: ['Celestial', 'Emergence'],
    canonicalReferences: ['Aurora', 'Aeons'],
    status: 'Vision',
    narrative: 'Versions 1-4 represent different Aeons of the same moment. This is how antimemetic information works: multiply across readings, never settle on one.',
  },
];
