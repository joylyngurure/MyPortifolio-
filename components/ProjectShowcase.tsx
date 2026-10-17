"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { Project } from "@/content/portfolio";
import { Chevron, ArrowUpRight } from "./Icons";
import { btnSecondary } from "./ui";

function PhoneFrame({ src, alt, caption }: Project["screens"][number]) {
  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-[1.4rem] border-[3px] border-[#04080f] bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.18),0_14px_28px_-14px_rgba(0,0,0,0.7)]">
        <Image
          src={src}
          alt={alt}
          width={136}
          height={296}
          unoptimized
          loading="lazy"
          className="block h-auto w-full"
        />
      </div>
      <figcaption className="mt-2 text-center text-xs text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

function Screens({ project }: { project: Project }) {
  const count = project.screens.length;
  return (
    <div className="rounded-[1.25rem] bg-paper-2 px-5 py-6 sm:px-8 sm:py-7">
      <div
        className={`mx-auto grid gap-4 sm:gap-6 ${
          count >= 4
            ? "max-w-[22rem] grid-cols-2 sm:max-w-[52rem] sm:grid-cols-4"
            : "max-w-[20rem] grid-cols-2 sm:max-w-[22rem]"
        }`}
      >
        {project.screens.map((s) => (
          <PhoneFrame key={s.src} {...s} />
        ))}
      </div>
    </div>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <dl className="mt-5 grid gap-4 border-t border-line pt-4 text-[0.95rem]">
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          My contribution
        </dt>
        <dd className="mt-1 text-ink">{project.contribution}</dd>
      </div>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Technologies
        </dt>
        <dd className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-3 py-1 text-sm text-ink"
            >
              {t}
            </span>
          ))}
        </dd>
      </div>
    </dl>
  );
}

function CaseStudy({ project, id }: { project: Project; id: string }) {
  const { study } = project;
  const rows: { label: string; text: string }[] = [
    { label: "Context", text: study.context },
    { label: "Intended users", text: study.users },
    { label: "My role", text: study.role },
  ];
  return (
    <div className="mt-6 border-t border-line pt-6">
      <dl className="grid gap-x-10 gap-y-4 md:grid-cols-[12rem_1fr]">
        {rows.map((r) => (
          <div key={r.label} className="contents">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted md:pt-1.5">
              {r.label}
            </dt>
            <dd className="max-w-[44rem]">{r.text}</dd>
          </div>
        ))}

        {study.decisions && (
          <>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted md:pt-1.5">
              Interface decisions
            </dt>
            <dd>
              <p className="mb-5 max-w-[44rem] text-sm text-muted">
                These are my reading of the shipped screens, not documented
                research findings.
              </p>
              <ol className="grid gap-6 lg:grid-cols-2">
                {study.decisions.map((d, i) => (
                  <li key={d.title} className="border-l-2 border-crimson/60 pl-4">
                    <h4
                      id={`${id}-d${i}`}
                      className="font-display font-bold text-xl leading-snug text-ink"
                    >
                      {d.title}
                    </h4>
                    <p className="mt-1.5">{d.why}</p>
                    <p className="mt-1.5 text-sm text-muted">
                      <span className="font-semibold text-ink">
                        Problem it addresses:{" "}
                      </span>
                      {d.problem}
                    </p>
                  </li>
                ))}
              </ol>
            </dd>
          </>
        )}

        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted md:pt-1.5">
          Implementation
        </dt>
        <dd className="max-w-[44rem]">{study.implementation}</dd>
      </dl>
    </div>
  );
}

export default function ProjectShowcase({
  project,
  index,
  last = false,
}: {
  project: Project;
  index: number;
  last?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const panelId = `${project.id}-study-${uid}`;
  const titleId = `${project.id}-title`;
  const compact = project.layout === "compact";
  const wide = project.layout === "wide";
  const reverse = project.layout === "side";

  const toggle = (
    <button
      type="button"
      className={btnSecondary}
      aria-expanded={open}
      aria-controls={panelId}
      onClick={() => setOpen((v) => !v)}
    >
      {open ? "Hide case study" : "View case study"}
      <Chevron
        className={`text-lg transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      />
    </button>
  );

  const link = (
    <a
      href={project.link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center gap-1.5 font-semibold text-accent underline decoration-crimson/40 decoration-2 underline-offset-4 hover:decoration-crimson"
    >
      {project.link.label}
      <ArrowUpRight className="text-lg" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );

  const actions = (
    <div className="mt-4 flex flex-col items-start gap-x-6 gap-y-1 sm:flex-row sm:items-center">
      {toggle}
      {link}
    </div>
  );

  return (
    <article
      aria-labelledby={titleId}
      className={`py-9 lg:py-12 ${index === 0 ? "pt-0 lg:pt-0" : "border-t border-line"} ${last ? "pb-0 lg:pb-0" : ""}`}
    >
      <div
        className={`grid gap-6 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-8 ${
          wide ? "lg:items-start" : compact ? "lg:items-stretch" : "lg:items-center"
        }`}
      >
        <div
          className={
            wide
              ? "lg:col-span-6"
              : compact
                ? "lg:col-span-7"
                : `lg:col-span-5 ${reverse ? "lg:order-2" : ""}`
          }
        >
          <div className="flex items-center gap-4">
            <Image
              src={project.mark.src}
              alt={project.mark.alt}
              width={240}
              height={240}
              unoptimized
              className="size-14 rounded-xl border border-line bg-white object-contain"
            />
            <p className="text-sm font-medium text-muted">
              <span className="mr-2 font-display font-bold text-base text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              {project.category}
            </p>
          </div>
          <h3
            id={titleId}
            className="mt-4 text-[clamp(2.25rem,5vw,3.25rem)] leading-none"
          >
            {project.name}
          </h3>
          <p className="mt-3 max-w-lg text-lg">{project.summary}</p>
          {!wide && <Meta project={project} />}
          {!wide && actions}
        </div>

        {wide && (
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="lg:mt-0">
              <Meta project={project} />
              {actions}
            </div>
          </div>
        )}

        {compact && (
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="flex h-full flex-col items-center justify-center rounded-[1.25rem] bg-paper-2 py-8">
              <Image
                src={project.mark.src}
                alt=""
                width={240}
                height={240}
                unoptimized
                className="size-32 rounded-[1.75rem] bg-white p-1 shadow-[0_14px_28px_-14px_rgba(0,0,0,0.7)]"
              />
              <p className="mt-4 text-xs text-muted">App icon</p>
            </div>
          </div>
        )}

        {!compact && (
          <div
            className={
              wide
                ? "lg:col-span-12"
                : `lg:col-span-7 ${reverse ? "lg:order-1" : ""}`
            }
          >
            <Screens project={project} />
          </div>
        )}
      </div>

      <div
        id={panelId}
        role="region"
        aria-labelledby={titleId}
        data-open={open}
        className="disclosure"
      >
        <div>
          <CaseStudy project={project} id={project.id} />
        </div>
      </div>
    </article>
  );
}
