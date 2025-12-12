"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  animated?: boolean;
}

/**
 * Section heading component with elegant typography
 * Features optional eyebrow text, title, and description
 * Supports animation on scroll for a gentle reveal
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  titleClassName,
  descriptionClassName,
  animated = true,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const content = (
    <>
      {/* Eyebrow text - small label above the title */}
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-sm font-medium tracking-widest uppercase",
            "text-clay-500 mb-4"
          )}
        >
          {eyebrow}
        </span>
      )}

      {/* Main title */}
      <h2
        className={cn(
          "font-serif text-display-sm sm:text-display-md",
          "text-sage-900 leading-tight text-balance",
          titleClassName
        )}
      >
        {title}
      </h2>

      {/* Decorative divider */}
      <div
        className={cn(
          "w-16 h-0.5 mt-6 mb-6 rounded-full",
          "bg-gradient-to-r from-transparent via-sage-400 to-transparent",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />

      {/* Description */}
      {description && (
        <p
          className={cn(
            "text-lg text-stone-600 leading-relaxed",
            "max-w-2xl",
            align === "center" && "mx-auto",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn("max-w-3xl mb-16", alignmentClasses[align], className)}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <div className={cn("max-w-3xl mb-16", alignmentClasses[align], className)}>
      {content}
    </div>
  );
}