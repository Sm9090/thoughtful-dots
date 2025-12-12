// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Product Types
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: ProductCategory;
  tags: string[];
  inStock: boolean;
  featured: boolean;
}

export type ProductCategory = "tools" | "artwork" | "supplies" | "kits";

// Class/Workshop Types
export interface ClassItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  instructor: string;
  duration: string;
  level: SkillLevel;
  price: number;
  image: string;
  category: ClassCategory;
  schedule?: ClassSchedule;
  features: string[];
  isFeatured: boolean;
}

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "all-levels";
export type ClassCategory = "online" | "in-person" | "self-paced" | "patreon";

export interface ClassSchedule {
  startDate: string;
  endDate?: string;
  time: string;
  timezone: string;
  recurring?: boolean;
  frequency?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  avatar?: string;
  content: string;
  rating: number;
  productOrClass?: string;
  featured: boolean;
}

// Gallery Types
export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  category: GalleryCategory;
  featured: boolean;
}

export type GalleryCategory = "mandalas" | "process" | "community" | "inspiration";

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  interest?: ContactInterest;
}

export type ContactInterest = 
  | "classes"
  | "custom-art"
  | "wholesale"
  | "collaboration"
  | "general";

// Animation Types
export interface AnimationConfig {
  initial: Record<string, number | string>;
  animate: Record<string, number | string>;
  transition: {
    duration: number;
    delay?: number;
    ease?: string | number[];
  };
}

// Section Props Base
export interface SectionProps {
  className?: string;
  id?: string;
}