"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Eye, Leaf } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PhilosophyCard from "./PhilosophyCard";




const philosophyItems = [
  {
    icon: Sparkles,
    title: "Mindful Creation",
    description:
      "Every dot is an opportunity to be present. The repetitive motion quiets the mind and opens space for peace.",
  },
  {
    icon: Heart,
    title: "Healing Through Art",
    description:
      "Art becomes medicine when we create without judgment. Let the process itself be the reward.",
  },
  {
    icon: Eye,
    title: "Inward Journey",
    description:
      "Mandalas are maps of our inner world. As we create them, we discover parts of ourselves waiting to be seen.",
  },
  {
    icon: Leaf,
    title: "Natural Rhythm",
    description:
      "Like nature, we work in cycles. Some days we create, some days we rest. Honor your own rhythm.",
  },
];

/**
 * Philosophy Section - Shares the heart and values behind Thoughtful Dots
 * This section helps visitors understand this is more than just art—it's a practice
 */
export default function PhilosophySection() {
  return (
    <section id="philosophy" className="section-padding relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-clay-100 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-sand-200 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Our Philosophy"
          title={
            <>
              More than art.{" "}
              <span className="italic font-light">A practice.</span>
            </>
          }
          description="Thoughtful Dots is rooted in the belief that creating mandalas is a form of meditation. It's not about perfection—it's about presence, patience, and connecting with yourself."
        />

        {/* Philosophy Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {philosophyItems.map((item, index) => (
            <PhilosophyCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>

        {/* Quote Block */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p className="font-serif text-2xl sm:text-3xl text-stone-700 italic leading-relaxed">
            "In the center of the mandala, we find stillness. In its creation,
            we find ourselves."
          </p>
          <footer className="mt-6 text-clay-600">
            — The Heart of Thoughtful Dots
          </footer>
        </motion.blockquote>
      </Container>
    </section>
  );
}