import { projects } from "@/content/portfolio";
import ProjectShowcase from "./ProjectShowcase";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="pb-4 pt-12 lg:pb-4 lg:pt-16"
    >
      <div className="wrap">
        <Reveal>
          <div className="mb-8 grid gap-4 lg:mb-10 lg:grid-cols-12">
            <SectionHeading
              id="work-title"
              eyebrow="Selected work"
              className="lg:col-span-7"
            >
              Mobile apps I have helped build.
            </SectionHeading>
            <p className="max-w-md lg:col-span-4 lg:col-start-9 lg:self-end">
              Four apps I have worked on with teams. Each is live on Google
              Play; open a case study for context, my role and the interface
              decisions behind it.
            </p>
          </div>
        </Reveal>
        {projects.map((p, i) => (
          <Reveal key={p.id}>
            <ProjectShowcase
              project={p}
              index={i}
              last={i === projects.length - 1}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
