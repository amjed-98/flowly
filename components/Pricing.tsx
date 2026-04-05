"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingTiers } from "@/lib/constants";

type BillingCycle = "monthly" | "annual";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="section-space bg-slate-50">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Pricing built for teams moving from manual work to leverage
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Start free, scale into advanced automations, and get the controls your team needs as
            usage grows.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {(["monthly", "annual"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBillingCycle(option)}
                className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                  billingCycle === option
                    ? "bg-indigo-500 text-white"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {option}
                {option === "annual" ? " (save 20%)" : ""}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 xl:grid-cols-3">
          {pricingTiers.map((tier) => {
            const price =
              billingCycle === "annual" ? tier.annualMonthlyPrice : tier.monthlyPrice;

            return (
              <motion.article
                key={tier.name}
                layout
                className={`relative rounded-[2rem] border bg-white p-8 shadow-sm ${
                  tier.highlighted
                    ? "border-indigo-500 shadow-xl shadow-indigo-100"
                    : "border-slate-200"
                }`}
              >
                {tier.badge ? (
                  <div className="absolute right-6 top-6 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    {tier.badge}
                  </div>
                ) : null}

                <div className="pr-24">
                  <h3 className="text-2xl font-semibold text-slate-950">{tier.name}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{tier.description}</p>
                </div>

                <div className="mt-8 flex min-h-20 items-end gap-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${tier.name}-${billingCycle}-${price ?? "custom"}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-end gap-2"
                    >
                      {price === null ? (
                        <span className="text-4xl font-semibold tracking-tight text-slate-950">
                          Custom
                        </span>
                      ) : (
                        <>
                          <span className="text-5xl font-semibold tracking-tight text-slate-950">
                            ${price}
                          </span>
                          <span className="pb-1 text-base text-slate-500">/mo</span>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    tier.highlighted
                      ? "bg-indigo-500 text-white hover:bg-indigo-400"
                      : "border border-slate-200 text-slate-950 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {tier.cta}
                </button>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-600">
                      <span className="mt-0.5 inline-flex rounded-full bg-emerald-50 p-1 text-emerald-600">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
