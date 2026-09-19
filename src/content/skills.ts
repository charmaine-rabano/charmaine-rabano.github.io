export type ChipTone = "rose" | "plain";

export type SkillRow =
  | { key: string; kind: "chips"; chips: { label: string; tone: ChipTone }[] }
  | { key: string; kind: "prose"; text: string };

export const skillRows: SkillRow[] = [
  {
    key: "Every day",
    kind: "chips",
    chips: [
      { label: "React", tone: "rose" },
      { label: "Next.js", tone: "rose" },
      { label: "TypeScript", tone: "rose" },
      { label: "React Native (Expo)", tone: "rose" },
      { label: "JavaScript", tone: "plain" },
      { label: "HTML", tone: "plain" },
      { label: "CSS", tone: "plain" },
      { label: "Tailwind", tone: "plain" },
      { label: "React Query", tone: "plain" },
      { label: "Zustand", tone: "plain" },
      { label: "React Hook Form", tone: "plain" },
    ],
  },
  {
    key: "On real projects",
    kind: "prose",
    text: "Postgres, Prisma, Supabase, Firebase, Auth.js, Figma to code, design systems and Storybook, App Store and Google Play releases, RevenueCat, Vercel, GitHub Actions, WordPress themes, ACF, Shopify themes, PHP, MySQL, Vite, GSAP, Playwright, Jest, Vitest, accessibility",
  },
  {
    key: "AI tooling",
    kind: "prose",
    text: "Claude Code, including custom agents, commands and skills",
  },
  {
    key: "Site builders and automation",
    kind: "prose",
    text: "Divi, Elementor, Thrive, Wix, Unbounce, Systeme.io, ActiveCampaign, Zapier, Make",
  },
];

export const skillsFootnote =
  "If your project needs something that isn't on this list, I'll tell you which parts would be new to me. Vantage was my first WordPress theme, and it went from zero to a live site with a deploy pipeline in five days.";

export const certChip = "AWS Certified SA, Associate · valid to 2029";
