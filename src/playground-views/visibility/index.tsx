// Category 1: Visibility
export function ModalView() {
  return (
    <div className="w-full relative py-8 flex flex-col items-center justify-center min-h-[250px] font-poppins">
      <button className="px-5 py-2.5 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs font-medium hover:opacity-90 transition-opacity">
        Open Dialog Window
      </button>

      <div className="mt-6 w-full max-w-md border border-line bg-card shadow-sm p-6 relative">
        <div className="flex items-center justify-between border-b border-line pb-3 mb-4">
          <h4 className="text-sm font-semibold text-txt-main">
            Modal Header Title
          </h4>
          <span className="text-xs text-txt-secondary cursor-pointer hover:text-txt-main">
            ✕
          </span>
        </div>
        <p className="text-xs text-txt-secondary leading-relaxed mb-6">
          This is a stateless presentational layout scaffold for a modal dialog
          window with backdrop layer overlay.
        </p>
        <div className="flex justify-end gap-2">
          <button className="px-3 py-1.5 border border-line text-xs text-txt-secondary">
            Cancel
          </button>
          <button className="px-3 py-1.5 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs">
            Confirm Action
          </button>
        </div>
      </div>
    </div>
  );
}

export function TabSwitchView() {
  return (
    <div className="w-full space-y-4 font-poppins">
      <div className="flex border-b border-line">
        <button className="px-4 py-2 text-xs font-medium border-b-2 border-dark-line dark:border-cyan text-txt-main bg-sidebar">
          Tab 1: Overview
        </button>
        <button className="px-4 py-2 text-xs font-medium text-txt-secondary hover:text-txt-main">
          Tab 2: Analytics
        </button>
        <button className="px-4 py-2 text-xs font-medium text-txt-secondary hover:text-txt-main">
          Tab 3: Settings
        </button>
      </div>
      <div className="p-6 border border-line bg-card min-h-[120px]">
        <p className="text-xs text-txt-secondary">
          Displaying tab content panel preview. Tab switching logic will be
          defined by user hooks.
        </p>
      </div>
    </div>
  );
}

export function AccordionView() {
  return (
    <div className="w-full space-y-2 font-poppins">
      {[1, 2, 3].map((num) => (
        <div key={num} className="border border-line bg-card">
          <div className="flex items-center justify-between px-5 py-3 bg-sidebar cursor-pointer">
            <span className="text-xs font-semibold text-txt-main">
              Accordion Section {num} Title
            </span>
            <span className="text-xs text-txt-secondary">
              {num === 1 ? "−" : "+"}
            </span>
          </div>
          {num === 1 && (
            <div className="p-5 border-t border-line">
              <p className="text-xs text-txt-secondary">
                Expanded panel body text scaffold for section {num}. Logic
                editor below is ready for toggle state logic.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function DropdownView() {
  return (
    <div className="w-full flex justify-center py-6 font-poppins">
      <div className="relative inline-block text-left">
        <button className="px-4 py-2 border border-line bg-card text-xs font-medium text-txt-main flex items-center gap-2">
          Options Menu <span className="text-[10px]">▼</span>
        </button>
        <div className="mt-2 w-48 border border-line bg-card shadow-sm p-1">
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
  return (
    <div className="w-full border border-line bg-sidebar min-h-[220px] p-6 relative overflow-hidden flex items-center justify-between font-poppins">
      <button className="px-4 py-2 bg-dark-line dark:bg-cyan text-white dark:text-main text-xs">
        Open Off-Canvas Drawer
      </button>
      <div className="w-64 border-l border-line bg-card h-full p-4 flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-line mb-3">
            <span className="text-xs font-semibold text-txt-main">
              Off-Canvas Menu
            </span>
            <span className="text-xs text-txt-secondary">✕</span>
          </div>
          <p className="text-xs text-txt-secondary">
            Drawer contents scaffold sliding from left/right.
          </p>
        </div>
        <button className="w-full py-1.5 border border-line text-xs text-txt-secondary">
          Close
        </button>
      </div>
    </div>
  );
}

export function TooltipView() {
  return (
    <div className="w-full py-12 flex flex-col items-center justify-center gap-6 font-poppins">
      <div className="relative flex flex-col items-center">
        <div className="mb-2 px-3 py-1 bg-dark-line dark:bg-cyan text-white dark:text-main text-[10px] whitespace-nowrap">
          Tooltip Top Direction
        </div>
        <button className="px-4 py-2 border border-line bg-card text-xs text-txt-main">
          Hover Me (Top Tooltip)
        </button>
      </div>

      <div className="relative flex flex-col items-center">
        <button className="px-4 py-2 border border-line bg-card text-xs text-txt-main">
          Hover Me (Bottom Tooltip)
        </button>
        <div className="mt-2 px-3 py-1 bg-dark-line dark:bg-cyan text-white dark:text-main text-[10px] whitespace-nowrap">
          Tooltip Bottom Direction
        </div>
      </div>
    </div>
  );
}
