"use client";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = localStorage.getItem("theme");
    const useDark = stored ? stored === "dark" : isDark;
    document.documentElement.classList.toggle("dark", useDark);
    setDark(useDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      className={clsx("btn btn-ghost")}
      title="Alternar tema"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
