"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function Hero() {
  const chartHeights = [
    "h-[32%]",
    "h-[54%]",
    "h-[46%]",
    "h-[68%]",
    "h-[64%]",
    "h-[82%]",
    "h-[76%]",
    "h-[94%]",
  ];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-midnight pb-20 pt-10 text-white sm:pb-24 lg:pb-32"
    >
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-hero-grid bg-[size:38px_38px] opacity-20" />
      <div className="absolute left-1/2 top-44 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="container-shell relative">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
          >
            AI workflow automation for modern teams
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {siteConfig.headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            {siteConfig.subheadline}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="#waitlist"
              className="inline-flex min-w-52 items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-950/30 transition hover:bg-indigo-400"
            >
              Get early access
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex min-w-52 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-white/25 hover:bg-white/10"
            >
              See how it works
            </Link>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="relative mx-auto mt-16 max-w-5xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-spotlight backdrop-blur"
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  Ops Escalation Flow
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1.3fr_0.8fr]">
                <div className="rounded-[1.25rem] border border-white/10 bg-slate-900/80 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">Workflow Builder</h3>
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                      Live
                    </span>
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-4 text-left">
                      <p className="text-xs uppercase tracking-[0.24em] text-indigo-200/80">
                        Trigger
                      </p>
                      <p className="mt-2 text-base font-semibold text-white">
                        New support ticket marked urgent
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <div className="h-8 w-px bg-gradient-to-b from-indigo-400 to-cyan-300" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                          AI Action
                        </p>
                        <p className="mt-2 font-medium text-white">
                          Summarize context and assign owner
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
                        <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                          Sync
                        </p>
                        <p className="mt-2 font-medium text-white">
                          Create Slack alert and Jira issue
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-medium text-slate-300">Run success rate</p>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-4xl font-semibold text-white">98.4%</span>
                      <span className="pb-1 text-sm text-emerald-300">+12% this week</span>
                    </div>
                    <div className="mt-5 flex h-20 items-end gap-2">
                      {chartHeights.map((heightClass, index) => (
                        <div
                          key={heightClass}
                          className={`flex-1 rounded-t-xl ${
                            index > 5 ? "bg-indigo-400" : "bg-slate-700"
                          }`}
                        >
                          <div className={`w-full rounded-t-xl bg-current ${heightClass}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-medium text-slate-300">Active automations</p>
                    <div className="mt-4 space-y-3">
                      {[
                        ["Lead routing", "24 workflows/min"],
                        ["Renewal alerts", "12 approvals/hour"],
                        ["Customer escalation", "6 critical events/day"],
                      ].map(([name, detail]) => (
                        <div
                          key={name}
                          className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3"
                        >
                          <div>
                            <p className="font-medium text-white">{name}</p>
                            <p className="text-sm text-slate-400">{detail}</p>
                          </div>
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
