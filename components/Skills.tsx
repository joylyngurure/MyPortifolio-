import { skills } from "@/content/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [primary, ...rest] = skills.groups;
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="bg-paper-2 py-12 lg:py-16"
    >
      <div className="wrap">
        <Reveal>
          <SectionHeading id="skills-title" eyebrow="Skills and tools" />
        </Reveal>

        <div className="mt-5 grid gap-x-16 gap-y-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h3 className="text-2xl">{primary.title}</h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {primary.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white px-4 py-2 text-[0.95rem] font-medium text-paper"
                >
                  {item}
                </li>
              ))}
            </ul>
            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Design and workflow tools
            </h4>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {skills.tools.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/30 px-4 py-2 text-[0.95rem] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {rest.map((g, i) => (
            <Reveal key={g.title} className="lg:col-span-4" delay={(i + 1) * 80}>
              <h3 className="text-2xl">{g.title}</h3>
              <ul className="mt-5 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-crimson"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
