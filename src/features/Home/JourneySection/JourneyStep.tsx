"use client";

import { motion } from "framer-motion";
import { Play, Users, BookOpen, Award } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { LucideIcon } from "lucide-react";

interface JourneyStepProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

function JourneyStep({ number, icon: Icon, title, description, index }: JourneyStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connecting line (hidden on last item) */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-sage-300 to-transparent z-0" />
      )}

      <div className="relative z-10 flex flex-col items-center text-center lg:text-left lg:items-start">
        {/* Step number and icon */}
        <div className="relative mb-6">
          <div
            className={cn(
              "w-20 h-20 rounded-2xl",
              "bg-gradient-to-br from-sage-500 to-sage-600",
              "flex items-center justify-center",
              "shadow-soft-lg"
            )}
          >
            <Icon className="w-8 h-8 text-cream-100" strokeWidth={1.5} />
          </div>
          <span
            className={cn(
              "absolute -top-2 -right-2 w-8 h-8 rounded-full",
              "bg-clay-500 text-cream-50 text-sm font-semibold",
              "flex items-center justify-center"
            )}
          >
            {number}
          </span>
        </div>

        {/* Content */}
        <h3 className="font-serif text-xl text-sage-800 mb-3">{title}</h3>
        <p className="text-stone-600 leading-relaxed max-w-xs">{description}</p>
      </div>
    </motion.div>
  );
}



export default JourneyStep