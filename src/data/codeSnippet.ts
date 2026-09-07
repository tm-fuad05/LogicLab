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

  // Stop page scroll when modal is open
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-lenis-prevent", "true");
    } else {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-lenis-prevent");
    }

    // Enable scroll again when closed or unmounted
    return () => {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-lenis-prevent");
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

  // Stop page scroll when modal is open
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-lenis-prevent", "true");
    } else {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-lenis-prevent");
    }

    // Enable scroll again when closed or unmounted
    return () => {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-lenis-prevent");
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
 * 1. Single Source of Truth (Data Model): Tab items stored in an array of objects with tabName, label, and description.
 * 2. Active Tab State: useState tracking the unique active tab identifier ('overview').
 * 3. Array.prototype.find: Efficiently retrieves the active tab object in O(N) rather than re-mapping the entire array.
 * 4. Conditional Class Switching: Applies active border and text highlight classes based on strict equality (activeTab === tab?.tabName).
 * 5. Dynamic Content Rendering: Displays the description of the currently selected tab in the content box.
 * ----------------------------------------------------
 */

export function TabSwitchView() {
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

  // Active tab name
  const [activeTab, setActiveTab] = useState("overview");

  // Get data for the active tab
  const activeTabContent = tabs?.find((tab) => tab?.tabName === activeTab);
  const activeTabClass =
    "border-b-2 border-dark-line dark:border-cyan text-txt-main bg-sidebar";
  const inActiveClass = "text-txt-secondary hover:text-txt-main";

  return (
    <div className="w-full space-y-4 font-poppins">
      <div className="flex border-b border-line">
        {/* Tab buttons */}
        {tabs?.map((tab) => (
          <button
            key={tab?.tabName}
            onClick={() => setActiveTab(tab?.tabName)}
            className={\`px-4 py-2 text-xs font-medium \${
              activeTab === tab?.tabName ? activeTabClass : inActiveClass
            }\`}
          >
            {tab?.label}
          </button>
        ))}
      </div>
      <div className="p-6 border border-line bg-card min-h-[120px]">
        {/* Tab content */}
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
 * 1. Single Source of Truth (Data Model): Strongly-typed Tab interface contract defining tabName, label, and description.
 * 2. Active Tab State: useState tracking the unique active tab identifier ('overview').
 * 3. Array.prototype.find: Efficiently retrieves the active tab object without full-array re-mapping.
 * 4. Conditional Class Switching: Applies active border and text highlight classes based on strict equality (activeTab === tab?.tabName).
 * 5. Dynamic Content Rendering: Displays the description of the currently selected tab in the preview box.
 * ----------------------------------------------------
 */

export function TabSwitchView() {
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

  // Active tab name
  const [activeTab, setActiveTab] = useState("overview");

  // Get data for the active tab
  const activeTabContent = tabs?.find((tab) => tab?.tabName === activeTab);
  const activeTabClass =
    "border-b-2 border-dark-line dark:border-cyan text-txt-main bg-sidebar";
  const inActiveClass = "text-txt-secondary hover:text-txt-main";

  return (
    <div className="w-full space-y-4 font-poppins">
      <div className="flex border-b border-line">
        {/* Tab buttons */}
        {tabs?.map((tab) => (
          <button
            key={tab?.tabName}
            onClick={() => setActiveTab(tab?.tabName)}
            className={\`px-4 py-2 text-xs font-medium \${
              activeTab === tab?.tabName ? activeTabClass : inActiveClass
            }\`}
          >
            {tab?.label}
          </button>
        ))}
      </div>
      <div className="p-6 border border-line bg-card min-h-[120px]">
        {/* Tab content */}
        <p className="text-xs text-txt-secondary leading-relaxed">
          {activeTabContent?.description}
        </p>
      </div>
    </div>
  );
}`,
  },
  "accordion-mechanics": {
    js: `import { useState } from "react";

/**
 * ----------------------------------------------------
 * Accordion Collapsible Mechanics - Key Logics Used:
 * 1. Single Active State: Tracks 'isOpen' (number | null) for exclusive single-panel expansion.
 * 2. Toggle Handler: Checks if clicked item is already open; if yes, collapses to null, else sets clicked ID.
 * 3. CSS Grid Height Animation: Uses Tailwind 'grid-rows-[0fr]' to 'grid-rows-[1fr]' transition for silky-smooth height animation without height: auto glitches.
 * 4. Dynamic Indicator Glyph: Rotates 180 degrees using transition-transform duration-300 and toggles (− / +).
 * ----------------------------------------------------
 */

const accordionItems = [
  {
    id: 1,
    title: "What is LogicLab and how does it work?",
    content:
      "LogicLab is an interactive developer notebook and UI showcase designed to help engineers learn, test, and master real-world React hooks and DOM interaction mechanics.",
  },
  {
    id: 2,
    title: "Are all UI scaffolds stateless by default?",
    content:
      "Yes, presentational components start completely unlinked. You can inspect the structure and implement pure React state, custom hooks, or event listeners directly.",
  },
  {
    id: 3,
    title: "Can I use multiple open accordion panels?",
    content:
      "You can configure accordion state to allow single-item exclusive expansion (accordion mode) or multi-item simultaneous expansion by storing an array of active IDs.",
  },
];

export function AccordionView() {
  // Open item index (null means all closed)
  const [isOpen, setIsOpen] = useState(null);

  // Click to open or close an item
  const handleOpen = (index) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full space-y-2 font-poppins">
      {accordionItems?.map((item, idx) => {
        const isExpanded = isOpen === idx;
        return (
          <div
            key={item?.id}
            className="border border-line bg-card overflow-hidden"
          >
            <div
              onClick={() => handleOpen(idx)}
              className="flex items-center justify-between px-5 py-3 bg-sidebar cursor-pointer select-none hover:bg-card transition-colors"
            >
              <span className="text-xs font-semibold text-txt-main">
                {item?.title}
              </span>
              <span
                className={\`text-xs text-txt-secondary font-mono transition-transform duration-300 \${
                  isExpanded ? "rotate-180" : "rotate-0"
                }\`}
              >
                {isExpanded ? "−" : "+"}
              </span>
            </div>

            <div
              className={\`grid transition-all duration-300 ease-in-out \${
                isExpanded
                  ? "grid-rows-[1fr] opacity-100 border-t border-line"
                  : "grid-rows-[0fr] opacity-0"
              }\`}
            >
              <div className="overflow-hidden">
                <div className="p-5">
                  <p className="text-xs text-txt-secondary leading-relaxed">
                    {item?.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}`,
    ts: `import { useState } from "react";

/**
 * ----------------------------------------------------
 * Accordion Collapsible Mechanics - Key Logics Used:
 * 1. Single Active State: Tracks 'isOpen' (number | null) by array index for exclusive single-panel expansion.
 * 2. Toggle Handler: Checks if clicked item index is already open; if yes, collapses to null, else sets clicked index.
 * 3. CSS Grid Height Animation: Uses Tailwind 'grid-rows-[0fr]' to 'grid-rows-[1fr]' transition for silky-smooth height animation without height: auto glitches.
 * 4. Dynamic Indicator Glyph: Rotates 180 degrees using transition-transform duration-300 and toggles (− / +).
 * ----------------------------------------------------
 */

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "What is LogicLab and how does it work?",
    content:
      "LogicLab is an interactive developer notebook and UI showcase designed to help engineers learn, test, and master real-world React hooks and DOM interaction mechanics.",
  },
  {
    id: 2,
    title: "Are all UI scaffolds stateless by default?",
    content:
      "Yes, presentational components start completely unlinked. You can inspect the structure and implement pure React state, custom hooks, or event listeners directly.",
  },
  {
    id: 3,
    title: "Can I use multiple open accordion panels?",
    content:
      "You can configure accordion state to allow single-item exclusive expansion (accordion mode) or multi-item simultaneous expansion by storing an array of active IDs.",
  },
];

export function AccordionView() {
  // Open item index (null means all closed)
  const [isOpen, setIsOpen] = useState<null | number>(null);

  // Click to open or close an item
  const handleOpen = (index: number) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full space-y-2 font-poppins">
      {accordionItems?.map((item, idx) => {
        const isExpanded = isOpen === idx;
        return (
          <div
            key={item?.id}
            className="border border-line bg-card overflow-hidden"
          >
            <div
              onClick={() => handleOpen(idx)}
              className="flex items-center justify-between px-5 py-3 bg-sidebar cursor-pointer select-none hover:bg-card transition-colors"
            >
              <span className="text-xs font-semibold text-txt-main">
                {item?.title}
              </span>
              <span
                className={\`text-xs text-txt-secondary font-mono transition-transform duration-300 \${
                  isExpanded ? "rotate-180" : "rotate-0"
                }\`}
              >
                {isExpanded ? "−" : "+"}
              </span>
            </div>

            <div
              className={\`grid transition-all duration-300 ease-in-out \${
                isExpanded
                  ? "grid-rows-[1fr] opacity-100 border-t border-line"
                  : "grid-rows-[0fr] opacity-0"
              }\`}
            >
              <div className="overflow-hidden">
                <div className="p-5">
                  <p className="text-xs text-txt-secondary leading-relaxed">
                    {item?.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}`,
  },
  "dropdown-popover": {
    js: `import { useState, useEffect, useRef } from "react";

/**
 * ----------------------------------------------------
 * Dropdown / Popover Menu - Key Logics Used:
 * 1. Outside Click Detection: Uses useRef on the wrapper container and document.addEventListener("mousedown", handleClick) to detect outside clicks and close the menu.
 * 2. Event Cleanup: Removes the mousedown listener in the useEffect cleanup function to prevent memory leaks.
 * 3. Smooth CSS Animation: Applies Tailwind opacity-0/100, translate-y-5/0, and transition-all duration-200 for silky entrance/exit.
 * 4. Pointer Events Safety: Uses pointer-events-none when closed to prevent accidental clicks on hidden dropdown items.
 * 5. Dynamic Arrow Glyph: Conditionally displays up arrow (▲) when open and down arrow (▼) when closed.
 * ----------------------------------------------------
 */

export function DropdownView() {
  // Box reference to check click outside
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicked outside
  useEffect(() => {
    const handleClick = (e) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    // Remove click listener
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-6 font-poppins">
      <div ref={dropDownRef} className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 border border-line bg-card text-xs font-medium text-txt-main flex items-center gap-2 cursor-pointer"
        >
          Options Menu <span className="text-[10px]">{isOpen ? "▲" : "▼"}</span>
        </button>
        <div
          className={\`mt-2 w-48 border border-line bg-card shadow-sm p-1 transition-all duration-200 \${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-5 pointer-events-none"
          }\`}
        >
          <a
            href="#"
            className="block px-3 py-2 text-xs text-txt-main hover:bg-sidebar"
          >
            Account Settings
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-xs text-txt-main hover:bg-sidebar"
          >
            API Credentials
          </a>
          <div className="my-1 border-t border-line"></div>
          <a
            href="#"
            className="block px-3 py-2 text-xs text-red-500 hover:bg-sidebar"
          >
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
}`,
    ts: `import { useState, useEffect, useRef } from "react";

/**
 * ----------------------------------------------------
 * Dropdown / Popover Menu - Key Logics Used:
 * 1. Outside Click Detection: Uses useRef<HTMLDivElement | null>(null) on the wrapper container and a mousedown listener to dismiss dropdown.
 * 2. Event Cleanup: Removes the mousedown listener in the useEffect cleanup function to prevent memory leaks.
 * 3. Smooth CSS Animation: Applies Tailwind opacity-0/100, translate-y-5/0, and transition-all duration-200 for silky entrance/exit.
 * 4. Pointer Events Safety: Uses pointer-events-none when closed to prevent accidental clicks on hidden dropdown items.
 * 5. Dynamic Arrow Glyph: Conditionally displays up arrow (▲) when open and down arrow (▼) when closed.
 * ----------------------------------------------------
 */

export function DropdownView() {
  // Box reference to check click outside
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Close menu when clicked outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    // Remove click listener
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="w-full flex justify-center py-6 font-poppins">
      <div ref={dropDownRef} className="relative inline-block text-left">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 border border-line bg-card text-xs font-medium text-txt-main flex items-center gap-2 cursor-pointer"
        >
          Options Menu <span className="text-[10px]">{isOpen ? "▲" : "▼"}</span>
        </button>
        <div
          className={\`mt-2 w-48 border border-line bg-card shadow-sm p-1 transition-all duration-200 \${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-5 pointer-events-none"
          }\`}
        >
          <a
            href="#"
            className="block px-3 py-2 text-xs text-txt-main hover:bg-sidebar"
          >
            Account Settings
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-xs text-txt-main hover:bg-sidebar"
          >
            API Credentials
          </a>
          <div className="my-1 border-t border-line"></div>
          <a
            href="#"
            className="block px-3 py-2 text-xs text-red-500 hover:bg-sidebar"
          >
            Sign Out
          </a>
        </div>
      </div>
    </div>
  );
}`,
  },
  "sidebar-drawer": {
    js: `import { useState, useEffect, useRef } from "react";

/**
 * ----------------------------------------------------
 * Sidebar Drawer (Off-Canvas) - Key Logics Used:
 * 1. Outside Click Detection: Uses sideBarRef and buttonRef with document mousedown listener to close drawer when clicking outside.
 * 2. Button Exclusion Check: Checks !buttonRef.current.contains(e.target) to prevent outside-click from triggering when clicking the toggle button.
 * 3. Functional State Updater: Uses setIsOpen((prev) => !prev) to ensure accurate toggling without stale closure issues.
 * 4. CSS Slide Transition: Uses Tailwind translate-x-0 (open) and translate-x-100 (closed) with duration-300 for smooth sliding animation.
 * 5. Event Cleanup: Removes the mousedown event listener in the useEffect cleanup return.
 * ----------------------------------------------------
 */

export function SidebarDrawerView() {
  // References for button and sidebar
  const buttonRef = useRef(null);
  const sideBarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicked outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    /*
      --------------------------------------------------------------
      If you want to handle with buttonRef (without inline onClick):
      --------------------------------------------------------------
      if (buttonRef.current && buttonRef.current.contains(e.target))
         setIsOpen((prev) => !prev); // 👈 prev always gets the latest value, no dependency value needed.
    */

    document.addEventListener("mousedown", handleOutsideClick);
    // Remove click listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-full border border-line bg-sidebar min-h-[220px] p-6 relative overflow-hidden flex items-center justify-between font-poppins">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-4 py-2 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs cursor-pointer"
      >
        Open Off-Canvas Drawer
      </button>
      <div
        ref={sideBarRef}
        className={\`w-64 border-l border-line bg-card h-full p-4 flex flex-col justify-between shadow-sm transition-all duration-300 \${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-100 pointer-events-none"
        }\`}
      >
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-line mb-3">
            <span className="text-xs font-semibold text-txt-main">
              Off-Canvas Menu
            </span>
            <span
              onClick={() => setIsOpen(false)}
              className="text-xs text-txt-secondary cursor-pointer"
            >
              ✕
            </span>
          </div>
          <p className="text-xs text-txt-secondary">
            Drawer contents scaffold sliding from left/right.
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="w-full py-1.5 border border-line text-xs text-txt-secondary cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}`,
    ts: `import { useState, useEffect, useRef } from "react";

/**
 * ----------------------------------------------------
 * Sidebar Drawer (Off-Canvas) - Key Logics Used:
 * 1. Outside Click Detection: Uses sideBarRef and buttonRef with document mousedown listener to close drawer when clicking outside.
 * 2. Button Exclusion Check: Checks !buttonRef.current.contains(e.target as Node) to prevent outside-click from triggering when clicking the toggle button.
 * 3. Functional State Updater: Uses setIsOpen((prev) => !prev) to ensure accurate toggling without stale closure issues.
 * 4. CSS Slide Transition: Uses Tailwind translate-x-0 (open) and translate-x-100 (closed) with duration-300 for smooth sliding animation.
 * 5. Event Cleanup: Removes the mousedown event listener in the useEffect cleanup return.
 * ----------------------------------------------------
 */

export function SidebarDrawerView() {
  // References for button and sidebar
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const sideBarRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Close sidebar when clicked outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    /*
      --------------------------------------------------------------
      If you want to handle with buttonRef (without inline onClick):
      --------------------------------------------------------------
      if (buttonRef.current && buttonRef.current.contains(e.target as Node))
         setIsOpen((prev) => !prev); // 👈 prev always gets the latest value, no dependency value needed.
    */

    document.addEventListener("mousedown", handleOutsideClick);
    // Remove click listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-full border border-line bg-sidebar min-h-[220px] p-6 relative overflow-hidden flex items-center justify-between font-poppins">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-4 py-2 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs cursor-pointer"
      >
        Open Off-Canvas Drawer
      </button>
      <div
        ref={sideBarRef}
        className={\`w-64 border-l border-line bg-card h-full p-4 flex flex-col justify-between shadow-sm transition-all duration-300 \${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-100 pointer-events-none"
        }\`}
      >
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-line mb-3">
            <span className="text-xs font-semibold text-txt-main">
              Off-Canvas Menu
            </span>
            <span
              onClick={() => setIsOpen(false)}
              className="text-xs text-txt-secondary cursor-pointer"
            >
              ✕
            </span>
          </div>
          <p className="text-xs text-txt-secondary">
            Drawer contents scaffold sliding from left/right.
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="w-full py-1.5 border border-line text-xs text-txt-secondary cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}`,
  },
  "tooltip-positioning": {
    js: `import { useState } from "react";

/**
 * ----------------------------------------------------
 * Tooltip Positioning Engine - Key Logics Used:
 * 1. Data-Driven Scaffolding: Tooltip directions and content stored in an array of objects.
 * 2. Hover State Tracking: Tracks 'isHover' (string | null) for the active hovered item.
 * 3. Synthetic Event Listeners: Uses React's onMouseEnter to show tooltip and onMouseLeave to dismiss cleanly.
 * 4. CSS Absolute Centering: Maps directional classes ('positionClasses') with translate-x/y-1/2 for precision alignment.
 * 5. Event Protection: Applies pointer-events-none to tooltips to eliminate mouse flicker when entering the badge.
 * ----------------------------------------------------
 */

export function TooltipView() {
  const tooltips = [
    {
      id: "left",
      label: "Left Tooltip",
      position: "left",
      tooltipText: "Tooltip on Left",
    },
    {
      id: "top",
      label: "Top Tooltip",
      position: "top",
      tooltipText: "Tooltip on Top",
    },
    {
      id: "bottom",
      label: "Bottom Tooltip",
      position: "bottom",
      tooltipText: "Tooltip on Bottom",
    },
    {
      id: "right",
      label: "Right Tooltip",
      position: "right",
      tooltipText: "Tooltip on Right",
    },
  ];

  // Helper classes for static centered positioning based on direction
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  // Currently hovered tooltip
  const [isHover, setIsHover] = useState(null);

  return (
    <div className="w-full py-16 flex flex-col items-center justify-center gap-15 font-poppins">
      {tooltips.map((item) => (
        <div
          key={item.id}
          className="relative inline-flex items-center justify-center"
        >
          {/* Tooltip badge */}
          <div
            className={\`absolute \${positionClasses[item.position]} px-3 py-1 bg-dark-line dark:bg-cyan text-white dark:text-main text-[10px] whitespace-nowrap shadow-sm pointer-events-none transition-opacity duration-300 \${isHover === item.position ? "opacity-100" : "opacity-0"}\`}
          >
            {item.tooltipText}
          </div>

          {/* Trigger button */}
          <button
            onMouseEnter={() => setIsHover(item.position)} // Show on hover
            onMouseLeave={() => setIsHover(null)} // Hide when mouse leaves
            className="px-4 py-2 border border-line bg-card text-xs text-txt-main cursor-pointer hover:border-dark-line dark:hover:border-cyan transition-colors"
          >
            {item.label}
          </button>
        </div>
      ))}
    </div>
  );
}`,
    ts: `import { useState } from "react";

/**
 * ----------------------------------------------------
 * Tooltip Positioning Engine - Key Logics Used:
 * 1. Strongly-Typed Contract: TooltipItem interface defining directional constraints ('top' | 'bottom' | 'left' | 'right').
 * 2. Hover State Tracking: useState<string | null>(null) tracking active hovered direction.
 * 3. Synthetic Event Listeners: Uses React's onMouseEnter to show tooltip and onMouseLeave to dismiss cleanly.
 * 4. CSS Absolute Centering: Type-safe Record<TooltipItem["position"], string> mapping translate-x/y-1/2 coordinates.
 * 5. Event Protection: Applies pointer-events-none to prevent accidental badge hover collision.
 * ----------------------------------------------------
 */

export function TooltipView() {
  interface TooltipItem {
    id: string;
    label: string;
    position: "top" | "bottom" | "left" | "right";
    tooltipText: string;
  }

  const tooltips: TooltipItem[] = [
    {
      id: "left",
      label: "Left Tooltip",
      position: "left",
      tooltipText: "Tooltip on Left",
    },
    {
      id: "top",
      label: "Top Tooltip",
      position: "top",
      tooltipText: "Tooltip on Top",
    },
    {
      id: "bottom",
      label: "Bottom Tooltip",
      position: "bottom",
      tooltipText: "Tooltip on Bottom",
    },
    {
      id: "right",
      label: "Right Tooltip",
      position: "right",
      tooltipText: "Tooltip on Right",
    },
  ];

  // Helper classes for static centered positioning based on direction
  const positionClasses: Record<TooltipItem["position"], string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  // Currently hovered tooltip
  const [isHover, setIsHover] = useState<string | null>(null);

  return (
    <div className="w-full py-16 flex flex-col items-center justify-center gap-15 font-poppins">
      {tooltips.map((item) => (
        <div
          key={item.id}
          className="relative inline-flex items-center justify-center"
        >
          {/* Tooltip badge */}
          <div
            className={\`absolute \${positionClasses[item.position]} px-3 py-1 bg-dark-line dark:bg-cyan text-white dark:text-main text-[10px] whitespace-nowrap shadow-sm pointer-events-none transition-opacity duration-300 \${isHover === item.position ? "opacity-100" : "opacity-0"}\`}
          >
            {item.tooltipText}
          </div>

          {/* Trigger button */}
          <button
            onMouseEnter={() => setIsHover(item.position)} // Show on hover
            onMouseLeave={() => setIsHover(null)} // Hide when mouse leaves
            className="px-4 py-2 border border-line bg-card text-xs text-txt-main cursor-pointer hover:border-dark-line dark:hover:border-cyan transition-colors"
          >
            {item.label}
          </button>
        </div>
      ))}
    </div>
  );
}`,
  },
  "keyboard-nav-esc": {
    js: `import { useState, useEffect } from "react";

/**
 * ----------------------------------------------------
 * Keyboard Navigation & ESC Dismissal - Key Logics:
 * 1. Global Window Listener: Binds 'keydown' listener on document mount.
 * 2. ESC Key Dismiss: Closes modal window immediately upon pressing Escape.
 * 3. Arrow Up/Down Cycler: Shifts focus index circularly between items 1 to 3.
 * 4. Memory Leak Cleanup: Cleanly removes event listener inside useEffect cleanup.
 * 5. Modern Active Focus Style: Smooth transition, glowing ring border & badge.
 * ----------------------------------------------------
 */

export function KeyboardNavEscView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [lastKeyPress, setLastKeyPress] = useState("None");
  // Active selected item number (1, 2, or 3)
  const [activeArrowFocus, setActiveArrowFocus] = useState(1);

  // Listen to keyboard keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      setLastKeyPress(e.key);
      if (e.key === "Escape") setModalOpen(false); // Close modal on Escape
      else if (e.key === "ArrowDown")
        setActiveArrowFocus((prev) => (prev === 3 ? 1 : prev + 1)); // Move down
      else if (e.key === "ArrowUp")
        setActiveArrowFocus((prev) => (prev === 1 ? 3 : prev - 1)); // Move up
    };

    document.addEventListener("keydown", handleKeyDown);

    // Remove key listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full space-y-6 font-poppins text-xs">
      {/* Live Keypress Listener Banner */}
      <div className="p-4 border border-line bg-sidebar flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="font-semibold text-txt-main">
            Keyboard Listener State:
          </span>
          <span className="font-mono bg-card px-2 py-0.5 border border-line text-txt-main">
            {lastKeyPress}
          </span>
        </div>
        <span className="text-[11px] text-txt-muted font-mono">
          Press ESC to dismiss • ↑ / ↓ to navigate
        </span>
      </div>

      {/* Interactive Trigger & Keyboard Nav Scaffold */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Box: Modal with Esc Key Close */}
        <div className="p-5 border border-line bg-card space-y-3">
          <div className="flex items-center justify-between border-b border-line pb-2">
            <span className="font-semibold text-txt-main">
              1. Esc Key Dismiss Scaffold
            </span>
            <span className="text-[10px] font-mono text-cyan">
              ESC LISTENER
            </span>
          </div>
          <p className="text-txt-secondary text-[11px] leading-relaxed">
            Click button to open modal overlay, then press{" "}
            <kbd className="px-1 py-0.5 bg-sidebar border border-line font-mono text-txt-main">
              ESC
            </kbd>{" "}
            anywhere to dismiss.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs font-semibold cursor-pointer"
          >
            Open Esc-Dismissible Modal
          </button>

          {modalOpen && (
            <div className="p-4 border border-cyan bg-sidebar space-y-2 mt-2">
              <div className="flex justify-between items-center border-b border-line pb-1">
                <span className="font-bold text-txt-main">
                  Active Dialog Window
                </span>
                <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-1.5 py-0.5">
                  PRESS ESC
                </span>
              </div>
              <p className="text-txt-secondary text-[11px]">
                Modal is active. Press the{" "}
                <strong className="text-txt-main">ESC key</strong> on your
                keyboard to test event dismissal.
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className="px-3 py-1 bg-card border border-line text-[11px] hover:border-dark-line"
              >
                Manual Close
              </button>
            </div>
          )}
        </div>

        {/* Right Box: Arrow Key List Navigation */}
        <div className="p-5 border border-line bg-card space-y-3">
          <div className="flex items-center justify-between border-b border-line pb-2">
            <span className="font-semibold text-txt-main">
              2. Arrow Key Focus Navigation
            </span>
            <span className="text-[10px] font-mono text-cyan">↑ / ↓ KEYS</span>
          </div>
          <p className="text-txt-secondary text-[11px] leading-relaxed">
            Use{" "}
            <kbd className="px-1 py-0.5 bg-sidebar border border-line font-mono text-txt-main">
              ↑
            </kbd>{" "}
            and{" "}
            <kbd className="px-1 py-0.5 bg-sidebar border border-line font-mono text-txt-main">
              ↓
            </kbd>{" "}
            arrow keys to shift focus highlight across list items.
          </p>

          <div className="space-y-2">
            {[1, 2, 3].map((num) => {
              const isActive = activeArrowFocus === num;
              return (
                <div
                  key={num}
                  onClick={() => setActiveArrowFocus(num)}
                  tabIndex={0}
                  onFocus={() => setActiveArrowFocus(num)}
                  className={\`relative px-3.5 py-2.5 rounded-sm border transition-all duration-200 cursor-pointer flex items-center justify-between outline-none select-none \${
                    isActive
                      ? "border-cyan bg-cyan/10 text-txt-main shadow-xs ring-1 ring-cyan/30 translate-x-1"
                      : "border-line bg-sidebar/50 text-txt-secondary hover:border-txt-muted hover:bg-sidebar"
                  }\`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={\`font-medium \${isActive ? "text-txt-main" : ""}\`}
                    >
                      Option Item 0{num}
                    </span>
                  </div>

                  {isActive ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-mono font-medium text-cyan bg-cyan/15 px-2 py-0.5 rounded border border-cyan/30 shadow-xs">
                      Active Focus
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-txt-muted opacity-0 group-hover:opacity-100">
                      Item #{num}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}`,
    ts: `import { useState, useEffect } from "react";

/**
 * ----------------------------------------------------
 * Keyboard Navigation & ESC Dismissal - Key Logics:
 * 1. Global Window Listener: Binds 'keydown' listener with strongly-typed KeyboardEvent.
 * 2. ESC Key Dismiss: Closes modal window immediately upon pressing Escape.
 * 3. Arrow Up/Down Cycler: Shifts focus index circularly between items 1 to 3.
 * 4. Memory Leak Cleanup: Cleanly removes event listener inside useEffect cleanup.
 * 5. Modern Active Focus Style: Smooth transition, glowing ring border & badge.
 * ----------------------------------------------------
 */

export function KeyboardNavEscView() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [lastKeyPress, setLastKeyPress] = useState<string>("None");
  // Active selected item number (1, 2, or 3)
  const [activeArrowFocus, setActiveArrowFocus] = useState<number>(1);

  // Listen to keyboard keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setLastKeyPress(e.key);
      if (e.key === "Escape") setModalOpen(false); // Close modal on Escape
      else if (e.key === "ArrowDown")
        setActiveArrowFocus((prev) => (prev === 3 ? 1 : prev + 1)); // Move down
      else if (e.key === "ArrowUp")
        setActiveArrowFocus((prev) => (prev === 1 ? 3 : prev - 1)); // Move up
    };

    document.addEventListener("keydown", handleKeyDown);

    // Remove key listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full space-y-6 font-poppins text-xs">
      {/* Live Keypress Listener Banner */}
      <div className="p-4 border border-line bg-sidebar flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <span className="font-semibold text-txt-main">
            Keyboard Listener State:
          </span>
          <span className="font-mono bg-card px-2 py-0.5 border border-line text-txt-main">
            {lastKeyPress}
          </span>
        </div>
        <span className="text-[11px] text-txt-muted font-mono">
          Press ESC to dismiss • ↑ / ↓ to navigate
        </span>
      </div>

      {/* Interactive Trigger & Keyboard Nav Scaffold */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Box: Modal with Esc Key Close */}
        <div className="p-5 border border-line bg-card space-y-3">
          <div className="flex items-center justify-between border-b border-line pb-2">
            <span className="font-semibold text-txt-main">
              1. Esc Key Dismiss Scaffold
            </span>
            <span className="text-[10px] font-mono text-cyan">
              ESC LISTENER
            </span>
          </div>
          <p className="text-txt-secondary text-[11px] leading-relaxed">
            Click button to open modal overlay, then press{" "}
            <kbd className="px-1 py-0.5 bg-sidebar border border-line font-mono text-txt-main">
              ESC
            </kbd>{" "}
            anywhere to dismiss.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs font-semibold cursor-pointer"
          >
            Open Esc-Dismissible Modal
          </button>

          {modalOpen && (
            <div className="p-4 border border-cyan bg-sidebar space-y-2 mt-2">
              <div className="flex justify-between items-center border-b border-line pb-1">
                <span className="font-bold text-txt-main">
                  Active Dialog Window
                </span>
                <span className="text-[10px] font-mono text-cyan bg-cyan/10 px-1.5 py-0.5">
                  PRESS ESC
                </span>
              </div>
              <p className="text-txt-secondary text-[11px]">
                Modal is active. Press the{" "}
                <strong className="text-txt-main">ESC key</strong> on your
                keyboard to test event dismissal.
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className="px-3 py-1 bg-card border border-line text-[11px] hover:border-dark-line"
              >
                Manual Close
              </button>
            </div>
          )}
        </div>

        {/* Right Box: Arrow Key List Navigation */}
        <div className="p-5 border border-line bg-card space-y-3">
          <div className="flex items-center justify-between border-b border-line pb-2">
            <span className="font-semibold text-txt-main">
              2. Arrow Key Focus Navigation
            </span>
            <span className="text-[10px] font-mono text-cyan">↑ / ↓ KEYS</span>
          </div>
          <p className="text-txt-secondary text-[11px] leading-relaxed">
            Use{" "}
            <kbd className="px-1 py-0.5 bg-sidebar border border-line font-mono text-txt-main">
              ↑
            </kbd>{" "}
            and{" "}
            <kbd className="px-1 py-0.5 bg-sidebar border border-line font-mono text-txt-main">
              ↓
            </kbd>{" "}
            arrow keys to shift focus highlight across list items.
          </p>

          <div className="space-y-2">
            {[1, 2, 3].map((num) => {
              const isActive = activeArrowFocus === num;
              return (
                <div
                  key={num}
                  onClick={() => setActiveArrowFocus(num)}
                  tabIndex={0}
                  onFocus={() => setActiveArrowFocus(num)}
                  className={\`relative px-3.5 py-2.5 rounded-sm border transition-all duration-200 cursor-pointer flex items-center justify-between outline-none select-none \${
                    isActive
                      ? "border-cyan bg-cyan/10 text-txt-main shadow-xs ring-1 ring-cyan/30 translate-x-1"
                      : "border-line bg-sidebar/50 text-txt-secondary hover:border-txt-muted hover:bg-sidebar"
                  }\`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={\`font-medium \${isActive ? "text-txt-main" : ""}\`}
                    >
                      Option Item 0{num}
                    </span>
                  </div>

                  {isActive ? (
                    <span className="flex items-center gap-1.5 text-[10px] font-mono font-medium text-cyan bg-cyan/15 px-2 py-0.5 rounded border border-cyan/30 shadow-xs">
                      Active Focus
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-txt-muted opacity-0 group-hover:opacity-100">
                      Item #{num}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },

  // Category 2: Timers
  "otp-timer": {
    js: `import { useEffect, useState } from "react";

/**
 * ----------------------------------------------------
 * OTP Resend Timer - Key Logics Used:
 * 1. Interval Countdown: Uses setInterval to decrement the timer every tick.
 * 2. Effect Cleanup: Clears the active interval on unmount or before the effect reruns to prevent memory leaks.
 * 3. Rate-Limiting / Tiered Cooldown: First attempt has a shorter delay (15s), while repeated attempts increase to 30s.
 * 4. Button State Locking: Disables resend interaction and prevents spamming until the countdown reaches 0.
 * 5. Time Formatting: Formats raw seconds into two-digit padded strings (e.g. 00:09).
 * ----------------------------------------------------
 */
export function OtpTimerView() {
  const [timer, setTimer] = useState(0);
  const [canResend, setCanResend] = useState(true);
  const [isFirstAttempt, setIsFirstAttempt] = useState(true);

  useEffect(() => {
    let timerCount;

    // While timer is active, decrement by 1 each interval
    if (timer > 0) {
      timerCount = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 300); // 300ms used for accelerated demo preview
    }

    // When timer expires, re-enable resending
    if (timer === 0) {
      clearInterval(timerCount);
      setCanResend(true);
    }

    // Cleanup function
    return () => clearInterval(timerCount);
  }, [timer]);

  // Handle OTP resend click logic (15s first attempt, 30s subsequent)
  const handleResend = () => {
    setCanResend(false);
    if (isFirstAttempt) {
      setTimer(15); // Shorter cooldown for the first attempt
      setIsFirstAttempt(false);
    } else {
      setTimer(30); // Longer cooldown for repeated attempts
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 text-center font-poppins py-4">
      {/* OTP Input Fields */}
      <div className="flex justify-center gap-2.5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            readOnly
            value={i === 1 ? "5" : i === 2 ? "2" : ""}
            className="w-10 h-12 text-center text-sm font-semibold border border-line bg-card text-txt-main focus:outline-none focus:border-dark-line dark:focus:border-cyan transition-colors"
          />
        ))}
      </div>

      <div className="space-y-3">
        {/* Countdown Timer Display */}
        {!canResend && (
          <div className="text-xs text-txt-secondary">
            <p>
              Resend code in{" "}
              <span className="font-semibold font-mono text-txt-main dark:text-cyan">
                00:{timer >= 10 ? timer : \`0\${timer}\`}
              </span>
            </p>
          </div>
        )}

        {/* Resend Action Button */}
        <button
          onClick={handleResend}
          disabled={!canResend}
          className="px-5 py-2.5 border border-line text-xs font-medium bg-cyan text-main cursor-pointer hover:bg-cyan/80 duration-200 disabled:text-txt-muted disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-sidebar"
        >
          Resend Code
        </button>

        {/* Next Wait Time Badge & Demo Note */}
        <div className="flex flex-col items-center justify-center gap-1.5 text-[11px] text-txt-muted space-y-2">
          <p className="font-medium text-txt-secondary border border-line px-1.5 py-0.5 rounded bg-card/60">
            {isFirstAttempt ? "1st attempt (15s)" : "Subsequent (30s)"}
          </p>
          <p className="text-[11px] text-txt-muted/70 tracking-wide">
            [ ⚡ Demo note: Timer is accelerated for quick preview. ]
          </p>
        </div>
      </div>
    </div>
  );
}`,
    ts: `import { useEffect, useState } from "react";

/**
 * ----------------------------------------------------
 * OTP Resend Timer - Key Logics Used:
 * 1. Interval Countdown: Uses setInterval to decrement the timer every tick.
 * 2. Effect Cleanup: Clears the active interval on unmount or before the effect reruns to prevent memory leaks.
 * 3. Rate-Limiting / Tiered Cooldown: First attempt has a shorter delay (15s), while repeated attempts increase to 30s.
 * 4. Button State Locking: Disables resend interaction and prevents spamming until the countdown reaches 0.
 * 5. Time Formatting: Formats raw seconds into two-digit padded strings (e.g. 00:09).
 * ----------------------------------------------------
 */
export function OtpTimerView() {
  const [timer, setTimer] = useState<number>(0);
  const [canResend, setCanResend] = useState<boolean>(true);
  const [isFirstAttempt, setIsFirstAttempt] = useState<boolean>(true);

  useEffect(() => {
    let timerCount: any;

    // While timer is active, decrement by 1 each interval
    if (timer > 0) {
      timerCount = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 300); // 300ms used for accelerated demo preview
    }

    // When timer expires, re-enable resending
    if (timer === 0) {
      clearInterval(timerCount);
      setCanResend(true);
    }

    // Cleanup function
    return () => clearInterval(timerCount);
  }, [timer]);

  // Handle OTP resend click logic (15s first attempt, 30s subsequent)
  const handleResend = () => {
    setCanResend(false);
    if (isFirstAttempt) {
      setTimer(15); // Shorter cooldown for the first attempt
      setIsFirstAttempt(false);
    } else {
      setTimer(30); // Longer cooldown for repeated attempts
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 text-center font-poppins py-4">
      {/* OTP Input Fields */}
      <div className="flex justify-center gap-2.5">
        {[1, 2, 3, 4, 5, 6].map((i: number) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            readOnly
            value={i === 1 ? "5" : i === 2 ? "2" : ""}
            className="w-10 h-12 text-center text-sm font-semibold border border-line bg-card text-txt-main focus:outline-none focus:border-dark-line dark:focus:border-cyan transition-colors"
          />
        ))}
      </div>

      <div className="space-y-3">
        {/* Countdown Timer Display */}
        {!canResend && (
          <div className="text-xs text-txt-secondary">
            <p>
              Resend code in{" "}
              <span className="font-semibold font-mono text-txt-main dark:text-cyan">
                00:{timer >= 10 ? timer : \`0\${timer}\`}
              </span>
            </p>
          </div>
        )}

        {/* Resend Action Button */}
        <button
          onClick={handleResend}
          disabled={!canResend}
          className="px-5 py-2.5 border border-line text-xs font-medium bg-cyan text-main cursor-pointer hover:bg-cyan/80 duration-200 disabled:text-txt-muted disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-sidebar"
        >
          Resend Code
        </button>

        {/* Next Wait Time Badge & Demo Note */}
        <div className="flex flex-col items-center justify-center gap-1.5 text-[11px] text-txt-muted space-y-2">
          <p className="font-medium text-txt-secondary border border-line px-1.5 py-0.5 rounded bg-card/60">
            {isFirstAttempt ? "1st attempt (15s)" : "Subsequent (30s)"}
          </p>
          <p className="text-[11px] text-txt-muted/70 tracking-wide">
            [ ⚡ Demo note: Timer is accelerated for quick preview. ]
          </p>
        </div>
      </div>
    </div>
  );
}`,
  },
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
