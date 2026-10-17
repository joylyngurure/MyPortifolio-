"use client";

import { useEffect, useRef, useState } from "react";
import { navAlias, navItems, profile } from "@/content/portfolio";
import { Close, Menu } from "./Icons";

const sectionIds = [
  "work",
  "experience",
  "about",
  "skills",
  "contact",
];

export default function Header() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Highlight the section that crosses the upper-middle of the viewport.
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(navAlias[entry.target.id] ?? entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    elements.forEach((el) => io.observe(el));

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY < 200) setActive("");
      // The compact contact band can never reach the observer's detection zone.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) setActive("contact");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Escape closes the menu and returns focus to its button; clicking outside closes it too.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !buttonRef.current?.contains(t)) {
        setOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const linkClass = (id: string) =>
    `relative inline-flex min-h-11 items-center px-1 text-[0.95rem] font-medium transition-colors ${
      active === id ? "text-accent" : "text-ink/80 hover:text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur-sm transition-colors ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex min-h-12 items-center gap-3 rounded-md pr-2"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="grid size-11 place-items-center rounded-full bg-white font-display font-bold text-[0.95rem] tracking-wide text-paper transition-colors group-hover:bg-crimson group-hover:text-white">
            {profile.monogram}
          </span>
          <span className="hidden font-display font-bold text-lg text-ink sm:block">
            {profile.shortName}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={linkClass(item.id)}
                  aria-current={active === item.id ? "location" : undefined}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-1 bottom-1.5 h-0.5 origin-left bg-crimson transition-transform duration-200 ${
                      active === item.id ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="-mr-2 grid size-12 place-items-center rounded-full text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="text-2xl" /> : <Menu className="text-2xl" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-line bg-paper md:hidden"
      >
        <nav aria-label="Primary mobile" className="wrap py-2">
          <ul>
            {navItems.map((item) => (
              <li key={item.id} className="border-b border-line last:border-0">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "location" : undefined}
                  className={`flex min-h-14 items-center justify-between font-display font-bold text-2xl ${
                    active === item.id ? "text-accent" : "text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
