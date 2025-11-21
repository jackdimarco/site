"use client";

import { useState, useEffect, useRef, memo } from "react";

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
}

function generateScrambled(text: string): string {
  return text.split("").map((char) => {
    if (char === " " || /[.,!?;:'"()-]/.test(char)) {
      return char;
    }
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }).join("");
}

export const ScrambleText = memo(function ScrambleText({
  text,
  delay = 0,
  duration = 1400,
  className = ""
}: ScrambleTextProps) {
  const initialScrambledRef = useRef<string>(hasAnimatedOnce ? text : generateScrambled(text));
  const [displayText, setDisplayText] = useState(text);
  const [isClient, setIsClient] = useState(false);
  const charStatesRef = useRef<CharState[]>([]);

  // Set scrambled text on client mount (only if animation hasn't played yet)
  useEffect(() => {
    if (!hasAnimatedOnce) {
      setDisplayText(initialScrambledRef.current);
    }
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const finalText = text;

    // Skip animation if already played this session
    if (hasAnimatedOnce) {
      return;
    }

    // Generate unique random sequence for each character, starting from initial scrambled state
    const initialScrambled = initialScrambledRef.current!;
    charStatesRef.current = finalText.split("").map((char, index) => {
      const initialChar = initialScrambled[index];

      if (char === " " || /[.,!?;:'"()-]/.test(char)) {
        return { sequence: [char], timings: [0] };
      }

      // Start with the initial scrambled character, add 0-1 more changes, then resolve
      const numChanges = Math.floor(Math.random() * 2); // 0 or 1 additional changes
      const sequence: string[] = [initialChar]; // Start with initial scrambled char
      const timings: number[] = [0];

      let totalTime = 0;
      for (let i = 0; i < numChanges; i++) {
        const changeTime = Math.floor(Math.random() * 100) + 50;
        totalTime += changeTime;
        sequence.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
        timings.push(totalTime);
      }

      // Scale timings to fit within duration, with random end time
      const resolveTime = (Math.random() * 0.6 + 0.3) * duration;
      if (totalTime > 0) {
        const scale = resolveTime / totalTime;
        for (let i = 1; i < timings.length; i++) {
          timings[i] = timings[i] * scale;
        }
      }

      // Add final character
      sequence.push(char);
      timings.push(resolveTime);

      return { sequence, timings };
    });

    const startTimeout = setTimeout(() => {
      const startTime = Date.now();

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        let allDone = true;

        const newText = charStatesRef.current.map((state) => {
          // Find current character based on elapsed time
          // Find the last timing that has been reached
          let charIndex = 0;
          for (let i = state.timings.length - 1; i >= 0; i--) {
            if (elapsed >= state.timings[i]) {
              charIndex = i;
              if (i < state.timings.length - 1) {
                allDone = false;
              }
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
  }, [text, delay, duration, isClient]);

  return <span className={className} suppressHydrationWarning>{displayText}</span>;
});
