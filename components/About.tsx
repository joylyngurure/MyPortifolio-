import { about } from "@/content/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-line py-12 lg:py-16"
    >
      <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <SectionHeading id="about-title" eyebrow="About and education">
            From the support desk to the interface.
          </SectionHeading>
          <div className="mt-5 max-w-[38rem] space-y-4 text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-4 lg:col-start-9" delay={80}>
          <div className="rounded-[1.25rem] border border-line bg-paper-2 p-6 sm:p-8 lg:mt-10">
            <h3 className="text-2xl">Education</h3>
            <p className="mt-4 font-semibold text-ink">
              {about.education.degree}
            </p>
            <p>{about.education.result}</p>
            <p className="text-muted">
              {about.education.school} · {about.education.year}
            </p>

            <hr className="my-6 border-line" />

            <h3 className="text-2xl">Certification</h3>
            <p className="mt-4 font-semibold text-ink">
              {about.certification.name}
            </p>
            <p className="text-muted">{about.certification.issuer}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
