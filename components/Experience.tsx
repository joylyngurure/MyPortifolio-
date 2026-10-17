import { experience } from "@/content/portfolio";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="py-12 lg:py-16"
    >
      <div className="wrap">
        <Reveal>
          <h2 id="experience-title" className="eyebrow">
            Experience
          </h2>
        </Reveal>

        <ol className="mt-4 lg:mt-5">
          {experience.map((job) => (
            <li key={job.title}>
              <Reveal>
                <article className="grid gap-x-12 gap-y-4 border-t border-line py-7 lg:grid-cols-12">
                  <p className="font-display font-bold text-xl text-accent lg:col-span-3">
                    {job.dates}
                  </p>
                  <div className="lg:col-span-4">
                    <h3 className="text-2xl leading-snug">{job.title}</h3>
                    <p className="mt-2 text-ink">{job.org}</p>
                    <p className="text-sm text-muted">{job.place}</p>
                  </div>
                  <ul className="space-y-3 lg:col-span-5">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-crimson"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
