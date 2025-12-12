"use client";

import { cn } from "@/lib/utils";
import { JSX, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Container component for consistent page width and padding
 * Uses organic, flowing spacing that feels natural and calming
 */
export default function Container({
  children,
  className,
  size = "default",
  as: Component = "div",
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    wide: "max-w-screen-2xl",
    full: "max-w-full",
  };

  return (
    <Component
      className={cn(
        "w-full mx-auto px-6 sm:px-8 lg:px-12",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
}