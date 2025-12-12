"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import AnimatedMandala from "@/components/ui/AnimatedMandala";

/**
 * Newsletter Section - Invites visitors to join the community
 * Features a beautiful opt-in form with subtle animations
 */
export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call - replace with actual newsletter signup
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setEmail("");

    // Reset after showing success
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-800 via-sage-700 to-sage-800" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatedMandala
          size="lg"
          variant="rings"
          className="-top-20 -left-20"
          opacity={0.1}
        />
        <AnimatedMandala
          size="xl"
          variant="dots"
          className="-bottom-32 -right-32"
          opacity={0.08}
        />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <pattern id="newsletter-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#newsletter-dots)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <span className="inline-block text-sage-300 text-sm font-medium tracking-widest uppercase mb-4">
            Stay Connected
          </span>

          {/* Heading */}
          <h2 className="font-serif text-display-sm sm:text-display-md text-cream-50 mb-6">
            Join our{" "}
            <span className="italic font-light">mindful</span>{" "}
            community
          </h2>

          {/* Description */}
          <p className="text-sage-200 text-lg leading-relaxed mb-10">
            Receive inspiration, tips, and early access to new classes and tools. 
            We share thoughtfully, never spam—just gentle reminders to create.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={status === "loading" || status === "success"}
                className={cn(
                  "w-full px-6 py-4 pr-14 rounded-full",
                  "bg-white/10 backdrop-blur-sm",
                  "border border-sage-500/50",
                  "text-cream-100 placeholder:text-sage-300",
                  "transition-all duration-300",
                  "focus:outline-none focus:border-sage-400 focus:bg-white/15",
                  "disabled:opacity-60 disabled:cursor-not-allowed"
                )}
                required
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={cn(
                  "absolute right-2 top-1/2 -translate-y-1/2",
                  "w-10 h-10 rounded-full",
                  "flex items-center justify-center",
                  "transition-all duration-300",
                  status === "success"
                    ? "bg-green-500 text-white"
                    : "bg-clay-500 text-cream-50 hover:bg-clay-600",
                  "disabled:cursor-not-allowed"
                )}
                aria-label={status === "success" ? "Subscribed!" : "Subscribe"}
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Status messages */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-300 text-sm"
              >
                Welcome to the community! Check your inbox for a warm hello.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-red-300 text-sm"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </form>

          {/* Trust note */}
          <p className="mt-6 text-sage-400 text-xs">
            We respect your peace. Unsubscribe anytime.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}