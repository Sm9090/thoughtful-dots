import HeroSection from "@/features/Home/HeroSection";
import PhilosophySection from "@/features/Home/PhilosophySection";
import MandalaArtSection from "@/features/Home/MandalaArtSection";
import FeaturedArtSection from "@/features/Home/FeaturedArtSection";
import JourneySection from "@/features/Home/JourneySection";
import TestimonialsSection from "@/features/Home/TestimonialsSection";
import NewsletterSection from "@/features/Home/NewsletterSection";

/**
 * Home Page - Thoughtful Dots
 *
 * The home page tells the story of the brand through carefully
 * crafted sections that guide visitors through:
 * 1. An immersive hero that captures the meditative essence
 * 2. The philosophy and values behind the practice
 * 3. Featured artwork and products
 * 4. The learning journey and classes
 * 5. Community testimonials
 * 6. Newsletter signup
 *
 * Each section is designed to feel peaceful, organic, and intentional—
 * mirroring the experience of creating mandala art itself.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <MandalaArtSection />
      <FeaturedArtSection />
      <JourneySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}