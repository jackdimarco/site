"use client";

import { useState, useEffect, useLayoutEffect, useRef, memo } from "react";

interface ScrambleTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

// Tracks if animation has played in this session (resets on page reload)
let hasAnimatedOnce = false;

function generateScrambled(text: string): string {
  return text.split("").map((char) => {
    if (char === " " || /[.,!?;:'"()-]/.test(char)) {
      return char;
    }
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }).join("");
}

function getRandomChar(): string {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function shouldSkipChar(char: string): boolean {
  return char === " " || /[.,!?;:'"()-]/.test(char);
}

export const ScrambleText = memo(function ScrambleText({
  text,
  delay = 0,
  duration = 1000,
  className = ""
}: ScrambleTextProps) {
  const initialScrambled = useRef(hasAnimatedOnce ? text : generateScrambled(text));
  const [displayText, setDisplayText] = useState(() => hasAnimatedOnce ? text : initialScrambled.current);

  // Store resolve time and change frequency for each character
  const resolveTimesRef = useRef<number[]>([]);
  const changeIntervalsRef = useRef<number[]>([]);
  const lastChangeTimesRef = useRef<number[]>([]);

  useLayoutEffect(() => {
    // Skip animation if already played this session
    if (hasAnimatedOnce) {
      return;
    }

    // Calculate when each character should resolve and how often it changes
    resolveTimesRef.current = text.split("").map(() =>
      Math.random() * duration * 0.7 + duration * 0.3 // Resolve between 30-100% of duration
    );

    // Each character changes at its own random frequency (60-120ms)
    changeIntervalsRef.current = text.split("").map(() =>
      Math.random() * 60 + 60
    );

    lastChangeTimesRef.current = new Array(text.length).fill(0);

    const startAnimation = () => {
      const startTime = Date.now();
      let currentText = initialScrambled.current.split("");

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        let allResolved = true;

        // Update each character
        const newText = text.split("").map((finalChar, i) => {
          if (shouldSkipChar(finalChar)) {
            return finalChar;
          }

          // Check if this character should resolve
          if (elapsed >= resolveTimesRef.current[i]) {
            return finalChar;
          }

          // Not resolved yet
          allResolved = false;

          // Only change if enough time has passed since last change
          if (elapsed - lastChangeTimesRef.current[i] >= changeIntervalsRef.current[i]) {
            currentText[i] = getRandomChar();
            lastChangeTimesRef.current[i] = elapsed;
          }

          return currentText[i];
        }).join("");

        setDisplayText(newText);

        if (allResolved || elapsed >= duration) {
          clearInterval(interval);
          setDisplayText(text);
          hasAnimatedOnce = true;
        }
      }, 30); // Check every 30ms for smooth updates

      return interval;
    };

    if (delay === 0) {
      const interval = startAnimation();
      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => startAnimation(), delay);
      return () => clearTimeout(timeout);
    }
  }, [text, delay, duration]);

  return <span className={className} suppressHydrationWarning>{displayText}</span>;
});
