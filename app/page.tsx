"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  GraduationCap,
  Briefcase,
  EnvelopeSimple,
  Paperclip,
  ArrowRight,
  Sparkle,
  User,
  BookOpen,
  InstagramLogo,
  LinkedinLogo,
  ArrowSquareOut
} from "@phosphor-icons/react";
import { biography, freeMiniApps, selectedWorksUrl, socialLinks, techStack } from "@/data/content";
import { Particles } from "@/components/magicui/particles";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { BentoGrid } from "@/components/bento-grid";
import { Timeline } from "@/components/timeline";
import { ResumeModal } from "@/components/resume-modal";
import { Dock, DockItem } from "@/components/magicui/dock";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyQwVujaYOBCccMTKCdneED74xYkNwscamenUiK9PiucQldqXtbnK9WFfPHF3h6c8dY/exec";

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      try {
        await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formState),
        });
      } catch (_) {
        // no-cors always throws on read, submission still goes through
      }
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 5000);
    }
  };

  const dockItems: DockItem[] = [
    { label: "Home", icon: <User size={20} />, onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Selected Works", icon: <Briefcase size={20} />, onClick: () => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" }) },
    { label: "Free Apps", icon: <Sparkle size={20} />, onClick: () => document.getElementById("free-apps")?.scrollIntoView({ behavior: "smooth" }) },
    { label: "Experience", icon: <GraduationCap size={20} />, onClick: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
    { label: "Contact", icon: <EnvelopeSimple size={20} />, onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }
  ];

  const sectionMotion = {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  } as const;

  return (
    <div className="relative min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] selection:bg-white/15 selection:text-white pb-24">
      {/* Immersive Hero Background */}
      <div className="absolute inset-0 h-[100dvh] w-full overflow-hidden">
        <Particles className="absolute inset-0 z-0" quantity={40} />
        <RetroGrid className="z-0" />
        <div className="absolute inset-y-0 right-0 z-0 hidden w-[58vw] max-w-5xl md:block">
          <Image
            src="/VHGM cirugia portfolio.png"
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-cover object-center opacity-[0.33] mix-blend-screen grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] via-[hsl(var(--background)/0.55)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background)/0.40)] via-transparent to-[hsl(var(--background))]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,hsl(var(--accent)/0.18),transparent_28rem),linear-gradient(to_bottom,transparent,hsl(var(--background)/0.72)_55%,hsl(var(--background)))]" />
      </div>

      {/* Sticky Header Nav */}
      <header className="fixed top-0 w-full z-50 bg-[hsl(var(--background)/0.72)] border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen size={22} className="text-zinc-400" />
            <span className="font-display font-extrabold text-sm uppercase tracking-wider text-white">
              Dr. Victor Garcia M
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase font-bold tracking-wider text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#works" className="hover:text-white transition-colors">Selected Works</a>
            <a href="#free-apps" className="hover:text-white transition-colors">Free Apps</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button
            onClick={() => setIsResumeOpen(true)}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
          >
            <Paperclip size={14} />
            Quick CV
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[100dvh] flex flex-col justify-center items-center px-6 md:px-12 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl space-y-7"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold text-zinc-300 tracking-wide uppercase">
            <Sparkle size={12} className="text-[hsl(var(--accent))] animate-pulse" />
            Vitruvian Strategist / Clinician-Educator
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[0.96]">
            {biography.name}
          </h1>

          <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed font-medium">
            A clinician-educator hybrid bridging medical expertise, Anatomy & Physiology instruction, AI systems, and interactive learning frameworks for health science students.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#works">
              <ShinyButton>Selected Works</ShinyButton>
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-6 py-3 rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/10 transition-all font-semibold text-xs tracking-wide uppercase"
            >
              Academic Profile
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 text-left">
            {["30+ Years", "22 Publications", "3 Core Courses", "EN / ES"].map((stat) => (
              <div key={stat} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
                <span className="block text-lg font-display font-bold text-white">{stat}</span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500">Credential Signal</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Profile & Biography Section */}
      <motion.section {...sectionMotion} id="about" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="relative aspect-square w-full rounded-lg border border-white/10 overflow-hidden bg-white/[0.04]">
              <Image
                src={biography.profileImage}
                alt={biography.name}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">Credentials</h3>
              <div className="flex flex-wrap gap-2">
                {biography.titles.map((title) => (
                  <span
                    key={title}
                    className="rounded-lg bg-white/[0.04] border border-white/10 px-3 py-1.5 text-xs text-zinc-400 font-semibold"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Academic Profile</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">Biography</h2>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-medium whitespace-pre-line">
                {biography.fullBio}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {biography.achievements.map((achievement) => (
                <div key={achievement} className="rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm text-zinc-300 leading-relaxed">
                  {achievement}
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-white/10 pt-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Pedagogy</span>
              <h3 className="font-display text-xl font-bold tracking-tight text-white">Teaching Philosophy</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                {biography.teachingPhilosophy}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Selected Works Bento Grid */}
      <motion.section {...sectionMotion} id="works" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 border-t border-white/10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Portfolio of Work</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">Selected Works</h2>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed">
              Five verified project captures rotating in a continuous showcase. Each preview links to the complete apps dashboard.
            </p>
          </div>
          <a
            href={selectedWorksUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-bold uppercase tracking-wider text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            View All Apps
            <ArrowSquareOut size={15} />
          </a>
        </div>
        <BentoGrid />
      </motion.section>

      <motion.section {...sectionMotion} id="free-apps" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="mb-10 max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Free Access</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">Free Miniapps</h2>
          <p className="text-sm text-zinc-400 font-medium leading-relaxed">
            Open tools and learning miniapps available for students, educators, and professional workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {freeMiniApps.map((app) => (
            <a
              key={app.url}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-44 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
            >
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight text-white">{app.title}</h3>
                <p className="mt-3 text-xs font-medium leading-relaxed text-zinc-400">{app.description}</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[hsl(var(--accent))]">
                Open App
                <ArrowSquareOut size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack Marquee Section */}
      <motion.section {...sectionMotion} className="relative z-10 border-y border-white/10 bg-white/[0.025] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Syllabus & Systems</span>
          <h3 className="font-display text-xl font-bold tracking-tight text-white mt-1">Tools & Technology Integration</h3>
        </div>
        <div className="flex gap-8 justify-center flex-wrap max-w-5xl mx-auto px-6">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="flex-1 min-w-[250px] border border-white/10 bg-[hsl(var(--surface)/0.72)] rounded-lg p-5"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">{group.category}</h4>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-zinc-900 border border-zinc-800/60 px-2.5 py-1 text-xs text-zinc-300 font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section {...sectionMotion} id="experience" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="max-w-3xl mb-16 space-y-4 text-center md:text-left mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Trajectory</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">Professional Experience</h2>
        </div>
        <Timeline />
      </motion.section>

      {/* Contact Section */}
      <motion.section {...sectionMotion} id="contact" className="relative z-10 max-w-4xl mx-auto px-6 py-32 border-t border-white/10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Inquiries</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">Get in Touch</h2>
          <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed font-medium">
            Contact Dr. Victor Garcia M regarding academic programs, educational technology consulting, AI systems, or clinical training integrations.
          </p>
        </div>

        <div className="border border-white/10 rounded-lg p-8 bg-white/[0.04] backdrop-blur-sm">
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-3"
            >
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">Message Received</h3>
              <p className="text-sm text-zinc-400 font-medium">Thank you. Dr. Victor Garcia M will respond shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-700 transition-all font-medium"
                    placeholder="Dr. Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-700 transition-all font-medium"
                    placeholder="jane.doe@institution.edu"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-700 transition-all font-medium"
                  placeholder="Inquire about clinical simulation setups or courses..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Send Message
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </motion.section>

      <footer className="relative z-10 border-t border-white/10 px-6 md:px-12 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <Image
                src="/VHGM pic foto.PNG"
                alt={biography.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wider text-white">{biography.name}</p>
              <p className="mt-1 text-xs font-medium text-zinc-500">
                Built by {biography.name} at{" "}
                <a
                  href="https://48hours.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
                >
                  48hours.live
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.label === "Instagram" ? InstagramLogo : LinkedinLogo;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label={link.label}
                  title={link.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </footer>

      {/* Floating Bottom Navigation Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Dock items={dockItems} />
      </div>

      {/* ATS Quick-View Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
