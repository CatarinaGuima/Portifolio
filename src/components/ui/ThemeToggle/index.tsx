"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ThemeSwitch } from "@/components/ui/Switch"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <ThemeSwitch
      isDark={isDark}
      onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
    />
  )
}
