"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Container from "@/components/ui/Container";

/**
 * MandalaArtSection - A mesmerizing section with an animated black mandala
 * The mandala draws itself as the user scrolls into view
 * Creates a peaceful, meditative atmosphere
 */
export default function MandalaArtSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // SVG path drawing animation variants
  const pathVariants: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: (delay: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2.5,
          delay: delay,
          ease: [0.4, 0, 0.2, 1] as const,
        },
        opacity: {
          duration: 0.5,
          delay: delay,
        },
      },
    }),
  };

  // Generate petal paths for the mandala flower
  const generatePetalPath = (
    centerX: number,
    centerY: number,
    radius: number,
    petalCount: number,
    index: number
  ) => {
    const angle = (index / petalCount) * Math.PI * 2 - Math.PI / 2;
    const x1 = centerX + Math.cos(angle) * radius * 0.3;
    const y1 = centerY + Math.sin(angle) * radius * 0.3;
    const x2 = centerX + Math.cos(angle) * radius;
    const y2 = centerY + Math.sin(angle) * radius;

    const cpOffset = radius * 0.4;
    const cp1x = x1 + Math.cos(angle + Math.PI / 2) * cpOffset;
    const cp1y = y1 + Math.sin(angle + Math.PI / 2) * cpOffset;
    const cp2x = x2 + Math.cos(angle + Math.PI / 2) * cpOffset * 0.5;
    const cp2y = y2 + Math.sin(angle + Math.PI / 2) * cpOffset * 0.5;
    const cp3x = x2 + Math.cos(angle - Math.PI / 2) * cpOffset * 0.5;
    const cp3y = y2 + Math.sin(angle - Math.PI / 2) * cpOffset * 0.5;
    const cp4x = x1 + Math.cos(angle - Math.PI / 2) * cpOffset;
    const cp4y = y1 + Math.sin(angle - Math.PI / 2) * cpOffset;

    return `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2} C ${cp3x} ${cp3y}, ${cp4x} ${cp4y}, ${x1} ${y1}`;
  };

  const centerX = 250;
  const centerY = 250;

  // Generate multiple layers of petals
  const innerPetals = Array.from({ length: 8 }, (_, i) =>
    generatePetalPath(centerX, centerY, 60, 8, i)
  );
  const middlePetals = Array.from({ length: 12 }, (_, i) =>
    generatePetalPath(centerX, centerY, 100, 12, i)
  );
  const outerPetals = Array.from({ length: 16 }, (_, i) =>
    generatePetalPath(centerX, centerY, 150, 16, i)
  );
  const outerMostPetals = Array.from({ length: 24 }, (_, i) =>
    generatePetalPath(centerX, centerY, 200, 24, i)
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-32 sm:py-40 overflow-hidden bg-gradient-to-b from-sand-200 via-sand-100 to-sand-200"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <pattern
            id="dots-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-stone-900" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-clay-600 mb-4">
              The Art of Presence
            </span>

            <h2 className="font-serif text-display-sm sm:text-display-md text-stone-900 mb-6">
              Every dot is a{" "}
              <span className="italic font-light">breath</span>,
              <br />
              every circle a{" "}
              <span className="text-gradient">meditation</span>
            </h2>

            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-lg">
              Watch as the mandala comes to life, dot by dot, line by line.
              This is the essence of our practice — patience, presence, and the
              quiet joy of creation. Let each stroke remind you to slow down
              and breathe.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-serif text-stone-800">∞</div>
                <div className="text-sm text-stone-500 mt-1">Infinite Patterns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-stone-800">☯</div>
                <div className="text-sm text-stone-500 mt-1">Inner Balance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-stone-800">❋</div>
                <div className="text-sm text-stone-500 mt-1">Sacred Geometry</div>
              </div>
            </div>
          </motion.div>

          {/* Mandala Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-clay-200/30 via-transparent to-transparent blur-2xl" />

              {/* Mandala SVG */}
              <svg
                viewBox="0 0 500 500"
                className="w-full h-full drop-shadow-lg"
                style={{ filter: "drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))" }}
              >
                {/* Outer decorative circles */}
                {[230, 215, 200].map((radius, idx) => (
                  <motion.circle
                    key={`outer-circle-${idx}`}
                    cx={centerX}
                    cy={centerY}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={idx === 0 ? 2 : 1}
                    className="text-stone-800"
                    variants={pathVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={idx * 0.2}
                    style={{ opacity: 1 - idx * 0.2 }}
                  />
                ))}

                {/* Outermost petals */}
                {outerMostPetals.map((path, i) => (
                  <motion.path
                    key={`outer-most-${i}`}
                    d={path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-stone-700"
                    variants={pathVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={0.3 + i * 0.05}
                  />
                ))}

                {/* Outer petals */}
                {outerPetals.map((path, i) => (
                  <motion.path
                    key={`outer-${i}`}
                    d={path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-stone-800"
                    variants={pathVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={1.2 + i * 0.06}
                  />
                ))}

                {/* Middle petals */}
                {middlePetals.map((path, i) => (
                  <motion.path
                    key={`middle-${i}`}
                    d={path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-stone-900"
                    variants={pathVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={2.0 + i * 0.08}
                  />
                ))}

                {/* Inner petals */}
                {innerPetals.map((path, i) => (
                  <motion.path
                    key={`inner-${i}`}
                    d={path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-stone-900"
                    variants={pathVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={2.8 + i * 0.1}
                  />
                ))}

                {/* Inner circles */}
                {[40, 25, 12].map((radius, idx) => (
                  <motion.circle
                    key={`inner-circle-${idx}`}
                    cx={centerX}
                    cy={centerY}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2 - idx * 0.5}
                    className="text-stone-900"
                    variants={pathVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={3.5 + idx * 0.2}
                  />
                ))}

                {/* Center dot */}
                <motion.circle
                  cx={centerX}
                  cy={centerY}
                  r="5"
                  fill="currentColor"
                  className="text-stone-900"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.5, delay: 4.2 }}
                />

                {/* Decorative dots around inner circle */}
                {Array.from({ length: 8 }, (_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const x = centerX + Math.cos(angle) * 52;
                  const y = centerY + Math.sin(angle) * 52;
                  return (
                    <motion.circle
                      key={`dot-${i}`}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="currentColor"
                      className="text-stone-800"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        isInView
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.3, delay: 4.0 + i * 0.1 }}
                    />
                  );
                })}
              </svg>

              {/* Subtle rotating ring decoration */}
              <motion.div
                className="absolute inset-[-20px] rounded-full border border-stone-300/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="divider-organic mb-8" />
          <p className="font-serif text-xl sm:text-2xl text-stone-600 italic max-w-2xl mx-auto">
            "The mandala is an ancient symbol representing the universe, wholeness,
            and the journey inward to discover your true self."
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
