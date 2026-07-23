"use client";

import { useSyncExternalStore } from 'react';

// OPTIMIZATION: Zero-Context Architecture
// Using an external store prevents React Context provider waterfalls, ensuring
// only the exact Accordion or Bento Card clicked re-renders, while maintaining
// global state persistence across breakpoints.

let activeFeatureId: string | null = null;
let listeners: Array<() => void> = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

export const featuresStore = {
  setActiveFeature(id: string | null) {
    activeFeatureId = activeFeatureId === id ? null : id; // toggle
    emitChange();
  },
  subscribe(listener: () => void) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return activeFeatureId;
  },
};

export function useActiveFeature() {
  return useSyncExternalStore(featuresStore.subscribe, featuresStore.getSnapshot, featuresStore.getSnapshot);
}
