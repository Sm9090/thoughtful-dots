"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MandalaLoader from "./MandalaLoader";

/**
 * Page Loader Component
 * Full-screen loader that shows while the website is loading
 * Features a beautiful mandala being created dot by dot
 */
export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Minimum display time for the loader (so the animation completes)
    const minLoadTime = 2800;

    // Check if page is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 600); // Exit animation duration
      }, minLoadTime);
    };

    // If document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timeout
      const fallback = setTimeout(handleLoad, 5000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={cn(
            "fixed inset-0 z-[100]",
            "flex items-center justify-center",
            "bg-gradient-to-br from-cream-50 via-cream-100 to-sand-50"
          )}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full">
              <pattern
                id="loader-dots"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" className="fill-sage-300" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#loader-dots)" />
            </svg>
          </div>

          {/* Ambient glow effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sage-200/40 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-clay-200/30 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Main loader content */}
          <div className="relative z-10">
            <MandalaLoader size="lg" showText={true} />
          </div>

          {/* Brand name at bottom */}
          <motion.div
            className="absolute bottom-12 left-0 right-0 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="font-serif text-2xl text-sage-600 tracking-wider">
              Thoughtful Dots
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}