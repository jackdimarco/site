"use client";

import { useState, useEffect, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

// Module-level flag - persists across navigations, resets on refresh
let hasAnimatedOnce = false;

interface CharState {
  sequence: string[];
  timings: number[];
  currentIndex: number;
}

export function ScrambleText({
  text,
  delay = 200,
  duration = 800,
  className = ""
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [mounted, setMounted] = useState(false);
  const charStatesRef = useRef<CharState[]>([]);

  // Ensure hydration completes before animating
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const finalText = text;

    // Skip animation if already played this session
    if (hasAnimatedOnce) {
      setDisplayText(finalText);
      return;
    }

    // Generate unique random sequence for each character
    charStatesRef.current = finalText.split("").map((char) => {
      if (char === " " || /[.,!?;:'"()-]/.test(char)) {
        return { sequence: [char], timings: [0], currentIndex: 0 };
      }

      // Random number of changes (2-4) before resolving
      const numChanges = Math.floor(Math.random() * 3) + 2;
      const sequence: string[] = [];
      const timings: number[] = [];

      let totalTime = 0;
      for (let i = 0; i < numChanges; i++) {
        sequence.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
        // Random duration for each change (50-150ms)
        const changeTime = Math.floor(Math.random() * 100) + 50;
        totalTime += changeTime;
        timings.push(totalTime);
      }

      // Scale timings to fit within duration, with random end time
      const resolveTime = (Math.random() * 0.6 + 0.3) * duration;
      const scale = resolveTime / totalTime;
      const scaledTimings = timings.map(t => t * scale);

      // Add final character
      sequence.push(char);
      scaledTimings.push(resolveTime);

      return { sequence, timings: scaledTimings, currentIndex: 0 };
    });

    const startTimeout = setTimeout(() => {
      const startTime = Date.now();

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        let allDone = true;

        const newText = charStatesRef.current.map((state) => {
          // Find current character based on elapsed time
          let charIndex = state.sequence.length - 1;
          for (let i = 0; i < state.timings.length; i++) {
            if (elapsed < state.timings[i]) {
              charIndex = i;
              allDone = false;
              break;
            }
          }
          return state.sequence[charIndex];
        }).join("");

        setDisplayText(newText);

        if (allDone || elapsed >= duration) {
          clearInterval(interval);
          setDisplayText(finalText);
          hasAnimatedOnce = true;
        }
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, duration, mounted]);

  return <span className={className}>{displayText}</span>;
}
