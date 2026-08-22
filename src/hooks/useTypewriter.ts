import { useEffect, useState } from "react";

/**
 * Cycles through an array of words with a typewriter effect:
 * types out, pauses, deletes, moves to next word, loops.
 */
export function useTypewriter(words: string[], opts?: {
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
}) {
  const { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = opts || {};
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = window.setTimeout(() => {
        setText((t) =>
          deleting ? t.slice(0, -1) : current.slice(0, t.length + 1)
        );
      }, deleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
