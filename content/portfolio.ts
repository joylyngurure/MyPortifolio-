/**
 * All editable portfolio content lives here. Layout components read from this
 * file, so copy, links and project details can change without touching them.
 */

export const profile = {
  name: "Joylyn K. Gurure",
  shortName: "Joylyn Gurure",
  monogram: "JG",
  role: "UI/UX & Frontend Developer",
  location: "Harare, Zimbabwe",
  email: "quegurure16@gmail.com",
  // wa.me link carried over from the previous portfolio.
  whatsapp: "https://wa.me/263788735065",
  linkedin: "https://www.linkedin.com/in/joylyn-kudzai-gurure-533758256/",
  github: "https://github.com/joylyngurure",
  cv: "/Joylyn-Gurure-CV.pdf",
  siteUrl: "https://joylynportifolio.vercel.app",
};

export const navItems = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

/** Sections that highlight a different nav item than their own id. */
export const navAlias: Record<string, string> = { skills: "about" };

export const hero = {
  eyebrow: "Joylyn K. Gurure — UI/UX & Frontend Developer",
  headline: "Thoughtful interfaces. Better everyday experiences.",
  summary:
    "I build responsive web and mobile interfaces with a focus on clarity and usability. With over two years of combined experience in software development and IT support, I bring practical engineering skills and a strong understanding of user needs.",
  primaryCta: "Explore My Work",
  secondaryCta: "Download CV",
  location: "Based in Harare, Zimbabwe.",
  facts: [
    { label: "Currently", value: "Graduate Trainee, Software Development" },
    { label: "Builds with", value: "React, Next.js, React Native" },
  ],
};

export type Screen = { src: string; alt: string; caption: string };

export type Decision = {
  title: string;
  why: string;
  problem: string;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  summary: string;
  contribution: string;
  tech: string[];
  link: { href: string; label: string };
  mark: { src: string; alt: string };
  layout: "wide" | "side" | "compact";
  screens: Screen[];
  study: {
    context: string;
    users: string;
    role: string;
    decisions?: Decision[];
    implementation: string;
  };
};

export const projects: Project[] = [
  {
    id: "marimusha",
    name: "MariMusha",
    category: "Mobile app · Money transfer",
    summary:
      "A mobile app for sending and receiving money, built around a clear view of balance and recent activity, QR scanning and a short send flow.",
    contribution:
      "Mobile interface development as part of a team.",
    tech: ["React Native"],
    link: {
      href: "https://play.google.com/store/apps/details?id=com.mapepaprosper.marimushamobile&hl=en",
      label: "View on Google Play",
    },
    mark: { src: "/projects/marimusha-mark.webp", alt: "MariMusha logo" },
    layout: "wide",
    screens: [
      {
        src: "/projects/marimusha-sign-in.webp",
        alt: "MariMusha sign-in screen with phone number and PIN fields and a Sign In button.",
        caption: "Sign in",
      },
      {
        src: "/projects/marimusha-home.webp",
        alt: "MariMusha home screen showing a balance card, rewarded points and a list of recent transactions.",
        caption: "Home",
      },
      {
        src: "/projects/marimusha-scan.webp",
        alt: "MariMusha scan screen with a framed camera view and the instruction to align the QR code within the box.",
        caption: "Scan",
      },
      {
        src: "/projects/marimusha-send-money.webp",
        alt: "MariMusha send money screen with recipient and amount fields and a Send button.",
        caption: "Send money",
      },
    ],
    study: {
      context:
        "Moving money on a phone has to feel unambiguous: people need to know what they have, where it is going and whether it worked. MariMusha is organised around that sequence — sign in, check the balance, scan a code or enter a number, then send.",
      users: "People who send and receive money from their phones.",
      role: "I worked on the mobile interface as part of a team. I am not presenting this as a solo project or as the full UX design of the product.",
      decisions: [
        {
          title: "Four-destination bottom navigation",
          why: "Home, Scan, Send Money and Profile stay one tap away from every screen.",
          problem:
            "Keeps the main tasks reachable without searching through menus.",
        },
        {
          title: "Balance first, recent activity beneath",
          why: "The home screen opens with the balance card, then the latest transactions.",
          problem:
            "Answers “how much do I have and what just happened?” before anything else.",
        },
        {
          title: "Guided scan screen",
          why: "A framed camera area with the line “Align QR code within the box”.",
          problem:
            "Tells the user what to do with the camera instead of leaving them with a blank viewfinder.",
        },
        {
          title: "Short send form",
          why: "Recipient, amount and a single primary action on one screen.",
          problem:
            "Keeps the step that moves money simple and hard to mistake.",
        },
      ],
      implementation:
        "A React Native app with a consistent teal-and-navy palette and shared tab navigation across screens. Published on Google Play.",
    },
  },
  {
    id: "r5",
    name: "R5",
    category: "Mobile app · Church community",
    summary:
      "A mobile app helping church members access sermons, events and community features, with an entry point that adapts to visitors and members.",
    contribution:
      "One of several developers: membership forms, address lookup, sign-in and sign-up flows, dark theme and API integration.",
    tech: [
      "React Native",
      "Expo",
      "Expo Router",
      "Redux Toolkit",
      "Formik",
      "Yup",
    ],
    link: {
      href: "https://play.google.com/store/apps/details?id=com.mapepaprosper.r5churchmobile",
      label: "View on Google Play",
    },
    mark: { src: "/projects/r5-mark.webp", alt: "R5 Church logo" },
    layout: "side",
    screens: [
      {
        src: "/projects/r5-welcome.webp",
        alt: "R5 Church welcome screen asking the user to select a church status, with a Get Started button.",
        caption: "Welcome",
      },
      {
        src: "/projects/r5-home.webp",
        alt: "R5 Church home screen with a scripture card and quick-action tiles for Watch Live, Prayer Requests, Member Directory and Events.",
        caption: "Home",
      },
    ],
    study: {
      context:
        "A church community needs one place for services, events and each other. The app has to welcome first-time visitors and regular members differently, without making either group dig for what they came to do.",
      users: "Church members and first-time visitors.",
      role: "R5 is a team project. My contribution covered the membership and attendee forms, address and postcode lookup, sign-in, sign-up and OTP screens, dark theme support, and connecting screens to the API with Redux state.",
      decisions: [
        {
          title: "Visitor or member on the first screen",
          why: "The welcome screen asks for church status before anything else, then offers one clear “Get Started” action.",
          problem:
            "Lets the app tailor what people see from the start, rather than showing everyone the same thing.",
        },
        {
          title: "Quick-action tiles on Home",
          why: "Watch Live, Prayer Requests, Member Directory and Events sit in a simple grid, each with a short description.",
          problem:
            "Surfaces the main community features without a long menu.",
        },
        {
          title: "Address lookup in forms",
          why: "Membership and attendee forms can look up an address from a postcode.",
          problem:
            "Reduces typing on a phone and the mistakes that come with long free-text addresses.",
        },
      ],
      implementation:
        "Built with React Native and Expo, using Expo Router for navigation, Redux Toolkit for state, and Formik with Yup for form handling and validation. Includes dark theme support. Published on Google Play.",
    },
  },
  {
    id: "buntupay",
    name: "BuntuPay",
    category: "Mobile app · Payments and finance",
    summary:
      "A mobile app for secure, fast transfers and finance management, with real-time tracking of activity.",
    contribution: "Part of the team that built the mobile app.",
    tech: ["React Native", "Expo", "Redux Toolkit", "React Navigation"],
    link: {
      href: "https://play.google.com/store/apps/details?id=com.buntuPay.Payment&hl=en",
      label: "View on Google Play",
    },
    mark: { src: "/projects/buntupay-mark.webp", alt: "BuntuPay logo" },
    layout: "wide",
    screens: [
      {
        src: "/projects/buntupay-welcome.webp",
        alt: "BuntuPay welcome screen with the logo, the line Send Money, and Register and Sign In actions.",
        caption: "Welcome",
      },
      {
        src: "/projects/buntupay-wallets.webp",
        alt: "BuntuPay wallets screen listing EUR, USD and bank balances with Add Funds and Cash Out buttons.",
        caption: "Wallets",
      },
      {
        src: "/projects/buntupay-transactions.webp",
        alt: "BuntuPay My Transactions screen showing a completed deposit with its date and amount.",
        caption: "Transactions",
      },
      {
        src: "/projects/buntupay-money-requests.webp",
        alt: "BuntuPay Money Requests screen listing accepted requests with their dates.",
        caption: "Money requests",
      },
    ],
    study: {
      context:
        "Sending money and keeping track of it needs to feel secure and immediate. BuntuPay is a payments app that combines transfers with finance management and real-time tracking, so people can see what has happened to their money.",
      users: "People who send money and manage their finances from their phones.",
      role: "I was part of the team that built the mobile app. I am not presenting this as a solo project or as the full UX design of the product.",
      decisions: [
        {
          title: "Wallets grouped by currency",
          why: "Each wallet and the bank balance sit in their own card, with Add Funds and Cash Out directly beneath.",
          problem:
            "Makes it clear which balance is which and keeps the two most common money actions in reach.",
        },
        {
          title: "Five-tab bottom navigation",
          why: "Home, Wallets, the BuntuPay action, Activity and Profile are available from every main screen.",
          problem:
            "Gives people a stable way to move between balances, activity and their account.",
        },
        {
          title: "Status shown on each record",
          why: "Transactions and money requests carry a status such as Completed or Request Accepted, with a date.",
          problem:
            "Answers “did it go through?” without the user having to ask or search.",
        },
      ],
      implementation:
        "A React Native app built with Expo, using Redux Toolkit for state and React Navigation for screen flow. Published on Google Play.",
    },
  },
  {
    id: "rota",
    name: "Rota",
    category: "Mobile app · Workforce scheduling",
    summary:
      "A mobile app for managing caregiving staff shift schedules, supporting rota planning and real-time updates.",
    contribution: "Mobile interface development as part of a team.",
    tech: ["React Native"],
    link: {
      href: "https://play.google.com/store/apps/details?id=com.mapepaprosper.elmsrotamanagement",
      label: "View on Google Play",
    },
    mark: { src: "/projects/rota-mark.webp", alt: "Rota app logo" },
    layout: "compact",
    screens: [],
    study: {
      context:
        "Care teams work in shifts, and everyone needs to know who is working when. Rota gives caregiving staff and their schedulers one place to plan the rota and see updates as they happen.",
      users: "Caregiving staff and the people who schedule their shifts.",
      role: "I worked on the mobile interface as part of a team. I am not presenting this as a solo project or as the full UX design of the product.",
      implementation:
        "A React Native mobile app, published on Google Play.",
    },
  },
];

export const experience = [
  {
    title: "Graduate Trainee – Software Development",
    org: "Growthsensetech Limited",
    place: "Harare",
    dates: "2024 – Present",
    points: [
      "Build and maintain user interfaces for web and mobile enterprise applications with React, Next.js and React Native.",
      "Connect interfaces to NestJS services and PostgreSQL-backed systems, validating APIs with Postman and Swagger.",
      "Write documentation and user guides, and support users, feeding recurring issues back into improvements.",
      "Work with developers and technical teams through implementation, validation, deployment and maintenance, troubleshooting configuration, performance and integration issues.",
    ],
  },
  {
    title: "IT Intern",
    org: "Judicial Service Commission – Harare High Court",
    place: "Harare",
    dates: "2022 – 2023",
    points: [
      "Gave first-line technical support to staff and users of the case management system.",
      "Assisted with website updates and system maintenance.",
      "Documented procedures and gave technical guidance to users.",
      "Handled confidential information responsibly.",
    ],
  },
];

export const about = {
  title: "About",
  paragraphs: [
    "I started on the support side of technology. At the Harare High Court I helped people use a case management system, and today I still support the users of the software I help build. Watching where people get stuck taught me that most usability problems show up long before anyone reports them.",
    "I now build responsive web and mobile interfaces with React, Next.js and React Native, connected to NestJS and PostgreSQL-backed systems. I care about clear labels, predictable navigation and the states in between, such as loading, errors and empty screens, because that is where people feel whether a product was thought through.",
    "I bring over two years of combined experience across software development and IT support. I am still growing as a designer, and I am looking for teams where design and engineering shape the product together.",
  ],
  education: {
    degree: "Bachelor of Information Technology (Honours)",
    result: "Upper Second Class (2.1)",
    school: "Chinhoyi University of Technology",
    year: "2024",
  },
  certification: {
    name: "Introduction to Cloud Computing",
    issuer: "Coursera",
  },
};

export const skills = {
  title: "Skills and tools",
  tools: ["Figma", "Canva", "Git", "Jira"],
  groups: [
    {
      title: "Interface development",
      items: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "User experience and delivery",
      items: [
        "Responsive interfaces",
        "Turning user feedback into improvements",
        "Onboarding",
        "User documentation",
        "User training",
        "Collaboration",
      ],
    },
    {
      title: "Supporting technical skills",
      items: [
        "NestJS API integration",
        "PostgreSQL-backed systems",
        "Postman",
        "Swagger",
        "Debugging",
        "Deployment support",
      ],
    },
  ],
};

export const contact = {
  title: "Let’s create something useful.",
};
