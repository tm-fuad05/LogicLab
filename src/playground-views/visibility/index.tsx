import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// Category 1: Visibility
export function ModalView() {
  const [openModal, setOpenModal] = useState(false);

  // Disable background scrolling when modal is active
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-lenis-prevent", "true");
    } else {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-lenis-prevent");
    }

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
            className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-xs transition-opacity duration-300 ${
              openModal
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          />

          {/* Modal Box */}
          <div
            className={`w-11/12 md:max-w-lg border border-line bg-card shadow-sm p-6 fixed z-[101] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
              openModal
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-90 pointer-events-none"
            }`}
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
}

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

  const [activeTab, setActiveTab] = useState("overview");

  // Find active tab content
  const activeTabContent = tabs?.find((tab) => tab?.tabName === activeTab);
  const activeTabClass =
    "border-b-2 border-dark-line dark:border-cyan text-txt-main bg-sidebar";
  const inActiveClass = "text-txt-secondary hover:text-txt-main";

  return (
    <div className="w-full space-y-4 font-poppins">
      <div className="flex border-b border-line">
        {/* Show all tabs using map */}
        {tabs?.map((tab) => (
          <button
            key={tab?.tabName}
            onClick={() => setActiveTab(tab?.tabName)}
            className={`px-4 py-2 text-xs font-medium ${activeTab === tab?.tabName ? activeTabClass : inActiveClass}`}
          >
            {tab?.label}
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
}

export function AccordionView() {
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

  const [isOpen, setIsOpen] = useState<null | number>(null);

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
                className={`text-xs text-txt-secondary font-mono transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              >
                {isExpanded ? "−" : "+"}
              </span>
            </div>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isExpanded
                  ? "grid-rows-[1fr] opacity-100 border-t border-line"
                  : "grid-rows-[0fr] opacity-0"
              }`}
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
}

export function DropdownView() {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
    //Cleanup function
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
          className={`mt-2 w-48 border border-line bg-card shadow-sm p-1 transition-all duration-200 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-5 pointer-events-none"}`}
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
}

export function SidebarDrawerView() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const sideBarRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
    };

    /*
      --------------------------------------------------------------
      If you want to handle with buttonRef (without inline onClick)
      --------------------------------------------------------------
      if (buttonRef.current && buttonRef.current.contains(e.target as Node))
         setIsOpen((prev) => !prev); // 👈 prev always gets the latest value, no dependency value needed.
      
      */

    document.addEventListener("mousedown", handleOutsideClick);
    // Cleanup function
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-full border border-line bg-sidebar min-h-[220px] p-6 relative overflow-hidden flex items-center justify-between font-poppins">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-4 py-2 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs"
      >
        Open Off-Canvas Drawer
      </button>
      <div
        ref={sideBarRef}
        className={`w-64 border-l border-line bg-card h-full p-4 flex flex-col justify-between shadow-sm transition-all duration-300 ${isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-100 pointer-events-none"}`}
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
}

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

  const [isHover, setIsHover] = useState<string | null>(null);

  return (
    <div className="w-full py-16 flex flex-col items-center justify-center gap-15 font-poppins">
      {tooltips.map((item) => (
        <div
          key={item.id}
          className="relative inline-flex items-center justify-center"
        >
          {/* Tooltip badge (Static layout) */}
          <div
            className={`absolute ${positionClasses[item.position]} px-3 py-1 bg-dark-line dark:bg-cyan text-white dark:text-main text-[10px] whitespace-nowrap shadow-sm pointer-events-none transition-opacity duration-300 ${isHover === item.position ? "opacity-100" : "opacity-0"}`}
          >
            {item.tooltipText}
          </div>

          {/* Trigger Button */}
          <button
            onMouseEnter={() => setIsHover(item.position)} // Shows tooltip for current hovered target
            onMouseLeave={() => setIsHover(null)} // Dismisses tooltip when cursor leaves target
            className="px-4 py-2 border border-line bg-card text-xs text-txt-main cursor-pointer hover:border-dark-line dark:hover:border-cyan transition-colors"
          >
            {item.label}
          </button>
        </div>
      ))}
    </div>
  );
}

export function KeyboardNavEscView() {
  const [modalOpen, setModalOpen] = useState(false);
  const [lastKeyPress, setLastKeyPress] = useState("None");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setLastKeyPress(e.key);
      if (e.key === "Escape") setModalOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);

    //Cleanup function
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

          <div className="space-y-1">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                // onClick={() => setActiveItem(num)}
                className={`p-2.5 border transition-all cursor-pointer flex items-center justify-between `}
              >
                <span>Option Item 0{num}</span>
                {/* {activeItem === num && ( */}
                <span className="text-[10px] font-mono text-cyan">
                  Active Focus
                </span>
                {/* )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
