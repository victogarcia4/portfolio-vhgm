"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { featuredWorks, type FeaturedWork } from "@/data/content";
import { cn } from "@/lib/utils";

export function BentoGrid() {
  const loopedWorks = [...featuredWorks, ...featuredWorks];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[hsl(var(--background))] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[hsl(var(--background))] to-transparent" />
      <motion.div
        className="selected-work-marquee flex w-max gap-5 py-2"
        aria-label="Featured selected works carousel"
      >
        {loopedWorks.map((project, idx) => (
          <BentoCard
            key={`${project.title}-${idx}`}
            project={project}
          />
        ))}
      </motion.div>
    </div>
  );
}

function BentoCard({
  project,
  className,
}: {
  project: FeaturedWork;
  className?: string;
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex h-[420px] w-[82vw] max-w-[520px] shrink-0 flex-col overflow-hidden rounded-lg border border-white/10 bg-[hsl(var(--surface)/0.78)] shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 md:w-[520px]",
        className
      )}
    >
      <div className="relative h-56 overflow-hidden border-b border-white/10 bg-zinc-950">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          className="object-cover object-top opacity-82 transition-transform duration-700 group-hover:scale-[1.035]"
          sizes="(max-width: 768px) 82vw, 520px"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(var(--surface)/0.92)]" />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-zinc-950/75 text-white backdrop-blur">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-950/80 border border-white/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-zinc-400 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl font-bold tracking-tight text-white mb-2 group-hover:text-white/90 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-zinc-400 leading-relaxed font-medium line-clamp-3">
          {project.description}
        </p>
      </div>
    </a>
  );
}
