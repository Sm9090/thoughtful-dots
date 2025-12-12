"use client";

import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "glass";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  children: ReactNode;
}

/**
 * Card component with organic, flowing design
 * Multiple variants for different use cases
 * Gentle hover effects create a calming interaction
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      padding = "md",
      hover = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: cn(
        "bg-sand-50/90 backdrop-blur-sm",
        "border border-clay-200/40",
        "shadow-soft"
      ),
      elevated: cn(
        "bg-sand-50",
        "border border-sand-200",
        "shadow-soft-lg"
      ),
      outlined: cn(
        "bg-transparent",
        "border-2 border-stone-300"
      ),
      glass: cn(
        "bg-sand-50/60 backdrop-blur-md",
        "border border-sand-200/30",
        "shadow-soft"
      ),
    };

    const paddingStyles = {
      none: "",
      sm: "p-4 sm:p-5",
      md: "p-6 sm:p-8",
      lg: "p-8 sm:p-10 lg:p-12",
    };

    const hoverStyles = hover
      ? cn(
          "transition-all duration-500 ease-smooth cursor-pointer",
          "hover:shadow-soft-lg hover:-translate-y-1",
          "hover:border-clay-300/60"
        )
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-3xl overflow-hidden",
          variantStyles[variant],
          paddingStyles[padding],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;

// Sub-components for structured card content
export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "font-serif text-xl sm:text-2xl text-stone-900",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-stone-600 mt-2 leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("", className)}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mt-6 pt-6 border-t border-sand-200", className)}>
      {children}
    </div>
  );
}