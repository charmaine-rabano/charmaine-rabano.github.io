export type ChipTone = "rose" | "blush" | "gray" | "plain";

export type Chip = { label: string; tone: ChipTone };

export type ProjectLink = { label: string; href: string; primary?: boolean };

export type Walkthrough = {
  label: string;
  /** YouTube id or any YouTube URL; an unparseable value renders the modal's empty state */
  youtube: string;
  /** modal heading — not derivable from the project title (one project has two) */
  title: string;
  /** falls back to the project's own `stack` line */
  stack?: string;
};

export type PullQuote = { lead: string; rest: string };

export type BigStat = { value: string; caption: string };

export type BadgeSpec = {
  label: string;
  rotate: string;
  position: { left?: string; right?: string; top?: string; bottom?: string };
};

export type ProjectVisual =
  | {
      kind: "browser";
      url: string;
      /** alt text; also shown as the placeholder label when `image` is unset */
      caption: string;
      /** rendered full-width at its intrinsic aspect ratio, no cropping */
      image?: { src: string; width: number; height: number };
      badge?: BadgeSpec;
    }
  | {
      kind: "phones";
      /** alt text; also shown as the placeholder label when `images` is unset */
      screens: [string, string];
      images?: [string, string];
      badge?: BadgeSpec;
    }
  | {
      kind: "flow";
      before: { label: string; tag: string };
      after: { label: string; tag: string };
      caption: string;
    }
  | { kind: "none" };

export type Project = {
  meta: Chip[];
  title: string;
  paragraphs: string[];
  pull?: PullQuote;
  bigStat?: BigStat;
  stack?: string;
  links?: ProjectLink[];
  walkthroughs?: Walkthrough[];
  flip?: boolean;
  /** explicit — mirrors the mockup's nth-child rotation, not derivable from array index */
  rotate: string;
  visual: ProjectVisual;
};

/** The four full-width featured projects, in source order. */
export const projects: Project[] = [
  {
    // Soloclock
    rotate: "0.45deg",
    meta: [
      { label: "Personal project", tone: "rose" },
      { label: "Full-stack Next.js", tone: "gray" },
    ],
    title: "Soloclock",
    paragraphs: [
      "Time tracking and invoicing for solo contractors. Log your hours, then turn unbilled time into an invoice and a PDF.",
      "I built it from nothing to a deployed app in 38.5 hours over 7 days. About a fifth of that went into planning and design before any code.",
    ],
    pull: {
      lead: "A decision I'd point to:",
      rest: "each invoice saves its rate and line items when it's created. A later rate change can't touch an invoice you already sent.",
    },
    stack:
      "Next.js · TypeScript · Postgres · Prisma · Auth.js · Tailwind · Vercel",
    links: [
      {
        label: "Live app ↗",
        href: "https://soloclock-gold.vercel.app/",
        primary: true,
      },
      {
        label: "Code on GitHub ↗",
        href: "https://github.com/charmaine-rabano/soloclock",
      },
    ],
    walkthroughs: [
      {
        label: "Video walkthrough",
        youtube: "https://youtu.be/WbCpjE8S7O8",
        title: "Soloclock walkthrough",
      },
    ],
    visual: {
      kind: "browser",
      url: "soloclock-gold.vercel.app",
      caption: "Soloclock timesheet and invoice view",
      image: { src: "/assets/soloclock.png", width: 2940, height: 1682 },
    },
  },
  {
    // Vantage
    rotate: "-0.45deg",
    flip: true,
    meta: [
      { label: "Personal project", tone: "rose" },
      { label: "Custom WordPress theme", tone: "blush" },
    ],
    title: "Vantage",
    paragraphs: [
      "A custom classic theme built from a Figma design. No page builder, no jQuery, and a deploy pipeline set up on day two.",
      "It was my first WordPress theme. I planned and shipped it in 29h 48m over 5 days, across 56 tickets.",
    ],
    pull: {
      lead: "A decision I'd point to:",
      rest: "the navigation uses WordPress's own menu editor. Whoever maintains the site can drag and reorder links in a screen they already know.",
    },
    stack: "PHP 8.3 · Secure Custom Fields · Vite · GSAP · GitHub Actions",
    links: [
      {
        label: "Live site ↗",
        href: "https://vantage.charmaineeunice.com/",
        primary: true,
      },
      {
        label: "Code on GitHub ↗",
        href: "https://github.com/charmaine-rabano/vantage-theme",
      },
    ],
    visual: {
      kind: "browser",
      url: "vantage.charmaineeunice.com",
      caption: "Vantage homepage",
      image: { src: "/assets/vantage.png", width: 2940, height: 1682 },
    },
  },
  {
    // Finance app
    rotate: "0.45deg",
    meta: [
      { label: "Client work", tone: "gray" },
      { label: "React Native + Next.js", tone: "rose" },
      { label: "2024 to 2026", tone: "plain" },
    ],
    title: "Personal finance app and comparison site",
    paragraphs: [
      "A budget tracking app for iOS and Android, plus the website in front of it. The site compares savings accounts, credit cards, insurance and investment platforms for the Philippine market.",
      "I took the app through Apple review and Google Play, set up in-app subscriptions, and kept releasing updates up to version 1.14.2.",
    ],
    stack:
      "Expo · TypeScript · React Query · Firebase · RevenueCat · Next.js 14 · Vercel",
    links: [
      {
        label: "App Store ↗",
        href: "https://apps.apple.com/ph/app/lemoneyd-finance-tracker/id6751218180",
        primary: true,
      },
      {
        label: "Google Play ↗",
        href: "https://play.google.com/store/apps/details?id=com.lemoneyd.lemoneydmobile&hl=en",
        primary: true,
      },
    ],
    walkthroughs: [
      {
        label: "App walkthrough",
        youtube: "https://youtu.be/JsMkGNgtsMU",
        title: "Budget tracking app walkthrough",
      },
      {
        label: "Website walkthrough",
        youtube: "https://youtu.be/TEogD0GkzA4",
        title: "Comparison site walkthrough",
      },
    ],
    visual: {
      kind: "phones",
      screens: ["Budget tracker screen", "Subscriptions screen"],
      images: [
        "/assets/finance-app-budget-tracker.png",
        "/assets/finance-app-subscriptions.png",
      ],
      badge: {
        label: "v1.14.2",
        rotate: "6deg",
        position: { right: "-10px", top: "-14px" },
      },
    },
  },
  {
    // AI storefront
    rotate: "-0.45deg",
    flip: true,
    meta: [
      { label: "Client work", tone: "gray" },
      { label: "React · Supabase · Shopify", tone: "blush" },
      { label: "2026, ongoing", tone: "plain" },
    ],
    title: "AI storefront app for a skincare brand",
    paragraphs: [
      "The brand had a prototype built on a no-code AI platform they didn't own. I turned it into a production app running on five accounts in their own name, with no service interruption.",
      "That meant a backend they control, security on an API that had none, staging by default before anything reaches the live store, and a handover guide written for a non-technical owner.",
      "I first built this brand's Shopify store. They came back to me for the app.",
    ],
    stack:
      "React · TypeScript · Vite · Supabase · Google Gemini · Shopify · GitHub Actions",
    // walkthroughs: [
    //   {
    //     label: "Shopify store walkthrough",
    //     youtube: "VIDEO_ID_SKINCARE_SHOPIFY",
    //     title: "Skincare Shopify store walkthrough",
    //   },
    // ],
    visual: {
      kind: "flow",
      before: { label: "No-code prototype", tag: "Not theirs" },
      after: { label: "Production app, 5 accounts", tag: "In their name" },
      caption: "Zero service interruption",
    },
  },
];

/** The two smaller projects rendered side by side, single column each. */
export const pairedProjects: [Project, Project] = [
  {
    rotate: "-0.45deg",
    meta: [
      { label: "Client work", tone: "gray" },
      { label: "PHP · MySQL · Evolution CMS", tone: "rose" },
      { label: "2026, ongoing", tone: "plain" },
    ],
    title: "Legacy agency website",
    bigStat: { value: "543", caption: "images given alt text on a live CMS" },
    paragraphs: [
      "Accessibility and performance work on a long-running bilingual site, inside a codebase with years of history and several authors.",
      "I built a pipeline that added the alt text. Every write is a dry run by default. It checks the content hasn't changed since review, and it saves an undo log before touching anything.",
      "Also on this project: responsive images end to end, a layout fix that needed no edits to existing code, and a deploy runbook for the team.",
    ],
    visual: { kind: "none" },
  },
  {
    rotate: "0.45deg",
    meta: [
      { label: "Client work", tone: "gray" },
      { label: "WordPress · Shopify", tone: "blush" },
      { label: "2022 to 2026", tone: "plain" },
    ],
    title: "Non-profit website and Shopify store",
    bigStat: { value: "4 yrs", caption: "keeping their site updated" },
    paragraphs: [
      "I rebuilt their WordPress site inside their existing branding, then kept it updated for four years. I also built the Shopify store for the beauty brand they ran and set up their email automations.",
    ],
    walkthroughs: [
      {
        label: "WordPress walkthrough",
        youtube: "https://youtu.be/4BuxIApRAfM",
        title: "Non-profit website walkthrough",
        stack: "WordPress · Shopify",
      },
      {
        label: "Shopify walkthrough",
        youtube: "https://youtu.be/b1-S6TLDBfw",
        title: "Non-profit Shopify store walkthrough",
        stack: "WordPress · Shopify",
      },
    ],
    visual: { kind: "none" },
  },
];

export const workIntro =
  "A lot of my longest work sits in private repos. Here's what I can show, and what I did on each.";
