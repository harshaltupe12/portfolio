"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import React from "react";

interface AuroraTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function AuroraText({
  className,
  children,
  as: Component = "span",
  ...props
}: AuroraTextProps) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn(
        "relative inline-block",
        className
      )}
      {...props}
    >
      {/* Text gradient container */}
      <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--color-1))] via-[hsl(var(--color-2))] to-[hsl(var(--color-3))] bg-[length:200%_auto] animate-[aurora-text_8s_linear_infinite] bg-clip-text text-transparent">
        {children}
      </span>
      
      {/* Original text (invisible but preserves layout) */}
      <span className="invisible">
        {children}
      </span>
    </MotionComponent>
  );
}