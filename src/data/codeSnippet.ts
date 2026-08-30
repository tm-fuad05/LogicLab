export interface CodeSnippet {
  js: string;
  ts: string;
}

export const CODE_SNIPPETS: Record<string, CodeSnippet> = {
  // Category 1: Visibility
  "modal-dialog": {
    js: `import { useState } from "react";
import { createPortal } from "react-dom";

/**
 * ----------------------------------------------------
 * Modal / Dialog Engine - Key Logics Used:
 * 1. React Portals (createPortal): Modal dialog is rendered outside parent container hierarchy 
 *    directly under document.body to avoid z-index stacking issues.
 * 2. Overlay Backdrop: Absolute fixed overlay covering entire viewport (fixed inset-0) with backdrop blur.
 * 3. CSS Transitions: Uses opacity & scale properties with Tailwind classes to animate open/close without Framer Motion.
 * 4. Screen Centering: Fixed positioning with top-1/2, left-1/2 and -translate-x-1/2 -translate-y-1/2.
 * ----------------------------------------------------
 */
export function ModalView() {
  const [openModal, setOpenModal] = useState(false);

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
    ts: `import { useState } from "react";
import { createPortal } from "react-dom";

/**
 * ----------------------------------------------------
 * Modal / Dialog Engine - Key Logics Used:
 * 1. React Portals (createPortal): Modal dialog is rendered outside parent container hierarchy 
 *    directly under document.body to avoid z-index stacking issues.
 * 2. Overlay Backdrop: Absolute fixed overlay covering entire viewport (fixed inset-0) with backdrop blur.
 * 3. CSS Transitions: Uses opacity & scale properties with Tailwind classes to animate open/close without Framer Motion.
 * 4. Screen Centering: Fixed positioning with top-1/2, left-1/2 and -translate-x-1/2 -translate-y-1/2.
 * ----------------------------------------------------
 */
export function ModalView() {
  const [openModal, setOpenModal] = useState<boolean>(false);

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
  "tab-switch": { js: ``, ts: `` },
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
