import { howItWorksSteps } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-space bg-white">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Set up a durable automation system in minutes
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Flowly gives teams a clean path from disconnected tools to reliable execution.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-20 hidden h-px bg-slate-200 lg:block" />
          {howItWorksSteps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500 text-lg font-semibold text-white shadow-lg shadow-indigo-200">
                {step.number}
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
