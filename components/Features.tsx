"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/constants";

export function Features() {
  return (
    <section id="features" className="section-space bg-slate-50">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
            Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Powerful automations without the operational clutter
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Design repeatable workflows that coordinate your tools, your team, and the decisions
            that usually slow delivery down.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl border border-indigo-100 bg-indigo-50 p-3 text-indigo-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
