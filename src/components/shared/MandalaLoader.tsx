"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MandalaLoaderProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

/**
 * Mandala Loader Component
 * A beautiful loading animation that creates a mandala dot by dot
 * Represents the meditative process of creating art
 */
export default function MandalaLoader({ size = "lg", showText = true }: MandalaLoaderProps) {
  const sizeConfig = {
    sm: { container: 120, center: 6, inner: 4, middle: 3, outer: 2.5, outermost: 2 },
    md: { container: 180, center: 8, inner: 5, middle: 4, outer: 3, outermost: 2.5 },
    lg: { container: 240, center: 10, inner: 6, middle: 5, outer: 4, outermost: 3 },
  };

  const config = sizeConfig[size];
  const center = config.container / 2;

  // Generate dot positions for each ring
  const generateRing = (radius: number, count: number, startAngle: number = 0) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = startAngle + (i / count) * Math.PI * 2;
      return {
        x: center + Math.cos(angle) * radius,
        y: center + Math.sin(angle) * radius,
      };
    });
  };

  // Create rings with different radii and dot counts
  const rings = [
    { dots: generateRing(config.container * 0.12, 6, 0), size: config.inner, color: "bg-sage-600", delay: 0.3 },
    { dots: generateRing(config.container * 0.22, 8, Math.PI / 8), size: config.middle, color: "bg-clay-500", delay: 0.6 },
    { dots: generateRing(config.container * 0.32, 12, 0), size: config.outer, color: "bg-sage-500", delay: 0.9 },
    { dots: generateRing(config.container * 0.42, 16, Math.PI / 16), size: config.outermost, color: "bg-sand-500", delay: 1.2 },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Mandala Container */}
      <div
        className="relative"
        style={{ width: config.container, height: config.container }}
      >
        {/* Subtle glow background */}
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-radial from-sage-200/30 via-transparent to-transparent",
            "blur-xl"
          )}
        />

        {/* Center dot - appears first with breathing animation */}
        <motion.div
          className={cn(
            "absolute rounded-full bg-sage-700",
            "shadow-lg shadow-sage-600/20"
          )}
          style={{
            width: config.center,
            height: config.center,
            left: center - config.center / 2,
            top: center - config.center / 2,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* Animated rings */}
        {rings.map((ring, ringIndex) => (
          <div key={ringIndex}>
            {ring.dots.map((dot, dotIndex) => (
              <motion.div
                key={`${ringIndex}-${dotIndex}`}
                className={cn("absolute rounded-full", ring.color)}
                style={{
                  width: ring.size,
                  height: ring.size,
                  left: dot.x - ring.size / 2,
                  top: dot.y - ring.size / 2,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.3, 1],
                  opacity: [0, 1, 0.85],
                }}
                transition={{
                  duration: 0.5,
                  delay: ring.delay + dotIndex * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
          </div>
        ))}

        {/* Rotating subtle ring decoration */}
        <motion.div
          className="absolute inset-2 rounded-full border border-sage-300/30"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Second rotating ring (opposite direction) */}
        <motion.div
          className="absolute inset-6 rounded-full border border-clay-300/20"
          animate={{ rotate: -360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Loading text with breathing animation */}
      {showText && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.p
            className="font-serif text-xl text-sage-700 tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Creating with intention
          </motion.p>
          <motion.div
            className="flex justify-center gap-1 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-sage-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}