# Antigravity Prompt & Specification: React UI Logic Engine & Dev Notebook

## 📌 Project Concept & Goal

Build a modern, technical documentation & engineering portfolio website inspired by **Neon Docs** (`neon.tech/docs`).
The platform serves as a visual playground for 30+ core Web & React UI interaction mechanics [cite: 1].

- **Zero Interactivity initially**: All playground components are rendered as raw, unlinked UI layouts (stateless presentational scaffolds).
- **Empty Logic Editor**: Below every UI layout, there is a clean code block / editor area that is **completely blank/empty** ready for the developer to write their own React hooks and event logic to make the UI work.
- **Navigation & Data Loading**: Built using **React Router Data Mode** (`createBrowserRouter`, loaders, nested layouts, action patterns).

---

## 🎨 Design System: Inspired by Neon Docs (`neon.tech/docs`)

### Core Aesthetics

- **Background & Canvas**:
  - Primary Background: `#ffffff`
  - Subtle Page/Sidebar Background: `#fafafa` or `#f8f9fa`
  - Text & Accents: Deep charcoal `#121212` and `#222222`
  - Subtle Technical Grid/Borders: `#e5e7eb` or `#e2e8f0`
- **Typography & Geometry**:
  - Clean sans-serif typography (`Inter`, `Geist`, or system sans) paired with crisp monospaced font (`Geist Mono`, `JetBrains Mono`) for technical tags and code blocks.
  - Geometry: **Strict sharp geometric corners** (`border-radius: 0` / `rounded-none`).
- **Sidebar & Docs Layout**:
  - Left Sticky Sidebar: Categorized list of all 8 checklist sections [cite: 1], clean active link indicators (left-accent border `border-l-2 border-[#222222]`), and searchable filter.
  - Main Reading/Playground Area: Clean breadcrumbs, section title, badge metadata, live visual preview container, followed by the empty logic block.
  - Minimalistic, spacious whitespace, clear visual hierarchy, thin geometric divider lines.

---

## 🧭 Routing Architecture (React Router Data Mode)

Use React Router v6.4+ Data APIs (`createBrowserRouter` + `RouterProvider`):

```jsx
// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout, { rootLoader } from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import PlaygroundPage, { playgroundLoader } from "../pages/PlaygroundPage";
import CategoryOverview, { categoryLoader } from "../pages/CategoryOverview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "category/:categoryId",
        element: <CategoryOverview />,
        loader: categoryLoader,
      },
      {
        path: "playground/:logicId",
        element: <PlaygroundPage />,
        loader: playgroundLoader,
      },
    ],
  },
]);
```

---

## 📂 Project Architecture

```
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx             # Neon-docs style categorized nav links
│   │   ├── TopNav.jsx              # Minimal technical header & breadcrumbs
│   │   └── Shell.jsx               # Docs layout wrapper (Sidebar + Content)
│   ├── common/
│   │   ├── LogicCard.jsx           # Sharp clickable card (no internal buttons)
│   │   ├── EmptyCodeEditor.jsx     # Clean, blank code block ready for custom logic
│   │   ├── PlaygroundFrame.jsx     # Visual preview container with grid background
│   │   └── Breadcrumbs.jsx
├── data/
│   └── logicRegistry.js            # Structured data array for all 8 categories
├── layouts/
│   └── RootLayout.jsx              # React Router data layout with loader
├── pages/
│   ├── HomePage.jsx                # Overview grid of all 8 categories
│   ├── CategoryOverview.jsx        # Cards list for a selected category
│   └── PlaygroundPage.jsx          # UI Scaffold at Top + Empty Logic Code Block below
├── playground-views/               # 100% Stateless Mock UI Scaffolds
│   ├── visibility/
│   │   ├── ModalView.jsx
│   │   ├── TabSwitchView.jsx
│   │   ├── AccordionView.jsx
│   │   ├── DropdownView.jsx
│   │   ├── SidebarDrawerView.jsx
│   │   └── TooltipView.jsx
│   ├── timers/
│   │   ├── OtpTimerView.jsx
│   │   ├── CountdownClockView.jsx
│   │   ├── AutoCarouselView.jsx
│   │   ├── InactivityWarningView.jsx
│   │   └── StopwatchView.jsx
│   ├── forms/
│   │   ├── ReactiveValidationView.jsx
│   │   ├── MultiStepFormView.jsx
│   │   ├── DynamicFieldsView.jsx
│   │   ├── PasswordStrengthView.jsx
│   │   └── UnsavedChangesView.jsx
│   ├── data-processing/
│   │   ├── LiveSearchFilterView.jsx
│   │   ├── MultiColumnSortingView.jsx
│   │   ├── PaginationView.jsx
│   │   ├── BulkSelectionView.jsx
│   │   └── KeywordHighlightView.jsx
│   ├── scroll-dom/
│   │   ├── ScrollProgressView.jsx
│   │   ├── ScrollToTopStickyView.jsx
│   │   ├── ScrollSpyView.jsx
│   │   └── InfiniteScrollView.jsx
│   ├── async-feedback/
│   │   ├── ApiStateManagementView.jsx
│   │   ├── DebouncedSearchView.jsx
│   │   ├── OptimisticUIView.jsx
│   │   ├── CopyClipboardView.jsx
│   │   └── PollingEngineView.jsx
│   ├── storage/
│   │   ├── ShoppingCartView.jsx
│   │   ├── ThemeSwitcherView.jsx
│   │   ├── CrossTabSyncView.jsx
│   │   └── RecentSearchesView.jsx
│   └── advanced/
│       ├── DragDropReorderView.jsx
│       ├── ImageMagnifierView.jsx
│       ├── DoubleRangeSliderView.jsx
│       └── CustomAudioVideoView.jsx
├── index.css
└── main.jsx
```

---

## 🧱 Key Component Specifications

### 1. Clickable Logic Card (`components/common/LogicCard.jsx`)

- **Structure**: Entire card is a `<Link>` or navigable container without internal buttons.
- **Styling**: Sharp borders (`border border-[#e5e7eb] hover:border-[#222222]`), white background, subtle typography, uppercase category badge.

```jsx
import { Link } from "react-router-dom";

export default function LogicCard({ item }) {
  return (
    <Link
      to={`/playground/${item.id}`}
      className="block p-6 bg-white border border-[#e5e7eb] hover:border-[#222222] transition-colors rounded-none group"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs  tracking-wider text-[#666666] uppercase">
          {item.categoryTitle}
        </span>
        <span className="text-xs  text-[#222222] group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
      <h3 className="text-base font-semibold text-[#121212] mb-1">
        {item.title}
      </h3>
      <p className="text-sm text-[#666666] line-clamp-2">{item.description}</p>
    </Link>
  );
}
```

---

### 2. Empty Logic Code Block (`components/common/EmptyCodeEditor.jsx`)

- Below the UI preview, provides a blank canvas/editor for the developer to paste or type their active logic.
- Completely empty inside `<pre><code>` (no predefined boilerplate or functions).

```jsx
export default function EmptyCodeEditor({ logicId, title }) {
  return (
    <section className="mt-10 border border-[#e5e7eb] bg-white rounded-none">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#e5e7eb] bg-[#fafafa]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#222222]"></span>
          <h3 className="text-xs  font-semibold uppercase tracking-wider text-[#222222]">
            Logic Implementation Notes: {title}
          </h3>
        </div>
        <span className="text-xs  text-[#666666]">{logicId}.jsx</span>
      </div>
      <div className="p-6 bg-[#fafafa]  text-sm min-h-[220px]">
        <pre className="text-[#222222] whitespace-pre-wrap outline-none">
          <code>
            {`// Logic block is currently empty.
// Write and connect your React Hooks (useState, useEffect, useRef) & pure JS logic here.`}
          </code>
        </pre>
      </div>
    </section>
  );
}
```

---

## 📋 Complete UI Scaffolding Specs (30+ Modules, PDF Verified)

Each module UI is rendered purely as layout structure without attached business logic [cite: 1]:

### 1. UI Visibility, Navigation & Dialog Mechanics [cite: 1]

1. `ModalView.jsx`: Trigger button element, backdrop overlay container, and sharp modal dialog window with header, body content, and close "✕" mark [cite: 1].
2. `TabSwitchView.jsx`: Top tab navigation row (`Tab 1`, `Tab 2`, `Tab 3`) with sharp border states and content preview box [cite: 1].
3. `AccordionView.jsx`: Stack of 3 sharp collapsible rows with title bar, plus/minus indicator, and body section [cite: 1].
4. `DropdownView.jsx`: Trigger menu button and an absolute-positioned floating dropdown panel with menu items [cite: 1].
5. `SidebarDrawerView.jsx`: Off-canvas sidebar panel sliding from left/right with backdrop layer and close trigger [cite: 1].
6. `TooltipView.jsx`: Centered hover target badge and visible directional floating tooltip labels (Top / Bottom) [cite: 1].

### 2. Timers, Async & Scheduling Logic [cite: 1]

7. `OtpTimerView.jsx`: Row of 6 square character input boxes, countdown text `00:59`, and inactive "Resend Code" trigger [cite: 1].
8. `CountdownClockView.jsx`: 4 sharp grid metric cards displaying `00 Days`, `00 Hours`, `00 Mins`, `00 Secs` [cite: 1].
9. `AutoCarouselView.jsx`: Sharp image/banner frame with Next/Prev arrow containers and slide indicator dots [cite: 1].
10. `InactivityWarningView.jsx`: Session timer alert card and dialog box with "Extend Session" and "Logout" elements [cite: 1].
11. `StopwatchView.jsx`: Monospaced digital readout `00:00:00.00` with Start, Pause, and Reset control triggers [cite: 1].

### 3. Forms, Dynamic Inputs & Validation [cite: 1]

12. `ReactiveValidationView.jsx`: Name, Email, Password inputs with sample error alert lines and submit trigger [cite: 1].
13. `MultiStepFormView.jsx`: Numbered progress tracker (Steps 1, 2, 3) with step input fields and Back/Next triggers [cite: 1].
14. `DynamicFieldsView.jsx`: Repeatable form row list with "+ Add Field" and "✕ Remove" triggers [cite: 1].
15. `PasswordStrengthView.jsx`: Password input with eye icon toggle, segmented strength meter bar, and requirement bullets [cite: 1].
16. `UnsavedChangesView.jsx`: Text editor form with "Unsaved Changes" status badge and test exit action [cite: 1].

### 4. Data Processing, Sorting & Filter Logic [cite: 1]

17. `LiveSearchFilterView.jsx`: Search input box, category selector, price range slider, and dummy item card grid [cite: 1].
18. `MultiColumnSortingView.jsx`: Data table with sortable column headers (`Name`, `Date`, `Amount`, `Status`) showing sort arrows (`▲▼`) [cite: 1].
19. `PaginationView.jsx`: Paginated table container with page buttons (`1`, `2`, `3`, `...`, `10`), Prev/Next, and items-per-page select [cite: 1].
20. `BulkSelectionView.jsx`: Data table with a master "Select All" checkbox in `<th>` and individual row checkboxes [cite: 1].
21. `KeywordHighlightView.jsx`: Search input and article text paragraph showing highlighted keyword mark tags (`<mark>`) [cite: 1].

### 5. Scroll Mechanics & DOM Observation [cite: 1]

22. `ScrollProgressView.jsx`: Top fixed reading progress bar on top of a multi-paragraph sample article [cite: 1].
23. `ScrollToTopStickyView.jsx`: Sticky header bar and fixed bottom-right "↑ Scroll to Top" sharp button [cite: 1].
24. `ScrollSpyView.jsx`: Sticky side link index and corresponding tall section blocks [cite: 1].
25. `InfiniteScrollView.jsx`: Vertical feed stream container with a bottom loading skeleton block [cite: 1].

### 6. Async Operations & UI Feedbacks [cite: 1]

26. `ApiStateManagementView.jsx`: Side-by-side or tabbed preview of Loading Skeleton, Error with Retry, and Success data states [cite: 1].
27. `DebouncedSearchView.jsx`: Search bar with latency status indicator ("Typing...", "Waiting...", "Dispatched") [cite: 1].
28. `OptimisticUIView.jsx`: Like/Upvote interactive heart/arrow counter and instant feedback item feed [cite: 1].
29. `CopyClipboardView.jsx`: Code snippet/API key text field with a sharp "Copy" button [cite: 1].
30. `PollingEngineView.jsx`: Live data table ticker with "Last polled: Just now" status badge [cite: 1].

### 7. Local Storage & Inter-Tab State Persistence [cite: 1]

31. `ShoppingCartView.jsx`: Product catalogue cards with quantity buttons and a right-hand Cart Summary panel [cite: 1].
32. `ThemeSwitcherView.jsx`: Sharp segmented Light / Dark mode toggle switch [cite: 1].
33. `CrossTabSyncView.jsx`: Multi-window mock interface illustrating shared localStorage states [cite: 1].
34. `RecentSearchesView.jsx`: Search input with past search pill tags and "Clear History" button [cite: 1].

### 8. Advanced Interactivity & Drag Mechanics [cite: 1]

35. `DragDropReorderView.jsx`: Vertical list items with draggable grab handles (`:::`) and drop zone placeholders [cite: 1].
36. `ImageMagnifierView.jsx`: Product image preview box with square lens overlay and side zoom preview window [cite: 1].
37. `DoubleRangeSliderView.jsx`: Dual-thumb price range slider track with Min and Max value displays [cite: 1].
38. `CustomAudioVideoView.jsx`: Media player viewport with custom sharp play/pause, scrub bar, time display, and volume slider [cite: 1].

---

## ⚡ Instructions for Antigravity (Step-by-Step)

1. **Initialize Project**: Create the React structure using Vite + Tailwind CSS.
2. **Apply Global Reset**: Ensure all elements strictly use `border-radius: 0px` (zero roundness) and pure `#ffffff` / `#fafafa` / `#222222` color palette inspired by Neon docs.
3. **Configure Router**: Set up `createBrowserRouter` with `RootLayout`, `HomePage`, `CategoryOverview`, and `PlaygroundPage`.
4. **Scaffold Views**: Generate all 38 presentational UI views in `src/playground-views/` as pure, un-interactive visual layouts.
5. **Render Playground**: In `PlaygroundPage.jsx`, render the selected UI view in the upper container, and place the blank `EmptyCodeEditor` directly underneath.
