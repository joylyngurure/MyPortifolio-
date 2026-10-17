"use client";

import { useEffect, useState } from "react";

/** Renders the current year, refreshed on the client so a static build never goes stale. */
export default function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span suppressHydrationWarning>{year}</span>;
}
