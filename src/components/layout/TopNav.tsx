import { Link } from "react-router";
import Logo from "../common/Logo";

interface TopNavProps {
  onToggleSidebar?: () => void;
}

export default function TopNav({ onToggleSidebar }: TopNavProps) {
  return (
    <header className="h-14 border-b border-[#e5e7eb] bg-white sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8">
      {/* Mobile Menu Toggle Button & Logo */}
      <div className="flex items-center gap-3">
        <Link to="/" className="lg:hidden">
          <Logo size="md" />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/tm-fuad05/LogicLab"
          target="_blank"
          rel="noreferrer"
          className="text-xs px-3 py-1.5 border border-[#e5e7eb] text-[#121212] hover:border-[#222222] transition-colors"
        >
          GitHub Spec
        </a>
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 text-[#121212] border border-[#e5e7eb] hover:bg-[#fafafa] flex items-center justify-center"
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
      </div>
    </header>
  );
}
