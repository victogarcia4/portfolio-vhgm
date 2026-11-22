"use client";

import React, { useMemo, useState } from "react";
import { ArrowSquareOut, MagnifyingGlass, FunnelSimple, Globe } from "@phosphor-icons/react";
import {
  lscApps,
  lscAppCategories,
  type LscAppCategory,
  type LscAppPlatform,
} from "@/data/lsc-apps";

const INITIAL_VISIBLE = 18;

export function LscAppsRepository() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<LscAppCategory | "All">("All");
  const [selectedPlatform, setSelectedPlatform] = useState<LscAppPlatform | "All">("All");
  const [showAll, setShowAll] = useState(false);

  const platformCounts = useMemo(() => {
    return {
      Netlify: lscApps.filter((a) => a.platform === "Netlify").length,
      Vercel: lscApps.filter((a) => a.platform === "Vercel").length,
      Lovable: lscApps.filter((a) => a.platform === "Lovable").length,
    };
  }, []);

  const filteredApps = useMemo(() => {
    const q = search.trim().toLowerCase();
    return lscApps.filter((app) => {
      if (selectedCategory !== "All" && app.category !== selectedCategory) return false;
      if (selectedPlatform !== "All" && app.platform !== selectedPlatform) return false;
      if (q) {
        return (
          app.title.toLowerCase().includes(q) ||
          app.slug.toLowerCase().includes(q) ||
          app.category.toLowerCase().includes(q) ||
          app.platform.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, selectedCategory, selectedPlatform]);

  const isFiltered = search.trim().length > 0 || selectedCategory !== "All" || selectedPlatform !== "All";
  const visibleApps = showAll || isFiltered ? filteredApps : filteredApps.slice(0, INITIAL_VISIBLE);

  return (
    <div className="space-y-6">
      {/* Search + Platform Filter Bar */}
      <div className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1">
          <MagnifyingGlass
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Lone Star College apps (e.g. BIOL 2401, LP2, Exam, Maternity, NotebookLM)..."
            className="w-full rounded-lg border border-white/10 bg-zinc-950/80 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-white/25 focus:outline-none transition-colors"
            aria-label="Search Lone Star College live apps"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-zinc-500 mr-1">
            <FunnelSimple size={13} />
            Host:
          </span>
          {(["All", "Netlify", "Vercel", "Lovable"] as const).map((platform) => {
            const active = selectedPlatform === platform;
            const count =
              platform === "All"
                ? lscApps.length
                : platform === "Netlify"
                  ? platformCounts.Netlify
                  : platform === "Vercel"
                    ? platformCounts.Vercel
                    : platformCounts.Lovable;
            return (
              <button
                key={platform}
                type="button"
                onClick={() => setSelectedPlatform(platform)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
                  active
                    ? "border-[hsl(var(--accent)/0.6)] bg-[hsl(var(--accent)/0.15)] text-white"
                    : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {platform} <span className="text-zinc-500 ml-1">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {(["All", ...lscAppCategories] as const).map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all ${
                active
                  ? "border-white/30 bg-white text-zinc-950"
                  : "border-white/10 bg-white/[0.035] text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Status Row */}
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span className="inline-flex items-center gap-2 font-medium">
          <Globe size={14} className="text-[hsl(var(--accent))]" />
          Showing <strong className="text-white">{visibleApps.length}</strong> of{" "}
          <strong className="text-white">{filteredApps.length}</strong> matching live apps (
          {lscApps.length} total across Netlify, Vercel &amp; Lovable)
        </span>
        {isFiltered && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSelectedCategory("All");
              setSelectedPlatform("All");
            }}
            className="text-xs font-semibold text-[hsl(var(--accent))] hover:underline"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Apps Grid */}
      {visibleApps.length === 0 ? (
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-10 text-center text-sm text-zinc-400">
          No Lone Star College apps match your current filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleApps.map((app) => (
            <a
              key={`${app.platform}-${app.slug}`}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md border border-white/10 bg-zinc-950/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
                    {app.category}
                  </span>
                  <span
                    className={`rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      app.platform === "Netlify"
                        ? "border-teal-400/25 bg-teal-400/10 text-teal-300"
                        : app.platform === "Lovable"
                          ? "border-rose-400/25 bg-rose-400/10 text-rose-300"
                          : "border-zinc-400/25 bg-white/10 text-zinc-200"
                    }`}
                  >
                    {app.platform}
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold tracking-tight text-white group-hover:text-[hsl(var(--accent))] transition-colors">
                  {app.title}
                </h3>
                <p className="truncate text-[11px] font-mono text-zinc-500">{app.url.replace("https://", "")}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[hsl(var(--accent))]">
                Open Live App
                <ArrowSquareOut
                  size={13}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Expand / Collapse Button */}
      {!isFiltered && filteredApps.length > INITIAL_VISIBLE && (
        <div className="pt-2 text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.05] px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            {showAll
              ? `Show Fewer Apps`
              : `Show All ${filteredApps.length} Lone Star College Apps`}
          </button>
        </div>
      )}
    </div>
  );
}
