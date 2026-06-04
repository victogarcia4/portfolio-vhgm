"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Printer, GraduationCap, Briefcase, Certificate, Translate } from "@phosphor-icons/react";
import { biography, experiences, educationList, certifications, references } from "@/data/content";
import confetti from "canvas-confetti";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Trigger celebratory confetti on view for premium tactile response
  useEffect(() => {
    if (isOpen) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#ffffff", "#71717a", "#27272a"],
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true" aria-labelledby="resume-title">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 flex flex-col w-full max-w-5xl h-[85vh] bg-[hsl(var(--surface))] border border-white/10 rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[hsl(var(--surface)/0.92)] backdrop-blur-md sticky top-0 z-20 print:hidden">
              <h2 id="resume-title" className="font-display text-lg font-bold tracking-tight text-white uppercase">Professional Resume</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-zinc-400 hover:text-white hover:bg-white/10 transition-all border border-white/10"
                  title="Print Resume"
                >
                  <Printer size={16} />
                  Print
                </button>
                <button
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close resume"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10 print:p-0 print:overflow-visible" id="resume-print-area">
              <div className="border-b border-white/10 pb-8 text-center md:text-left">
                <h1 className="font-display text-3xl font-extrabold text-white tracking-tight mb-2">{biography.name}</h1>
                <p className="text-sm font-semibold text-zinc-400 tracking-wide mb-4">
                  {biography.titles.join(" | ")}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-zinc-500 font-medium">
                  <span>{biography.email}</span>
                  <span>{biography.phone}</span>
                  <span>{biography.address}</span>
                  <span className="flex items-center gap-1">
                    <Translate size={12} />
                    {biography.languages.join(" / ")}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                  <Briefcase size={14} /> Profile Summary
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                  {biography.fullBio}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                  <Certificate size={14} /> Core Qualifications
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-400 font-medium pl-4 list-disc">
                  {biography.achievements.map((achievement) => (
                    <li key={achievement} className="leading-relaxed">{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                  <Briefcase size={14} /> Professional Experience
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp) => (
                    <div key={exp.role + exp.institution} className="space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h4 className="font-display text-sm font-bold text-white">{exp.role}</h4>
                        <span className="text-xs text-zinc-500 font-semibold">{exp.period}</span>
                      </div>
                      <div className="flex justify-between text-xs text-zinc-400 font-semibold">
                        <span>{exp.institution}</span>
                        <span>{exp.location}</span>
                      </div>
                      <ul className="list-disc list-inside text-xs text-zinc-500 space-y-1 pl-1">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="leading-relaxed">{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                  <GraduationCap size={14} /> Education
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {educationList.map((edu) => (
                    <div key={edu.degree} className="border border-white/10 rounded-lg p-4 bg-zinc-950/20">
                      <h4 className="text-xs font-bold text-white mb-1">{edu.degree}</h4>
                      <p className="text-[10px] text-zinc-400 font-semibold">{edu.institution}</p>
                      <p className="text-[10px] text-zinc-500 font-medium">{edu.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                  <Certificate size={14} /> Certifications & Qualifications
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-400 font-medium pl-4 list-disc">
                  {certifications.map((cert) => (
                    <li key={cert.name}>{cert.name}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2">
                  <Briefcase size={14} /> References
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-zinc-400">
                  {references.map((reference) => (
                    <div key={reference.email} className="rounded-lg border border-white/10 bg-zinc-950/20 p-4">
                      <p className="font-bold text-white">{reference.name}</p>
                      <p>{reference.role}</p>
                      <p>{reference.institution}</p>
                      <p>{reference.contact}</p>
                      <p>{reference.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
