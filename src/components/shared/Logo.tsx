"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
}

/**
 * Thoughtful Dots Logo Component
 * Custom SVG logo featuring a mandala-inspired dot pattern
 */
export default function Logo({ variant = "full", className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Logo Mark - Mandala-inspired dots */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Center dot */}
        <circle cx="22" cy="22" r="4" className="fill-sage-600" />

        {/* Inner ring of dots */}
        <circle cx="22" cy="12" r="2.5" className="fill-sage-500" />
        <circle cx="30.07" cy="15.93" r="2.5" className="fill-sage-500" />
        <circle cx="32" cy="22" r="2.5" className="fill-sage-500" />
        <circle cx="30.07" cy="28.07" r="2.5" className="fill-sage-500" />
        <circle cx="22" cy="32" r="2.5" className="fill-sage-500" />
        <circle cx="13.93" cy="28.07" r="2.5" className="fill-sage-500" />
        <circle cx="12" cy="22" r="2.5" className="fill-sage-500" />
        <circle cx="13.93" cy="15.93" r="2.5" className="fill-sage-500" />

        {/* Outer ring of dots */}
        <circle cx="22" cy="4" r="2" className="fill-clay-400" />
        <circle cx="34.73" cy="9.27" r="2" className="fill-clay-400" />
        <circle cx="40" cy="22" r="2" className="fill-clay-400" />
        <circle cx="34.73" cy="34.73" r="2" className="fill-clay-400" />
        <circle cx="22" cy="40" r="2" className="fill-clay-400" />
        <circle cx="9.27" cy="34.73" r="2" className="fill-clay-400" />
        <circle cx="4" cy="22" r="2" className="fill-clay-400" />
        <circle cx="9.27" cy="9.27" r="2" className="fill-clay-400" />
      </svg>

      {/* Logo Text */}
      {variant === "full" && (
        <div className="flex flex-col">
          <span className="font-serif text-xl sm:text-2xl font-semibold text-sage-800 leading-none tracking-tight">
            Thoughtful
          </span>
          <span className="font-serif text-xl sm:text-2xl font-light text-sage-600 leading-none tracking-wide">
            Dots
          </span>
        </div>
      )}
    </div>
  );
}