import type { Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectPair({ projects }: { projects: [Project, Project] }) {
  return (
    <div className="grid grid-cols-1 gap-6 min-[1081px]:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} inPair />
      ))}
    </div>
  );
}
