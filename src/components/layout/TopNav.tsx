import { Link } from "react-router";

interface TopNavProps {
  onToggleSidebar?: () => void;
}

export default function TopNav({ onToggleSidebar }: TopNavProps) {
  return (
    <header className="h-14 border-b border-[#e5e7eb] bg-white sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8">
      {/* Mobile Menu Toggle Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 text-[#121212] border border-[#e5e7eb] hover:bg-[#fafafa] flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link to="/" className="lg:hidden font-bold text-xs text-[#121212] tracking-wider uppercase flex items-center gap-2">
          <svg className="w-4 h-4 text-[#00d8ff] animate-[spin_10s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
            <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
          <span>React UI Engine</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-xs px-3 py-1.5 border border-[#e5e7eb] text-[#121212] hover:border-[#222222] transition-colors"
        >
          GitHub Spec
        </a>
      </div>
    </header>
  );
}
