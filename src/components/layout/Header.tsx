"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/navigation";
import Container from "@/components/ui/Container";
import Logo from "@/components/shared/Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-sand-100/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-full",
                    "text-stone-700 font-medium transition-all duration-300",
                    "hover:text-stone-900 hover:bg-sand-200/50"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "absolute top-full left-0 pt-2 min-w-[200px]"
                      )}
                    >
                      <ul
                        className={cn(
                          "bg-sand-50 rounded-2xl shadow-soft-lg p-2",
                          "border border-sand-200"
                        )}
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block px-4 py-2.5 rounded-xl",
                                "text-stone-600 transition-all duration-300",
                                "hover:bg-sand-100 hover:text-stone-900"
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Cart Icon */}
            <Link
              href="/cart"
              className={cn(
                "relative p-3 rounded-full transition-all duration-300",
                "text-stone-600 hover:text-stone-900 hover:bg-sand-200/50"
              )}
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {/* Cart count badge - uncomment when cart is implemented */}
              {/* <span className="absolute -top-1 -right-1 w-5 h-5 bg-clay-500 text-white text-xs rounded-full flex items-center justify-center">3</span> */}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "lg:hidden p-3 rounded-full transition-all duration-300",
                "text-stone-600 hover:text-stone-900 hover:bg-sand-200/50"
              )}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-sand-100/98 backdrop-blur-lg border-t border-sand-300"
          >
            <Container className="py-6">
              <ul className="space-y-1">
                {navigationItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-lg",
                        "text-stone-700 font-medium transition-all duration-300",
                        "hover:bg-sand-200/50 hover:text-stone-900"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                "block px-4 py-2 rounded-xl",
                                "text-stone-500 transition-all duration-300",
                                "hover:bg-sand-200/50 hover:text-stone-700"
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}