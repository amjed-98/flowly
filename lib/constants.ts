import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Clock3,
  GitBranch,
  Layers3,
  Rocket,
  Users,
} from "lucide-react";

export const siteConfig = {
  name: "Flowly",
  headline: "Automate your workflow. Ship faster.",
  subheadline:
    "Flowly connects your tools and eliminates repetitive work — so your team can focus on what matters.",
  waitlistHeadline: "Be first to automate everything.",
  trustedLabel: "Trusted by teams at",
} as const;

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const logos = [
  "Acme",
  "Meridian",
  "Stackly",
  "Orbit",
  "Nexus",
  "Crestline",
] as const;

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: FeatureItem[] = [
  {
    title: "Smart Triggers",
    description: "Launch workflows from live events, schedules, or AI-detected changes across your stack.",
    icon: Rocket,
  },
  {
    title: "Multi-step Flows",
    description: "Chain logic, approvals, and actions into reliable automations without brittle handoffs.",
    icon: GitBranch,
  },
  {
    title: "Team Collaboration",
    description: "Build together with shared workspaces, comments, ownership controls, and transparent reviews.",
    icon: Users,
  },
  {
    title: "Real-time Analytics",
    description: "Track runs, bottlenecks, and success rates with dashboards built for operators and leaders.",
    icon: BarChart3,
  },
  {
    title: "Version History",
    description: "Audit every change, roll back with confidence, and keep workflows stable as teams scale.",
    icon: Clock3,
  },
  {
    title: "API Access",
    description: "Extend Flowly with custom endpoints, webhooks, and secure programmatic automation.",
    icon: Layers3,
  },
];

export const howItWorksSteps = [
  {
    number: "01",
    title: "Connect your tools",
    description: "Bring Slack, Notion, HubSpot, GitHub, and internal systems into one automation layer.",
  },
  {
    number: "02",
    title: "Build your flow",
    description: "Use AI-assisted logic blocks to define triggers, branching, approvals, and actions fast.",
  },
  {
    number: "03",
    title: "Automate everything",
    description: "Run workflows continuously with observability, retry controls, and team-wide visibility.",
  },
] as const;

export const pricingTiers = [
  {
    name: "Free",
    description: "For individuals validating automations and core workflows.",
    monthlyPrice: 0,
    annualMonthlyPrice: 0,
    badge: null,
    cta: "Start free",
    highlighted: false,
    features: [
      "Up to 3 active flows",
      "100 monthly task runs",
      "Community integrations",
      "Basic analytics",
      "Email support",
    ],
  },
  {
    name: "Pro",
    description: "For lean teams shipping faster with AI-assisted operations.",
    monthlyPrice: 29,
    annualMonthlyPrice: 23,
    badge: "Most popular",
    cta: "Get early access",
    highlighted: true,
    features: [
      "Unlimited active flows",
      "10,000 monthly task runs",
      "Advanced branching logic",
      "Team collaboration tools",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For larger organizations with security, scale, and procurement needs.",
    monthlyPrice: null,
    annualMonthlyPrice: null,
    badge: null,
    cta: "Talk to sales",
    highlighted: false,
    features: [
      "Custom workflow volumes",
      "SAML and SCIM",
      "Dedicated success manager",
      "Audit logs and approvals",
      "Custom SLAs and onboarding",
    ],
  },
] as const;

export const faqItems = [
  {
    question: "How does Flowly pricing work?",
    answer:
      "You can start on the Free tier and upgrade when your workflow volume or collaboration needs increase. Annual plans reduce the effective monthly cost by 20%.",
  },
  {
    question: "Which integrations are available?",
    answer:
      "Flowly is built for modern SaaS stacks, including messaging, CRM, engineering, analytics, and internal APIs through webhooks and custom endpoints.",
  },
  {
    question: "How do you handle security?",
    answer:
      "We use role-based access, encrypted credentials, audit trails, and isolated execution controls designed for security-conscious teams.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "The Free plan lets you explore the core product without a time limit. Pro and Enterprise onboarding can include guided pilots for qualified teams.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Paid plans can be canceled at any time, and your workspace remains accessible through the end of the billing period.",
  },
  {
    question: "How do team seats work?",
    answer:
      "Pro includes collaborative seats for fast-moving teams, while Enterprise can map permissions and provisioning to your identity system.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes. Workflow definitions, logs, and configuration data can be exported so your automation layer remains portable.",
  },
] as const;

export const footerLinks = {
  product: ["Features", "Pricing", "Changelog", "Roadmap"],
  company: ["About", "Blog", "Careers", "Press"],
  legal: ["Privacy", "Terms", "Cookies"],
} as const;
