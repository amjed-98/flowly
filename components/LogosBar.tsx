import { logos, siteConfig } from "@/lib/constants";

function Wordmark({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 180 44"
      className="h-9 w-auto fill-current"
      role="img"
      aria-label={name}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fontWeight="700"
        letterSpacing="1.2"
      >
        {name}
      </text>
    </svg>
  );
}

export function LogosBar() {
  return (
    <section className="border-b border-slate-200 bg-white py-10" aria-label="Trusted by teams">
      <div className="container-shell">
        <p className="text-center text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
          {siteConfig.trustedLabel}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-8 text-slate-400 opacity-70 grayscale sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo} className="flex items-center justify-center">
              <Wordmark name={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
