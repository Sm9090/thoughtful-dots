"use client";

import Link from "next/link";
import { Instagram, Heart, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Logo from "@/components/shared/Logo";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Art Tools", href: "/shop?category=tools" },
    { label: "Original Artwork", href: "/shop?category=artwork" },
    { label: "Starter Kits", href: "/shop?category=kits" },
  ],
  learn: [
    { label: "Online Classes", href: "/classes" },
    { label: "Patreon Community", href: "/classes?category=patreon" },
    { label: "Free Resources", href: "/resources" },
    { label: "Gallery", href: "/gallery" },
  ],
  connect: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Shipping & Returns", href: "/shipping" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/thoughtfuldots", label: "Instagram" },
  { icon: Heart, href: "https://patreon.com/thoughtfuldots", label: "Patreon" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-900 text-sage-100 mt-auto">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-sage-600 via-clay-500 to-sage-600" />

      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo variant="full" className="[&_span]:text-cream-100 [&_circle]:fill-sage-300" />
            <p className="mt-6 text-sage-300 leading-relaxed max-w-md">
              Discover the meditative art of mandala creation. 
              Slow down, create intentionally, and connect with yourself 
              through the mindful practice of dotting.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-11 h-11 rounded-full flex items-center justify-center",
                    "bg-sage-800 text-sage-300 transition-all duration-300",
                    "hover:bg-sage-700 hover:text-cream-100 hover:-translate-y-1"
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-serif text-lg text-cream-100 mb-5">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sage-300 hover:text-cream-100 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h3 className="font-serif text-lg text-cream-100 mb-5">Learn</h3>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sage-300 hover:text-cream-100 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-serif text-lg text-cream-100 mb-5">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sage-300 hover:text-cream-100 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <a
                href="mailto:thoughtfuldotsart@gmail.com"
                className="flex items-center gap-2 text-sage-300 hover:text-cream-100 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">thoughtfuldotsart@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-sage-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sage-400 text-sm">
              © {currentYear} Thoughtful Dots. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sage-400 text-sm hover:text-sage-200 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sage-400 text-sm hover:text-sage-200 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}