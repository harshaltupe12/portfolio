"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import React from "react";

interface AuroraButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function AuroraButton({
  className,
  children,
  variant = "primary",
  ...props
}: AuroraButtonProps) {
  // Different gradient sets based on variant
  const gradientColors = {
    primary: {
      from: "from-violet-600",
      via: "via-pink-400",
      to: "to-violet-600"
    },
    secondary: {
      from: "from-blue-500",
      via: "via-purple-500",
      to: "to-pink-500"
    }
  };
  
  const colors = gradientColors[variant];

  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-md px-4 py-2 font-medium text-white shadow-md transition-all hover:shadow-lg",
        className
      )}
      {...props}
    >
      {/* Animated gradient background */}
      <span className={cn(
        "absolute inset-0 bg-gradient-to-r",
        colors.from,
        colors.via,
        colors.to,
        "bg-[length:200%_auto] animate-[aurora-text_3s_linear_infinite]"
      )}></span>
      
      {/* Button text */}
      <span className="relative text-sm md:text-lg z-10">{children}</span>
    </button>
  );
}