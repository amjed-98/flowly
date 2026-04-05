import Link from "next/link";
import { footerLinks } from "@/lib/constants";

function FlowlyMark() {
  return (
    <div className="inline-flex items-center gap-3">
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="h-10 w-10 rounded-xl border border-slate-200 bg-white p-2"
        fill="none"
      >
        <path
          d="M11 26.5c4.5-7.4 9-11.1 18-13"
          stroke="url(#footer-gradient)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M13 14h15.5M11.5 20h11"
          stroke="#0F172A"
          strokeOpacity="0.7"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="footer-gradient" x1="11" y1="13.5" x2="29" y2="27">
            <stop stopColor="#6366F1" />
            <stop offset="1" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        <p className="text-lg font-semibold tracking-tight text-slate-950">Flowly</p>
        <p className="text-sm text-slate-500">AI workflow automation for high-velocity teams.</p>
      </div>
    </div>
  );
}

function SocialIcon({ path, label, href = '#top' }: { path: string; label: string; href?: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-950"
      target="_blank"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FlowlyMark />

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {group}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#top" className="text-slate-600 hover:text-slate-950">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flowly. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <SocialIcon
              label="Twitter"
              path="M18.901 1.153h3.68l-8.04 9.188L24 22.847h-7.406l-5.8-7.584-6.637 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.604 20.635h2.039L6.486 3.25H4.298z"
            />
            <SocialIcon
              href="https://github.com/amjed-98"
              label="GitHub"
              path="M12 .5C5.649.5.5 5.8.5 12.34c0 5.234 3.299 9.674 7.874 11.241.575.109.786-.256.786-.57 0-.28-.01-1.023-.016-2.008-3.203.716-3.879-1.585-3.879-1.585-.524-1.37-1.28-1.735-1.28-1.735-1.047-.737.08-.722.08-.722 1.158.084 1.767 1.226 1.767 1.226 1.03 1.816 2.704 1.291 3.364.987.105-.768.403-1.291.733-1.588-2.557-.3-5.245-1.314-5.245-5.847 0-1.292.448-2.348 1.183-3.176-.119-.302-.513-1.519.112-3.166 0 0 .965-.317 3.163 1.213A10.67 10.67 0 0 1 12 5.914a10.66 10.66 0 0 1 2.88.4c2.196-1.53 3.16-1.213 3.16-1.213.627 1.647.233 2.864.115 3.166.737.828 1.18 1.884 1.18 3.176 0 4.544-2.692 5.543-5.257 5.838.414.368.783 1.094.783 2.205 0 1.592-.014 2.876-.014 3.267 0 .318.207.685.79.568C20.204 22.01 23.5 17.573 23.5 12.34 23.5 5.8 18.351.5 12 .5Z"
            />
            <SocialIcon
              href="https://www.linkedin.com/in/amjad-yahia/"
              label="LinkedIn"
              path="M4.983 3.5C4.983 4.88 3.87 6 2.492 6A2.5 2.5 0 0 1 0 3.5C0 2.12 1.114 1 2.492 1a2.5 2.5 0 0 1 2.491 2.5ZM.312 8.25h4.36V24H.312zm7.243 0h4.18v2.15h.06c.582-1.103 2.005-2.266 4.127-2.266 4.414 0 5.228 2.932 5.228 6.745V24h-4.355v-7.17c0-1.708-.03-3.906-2.381-3.906-2.384 0-2.75 1.862-2.75 3.784V24H7.555z"
            />
          </div>
        </div>
      </div>
    </footer >
  );
}
