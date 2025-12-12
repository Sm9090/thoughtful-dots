"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

/**
 * Button component with mindful, organic styling
 * Smooth transitions and gentle hover effects create a calming interaction
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2",
      "font-medium tracking-wide rounded-full",
      "transition-all duration-500 ease-smooth",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-400 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
    );

    const variantStyles = {
      primary: cn(
        "bg-stone-800 text-sand-50",
        "hover:bg-stone-900 hover:shadow-soft-lg hover:-translate-y-0.5",
        "active:translate-y-0 active:shadow-soft"
      ),
      secondary: cn(
        "bg-clay-600 text-sand-50",
        "hover:bg-clay-700 hover:shadow-soft-lg hover:-translate-y-0.5",
        "active:translate-y-0 active:shadow-soft"
      ),
      outline: cn(
        "bg-transparent text-stone-700 border-2 border-stone-400",
        "hover:bg-sand-100 hover:border-stone-500 hover:-translate-y-0.5",
        "active:translate-y-0"
      ),
      ghost: cn(
        "bg-transparent text-stone-600",
        "hover:bg-sand-200 hover:text-stone-800"
      ),
      link: cn(
        "bg-transparent text-stone-600 underline-offset-4",
        "hover:underline hover:text-stone-800",
        "p-0"
      ),
    };

    const sizeStyles = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-8 py-4 text-base",
      lg: "px-10 py-5 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          variant !== "link" && sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;