import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { CATEGORIES, LOGIC_ITEMS } from "../../data/logicItems";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const [filter, setFilter] = useState("");
  const location = useLocation();

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (onClose) onClose();
  }, [location.pathname]);

  const filteredCategories = CATEGORIES.map((cat) => {
    const items = LOGIC_ITEMS.filter(
      (item) =>
        item.categorySlug === cat.slug &&
        (item.title.toLowerCase().includes(filter.toLowerCase()) ||
          cat.title.toLowerCase().includes(filter.toLowerCase())),
    );
    return { ...cat, items };
  }).filter((cat) => cat.items.length > 0);

  return (
    <>
      {/* Mobile Overlay Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-xs"
        />
      )}

      <aside
        className={`w-72 border-r border-[#e5e7eb] bg-[#fafafa] flex flex-col fixed lg:sticky top-0 h-screen z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Brand Header */}
        <div className="sticky top-0">
          <div className="p-5 border-b border-[#e5e7eb] bg-white flex items-center justify-between">
            <div>
              <NavLink to="/" className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#00d8ff] animate-[spin_10s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
                  <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
                <span className="font-bold text-sm text-[#121212] tracking-wider uppercase">
                  React UI Engine
                </span>
              </NavLink>
              <p className="text-xs text-[#666666] mt-1">
                Dev Notebook & Scaffolds
              </p>
            </div>
            
            {/* Close button for mobile drawer */}
            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden p-1.5 text-[#666666] hover:text-[#121212] border border-[#e5e7eb]"
                aria-label="Close menu"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Input */}
          <div className="p-4 border-b border-[#e5e7eb] bg-white">
            <input
              type="text"
              placeholder="Filter mechanics..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-3 py-1.5 bg-white border border-[#e5e7eb] text-xs text-[#121212] placeholder-[#999999] focus:outline-none focus:border-[#222222]"
            />
          </div>
        </div>

        {/* Categorized Navigation Links */}
        <nav className="p-4 space-y-6 flex-1 overflow-y-auto">
          {filteredCategories.map((cat) => (
            <div key={cat.slug} className="space-y-2">
              <NavLink
                to={`/category/${cat.slug}`}
                className={({ isActive }: { isActive: boolean }) =>
                  `block text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-[#121212]"
                      : "text-[#666666] hover:text-[#121212]"
                  }`
                }
              >
                {cat.title}
              </NavLink>

              <div className="space-y-1 pl-2 border-l border-[#e5e7eb]">
                {cat.items.map((item) => (
                  <NavLink
                    key={item.id}
                    to={`/playground/${item.id}`}
                    className={({ isActive }: { isActive: boolean }) =>
                      `block px-3 py-1.5 text-xs transition-colors ${
                        isActive
                          ? "border-l-2 border-[#222222] bg-white text-[#121212] font-medium -ml-[9px] pl-[15px]"
                          : "text-[#666666] hover:text-[#121212] hover:bg-white/50"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer Meta */}
        <div className="p-4 border-t border-[#e5e7eb] bg-white text-[11px] text-[#666666]">
          <span>38 UI Logic Modules</span>
        </div>
      </aside>
    </>
  );
}
