"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedMandala from "@/components/ui/AnimatedMandala";

/**
 * Hero Section - The first thing visitors see
 * Creates an immersive, peaceful first impression that captures
 * the meditative essence of mandala art
 */
export default function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById("philosophy");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Soft gradient background - warm earthy tones */}
        <div className="absolute inset-0 bg-gradient-to-b from-sand-200 via-sand-100 to-sand-50" />

        {/* Organic shape decorations with earthy colors */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/3 translate-x-1/3">
          <div className="w-full h-full rounded-full bg-gradient-radial from-clay-200/40 via-sand-200/30 to-transparent blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/3 -translate-x-1/3">
          <div className="w-full h-full rounded-full bg-gradient-radial from-stone-300/25 via-clay-100/20 to-transparent blur-3xl" />
        </div>

        {/* Animated Mandala decorations */}
        <AnimatedMandala
          size="xl"
          variant="combined"
          className="top-20 right-10 lg:right-20"
          opacity={0.08}
        />
        <AnimatedMandala
          size="lg"
          variant="dots"
          className="bottom-20 left-10 lg:left-20"
          opacity={0.06}
        />
      </div>

      <Container className="relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block text-sm font-medium tracking-widest uppercase text-clay-600 mb-6"
            >
              Mindful Art & Meditation
            </motion.span>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-serif text-display-sm sm:text-display-md lg:text-display-lg text-stone-900"
            >
              Create with{" "}
              <span className="text-gradient">intention</span>
              <br />
              Find your{" "}
              <span className="italic font-light">stillness</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 text-lg sm:text-xl text-stone-700 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Discover the meditative practice of mandala art. Each dot placed 
              with care becomes a moment of peace, a breath of calm in your 
              creative journey inward.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg">
                Explore Classes
              </Button>
              <Button variant="outline" size="lg">
                Shop Art & Tools
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-stone-300/40 animate-spin-slower" />
              <div className="absolute inset-4 rounded-full border border-clay-300/30 animate-spin-slow" style={{ animationDirection: "reverse" }} />

              {/* Image placeholder - replace with actual image */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-sand-200 to-clay-100 shadow-soft-lg">
                {/* Replace this div with your actual image */}
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/images/art/5.jpg"
                    alt="Beautiful mandala artwork"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating accent dots */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-6 h-6 rounded-full bg-stone-600/50"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 left-8 w-4 h-4 rounded-full bg-clay-500/50"
              />
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 -left-4 w-3 h-3 rounded-full bg-stone-500/50"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={scrollToContent}
          className={cn(
            "absolute bottom-10 left-1/2 -translate-x-1/2",
            "flex flex-col items-center gap-2 text-stone-500",
            "transition-colors duration-300 hover:text-stone-700"
          )}
          aria-label="Scroll to content"
        >
          <span className="text-sm tracking-wider uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </Container>
    </section>
  );
}