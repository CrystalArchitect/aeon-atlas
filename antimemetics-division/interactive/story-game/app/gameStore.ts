import { create } from 'zustand';
import { STORY_SCENES } from './data';

export interface GameState {
  // Scene progression
  currentSceneId: string;
  visitedSceneIds: Set<string>;

  // Choices made
  choicesMade: Array<{ sceneId: string; choiceId: string }>;

  // Track unlocking
  unlockedTrackIds: Set<string>;

  // Reality mode alignment
  alignedRealityModes: Set<'Alpha' | 'Beta' | 'Gamma'>;

  // Game state
  isGameComplete: boolean;

  // Actions
  navigateToScene: (sceneId: string) => void;
  makeChoice: (sceneId: string, choiceId: string) => void;
  resetGame: () => void;
  getCurrentScene: () => any;
  getProgress: () => { visitedCount: number; totalCount: number; percentage: number };
}

const initialState = {
  currentSceneId: 'prologue-awakening',
  visitedSceneIds: new Set(['prologue-awakening']),
  choicesMade: [],
  unlockedTrackIds: new Set(),
  alignedRealityModes: new Set<'Alpha' | 'Beta' | 'Gamma'>(),
  isGameComplete: false,
};

export const useGameStore = create<GameState>((set, get) => ({
  ...initialState,

  navigateToScene: (sceneId: string) => {
    set((state) => {
      const newVisited = new Set(state.visitedSceneIds);
      newVisited.add(sceneId);

      const scene = STORY_SCENES.find(s => s.id === sceneId);
      const newUnlocked = new Set(state.unlockedTrackIds);
      if (scene?.unlocksTrack) {
        newUnlocked.add(scene.unlocksTrack);
      }

      const newAligned = new Set(state.alignedRealityModes);
      if (scene?.realityMode) {
        newAligned.add(scene.realityMode);
      }

      const isComplete = sceneId.startsWith('epilogue-');

      return {
        currentSceneId: sceneId,
        visitedSceneIds: newVisited,
        unlockedTrackIds: newUnlocked,
        alignedRealityModes: newAligned,
        isGameComplete: isComplete,
      };
    });
  },

  makeChoice: (sceneId: string, choiceId: string) => {
    set((state) => ({
      choicesMade: [...state.choicesMade, { sceneId, choiceId }],
    }));

    // Navigate to the next scene based on the choice
    const scene = STORY_SCENES.find(s => s.id === sceneId);
    const choice = scene?.choices.find(c => c.id === choiceId);
    if (choice) {
      get().navigateToScene(choice.nextSceneId);
    }
  },

  resetGame: () => {
    set(initialState);
  },

  getCurrentScene: () => {
    const state = get();
    return STORY_SCENES.find(s => s.id === state.currentSceneId);
  },

  getProgress: () => {
    const state = get();
    const totalCount = STORY_SCENES.length;
    const visitedCount = state.visitedSceneIds.size;
    const percentage = Math.round((visitedCount / totalCount) * 100);
    return { visitedCount, totalCount, percentage };
  },
}));
