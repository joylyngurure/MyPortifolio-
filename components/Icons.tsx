import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Base>
);

export const ArrowUp = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Base>
);

export const ArrowUpRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Base>
);

export const Download = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
  </Base>
);

export const Chevron = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 9 6 6 6-6" />
  </Base>
);

export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Base>
);

export const LinkedIn = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 11v5M8 8v.01M12 16v-5M12 13c0-1.5 1-2 2-2s2 .8 2 2.2V16" />
  </Base>
);

export const GitHub = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 19c-4 1.2-4-2-6-2.5m12 4.5v-3.2a2.8 2.8 0 0 0-.8-2.2c2.6-.3 5.3-1.3 5.3-5.800A4.500 4.500 0 0 0 18.300 6.200 4.200 4.200 0 0 0 18.200 3S17.200 2.700 15 4.200a11 11 0 0 0-6 0C6.800 2.700 5.800 3 5.800 3a4.200 4.200 0 0 0-.1 3.200A4.500 4.500 0 0 0 4.500 9.300c0 4.500 2.700 5.500 5.300 5.800a2.800 2.800 0 0 0-.8 2.200V21" />
  </Base>
);

export const WhatsApp = (p: IconProps) => (
  <Base {...p}>
    <path d="M3.500 20.500 5 16a8.500 8.500 0 1 1 3.200 3.100z" />
    <path d="M9 9c0 3 3 6 6 6l1.200-1.300-2.200-1.200-.9.800a4 4 0 0 1-2.200-2.200l.8-.9L10.500 7.800z" />
  </Base>
);
