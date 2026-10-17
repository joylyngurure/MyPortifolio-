import { hero, profile } from "@/content/portfolio";
import { ArrowDown, Download } from "./Icons";
import { btnPrimary, btnSecondary } from "./ui";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title">
      <div className="wrap pb-10 pt-8 sm:pt-10 lg:pb-14 lg:pt-14">
        <div className="max-w-4xl">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.5rem,6.2vw,4.25rem)] leading-[1.04]"
          >
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
            {hero.summary}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className={btnPrimary}>
              {hero.primaryCta}
              <ArrowDown className="text-lg" />
            </a>
            <a href={profile.cv} download className={btnSecondary}>
              <Download className="text-lg" />
              {hero.secondaryCta}
            </a>
          </div>

          <p className="mt-4 text-sm text-muted">{hero.location}</p>

          <dl className="mt-8 grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
            {hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {f.label}
                </dt>
                <dd className="mt-1 text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  );
}
