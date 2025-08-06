"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/Switch";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-6 bg-gray-200 rounded-full animate-pulse" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2 mr-[4rem]">
      <FiSun 
        className={`w-4 h-4 transition-opacity ${!isDark ? "opacity-100 text-yellow-500" : "opacity-40"}`} 
      />
      
      <Switch
        checked={isDark}
        onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
        className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 cursor-pointer"
        aria-label="Alternar tema claro/escuro"
      >
        <span
          className={`
            absolute top-[2px] left-[2px] w-5 h-5 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center
            transition-transform duration-300 shadow-md
            ${isDark ? "translate-x-6" : "translate-x-0"}
          `}
        >
          {isDark ? (
            <FiMoon className="w-3 h-3 text-blue-400" />
          ) : (
            <FiSun className="w-3 h-3 text-yellow-500" />
          )}
        </span>
      </Switch>
      
      <FiMoon 
        className={`w-4 h-4 transition-opacity ${isDark ? "opacity-100 text-blue-400" : "opacity-40"}`} 
      />
    </div>
  );
}