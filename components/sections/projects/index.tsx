import { SectionHeader } from "@/components/common";
import { selected_works } from "@/constant";
import { ProjectCard } from "./_components/ProjectCard";

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative w-full select-none px-6 py-28 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-5xl relative">
        <SectionHeader number="06" title="Projects" align="right" />

        <div className="mt-16 flex w-full flex-col gap-6 sm:gap-8">
          {selected_works.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
