"use client";

import React from "react";
import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export function ShinyButton({ children, className, ...props }: ShinyButtonProps) {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
      className={cn(
        "relative rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300",
        "bg-zinc-900 border border-zinc-800 hover:border-zinc-700 shadow-lg hover:shadow-xl",
        "radial-gradient",
        className
      )}
      {...props}
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),rgba(255,255,255,0))",
      }}
    >
      <span className="relative z-10 block text-sm tracking-wide uppercase font-bold text-neutral-100">
        {children}
      </span>
      <span
        className="absolute inset-0 rounded-lg block p-[1px] linear-gradient"
        style={{
          content: '""',
          background:
            "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
          maskImage: "linear-gradient(black, black)",
          WebkitMaskImage: "linear-gradient(black, black)",
          maskComposite: "exclude",
          WebkitMaskComposite: "source-out",
        }}
      />
    </motion.button>
  );
}
