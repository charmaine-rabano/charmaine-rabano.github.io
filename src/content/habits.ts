export type MarkTone = "rose" | "blush" | "gray" | "mauve";

export const habits: {
  heading: string;
  markTone: MarkTone;
  paragraphs: string[];
  wide?: boolean;
}[] = [
  {
    heading: "I plan before I build.",
    markTone: "rose",
    paragraphs: [
      "On my tracked projects, 14 to 18% of the time went into planning before any code. The estimate you get already includes it.",
    ],
  },
  {
    heading: "Written updates first.",
    markTone: "blush",
    paragraphs: [
      "I tell you when a task starts, flag overruns early, and explain how to review the work when it's done. Calls when they're faster.",
    ],
  },
  {
    heading: "I build with Claude Code, and I review everything it writes.",
    markTone: "gray",
    wide: true,
    paragraphs: [
      "I start in plan mode and rework the plan until it holds up. Then I test the output and read every line before it ships. Real credentials never go into it, and it's blocked from reading my environment files.",
      "On one product team, I wrote the shared Claude Code and Copilot setup the whole repo used: guides, custom agents, commands and skills. Other developers used it to write code that matched the existing patterns.",
    ],
  },
  {
    heading: "You own what you paid for.",
    markTone: "mauve",
    paragraphs: [
      "Code, accounts and a handover doc you can follow without me.",
    ],
  },
];
