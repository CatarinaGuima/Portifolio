"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { FiSun, FiMoon } from "react-icons/fi"
import { cn } from "@/lib/utils"

function ThemeSwitch({
  className,
  isDark,
  onCheckedChange,
}: {
  className?: string
  isDark: boolean
  onCheckedChange: () => void
}) {
  return (
    <SwitchPrimitive.Root
      checked={isDark}
      onCheckedChange={onCheckedChange}
      className={cn(
        "relative inline-flex h-[2rem] w-[4rem] items-center rounded-full transition-colors duration-300 cursor-pointer",
        isDark ? "bg-color-theme" : "bg-color-theme",
        className
      )}
    >
      {/* Ícone do Sol (sempre à esquerda) */}
      <FiSun
        className={cn(
          "absolute left-1 w-[1.25rem] h-[1.25rem] transition-opacity",
          isDark ? "opacity-0" : "opacity-100 text-chart-4"
        )}
      />

      {/* Ícone da Lua (sempre à direita) */}
      <FiMoon
        className={cn(
          "absolute right-1 w-[1.25rem] h-[1.25rem] transition-opacity",
          isDark ? "opacity-100 text-chart-1" : "opacity-0"
        )}
      />

      {/* Thumb (círculo que desliza) */}
      <SwitchPrimitive.Thumb
        className={cn(
          "block h-6 w-6 rounded-full bg-background shadow-md transition-transform duration-300",
          isDark ? "translate-x-1" : "translate-x-8"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { ThemeSwitch }
