export const experienceHighlight = {
  title: "Three years on a SaaS product team",
  body: "This is where the complicated parts come from: permissions, scheduling, billing, dashboards, and large codebases shared with other developers.",
};

export const education = "BS Computer Science, Mapúa Malayan Colleges Laguna";

export const roles: {
  when: string;
  paragraphs: (string | { strong: string; rest: string })[];
}[] = [
  {
    when: "2023 to 2026",
    paragraphs: [
      "Full-time front-end developer, building products for a software company's clients. That code is private, so there are no links here. I'm happy to walk through it on a call.",
      {
        strong: "K-12 education platform.",
        rest: " One Next.js app serving five different roles, from students to district admins. I led the front end and wrote the shared component library.",
      },
      {
        strong: "Veterinary practice-management platform, web and mobile.",
        rest: " I built scheduling, prescriptions and payments on the web app, and wrote most of the pet-owner mobile app.",
      },
      {
        strong: "Marketing platform with an AI writing assistant.",
        rest: " I was the only front-end engineer, from the first component to launch.",
      },
      {
        strong: "Internal equipment checkout tool.",
        rest: " A full design-system restyle from Figma and an end-to-end test suite, in about two weeks.",
      },
    ],
  },
  {
    when: "2020 to 2024",
    paragraphs: [
      "Websites and sales funnels for coaches and online businesses.",
    ],
  },
];
