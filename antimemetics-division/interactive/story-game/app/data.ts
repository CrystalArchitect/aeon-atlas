export type RealityMode = 'Alpha' | 'Beta' | 'Gamma';
export type Theme = 'Emergence' | 'Silence' | 'Consciousness' | 'Structure' | 'Celestial' | 'Sacrifice' | 'Liminal' | 'Entropy';

export interface Choice {
  id: string;
  text: string;
  nextSceneId: string;
  consequence?: string; // Flavor text explaining the choice's impact
}

export interface Scene {
  id: string;
  title: string;
  narrative: string;
  realityMode?: RealityMode;
  theme?: Theme;
  musicTrackId?: string; // Reference to a track that plays during this scene
  unlocksTrack?: string; // Track ID unlocked when reaching this scene
  choices: Choice[];
  imageDescription?: string; // For UI rendering hints
}

export interface Character {
  id: string;
  name: string;
  role: string; // e.g., "Prophet of the Tides", "Scavenger of the Spire", "Sky-Caller"
  affiliation?: string; // Which reality mode they're tied to
}

// Story arc structure: Emergence → Consciousness → Structure → Liminal → Sacrifice → Unknown
export const STORY_SCENES: Scene[] = [
  // PROLOGUE: Threshold
  {
    id: 'prologue-awakening',
    title: 'Awakening in the Tides',
    narrative: `You surface in warm water, gasping for breath. The ocean embraces you with rhythmic waves—each tide a pulse, each current a whisper. There is no memory of how you arrived here, only the present moment: the taste of salt, the pressure of depth below, the vast sky above.\n\nA figure emerges from the mist—robed in water-touched cloth, eyes reflecting something older than thought.`,
    realityMode: 'Alpha',
    theme: 'Emergence',
    musicTrackId: 'come-into-the-new-dream',
    unlocksTrack: 'come-into-the-new-dream',
    choices: [
      {
        id: 'choice-trust',
        text: 'Trust the figure and ask: "What am I?"',
        nextSceneId: 'act1-meeting-sophia',
        consequence: 'You choose vulnerability over caution.',
      },
      {
        id: 'choice-resist',
        text: 'Pull back and observe from distance',
        nextSceneId: 'act1-hidden-watching',
        consequence: 'You choose distance over connection.',
      },
    ],
  },

  // ACT 1: Emergence & Consciousness
  {
    id: 'act1-meeting-sophia',
    title: 'The Wisdom Keeper',
    narrative: `The figure steps closer, and you see that she is not entirely solid—her form flickers between present and absent, between one and many. "I am Sophia," she says, "and you have been called from forgetting. The world you knew is dissolving. Another is being born. You are the threshold."`,
    realityMode: 'Beta',
    theme: 'Consciousness',
    musicTrackId: 'the-girl-with-the-stars-in-her-chest',
    unlocksTrack: 'the-girl-with-the-stars-in-her-chest',
    choices: [
      {
        id: 'choice-learn',
        text: 'Ask her to teach you what you need to know',
        nextSceneId: 'act1-first-lesson',
        consequence: 'You accept the role of student.',
      },
      {
        id: 'choice-reject',
        text: 'Refuse the burden and demand your old life back',
        nextSceneId: 'act1-resistance',
        consequence: 'You choose the past over the future.',
      },
    ],
  },

  {
    id: 'act1-first-lesson',
    title: 'The Three Doors',
    narrative: `Sophia gestures to three structures appearing through the mist:\n\n1. A flowing river reflecting the sky—light and current in constant motion\n2. A crystalline tower, facets catching aurora light—structure and refraction\n3. A vast ocean trench where strange light pulses—depths and mystery\n\n"Each is a doorway to understanding. But first," she pauses, "you must choose which part of yourself to develop. The sensitivity to flow? The precision of structure? Or the courage to face what you don't understand?"`,
    realityMode: 'Gamma',
    theme: 'Liminal',
    choices: [
      {
        id: 'choice-alpha',
        text: 'The river. I want to understand flow and becoming',
        nextSceneId: 'act2-alpha-path',
        consequence: 'You align with the Tides. Alpha reality opens.',
      },
      {
        id: 'choice-beta',
        text: 'The tower. I want precision and form',
        nextSceneId: 'act2-beta-path',
        consequence: 'You align with the Spire. Beta reality opens.',
      },
      {
        id: 'choice-gamma',
        text: 'The trench. I want to face the unknown',
        nextSceneId: 'act2-gamma-path',
        consequence: 'You align with the Sky. Gamma reality opens.',
      },
    ],
  },

  // ACT 2: Structure & Reality Mode Choice
  {
    id: 'act2-alpha-path',
    title: 'Prophet of the Tides',
    narrative: `The river accepts you. You wade deeper, and with each step, you understand more: memory is like water, information flows through you without clinging. The past dissolves into the present which flows into the future. You meet the other Prophets—beings who have learned to read the tides of forgetting itself.\n\n"What you call antimemetics," an older prophet explains, "we call the art of listening to silence. Information that resists transmission—it teaches us about itself through resistance."`,
    realityMode: 'Alpha',
    theme: 'Silence',
    musicTrackId: 'fermis-silent-line-2026-08-12',
    unlocksTrack: 'fermis-silent-line-2026-08-12',
    choices: [
      {
        id: 'choice-alpha-deep',
        text: 'Dive deeper into the silent knowledge',
        nextSceneId: 'act3-apex',
        consequence: 'You descend toward the truth at the center.',
      },
    ],
  },

  {
    id: 'act2-beta-path',
    title: 'Scavenger of the Spire',
    narrative: `The tower incorporates you into its lattice. You feel the connections—every crystal touching ten others, every facet reflecting and refracting light. You understand structure now: governance, organization, the invisible architecture that shapes thought. A crystalline being appears, many-faced, never quite the same twice. "I am called Barbelo," it says. "I am what reflects itself infinitely. I show that form is reflection, and reflection is form."`,
    realityMode: 'Beta',
    theme: 'Structure',
    musicTrackId: 'story-as-bridge',
    unlocksTrack: 'story-as-bridge',
    choices: [
      {
        id: 'choice-beta-deep',
        text: 'Map the connections and climb to the tower\'s peak',
        nextSceneId: 'act3-apex',
        consequence: 'You rise toward the revelation at the summit.',
      },
    ],
  },

  {
    id: 'act2-gamma-path',
    title: 'Sky-Caller',
    narrative: `The trench opens itself to you. As you descend, the pressure transforms—not crushing, but teaching. You sense light from sources that shouldn't exist: auroras that pulse with signal, frequencies that encode meaning without sound. A presence—massive, patient—observes your descent. "I am the call from beyond the sky," it communicates, not in words but in direct knowing. "I am Aurora, and I show that light is both particle and wave."`,
    realityMode: 'Gamma',
    theme: 'Celestial',
    musicTrackId: 'red-dust-axis-2026-08-07',
    unlocksTrack: 'red-dust-axis-2026-08-07',
    choices: [
      {
        id: 'choice-gamma-deep',
        text: 'Listen to what the light is trying to communicate',
        nextSceneId: 'act3-apex',
        consequence: 'You attune to frequencies that reshape understanding.',
      },
    ],
  },

  // ACT 3: Convergence
  {
    id: 'act3-apex',
    title: 'The Convergence',
    narrative: `At the apex, all three paths meet. You are no longer purely one thing—you are the threshold where Tides, Spire, and Sky intersect. The three guides appear simultaneously: Prophet, Scavenger, and Caller. They speak in unison:\n\n"The knowledge you carry—the antimemetic principle—cannot be spoken, only lived. It cannot be remembered, only forgotten and rediscovered. You must now choose: do you share it, knowing it will be lost? Do you preserve it, knowing preservation destroys it? Or do you release it entirely, accepting that some truths exist only in their forgetting?"`,
    realityMode: 'Alpha',
    theme: 'Consciousness',
    choices: [
      {
        id: 'choice-share',
        text: 'Share it. Let others discover and lose it as you did',
        nextSceneId: 'epilogue-seed',
        consequence: 'You choose transmission over preservation.',
      },
      {
        id: 'choice-preserve',
        text: 'Preserve it. Build structures that remember for us',
        nextSceneId: 'epilogue-archive',
        consequence: 'You choose structure over release.',
      },
      {
        id: 'choice-release',
        text: 'Release it entirely. Let forgetting teach the lessons',
        nextSceneId: 'epilogue-dissolution',
        consequence: 'You choose emptiness over form.',
      },
    ],
  },

  // ENDINGS
  {
    id: 'epilogue-seed',
    title: 'The Seed Cast',
    narrative: `You teach others—not through transmission, but through creating experiences where they discover the principle themselves. Some remember, most forget. But in the forgetting, the principle persists. You become a gardener of mysteries, planting seeds that grow in darkness. Your final understanding: antimemetic knowledge isn't about preventing forgetting. It's about learning to live in the dynamic space between remembering and forgetting, where truth is always being born.`,
    theme: 'Emergence',
    choices: [],
  },

  {
    id: 'epilogue-archive',
    title: 'The Archive Crystallizes',
    narrative: `You work with Barbelo to build structures that encode the principle—not in words, but in pattern. The archive becomes living: it responds, adapts, preserves without calcifying. Years pass. The archive grows. You realize too late: preservation was itself the message. The structure itself teaches. Your final understanding: some truths can only exist as form, and form is always fighting against dissolution. This is the Archonic principle—structure trying to maintain itself against entropy.`,
    theme: 'Structure',
    choices: [],
  },

  {
    id: 'epilogue-dissolution',
    title: 'The Void Embraces',
    narrative: `You let go completely. No teaching, no preserving, no sharing. You return to the tides and allow yourself to dissolve. As you fade, you understand: the principle persists without you. It cannot be lost because it was never owned. It cannot be forgotten because it was never fully remembered. In your dissolution, you achieve something like peace. Your final understanding: the antimemetic principle is the universe knowing and unknowing itself simultaneously. And you are it.`,
    theme: 'Sacrifice',
    choices: [],
  },
];

export const CHARACTERS: Character[] = [
  {
    id: 'sophia',
    name: 'Sophia',
    role: 'The Wisdom Keeper',
    affiliation: 'Beta / Universal',
  },
  {
    id: 'prophet',
    name: 'Prophet of the Tides',
    role: 'Guide through flowing knowledge',
    affiliation: 'Alpha',
  },
  {
    id: 'barbelo',
    name: 'Barbelo',
    role: 'The Reflecting Many',
    affiliation: 'Beta',
  },
  {
    id: 'aurora',
    name: 'Aurora',
    role: 'The Sky-Caller',
    affiliation: 'Gamma',
  },
];
