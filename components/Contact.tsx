import { contact, profile } from "@/content/portfolio";
import { Download, GitHub, LinkedIn, WhatsApp } from "./Icons";
import Reveal from "./Reveal";

const linkClass =
  "inline-flex min-h-11 items-center gap-2 text-sm text-white/85 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-white/10 bg-deep py-8 text-white/85"
    >
      <div className="wrap">
        <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2
              id="contact-title"
              className="text-xl leading-tight text-white sm:text-2xl"
            >
              {contact.title}
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 inline-block break-all py-2 text-base font-bold text-white underline decoration-crimson decoration-2 underline-offset-4 hover:decoration-white sm:break-normal"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <LinkedIn className="text-lg" />
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <GitHub className="text-lg" />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <WhatsApp className="text-lg" />
              WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={profile.cv} download className={linkClass}>
              <Download className="text-lg" />
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
