"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Mudar para o tema claro" : "Mudar para o tema escuro"}
      className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full hover:bg-secondary"
    >
      {/* Antes de montar, o espaço é reservado para o layout não pular */}
      {mounted ? isDark ? <FiSun size={20} /> : <FiMoon size={20} /> : null}
    </button>
  );
}
