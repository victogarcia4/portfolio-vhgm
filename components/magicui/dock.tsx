"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export interface DockItem {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DockProps {
  items: DockItem[];
  className?: string;
}

export function Dock({ items, className }: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex h-16 items-end gap-4 rounded-lg border border-white/10 bg-[hsl(var(--surface)/0.72)] px-4 pb-3 shadow-2xl backdrop-blur-md",
        className
      )}
    >
      {items.map((item, idx) => (
        <DockIcon key={idx} mouseX={mouseX} item={item} />
      ))}
    </motion.div>
  );
}

function DockIcon({
  mouseX,
  item,
}: {
  mouseX: MotionValue<number>;
  item: DockItem;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 64, 40]);
  const heightSync = useTransform(distance, [-150, 0, 150], [40, 64, 40]);

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const height = useSpring(heightSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const renderIcon = () => {
    if (item.href) {
      return (
        <a
          href={item.href}
          className="flex h-full w-full items-center justify-center rounded-full text-zinc-400 hover:text-white transition-colors"
          title={item.label}
        >
          {item.icon}
        </a>
      );
    }
    return (
      <button
        onClick={item.onClick}
        className="flex h-full w-full items-center justify-center rounded-full text-zinc-400 hover:text-white transition-colors"
        title={item.label}
      >
        {item.icon}
      </button>
    );
  };

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      className="relative flex items-center justify-center rounded-lg bg-zinc-950/80 border border-white/10 hover:border-white/20 transition-colors"
    >
      {renderIcon()}
    </motion.div>
  );
}
