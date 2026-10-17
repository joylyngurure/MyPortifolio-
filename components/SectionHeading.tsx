import type { ReactNode } from "react";

export default function SectionHeading({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  children: ReactNode;
  className?: string;
}) {
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
