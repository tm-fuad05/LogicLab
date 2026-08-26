import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { CATEGORIES, LOGIC_ITEMS } from "../../data/logicItems";
import Logo from "../common/Logo";

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
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-xs"
        />
      )}

      <aside
        className={`w-72 border-r border-line bg-sidebar flex flex-col fixed lg:sticky top-0 h-screen z-50 transition-transform duration-300 font-poppins ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Brand Header */}
        <div className="sticky top-0">
          <div className="p-5 border-b border-line bg-card flex justify-between">
            <div className="space-y-2">
              <NavLink to="/">
                <Logo size="lg" />
              </NavLink>
              <p className="text-xs text-txt-secondary mt-1.5">
                Dev Notebook & Scaffolds
              </p>
            </div>

            {/* Close button for mobile drawer */}
            {onClose && (
              <div>
                <button
                  onClick={onClose}
                  className="lg:hidden text-txt-secondary hover:text-txt-main border border-line p-1"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Filter Input */}
          <div className="p-4 border-b border-line bg-card">
            <input
              type="text"
              placeholder="Filter mechanics..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-3 py-1.5 bg-main border border-line text-xs text-txt-main placeholder-txt-muted focus:outline-none focus:border-dark-line dark:focus:border-cyan"
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
                      ? "text-txt-main dark:text-cyan"
                      : "text-txt-secondary hover:text-txt-main"
                  }`
                }
              >
                {cat.title}
              </NavLink>

              <div className="space-y-1 pl-2 border-l border-line">
                {cat.items.map((item) => (
                  <NavLink
                    key={item.id}
                    to={`/playground/${item.id}`}
                    className={({ isActive }: { isActive: boolean }) =>
                      `block px-3 py-1.5 text-xs transition-colors ${
                        isActive
                          ? "border-l-2 border-dark-line dark:border-cyan bg-card text-txt-main font-medium -ml-[9px] pl-[15px]"
                          : "text-txt-secondary hover:text-txt-main hover:bg-card/50"
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
        <div className="p-4 border-t border-line bg-card text-[11px] text-txt-secondary">
          <span>38 UI Logic Modules</span>
        </div>
      </aside>
    </>
  );
}
