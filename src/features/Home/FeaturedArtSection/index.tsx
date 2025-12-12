"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ArtworkCard from "./ArtworkCard";



// Sample artwork data - replace with actual products
const featuredArtwork = [
  {
    image: "/images/art/42.jpg",
    title: "Celestial Bloom",
    category: "Original Art",
    price: 450,
    href: "/shop/celestial-bloom",
    featured: true,
  },
  {
    image: "/images/art/12.jpg",
    title: "Earthen Circles",
    category: "Art Print",
    price: 85,
    href: "/shop/earthen-circles",
  },
  {
    image: "/images/art/40.jpg",
    title: "Dotting Tool Set",
    category: "Tools",
    price: 45,
    href: "/shop/dotting-tool-set",
  },
  {
    image: "/images/art/6.jpg",
    title: "Meditation Stone",
    category: "Original Art",
    price: 180,
    href: "/shop/meditation-stone",
  },
  {
    image: "/images/art/43.jpg",
    title: "Beginner Kit",
    category: "Kits",
    price: 75,
    href: "/shop/beginner-kit",
  },
];

/**
 * Featured Art Section - Showcases selected products and artwork
 * Uses a masonry-like grid with one featured (larger) item
 */
export default function FeaturedArtSection() {
  return (
    <section className="section-padding bg-sand-50/50">
      <Container>
        <SectionHeading
          eyebrow="The Collection"
          title={
            <>
              Art & tools for your{" "}
              <span className="italic font-light">practice</span>
            </>
          }
          description="From original mandala paintings to carefully curated tools, everything you need for your meditative art journey."
        />

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArtwork.map((item, index) => (
            <ArtworkCard
              key={item.title}
              {...item}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            <Link href="/shop">View Full Collection</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}