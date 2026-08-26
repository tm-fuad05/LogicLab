// Category 1: Visibility
export function ModalView() {
  return (
    <div className="w-full relative py-8 flex flex-col items-center justify-center min-h-[250px]">
      <button className="px-5 py-2.5 bg-[#121212] text-white text-xs  font-medium hover:bg-black transition-colors">
        Open Dialog Window
      </button>

      <div className="mt-6 w-full max-w-md border border-[#e5e7eb] bg-white shadow-sm p-6 relative">
        <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-3 mb-4">
          <h4 className="text-sm font-semibold text-[#121212]">
            Modal Header Title
          </h4>
          <span className="text-xs  text-[#666666] cursor-pointer hover:text-[#121212]">
            ✕
          </span>
        </div>
        <p className="text-xs text-[#666666] leading-relaxed mb-6">
          This is a stateless presentational layout scaffold for a modal dialog
          window with backdrop layer overlay.
        </p>
        <div className="flex justify-end gap-2">
          <button className="px-3 py-1.5 border border-[#e5e7eb] text-xs  text-[#666666]">
            Cancel
          </button>
          <button className="px-3 py-1.5 bg-[#222222] text-white text-xs ">
            Confirm Action
          </button>
        </div>
      </div>
    </div>
  );
}

export function TabSwitchView() {
  return (
    <div className="w-full space-y-4">
      <div className="flex border-b border-[#e5e7eb]">
        <button className="px-4 py-2 text-xs  font-medium border-b-2 border-[#222222] text-[#121212] bg-[#fafafa]">
          Tab 1: Overview
        </button>
        <button className="px-4 py-2 text-xs  font-medium text-[#666666] hover:text-[#121212]">
          Tab 2: Analytics
        </button>
        <button className="px-4 py-2 text-xs  font-medium text-[#666666] hover:text-[#121212]">
          Tab 3: Settings
        </button>
      </div>
      <div className="p-6 border border-[#e5e7eb] bg-white min-h-[120px]">
        <p className="text-xs text-[#666666]">
          Displaying tab content panel preview. Tab switching logic will be
          defined by user hooks.
        </p>
      </div>
    </div>
  );
}

export function AccordionView() {
  return (
    <div className="w-full space-y-2">
      {[1, 2, 3].map((num) => (
        <div key={num} className="border border-[#e5e7eb] bg-white">
          <div className="flex items-center justify-between px-5 py-3 bg-[#fafafa] cursor-pointer">
            <span className="text-xs font-semibold text-[#121212]">
              Accordion Section {num} Title
            </span>
            <span className="text-xs  text-[#666666]">
              {num === 1 ? "−" : "+"}
            </span>
          </div>
          {num === 1 && (
            <div className="p-5 border-t border-[#e5e7eb]">
              <p className="text-xs text-[#666666]">
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
    <div className="w-full flex justify-center py-6">
      <div className="relative inline-block text-left">
        <button className="px-4 py-2 border border-[#222222] bg-white text-xs  font-medium text-[#121212] flex items-center gap-2">
          Options Menu <span className="text-[10px]">▼</span>
        </button>
        <div className="mt-2 w-48 border border-[#e5e7eb] bg-white shadow-sm p-1">
          <a
            href="#"
            className="block px-3 py-2 text-xs  text-[#121212] hover:bg-[#fafafa]"
          >
            Account Settings
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-xs  text-[#121212] hover:bg-[#fafafa]"
          >
            API Credentials
          </a>
          <div className="my-1 border-t border-[#e5e7eb]"></div>
          <a
            href="#"
            className="block px-3 py-2 text-xs  text-red-600 hover:bg-[#fafafa]"
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
    <div className="w-full border border-[#e5e7eb] bg-[#fafafa] min-h-[220px] p-6 relative overflow-hidden flex items-center justify-between">
      <button className="px-4 py-2 bg-[#222222] text-white text-xs ">
        Open Off-Canvas Drawer
      </button>
      <div className="w-64 border-l border-[#e5e7eb] bg-white h-full p-4 flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-[#e5e7eb] mb-3">
            <span className="text-xs  font-semibold text-[#121212]">
              Off-Canvas Menu
            </span>
            <span className="text-xs  text-[#666666]">✕</span>
          </div>
          <p className="text-xs text-[#666666]">
            Drawer contents scaffold sliding from left/right.
          </p>
        </div>
        <button className="w-full py-1.5 border border-[#e5e7eb] text-xs  text-[#666666]">
          Close
        </button>
      </div>
    </div>
  );
}

export function TooltipView() {
  return (
    <div className="w-full py-12 flex flex-col items-center justify-center gap-6">
      <div className="relative flex flex-col items-center">
        <div className="mb-2 px-3 py-1 bg-[#121212] text-white text-[10px]  whitespace-nowrap">
          Tooltip Top Direction
        </div>
        <button className="px-4 py-2 border border-[#e5e7eb] bg-white text-xs  text-[#121212]">
          Hover Me (Top Tooltip)
        </button>
      </div>

      <div className="relative flex flex-col items-center">
        <button className="px-4 py-2 border border-[#e5e7eb] bg-white text-xs  text-[#121212]">
          Hover Me (Bottom Tooltip)
        </button>
        <div className="mt-2 px-3 py-1 bg-[#121212] text-white text-[10px]  whitespace-nowrap">
          Tooltip Bottom Direction
        </div>
      </div>
    </div>
  );
}
