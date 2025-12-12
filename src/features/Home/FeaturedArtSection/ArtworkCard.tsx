import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";


interface ArtworkCardProps {
  image: string;
  title: string;
  category: string;
  price: number;
  href: string;
  index: number;
  featured?: boolean;
}

function ArtworkCard({
  image,
  title,
  category,
  price,
  href,
  index,
  featured = false,
}: ArtworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={cn(featured && "sm:col-span-2 sm:row-span-2")}
    >
      <Link href={href} className="group block h-full">
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl h-full",
            "bg-cream-100 border border-sand-200/50",
            "transition-all duration-700 ease-smooth",
            "group-hover:shadow-soft-lg group-hover:border-sand-300",
            featured ? "aspect-square" : "aspect-[4/5]"
          )}
        >
          {/* Image */}
          <div className="absolute inset-0">
            <img
              src={image}
              alt={title}
              className={cn(
                "w-full h-full object-cover",
                "transition-transform duration-700 ease-smooth",
                "group-hover:scale-105"
              )}
            />
            {/* Gradient overlay */}
            <div
              className={cn(
                "absolute inset-0",
                "bg-gradient-to-t from-sage-900/60 via-transparent to-transparent",
                "opacity-0 transition-opacity duration-500",
                "group-hover:opacity-100"
              )}
            />
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span
              className={cn(
                "inline-block px-4 py-1.5 rounded-full text-xs font-medium",
                "bg-white/90 backdrop-blur-sm text-sage-700"
              )}
            >
              {category}
            </span>
          </div>

          {/* Content overlay */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 p-6",
              "translate-y-4 opacity-0 transition-all duration-500",
              "group-hover:translate-y-0 group-hover:opacity-100"
            )}
          >
            <h3
              className={cn(
                "font-serif text-white",
                featured ? "text-2xl sm:text-3xl" : "text-xl"
              )}
            >
              {title}
            </h3>
            <div className="flex items-center justify-between mt-3">
              <span className="text-cream-100 font-medium">
                ${price.toFixed(2)}
              </span>
              <span className="flex items-center gap-2 text-cream-200 text-sm">
                View Details
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>

          {/* Quick action button */}
          <button
            className={cn(
              "absolute top-4 right-4 w-10 h-10 rounded-full",
              "bg-white/90 backdrop-blur-sm text-sage-600",
              "flex items-center justify-center",
              "opacity-0 scale-90 transition-all duration-300",
              "group-hover:opacity-100 group-hover:scale-100",
              "hover:bg-sage-600 hover:text-white"
            )}
            aria-label={`Add ${title} to cart`}
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic here
            }}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </Link>
    </motion.div>
  );
}


export default ArtworkCard