"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedMandalaProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "dots" | "rings" | "combined";
  className?: string;
  opacity?: number;
}

/**
 * Animated Mandala decoration component
 * Creates a meditative, slowly rotating mandala pattern
 * Perfect for backgrounds and decorative elements
 */
export default function AnimatedMandala({
  size = "md",
  variant = "combined",
  className,
  opacity = 0.15,
}: AnimatedMandalaProps) {
  const sizeValues = {
    sm: { base: 200, dots: 8 },
    md: { base: 400, dots: 12 },
    lg: { base: 600, dots: 16 },
    xl: { base: 800, dots: 20 },
  };

  const { base, dots } = sizeValues[size];

  // Generate dot positions in a circular pattern
  const generateDots = (radius: number, count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        delay: i * 0.1,
      };
    });
  };

  const innerDots = generateDots(base * 0.2, dots);
  const middleDots = generateDots(base * 0.35, dots * 1.5);
  const outerDots = generateDots(base * 0.45, dots * 2);

  return (
    <div
      className={cn(
        "absolute pointer-events-none select-none",
        className
      )}
      style={{ width: base, height: base, opacity }}
    >
      {/* Outer rotating ring */}
      {(variant === "rings" || variant === "combined") && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full border border-stone-400/30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute rounded-full border border-clay-300/20"
            style={{
              inset: base * 0.1,
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 80,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute rounded-full border border-sand-300/20"
            style={{
              inset: base * 0.2,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </>
      )}

      {/* Dot patterns */}
      {(variant === "dots" || variant === "combined") && (
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Inner ring of dots */}
          {innerDots.map((dot, i) => (
            <motion.div
              key={`inner-${i}`}
              className="absolute w-2 h-2 rounded-full bg-stone-500"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${dot.x - 4}px, ${dot.y - 4}px)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Middle ring of dots */}
          {middleDots.map((dot, i) => (
            <motion.div
              key={`middle-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-clay-500"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${dot.x - 3}px, ${dot.y - 3}px)`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Outer ring of dots */}
          {outerDots.map((dot, i) => (
            <motion.div
              key={`outer-${i}`}
              className="absolute w-1 h-1 rounded-full bg-stone-400"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${dot.x - 2}px, ${dot.y - 2}px)`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Center dot */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-stone-600"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}