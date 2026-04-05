"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { siteConfig } from "@/lib/constants";

const waitlistSchema = z.object({
  email: z.string().email("Enter a valid work email."),
});

type WaitlistValues = z.infer<typeof waitlistSchema>;

export function WaitlistCTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: WaitlistValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    reset(values);
  };

  return (
    <section id="waitlist" className="section-space bg-midnight text-white">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300">
                Join the waitlist
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {siteConfig.waitlistHeadline}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                Get launch updates, early pricing, and priority onboarding for the first version of
                Flowly.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-[1.25rem] border border-emerald-400/20 bg-emerald-500/10 p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                    Success
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">You&apos;re on the list!</p>
                  <p className="mt-2 text-slate-300">
                    We&apos;ll reach out when early access opens.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="text-sm text-rose-300">{errors.email.message}</p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:bg-indigo-400/70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Joining...
                      </>
                    ) : (
                      "Join the waitlist"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
