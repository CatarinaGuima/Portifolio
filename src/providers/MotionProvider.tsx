"use client";

import { MotionConfig } from "framer-motion";

// Quem prefere menos movimento no sistema não vê as animações de entrada
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
