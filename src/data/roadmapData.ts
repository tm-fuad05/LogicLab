export interface ChangelogItem {
  version: string;
  date: string;
  title: string;
  tag: "Major Release" | "Feature" | "Enhancement" | "Refactor" | "Fix";
  description: string;
  changes: {
    type: "added" | "improved" | "fixed";
    text: string;
  }[];
}

export interface RoadmapItem {
  id: string;
  quarter: string;
  title: string;
  status: "Completed" | "In Progress" | "Planned" | "Under Consideration";
  description: string;
  targetDate?: string;
  items: string[];
}

export const ROADMAP_DATA: RoadmapItem[] = [
  {
    id: "v1-foundation",
    quarter: "Q1 2026",
    title: "Foundation & Core Mechanics",
    status: "Completed",
    targetDate: "January - March 2026",
    description:
      "Establishing the primary LogicLab workspace architecture, sandbox execution layout, and 38 fundamental UI logic blueprints.",
    items: [
      "Modular routing architecture with persistent Split Layout sandbox",
      "38 real-world UI logic modules across 7 distinct frontend categories",
      "Code highlighting, preview sandbox toggle, and state inspection hooks",
      "Dual high-contrast Theme Engine with Tailwind CSS custom tokens",
      "Interactive landing page with category exploration and mobile drawer",
    ],
  },
  {
    id: "interactive-scaffolds",
    quarter: "Q2 2026",
    title: "Interactive Sandbox & Live Code Execution",
    status: "In Progress",
    targetDate: "April - June 2026",
    description:
      "Empowering learners to write, edit, and hot-reload React logic live in an in-browser sandbox with immediate feedback.",
    items: [
      "In-browser Sandpack / Monaco Editor execution environment for all 38 modules",
      "One-click copyable starter snippets with pure TypeScript annotations",
      "Configurable prop controls panel for real-time state manipulation",
      "Keyboard shortcut palette (⌘K / Ctrl+K) for instant mechanic search",
    ],
  },
  {
    id: "community-submissions",
    quarter: "Q3 2026",
    title: "Community Mechanics & Custom Scenarios",
    status: "Planned",
    targetDate: "July - September 2026",
    description:
      "Allowing frontend engineers to submit custom logic patterns, test cases, and edge-case simulations via GitHub pull requests.",
    items: [
      "Schema-based mechanic contribution template with automated verification",
      "Benchmark & performance profiling for stateful animations and timers",
      "Interactive unit test runner directly underneath the live playground",
      "Dark / Light theme custom visual asset generator",
    ],
  },
  {
    id: "production-export",
    quarter: "Q4 2026",
    title: "Production CLI & Code Exporter",
    status: "Under Consideration",
    targetDate: "October - December 2026",
    description:
      "Effortlessly eject logic patterns into existing Next.js, Remix, or Vite production applications with a single command.",
    items: [
      "`npx logiclab add <mechanic-slug>` direct CLI code scaffolding",
      "Framework agnostic variants (Vue 3 Composition API & Svelte 5 runes)",
      "Automated WCAG 2.1 AA accessibility checklists for each mechanic",
    ],
  },
];

export const CHANGELOG_DATA: ChangelogItem[] = [
  {
    version: "v1.2.0",
    date: "September 07, 2026",
    title: "Dedicated Pages, Full-Width Layouts & Performance Polish",
    tag: "Enhancement",
    description:
      "Added standalone About and Roadmap views with clean full-width navigation, unified top navigation bars, and refined mobile navigation drawer.",
    changes: [
      {
        type: "added",
        text: "Interactive Roadmap & Changelog timeline with filterable milestone cards.",
      },
      {
        type: "added",
        text: "Comprehensive About page featuring mission, tech stack breakdown, and author credentials.",
      },
      {
        type: "improved",
        text: "Conditional workspace layout: sidebar is active exclusively for sandbox pages, leaving static pages full-width.",
      },
      {
        type: "improved",
        text: "Clean top navigation bar with dynamic brand logo rendering and desktop quick links.",
      },
    ],
  },
  {
    version: "v1.1.0",
    date: "August 24, 2026",
    title: "Mobile Drawer Navigation & Search Enhancements",
    tag: "Feature",
    description:
      "Polished responsive navigation on mobile screens, added category fast-travel buttons, and refined color contrast across both themes.",
    changes: [
      {
        type: "added",
        text: "Mobile navigation sliding drawer with smooth touch gesture support and backdrop blur.",
      },
      {
        type: "improved",
        text: "Instant filter in the playground sidebar with real-time module matching.",
      },
      {
        type: "fixed",
        text: "Resolved z-index layering issue on mobile drawer overlapping playground preview frames.",
      },
    ],
  },
  {
    version: "v1.0.0",
    date: "July 15, 2026",
    title: "Initial Launch — 38 Interactive Frontend Mechanics",
    tag: "Major Release",
    description:
      "The public debut of LogicLab with 38 categorized logic exercises spanning timers, visibility, focus, queues, infinite scroll, and more.",
    changes: [
      {
        type: "added",
        text: "Initial release with 7 categories and 38 production-ready UI logic modules.",
      },
      {
        type: "added",
        text: "Dual theme engine supporting sleek Obsidian dark mode and crisp Clean Paper light mode.",
      },
      {
        type: "added",
        text: "Responsive Split Layout with Interactive Preview Canvas and Code Editor placeholder.",
      },
    ],
  },
];
