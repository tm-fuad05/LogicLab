import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import Logo from "../common/Logo";
import { useTheme } from "../../context/ThemeContext";

interface TopNavProps {
  onToggleSidebar?: () => void;
  showSidebarToggle?: boolean;
}

export default function TopNav({
  onToggleSidebar,
  showSidebarToggle = true,
}: TopNavProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/home", label: "Playground" },
    { to: "/roadmap", label: "Roadmap" },
    { to: "/about", label: "About" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <>
      <header className="h-17 lg:h-14 border-b border-line bg-main sticky top-0 z-30 flex items-center justify-between px-3 sm:px-8 transition-colors">
        {/* Brand Logo: always on mobile; on desktop shown when sidebar is hidden (e.g. /about, /roadmap) */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`flex items-center ${showSidebarToggle ? "lg:hidden" : ""}`}
          >
            <Logo size="lg" />
          </Link>

          {/* Desktop Nav Links for pages without sidebar (Roadmap, About, etc.) */}
          {!showSidebarToggle && (
            <nav
              className="hidden sm:flex items-center gap-1.5"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `h-8 px-3.5 flex items-center text-xs font-medium border transition-colors ${
                      isActive
                        ? "border-line bg-sidebar text-txt-main font-semibold shadow-xs text-cyan-600 dark:text-cyan"
                        : "border-transparent text-txt-secondary hover:text-txt-main hover:bg-sidebar hover:border-line/60"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 border border-line text-txt-main bg-card hover:border-dark-line dark:hover:border-cyan transition-colors cursor-pointer"
            title={
              theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <>
                {/* Sun Icon */}
                <svg
                  className="w-4 h-4 text-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="text-xs hidden sm:inline font-poppins">
                  Light Mode
                </span>
              </>
            ) : (
              <>
                {/* Moon Icon */}
                <svg
                  className="w-4 h-4 text-txt-main"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <span className="text-xs hidden sm:inline font-poppins">
                  Dark Mode
                </span>
              </>
            )}
          </button>

          {/* GitHub Repository Link Button */}
          <a
            href="https://github.com/tm-fuad05/LogicLab"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 p-2 sm:px-3 sm:py-1.5 border border-line text-txt-main bg-card hover:border-dark-line dark:hover:border-cyan transition-colors"
            title="GitHub Repository"
            aria-label="GitHub Repository"
          >
            <svg
              className="w-4 h-4 text-txt-main"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span className="text-xs hidden sm:inline font-poppins">
              GitHub Repo
            </span>
          </a>

          {/* Mobile Toggle: Opens sidebar in playground mode, or dropdown menu on non-sidebar pages */}
          {showSidebarToggle ? (
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 text-txt-main border border-line hover:bg-sidebar flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="sm:hidden p-2 text-txt-main border border-line hover:bg-sidebar flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation links"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          )}
        </div>
      </header>

      {/* Mobile Navigation Dropdown for non-sidebar pages (Roadmap, About) */}
      {!showSidebarToggle && mobileMenuOpen && (
        <div className="sm:hidden border-b border-line bg-card px-4 py-3 space-y-1 font-poppins animate-in fade-in slide-in-from-top-2 duration-150 sticky top-17 z-20 shadow-md">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-3 py-2 text-xs font-medium border transition-colors ${
                  isActive
                    ? "border-line bg-sidebar text-cyan-600 dark:text-cyan font-semibold"
                    : "border-transparent text-txt-secondary hover:text-txt-main hover:bg-sidebar"
                }`}
              >
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
}
