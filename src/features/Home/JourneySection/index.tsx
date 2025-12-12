"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Award, BookOpen, Play, Users } from "lucide-react";
import Link from "next/link";
import JourneyStep from "./JourneyStep";


const journeySteps = [
  {
    number: "01",
    icon: Play,
    title: "Start with Basics",
    description:
      "Begin your journey with beginner-friendly classes. No experience needed—just an open heart.",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Learn & Practice",
    description:
      "Explore techniques at your own pace. Each class builds on the last, deepening your practice.",
  },
  {
    number: "03",
    icon: Users,
    title: "Join the Community",
    description:
      "Connect with fellow artists on Patreon. Share your work, find inspiration, grow together.",
  },
  {
    number: "04",
    icon: Award,
    title: "Create Your Own",
    description:
      "Develop your unique style. What once felt new becomes a personal meditation practice.",
  },
];

/**
 * Journey Section - Guides visitors through the learning path
 * Shows the progression from beginner to confident artist
 */
export default function JourneySection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Your Journey"
          title={
            <>
              Begin your{" "}
              <span className="italic font-light">mindful art</span>{" "}
              practice
            </>
          }
          description="Whether you're brand new to mandala art or looking to deepen your practice, there's a path waiting for you."
        />

        {/* Journey Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {journeySteps.map((step, index) => (
            <JourneyStep
              key={step.title}
              {...step}
              index={index}
            />
          ))}
        </div>

        {/* Featured Class Promo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div
            className={cn(
              "relative rounded-4xl overflow-hidden",
              "bg-gradient-to-r from-sage-800 to-sage-700"
            )}
          >
            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="white" />
                </pattern>
                <rect width="100" height="100" fill="url(#dots-pattern)" />
              </svg>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 p-8 sm:p-12 lg:p-16">
              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="text-sage-300 text-sm font-medium tracking-widest uppercase mb-4">
                  Featured Class
                </span>
                <h3 className="font-serif text-display-sm text-cream-50 mb-4">
                  Mandala Foundations
                </h3>
                <p className="text-sage-200 leading-relaxed mb-8 max-w-md">
                  A gentle introduction to the art of mandala creation. Learn the 
                  basic techniques, tools, and most importantly—how to find stillness 
                  in your creative practice.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    className="bg-cream-50 text-sage-800 hover:bg-cream-100"
                    size="lg"
                  >
                    <Link href="/classes/mandala-foundations">
                      Explore Class
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-sage-400 text-cream-100 hover:bg-sage-700"
                    size="lg"
                  >
                    <Link href="/classes">
                      View All Classes
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="relative aspect-video lg:aspect-auto rounded-2xl overflow-hidden">
                <img
                  src="/images/art/34.jpg"
                  alt="Mandala Foundations Class"
                  className="w-full h-full object-cover"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className={cn(
                      "w-20 h-20 rounded-full",
                      "bg-white/90 backdrop-blur-sm",
                      "flex items-center justify-center",
                      "transition-all duration-300",
                      "hover:scale-110 hover:bg-white"
                    )}
                    aria-label="Watch preview"
                  >
                    <Play className="w-8 h-8 text-sage-700 ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}