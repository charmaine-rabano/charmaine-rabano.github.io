import { projects, pairedProjects, workIntro } from "@/content/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { ProjectPair } from "./ProjectPair";
import { WalkthroughProvider } from "./Walkthrough/WalkthroughProvider";

export function Work() {
  return (
    <section id="work" className="perf px-(--pad) py-(--step)">
      <SectionHeader
        tab="Selected work"
        title="What I can show you"
        note={workIntro}
        noteClassName="max-w-[60ch] text-base"
      />

      <WalkthroughProvider>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}

        <ProjectPair projects={pairedProjects} />
      </WalkthroughProvider>
    </section>
  );
}
