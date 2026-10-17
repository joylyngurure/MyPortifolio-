import type { ReactNode } from "react";

/**
 * Section title with a small label above it. If no headline is given, the label
 * itself becomes the section's <h2>, so the page keeps a valid heading outline.
 */
export default function SectionHeading({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  children?: ReactNode;
  className?: string;
}) {
  if (!children) {
    return (
      <h2 id={id} className={`eyebrow ${className}`}>
        {eyebrow}
      </h2>
    );
  }
  return (
    <div className={className}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={id}
        className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08]"
      >
        {children}
      </h2>
    </div>
  );
}
