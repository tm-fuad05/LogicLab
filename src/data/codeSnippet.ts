export interface CodeSnippet {
  js: string;
  ts: string;
}

export const CODE_SNIPPETS: Record<string, CodeSnippet> = {
  // Category 1: Visibility
  "modal-dialog": {
    js: `import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * ----------------------------------------------------
 * Modal / Dialog Engine - Key Logics Used:
 * 1. React Portals (createPortal): Modal dialog is rendered outside parent container hierarchy 
 *    directly under document.body to avoid z-index stacking issues.
 * 2. Body Scroll Lock: Uses useEffect to toggle document.body.style.overflow = "hidden" when openModal is active.
 * 3. Overlay Backdrop: Absolute fixed overlay covering entire viewport (fixed inset-0) with backdrop blur.
 * 4. CSS Transitions: Uses opacity & scale properties with Tailwind classes to animate open/close without Framer Motion.
 * 5. Screen Centering: Fixed positioning with top-1/2, left-1/2 and -translate-x-1/2 -translate-y-1/2.
 * ----------------------------------------------------
 */
export function ModalView() {
  const [openModal, setOpenModal] = useState(false);

  // Disable background scrolling when modal is active
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openModal]);

  return (
    <div className="w-full relative py-8 flex flex-col items-center justify-center min-h-[250px] font-poppins">
      <button
        onClick={() => setOpenModal(true)}
        className="px-5 py-2.5 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer"
      >
        Open Dialog Window
      </button>

      {createPortal(
        <>
          {/* Backdrop Overlay */}
          <div
            onClick={() => setOpenModal(false)}
            className={\`fixed inset-0 z-[100] bg-black/50 backdrop-blur-xs transition-opacity duration-300 \${
              openModal
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }\`}
          />

          {/* Modal Box */}
          <div
            className={\`w-11/12 md:max-w-lg border border-line bg-card shadow-sm p-6 fixed z-[101] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 \${
              openModal
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-90 pointer-events-none"
            }\`}
          >
            <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
              <h4 className="text-sm font-semibold text-txt-main">
                Modal Header Title
              </h4>
              <button
                onClick={() => setOpenModal(false)}
                className="text-xs text-txt-secondary cursor-pointer hover:text-txt-main"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-txt-secondary leading-relaxed mb-6">
              This is a stateless presentational layout scaffold for a modal
              dialog window with backdrop layer overlay.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpenModal(false)}
                className="px-3 py-1.5 border border-line text-xs text-txt-secondary cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="px-3 py-1.5 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs cursor-pointer"
              >
                Confirm Action
              </button>
            </div>
          </div>
        </>,
        document.body,
      )}
    </div>
  );
}`,
    ts: `import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * ----------------------------------------------------
 * Modal / Dialog Engine - Key Logics Used:
 * 1. React Portals (createPortal): Modal dialog is rendered outside parent container hierarchy 
 *    directly under document.body to avoid z-index stacking issues.
 * 2. Body Scroll Lock: Uses useEffect to toggle document.body.style.overflow = "hidden" when openModal is active.
 * 3. Overlay Backdrop: Absolute fixed overlay covering entire viewport (fixed inset-0) with backdrop blur.
 * 4. CSS Transitions: Uses opacity & scale properties with Tailwind classes to animate open/close without Framer Motion.
 * 5. Screen Centering: Fixed positioning with top-1/2, left-1/2 and -translate-x-1/2 -translate-y-1/2.
 * ----------------------------------------------------
 */
export function ModalView() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  // Disable background scrolling when modal is active
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openModal]);

  return (
    <div className="w-full relative py-8 flex flex-col items-center justify-center min-h-[250px] font-poppins">
      <button
        onClick={() => setOpenModal(true)}
        className="px-5 py-2.5 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer"
      >
        Open Dialog Window
      </button>

      {createPortal(
        <>
          {/* Backdrop Overlay */}
          <div
            onClick={() => setOpenModal(false)}
            className={\`fixed inset-0 z-[100] bg-black/50 backdrop-blur-xs transition-opacity duration-300 \${
              openModal
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }\`}
          />

          {/* Modal Box */}
          <div
            className={\`w-11/12 md:max-w-lg border border-line bg-card shadow-sm p-6 fixed z-[101] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 \${
              openModal
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-90 pointer-events-none"
            }\`}
          >
            <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
              <h4 className="text-sm font-semibold text-txt-main">
                Modal Header Title
              </h4>
              <button
                onClick={() => setOpenModal(false)}
                className="text-xs text-txt-secondary cursor-pointer hover:text-txt-main"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-txt-secondary leading-relaxed mb-6">
              This is a stateless presentational layout scaffold for a modal
              dialog window with backdrop layer overlay.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpenModal(false)}
                className="px-3 py-1.5 border border-line text-xs text-txt-secondary cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="px-3 py-1.5 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs cursor-pointer"
              >
                Confirm Action
              </button>
            </div>
          </div>
        </>,
        document.body,
      )}
    </div>
  );
}`,
  },
  "tab-switch": {
    js: `import { useState } from "react";

/**
 * ----------------------------------------------------
 * Tab Switching Mechanics - Key Logics Used:
 * 1. Single Source of Truth (Data Model): Tab items stored in an array of objects outside the component to avoid unnecessary allocations.
 * 2. Active Tab State: useState tracking the unique active tab identifier ('overview').
 * 3. Array.prototype.find: Efficiently retrieves the active tab object in O(N) rather than re-mapping the entire array.
 * 4. Conditional Class Switching: Applies active border and text highlight classes based on strict equality (activeTab === tab.tabName).
 * 5. Dynamic Content Rendering: Only the description of the currently selected tab is rendered inside the content box.
 * ----------------------------------------------------
 */

const tabs = [
  {
    tabName: "overview",
    label: "Tab 1: Overview",
    description:
      "Welcome to the project overview. Here you can monitor live UI mechanics, state interactions, and active component scaffolds in real-time.",
  },
  {
    tabName: "analytics",
    label: "Tab 2: Analytics",
    description:
      "Analytics dashboard metrics indicate stable 60fps rendering, zero unintended re-renders, and optimal hook execution performance.",
  },
  {
    tabName: "settings",
    label: "Tab 3: Settings",
    description:
      "Manage global workspace settings, keyboard shortcut bindings, theme preferences, and developer preview behaviors.",
  },
];

export function TabSwitchView() {
  const [activeTab, setActiveTab] = useState("overview");

  // Find active tab content
  const activeTabContent = tabs.find((tab) => tab.tabName === activeTab);
  const activeTabClass =
    "border-b-2 border-dark-line dark:border-cyan text-txt-main bg-sidebar";
  const inActiveClass = "text-txt-secondary hover:text-txt-main";

  return (
    <div className="w-full space-y-4 font-poppins">
      <div className="flex border-b border-line">
        {/* Show all tabs using map */}
        {tabs.map((tab) => (
          <button
            key={tab.tabName}
            onClick={() => setActiveTab(tab.tabName)}
            className={\`px-4 py-2 text-xs font-medium \${
              activeTab === tab.tabName ? activeTabClass : inActiveClass
            }\`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-6 border border-line bg-card min-h-[120px]">
        {/* Show the active tab content */}
        <p className="text-xs text-txt-secondary leading-relaxed">
          {activeTabContent?.description}
        </p>
      </div>
    </div>
  );
}`,
    ts: `import { useState } from "react";

/**
 * ----------------------------------------------------
 * Tab Switching Mechanics - Key Logics Used:
 * 1. Single Source of Truth (Data Model): Tab items typed with 'Tab' interface and declared outside component to prevent re-creation on render.
 * 2. Active Tab State: useState<string> tracking the unique active tab identifier ('overview').
 * 3. Array.prototype.find: Efficiently retrieves the active tab object without full-array re-mapping.
 * 4. Conditional Class Switching: Applies active border and text highlight classes based on strict equality (activeTab === tab.tabName).
 * 5. Dynamic Content Rendering: Only the active tab description is rendered cleanly inside the preview box.
 * ----------------------------------------------------
 */

interface Tab {
  tabName: string;
  label: string;
  description: string;
}

const tabs: Tab[] = [
  {
    tabName: "overview",
    label: "Tab 1: Overview",
    description:
      "Welcome to the project overview. Here you can monitor live UI mechanics, state interactions, and active component scaffolds in real-time.",
  },
  {
    tabName: "analytics",
    label: "Tab 2: Analytics",
    description:
      "Analytics dashboard metrics indicate stable 60fps rendering, zero unintended re-renders, and optimal hook execution performance.",
  },
  {
    tabName: "settings",
    label: "Tab 3: Settings",
    description:
      "Manage global workspace settings, keyboard shortcut bindings, theme preferences, and developer preview behaviors.",
  },
];

export function TabSwitchView() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  // Find active tab content
  const activeTabContent = tabs.find((tab) => tab.tabName === activeTab);
  const activeTabClass =
    "border-b-2 border-dark-line dark:border-cyan text-txt-main bg-sidebar";
  const inActiveClass = "text-txt-secondary hover:text-txt-main";

  return (
    <div className="w-full space-y-4 font-poppins">
      <div className="flex border-b border-line">
        {/* Show all tabs using map */}
        {tabs.map((tab) => (
          <button
            key={tab.tabName}
            onClick={() => setActiveTab(tab.tabName)}
            className={\`px-4 py-2 text-xs font-medium \${
              activeTab === tab.tabName ? activeTabClass : inActiveClass
            }\`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-6 border border-line bg-card min-h-[120px]">
        {/* Show the active tab content */}
        <p className="text-xs text-txt-secondary leading-relaxed">
          {activeTabContent?.description}
        </p>
      </div>
    </div>
  );
}`,
  },
  "accordion-mechanics": { js: ``, ts: `` },
  "dropdown-popover": { js: ``, ts: `` },
  "sidebar-drawer": { js: ``, ts: `` },
  "tooltip-positioning": { js: ``, ts: `` },
  "keyboard-nav-esc": { js: ``, ts: `` },

  // Category 2: Timers
  "otp-timer": { js: ``, ts: `` },
  "countdown-clock": { js: ``, ts: `` },
  "auto-carousel": { js: ``, ts: `` },
  "inactivity-warning": { js: ``, ts: `` },
  "stopwatch-engine": { js: ``, ts: `` },

  // Category 3: Forms
  "reactive-validation": { js: ``, ts: `` },
  "multistep-form": { js: ``, ts: `` },
  "dynamic-fields": { js: ``, ts: `` },
  "password-strength": { js: ``, ts: `` },
  "unsaved-changes": { js: ``, ts: `` },

  // Category 4: Data Processing
  "live-search-filter": { js: ``, ts: `` },
  "multicolumn-sorting": { js: ``, ts: `` },
  "pagination-logic": { js: ``, ts: `` },
  "bulk-selection": { js: ``, ts: `` },
  "keyword-highlighting": { js: ``, ts: `` },

  // Category 5: Scroll & DOM
  "scroll-progress": { js: ``, ts: `` },
  "scroll-to-top-sticky": { js: ``, ts: `` },
  "scroll-spy": { js: ``, ts: `` },
  "infinite-scroll": { js: ``, ts: `` },

  // Category 6: Async & UI Feedback
  "api-state-management": { js: ``, ts: `` },
  "debounced-search": { js: ``, ts: `` },
  "optimistic-ui": { js: ``, ts: `` },
  "copy-clipboard": { js: ``, ts: `` },
  "polling-engine": { js: ``, ts: `` },

  // Category 7: Storage & State
  "shopping-cart": { js: ``, ts: `` },
  "theme-switcher": { js: ``, ts: `` },
  "crosstab-sync": { js: ``, ts: `` },
  "recent-searches": { js: ``, ts: `` },

  // Category 8: Advanced Interactivity
  "drag-drop-reorder": { js: ``, ts: `` },
  "image-magnifier": { js: ``, ts: `` },
  "double-range-slider": { js: ``, ts: `` },
  "custom-media-player": { js: ``, ts: `` },
};
