"use client";
import { BeatLoader } from "react-spinners";

interface LoadingProps {
  size?: number;
  color?: string;
  fullScreen?: boolean;
  className?: string;
  speedMultiplier?: number;
}

export function Loading({
  size = 20, 
  color = "#8f00ff",
  fullScreen = false,
  className = "",
  speedMultiplier = 1,
}: LoadingProps) {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "fixed inset-0 bg-black/30 z-50" : ""
      } ${className}`}
      aria-busy="true"
      aria-label="Carregando"
    >
      <BeatLoader
        color={color}
        loading={true}
        cssOverride={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '1rem 0'
        }}
        size={size}
        speedMultiplier={speedMultiplier}
        aria-label="Loading Spinner"
      />
    </div>
  );
}