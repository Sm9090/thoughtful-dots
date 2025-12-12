import { NavItem } from "@/types";

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "All Products", href: "/shop" },
      { label: "Art Tools", href: "/shop?category=tools" },
      { label: "Original Artwork", href: "/shop?category=artwork" },
      { label: "Supplies", href: "/shop?category=supplies" },
      { label: "Starter Kits", href: "/shop?category=kits" },
    ],
  },
  {
    label: "Classes",
    href: "/classes",
    children: [
      { label: "All Classes", href: "/classes" },
      { label: "Online Workshops", href: "/classes?category=online" },
      { label: "Self-Paced Courses", href: "/classes?category=self-paced" },
      { label: "Patreon Community", href: "/classes?category=patreon" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/thoughtfuldots",
    icon: "Instagram",
  },
  {
    label: "Patreon",
    href: "https://patreon.com/thoughtfuldots",
    icon: "Heart",
  },
  {
    label: "Etsy",
    href: "https://etsy.com/shop/thoughtfuldots",
    icon: "ShoppingBag",
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com/thoughtfuldots",
    icon: "Pin",
  },
];