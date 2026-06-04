"use client";

import React from "react";
import { motion } from "motion/react";
import { experiences, type Experience } from "@/data/content";
import { MapPin, CalendarBlank, Circle } from "@phosphor-icons/react";

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-5xl px-4 py-8">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent" />

      <div className="space-y-10">
        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <motion.div
              key={exp.role + exp.institution}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col md:flex-row items-stretch"
            >
              <div className="absolute left-[9px] md:left-1/2 top-5 -translate-x-[4px] md:-translate-x-1/2 z-10 rounded-full bg-[hsl(var(--background))] p-1.5 ring-1 ring-white/10">
                <Circle size={10} weight="fill" className="text-[hsl(var(--accent))] transition-colors group-hover:text-[hsl(var(--accent-2))]" />
              </div>

              <div className="w-full md:w-1/2 pl-10 md:pl-0 md:pr-12 md:text-right flex flex-col justify-start order-2 md:order-1">
                {isLeft ? (
                  <TimelineCard exp={exp} align="right" />
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>

              <div className="w-full md:w-1/2 pl-10 md:pl-12 flex flex-col justify-start order-3 md:order-2">
                {!isLeft ? (
                  <TimelineCard exp={exp} align="left" />
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineCard({ exp, align }: { exp: Experience; align: "left" | "right" }) {
  return (
    <div className={`rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/10 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.055] ${align === "right" ? "md:text-right" : "md:text-left"}`}>
      <div className={`mb-4 flex flex-col ${align === "right" ? "md:items-end" : "md:items-start"}`}>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent))] mb-2">
          <CalendarBlank size={12} />
          {exp.period}
        </span>
        <h3 className="font-display text-lg font-bold text-white tracking-tight mb-1">{exp.role}</h3>
        <span className="text-sm font-semibold text-zinc-300 mb-2">{exp.institution}</span>
        <span className="inline-flex items-center gap-1 text-xs text-zinc-500">
          <MapPin size={12} />
          {exp.location}
        </span>
      </div>
      <ul className={`space-y-2 text-xs text-zinc-400 font-medium leading-relaxed list-none p-0 m-0 ${align === "right" ? "md:text-right" : "md:text-left"}`}>
        {exp.highlights.map((highlight: string, idx: number) => (
          <li key={idx} className="relative">
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}
