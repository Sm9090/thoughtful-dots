"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar?: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    location: "Portland, OR",
    content:
      "Finding Thoughtful Dots changed everything for me. The classes aren't just about learning techniques—they're about finding peace. I look forward to my dotting time every evening as my way to unwind.",
    rating: 5,
  },
  {
    id: "2",
    name: "Margaret K.",
    location: "Austin, TX",
    content:
      "As a retiree, I was looking for something meaningful to fill my time. Mandala art has become my meditation. The community here is so supportive and encouraging.",
    rating: 5,
  },
  {
    id: "3",
    name: "Jennifer L.",
    location: "Seattle, WA",
    content:
      "I never considered myself an artist, but this practice showed me creativity isn't about talent—it's about presence. Each piece I create reminds me to slow down.",
    rating: 5,
  },
  {
    id: "4",
    name: "Patricia H.",
    location: "Denver, CO",
    content:
      "The tools are beautiful quality, and the classes are perfectly paced for beginners. I've recommended Thoughtful Dots to everyone in my book club!",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "fill-clay-400 text-clay-400" : "text-stone-300"
          )}
        />
      ))}
    </div>
  );
}

/**
 * Testimonials Section - Social proof from the community
 * Features a carousel of testimonials with smooth animations
 */
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    } else {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section className="section-padding bg-sage-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Quote className="absolute top-20 left-10 w-40 h-40 text-sage-200/20" />
        <Quote className="absolute bottom-20 right-10 w-32 h-32 text-sage-200/20 rotate-180" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Community Love"
          title={
            <>
              Stories from our{" "}
              <span className="italic font-light">community</span>
            </>
          }
          description="Real experiences from people who have found peace and creativity through mandala art."
        />

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "bg-white rounded-4xl p-8 sm:p-12",
                  "border border-sand-200/50 shadow-soft-lg",
                  "text-center"
                )}
              >
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  <StarRating rating={testimonials[currentIndex].rating} />
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-xl sm:text-2xl text-sage-800 leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sage-200 to-sage-300 mb-4 flex items-center justify-center">
                    <span className="font-serif text-xl text-sage-700">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <cite className="not-italic">
                    <span className="block font-medium text-sage-800">
                      {testimonials[currentIndex].name}
                    </span>
                    <span className="block text-sm text-stone-500 mt-1">
                      {testimonials[currentIndex].location}
                    </span>
                  </cite>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => navigate("prev")}
                className={cn(
                  "w-12 h-12 rounded-full",
                  "bg-white border border-sand-200",
                  "flex items-center justify-center",
                  "text-sage-600 transition-all duration-300",
                  "hover:bg-sage-50 hover:border-sage-300 hover:text-sage-800"
                )}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("next")}
                className={cn(
                  "w-12 h-12 rounded-full",
                  "bg-white border border-sand-200",
                  "flex items-center justify-center",
                  "text-sage-600 transition-all duration-300",
                  "hover:bg-sage-50 hover:border-sage-300 hover:text-sage-800"
                )}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-8 bg-sage-500"
                      : "bg-sage-200 hover:bg-sage-300"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}