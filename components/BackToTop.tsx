"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "./Icons";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={`fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full border border-line bg-paper text-ink shadow-sm transition duration-200 hover:border-ink hover:bg-ink hover:text-paper sm:bottom-8 sm:right-8 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp className="text-xl" />
    </a>
  );
}
