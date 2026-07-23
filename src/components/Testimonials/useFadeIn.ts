"use client";

import { useEffect, useRef, useState } from 'react';

// OPTIMIZATION: Singleton Observer Pattern
// Prevent memory leaks and excessive browser IPC calls by sharing a single
// IntersectionObserver instance across the entire application per threshold.
const observers = new Map<number, IntersectionObserver>();
const callbacks = new WeakMap<Element, () => void>();

function getObserver(threshold: number) {
  if (!observers.has(threshold)) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = callbacks.get(entry.target);
            if (callback) {
              callback();
              // Self-cleanup: unobserve immediately after triggering
              observer.unobserve(entry.target);
              callbacks.delete(entry.target);
            }
          }
        });
      },
      { threshold }
    );
    observers.set(threshold, observer);
  }
  return observers.get(threshold)!;
}

export function useFadeIn(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fast-path: Skip observation entirely to save main-thread execution
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    callbacks.set(el, () => setIsVisible(true));
    const observer = getObserver(threshold);
    observer.observe(el);

    return () => {
      // Memory cleanup on unmount
      if (callbacks.has(el)) {
        observer.unobserve(el);
        callbacks.delete(el);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}
