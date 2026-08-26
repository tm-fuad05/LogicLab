export interface LogicItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  codeSnippet?: string;
}
export interface Category {
  slug: string;
  title: string;
  description: string;
  itemCount: number;
}
export const CATEGORIES: Category[] = [
  {
    slug: "visibility",
    title: "UI Visibility, Navigation & Dialog Mechanics",
    description:
      "Modals, tabs, accordions, popovers, off-canvas drawers & positioning logic.",
    itemCount: 6,
  },
  {
    slug: "timers",
    title: "Timers, Async & Scheduling Logic",
    description:
      "Countdown clocks, OTP resend cooldowns, carousels, inactivity triggers & stopwatches.",
    itemCount: 5,
  },
  {
    slug: "forms",
    title: "Forms, Dynamic Inputs & Validation",
    description:
      "Reactive form validation, multi-step wizards, dynamic array fields & strength meters.",
    itemCount: 5,
  },
  {
    slug: "data-processing",
    title: "Data Processing, Sorting & Filter Logic",
    description:
      "Live client-side search, multi-column table sorting, pagination & bulk selections.",
    itemCount: 5,
  },
  {
    slug: "scroll-dom",
    title: "Scroll Mechanics & DOM Observation",
    description:
      "Reading progress indicators, scroll-to-top sticky headers & scroll-spy navigation.",
    itemCount: 4,
  },
  {
    slug: "async-feedback",
    title: "Async Operations & UI Feedbacks",
    description:
      "API state engines, debounced search triggers, optimistic updates & polling feeds.",
    itemCount: 5,
  },
  {
    slug: "storage",
    title: "Local Storage & Inter-Tab State Persistence",
    description:
      "Shopping cart persistence, theme toggling & cross-tab sync state visualizers.",
    itemCount: 4,
  },
  {
    slug: "advanced",
    title: "Advanced Interactivity & Drag Mechanics",
    description:
      "Reorderable drag-and-drop lists, image magnifiers, dual range sliders & custom media players.",
    itemCount: 4,
  },
];
export const LOGIC_ITEMS: LogicItem[] = [
  // Category 1: Visibility
  {
    id: "modal-dialog",
    title: "Modal / Dialog Engine",
    category: "UI Visibility, Navigation & Dialog Mechanics",
    categorySlug: "visibility",
    description:
      'Trigger button, Backdrop overlay, Dialog container with header, body, and close "✕" icon.',
    codeSnippet: ``,
  },
  {
    id: "tab-switch",
    title: "Tab Switching System",
    category: "UI Visibility, Navigation & Dialog Mechanics",
    categorySlug: "visibility",
    description:
      "Horizontal tab bar with active underline/border and sample tab content panels.",
    codeSnippet: ``,
  },
  {
    id: "accordion-mechanics",
    title: "Accordion Mechanics (Single & Multi-Open)",
    category: "UI Visibility, Navigation & Dialog Mechanics",
    categorySlug: "visibility",
    description:
      "3 vertically stacked accordion items with title headers, chevron indicators, and content containers.",
    codeSnippet: ``,
  },
  {
    id: "dropdown-popover",
    title: "Dropdown & Popover Auto-Close",
    category: "UI Visibility, Navigation & Dialog Mechanics",
    categorySlug: "visibility",
    description:
      "Menu trigger button with a floating absolute-positioned list menu with sample menu links.",
    codeSnippet: ``,
  },
  {
    id: "sidebar-drawer",
    title: "Sidebar / Drawer Mechanics",
    category: "UI Visibility, Navigation & Dialog Mechanics",
    categorySlug: "visibility",
    description:
      "Sliding off-canvas side drawer panel with a close button and backdrop layer.",
    codeSnippet: ``,
  },
  {
    id: "tooltip-positioning",
    title: "Tooltip Positioning",
    category: "UI Visibility, Navigation & Dialog Mechanics",
    categorySlug: "visibility",
    description:
      "Centered trigger badge/button with floating directional tooltip cards (Top, Bottom, Left, Right).",
    codeSnippet: ``,
  },
  // Category 2: Timers
  {
    id: "otp-timer",
    title: "OTP / Resend Code Timer",
    category: "Timers, Async & Scheduling Logic",
    categorySlug: "timers",
    description:
      '6-digit sharp input boxes, "Resend Code" disabled-state button, countdown label (00:59).',
    codeSnippet: ``,
  },
  {
    id: "countdown-clock",
    title: "Countdown Clock",
    category: "Timers, Async & Scheduling Logic",
    categorySlug: "timers",
    description:
      "4 sharp metric cards displaying DAYS, HOURS, MINUTES, SECONDS.",
    codeSnippet: ``,
  },
  {
    id: "auto-carousel",
    title: "Auto Carousel / Slider Engine",
    category: "Timers, Async & Scheduling Logic",
    categorySlug: "timers",
    description:
      "Slide viewport frame with previous/next indicator arrows and numbered dot indicators.",
    codeSnippet: ``,
  },
  {
    id: "inactivity-warning",
    title: "Inactivity Logout Warning",
    category: "Timers, Async & Scheduling Logic",
    categorySlug: "timers",
    description:
      'Inactive session alert banner and countdown modal dialog with "Stay Logged In" and "Logout Now" buttons.',
    codeSnippet: ``,
  },
  {
    id: "stopwatch-engine",
    title: "Stopwatch Engine",
    category: "Timers, Async & Scheduling Logic",
    categorySlug: "timers",
    description:
      "Large digital clock display (00:00:00.00) and Start, Pause, Reset action controls.",
    codeSnippet: ``,
  },
  // Category 3: Forms
  {
    id: "reactive-validation",
    title: "Real-time Reactive Validation",
    category: "Forms, Dynamic Inputs & Validation",
    categorySlug: "forms",
    description:
      "Form with Name, Email, Password inputs, inline validation error text blocks, and disabled submit button.",
    codeSnippet: ``,
  },
  {
    id: "multistep-form",
    title: "Multi-Step Form / Wizard",
    category: "Forms, Dynamic Inputs & Validation",
    categorySlug: "forms",
    description:
      "Step 1-2-3 progress step indicator bar with Next, Previous, and Submit action triggers.",
    codeSnippet: ``,
  },
  {
    id: "dynamic-fields",
    title: "Dynamic Form Fields (Add/Remove)",
    category: "Forms, Dynamic Inputs & Validation",
    categorySlug: "forms",
    description:
      'List of dynamic input rows with "+ Add Row" and "- Remove" sharp icons.',
    codeSnippet: ``,
  },
  {
    id: "password-strength",
    title: "Password Visibility & Strength Meter",
    category: "Forms, Dynamic Inputs & Validation",
    categorySlug: "forms",
    description:
      "Password input with Show/Hide eye toggle, 4-tier segmented strength bar, and checklist criteria.",
    codeSnippet: ``,
  },
  {
    id: "unsaved-changes",
    title: "Unsaved Changes Guard",
    category: "Forms, Dynamic Inputs & Validation",
    categorySlug: "forms",
    description:
      "Dirty state banner, input text area, and browser exit simulation toggle.",
    codeSnippet: ``,
  },
  // Category 4: Data Processing
  {
    id: "live-search-filter",
    title: "Client-side Live Search & Multi-Filter",
    category: "Data Processing, Sorting & Filter Logic",
    categorySlug: "data-processing",
    description:
      "Search input, Category dropdown, Price range slider, and a grid/list of dummy product cards.",
    codeSnippet: ``,
  },
  {
    id: "multicolumn-sorting",
    title: "Multi-Column Sorting Mechanics",
    category: "Data Processing, Sorting & Filter Logic",
    categorySlug: "data-processing",
    description:
      "Data table with sortable column headers (Title, Price, Date, Rating) with directional sort indicators (▲▼).",
    codeSnippet: ``,
  },
  {
    id: "pagination-logic",
    title: "Pagination Logic",
    category: "Data Processing, Sorting & Filter Logic",
    categorySlug: "data-processing",
    description:
      'Paginated table layout with Previous, Page numbers (1, 2, 3... 10), Next, and "Items per page" selector.',
    codeSnippet: ``,
  },
  {
    id: "bulk-selection",
    title: "Bulk Selection (Select All Checkbox)",
    category: "Data Processing, Sorting & Filter Logic",
    categorySlug: "data-processing",
    description:
      'Table with master "Select All" checkbox in <th>, row-level checkboxes, and batch action toolbar.',
    codeSnippet: ``,
  },
  {
    id: "keyword-highlighting",
    title: "Search Keyword Highlighting",
    category: "Data Processing, Sorting & Filter Logic",
    categorySlug: "data-processing",
    description:
      'Search input and article text blocks containing styled highlighted text marks (<mark class="bg-[#222] text-white">).',
    codeSnippet: ``,
  },
  // Category 5: Scroll & DOM
  {
    id: "scroll-progress",
    title: "Scroll Progress Indicator",
    category: "Scroll Mechanics & DOM Observation",
    categorySlug: "scroll-dom",
    description:
      "Fixed top reading progress bar and a long sample article layout.",
    codeSnippet: ``,
  },
  {
    id: "scroll-to-top-sticky",
    title: "Scroll-to-Top / Sticky Header",
    category: "Scroll Mechanics & DOM Observation",
    categorySlug: "scroll-dom",
    description:
      'Floating sharp "↑ Top" bottom-right button and a sticky navigation bar with active scroll state.',
    codeSnippet: ``,
  },
  {
    id: "scroll-spy",
    title: "Scroll-Spy Navigation",
    category: "Scroll Mechanics & DOM Observation",
    categorySlug: "scroll-dom",
    description:
      "Fixed sidebar link list that highlights corresponding sections in a multi-section document.",
    codeSnippet: ``,
  },
  {
    id: "infinite-scroll",
    title: "Infinite Scroll Engine",
    category: "Scroll Mechanics & DOM Observation",
    categorySlug: "scroll-dom",
    description:
      "Continuous card feed container with a bottom loading skeleton / spinner UI placeholder.",
    codeSnippet: ``,
  },
  // Category 6: Async & UI Feedback
  {
    id: "api-state-management",
    title: "API State Management",
    category: "Async Operations & UI Feedbacks",
    categorySlug: "async-feedback",
    description:
      "View switcher displaying 3 distinct UI states: Skeleton Loader, Error State with Retry, and Loaded Data State.",
    codeSnippet: ``,
  },
  {
    id: "debounced-search",
    title: "Debounced Search Input",
    category: "Async Operations & UI Feedbacks",
    categorySlug: "async-feedback",
    description:
      'Search box with live search indicator ("Typing...", "Waiting 300ms...", "API Triggered") and result list.',
    codeSnippet: ``,
  },
  {
    id: "optimistic-ui",
    title: "Optimistic UI Updates",
    category: "Async Operations & UI Feedbacks",
    categorySlug: "async-feedback",
    description:
      "Like/Bookmark button and Upvote counters with immediate active states.",
    codeSnippet: ``,
  },
  {
    id: "copy-clipboard",
    title: "Copy to Clipboard Feedback",
    category: "Async Operations & UI Feedbacks",
    categorySlug: "async-feedback",
    description:
      'Code/Coupon field with a copy trigger button showing transition to "Copied!" feedback text.',
    codeSnippet: ``,
  },
  {
    id: "polling-engine",
    title: "Polling Engine",
    category: "Async Operations & UI Feedbacks",
    categorySlug: "async-feedback",
    description:
      'Live feed ticker with "Last updated: 2s ago" indicator and manual refresh icon.',
    codeSnippet: ``,
  },
  // Category 7: Storage & State
  {
    id: "shopping-cart",
    title: "Shopping Cart Engine",
    category: "Local Storage & Inter-Tab State Persistence",
    categorySlug: "storage",
    description:
      "Product item cards with Add to Cart, quantity (+ / -) controls, item list drawer, and Subtotal summary box.",
    codeSnippet: ``,
  },
  {
    id: "theme-switcher",
    title: "Theme Switcher (Dark/Light)",
    category: "Local Storage & Inter-Tab State Persistence",
    categorySlug: "storage",
    description:
      "Sharp toggle switch / radio selector between Light (#ffffff / #222222) and Inverted Dark mode.",
    codeSnippet: ``,
  },
  {
    id: "crosstab-sync",
    title: "Cross-Tab Synchronization",
    category: "Local Storage & Inter-Tab State Persistence",
    categorySlug: "storage",
    description:
      "Multi-window state visualizer illustrating shared broadcast state across browser tabs.",
    codeSnippet: ``,
  },
  {
    id: "recent-searches",
    title: "Recent Searches History",
    category: "Local Storage & Inter-Tab State Persistence",
    categorySlug: "storage",
    description:
      'Search bar with recent search badge tags, "Clear All" link, and individual remove "✕" icons.',
    codeSnippet: ``,
  },
  // Category 8: Advanced Interactivity
  {
    id: "drag-drop-reorder",
    title: "Drag and Drop Reordering",
    category: "Advanced Interactivity & Drag Mechanics",
    categorySlug: "advanced",
    description:
      "Reorderable list cards with drag grip icons (:::) and drop target placeholders.",
    codeSnippet: ``,
  },
  {
    id: "image-magnifier",
    title: "Image Magnifier / Zoom",
    category: "Advanced Interactivity & Drag Mechanics",
    categorySlug: "advanced",
    description:
      "Dual view with image container, square zoom lens overlay, and side zoomed-in preview box.",
    codeSnippet: ``,
  },
  {
    id: "double-range-slider",
    title: "Custom Double-Handle Range Slider",
    category: "Advanced Interactivity & Drag Mechanics",
    categorySlug: "advanced",
    description:
      "Dual-thumb range track with Min / Max value badges ($10 - $500).",
    codeSnippet: ``,
  },
  {
    id: "custom-media-player",
    title: "Audio / Video Custom Player Controls",
    category: "Advanced Interactivity & Drag Mechanics",
    categorySlug: "advanced",
    description:
      "Custom video/audio frame with sharp Play/Pause button, timeline scrubber bar, timestamp (01:23 / 04:56), and volume slider.",
    codeSnippet: ``,
  },
];
