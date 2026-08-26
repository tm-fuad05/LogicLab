import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  Layers,
  Search,
  Sun,
  Moon,
  Code2,
  ChevronDown,
  X,
  Command,
  Activity,
} from "lucide-react";
import Logo from "../components/common/Logo";
import { useTheme } from "../context/ThemeContext";
import { CATEGORIES, LOGIC_ITEMS } from "../data/logicItems";
import Footer from "../components/layout/Footer";

export default function LandingPage() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mechanicsDropdownOpen, setMechanicsDropdownOpen] = useState(false);
  const catRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      if (catRef.current && !catRef.current.contains(e.target as Node)) {
        setMechanicsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutSideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  // Ctrl + K keyboard shortcut listener for Quick Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMechanicsDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems = LOGIC_ITEMS.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-main text-txt-main font-poppins flex flex-col selection:bg-cyan/20">
      {/* UNIQUE INTERACTIVE NAVBAR */}
      <header className="h-16 border-b border-line bg-main/90 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-4 sm:px-8">
        {/* Left: Brand Logo & Interactive Dropdown Menu */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="lg" />
          </Link>

          {/* Interactive Mechanics Mega Dropdown Menu */}
          <div className="relative hidden md:block" ref={catRef}>
            <button
              onClick={() => setMechanicsDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1.5 text-xs font-medium text-txt-secondary hover:text-txt-main py-1 px-2.5 border border-line bg-sidebar hover:border-dark-line dark:hover:border-cyan transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-cyan" />
              <span>Categories</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${mechanicsDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Menu Window */}
            {mechanicsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-line shadow-xl z-20 p-3 space-y-2">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-line text-[11px] font-mono text-txt-muted uppercase">
                  <span>Interaction Categories</span>
                  <span>8 Categories</span>
                </div>
                <div className="space-y-1 max-h-80 overflow-y-auto">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/category/${cat.slug}`}
                      onClick={() => setMechanicsDropdownOpen(false)}
                      className="block p-2 hover:bg-sidebar transition-colors text-xs border border-transparent hover:border-line group"
                    >
                      <div className="font-medium text-txt-main group-hover:text-cyan">
                        {cat.title}
                      </div>
                      <span className="text-[10px] text-txt-muted">
                        {cat.itemCount} Scaffolds
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="pt-2 border-t border-line text-center">
                  <Link
                    to="/home"
                    onClick={() => setMechanicsDropdownOpen(false)}
                    className="text-xs font-mono text-cyan hover:underline"
                  >
                    Open Full Sidebar Workspace →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center/Right: Quick Search Command Trigger & Status Badge */}
        <div className="flex items-center gap-3">
          {/* Command Palette Trigger (Ctrl + K) */}
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-3 px-3 py-1.5 bg-sidebar border border-line text-xs font-mono text-txt-muted hover:border-dark-line dark:hover:border-cyan transition-colors cursor-pointer"
            title="Press Ctrl + K to search all mechanics"
          >
            <Search className="w-3.5 h-3.5 text-txt-main" />
            <span className="hidden sm:inline">Search mechanics...</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] bg-card border border-line text-txt-secondary">
              <Command className="w-2.5 h-2.5" /> K
            </kbd>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-line text-txt-main bg-card hover:border-dark-line dark:hover:border-cyan transition-colors cursor-pointer"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-cyan" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Primary Explore Action Button */}
          <Link
            to="/home"
            className="px-4 py-2 bg-txt-main text-main hover:opacity-90 font-semibold text-xs flex items-center gap-2 border border-txt-main transition-all cursor-pointer shadow-xs"
          >
            <span>Explore App</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* QUICK COMMAND PALETTE MODAL (CTRL + K SEARCH OVERLAY) */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="fixed inset-0" onClick={() => setSearchOpen(false)} />
          <div className="relative z-10 w-full max-w-xl bg-card border border-line shadow-2xl overflow-hidden font-poppins">
            <div className="p-4 border-b border-line flex items-center gap-3 bg-sidebar">
              <Search className="w-4 h-4 text-cyan" />
              <input
                type="text"
                autoFocus
                placeholder="Search any of the 39 mechanics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-txt-main placeholder-txt-muted outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-txt-muted hover:text-txt-main p-1 border border-line bg-main text-xs"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-xs text-txt-muted font-mono">
                  No mechanics found for "{searchQuery}".
                </div>
              ) : (
                filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSearchOpen(false);
                      navigate(`/playground/${item.id}`);
                    }}
                    className="w-full text-left p-3 hover:bg-sidebar border border-transparent hover:border-line transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-txt-muted uppercase block">
                        {item.category}
                      </span>
                      <span className="text-xs font-semibold text-txt-main group-hover:text-cyan">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-xs text-txt-muted group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                ))
              )}
            </div>

            <div className="p-3 border-t border-line bg-sidebar text-[11px] font-mono text-txt-muted flex justify-between items-center">
              <span>Navigate with arrow keys or click to open</span>
              <kbd className="px-1.5 py-0.5 bg-card border border-line text-[10px]">
                ESC to close
              </kbd>
            </div>
          </div>
        </div>
      )}

      {/* Main Hero View */}
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-line h-[calc(100vh-4rem)] min-h-[500px] flex flex-col justify-center items-center py-6 px-6 sm:px-12 bg-main text-center">
          {/* Subtle Ambient Background Grid & Soft Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:28px_28px] opacity-60 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 bg-cyan/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Decorative Minimal Corner Crosshairs */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-txt-main/20 pointer-events-none" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-txt-main/20 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-txt-main/20 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-txt-main/20 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Version Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-sidebar border border-line text-xs font-mono text-txt-secondary mb-6 hover:border-dark-line dark:hover:border-cyan transition-colors">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse shadow-[0_0_8px_#02befb]" />
              <span className="font-semibold text-txt-main">LogicLab v1.0</span>
              <span className="text-txt-muted">•</span>
              <span>Interactive Dev Notebook</span>
            </div>

            <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-txt-main max-w-4xl leading-[1.12] mb-5">
              Visual Interaction Playground <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-cyan-400 to-cyan dark:from-cyan dark:via-cyan-300 dark:to-cyan">
                for React & Web Developers
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-txt-secondary max-w-2xl leading-relaxed mb-8">
              Stateless presentational UI layouts paired with clean hook
              implementation notebook blocks. Designed for developers to
              inspect, learn, and implement real-world web interactivity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-8">
              <Link
                to="/home"
                className="w-full sm:w-auto px-8 py-3 bg-txt-main text-main font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md group border border-txt-main cursor-pointer"
              >
                <span>Explore Logics</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Summary Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-line w-full max-w-xl text-left font-mono text-xs text-txt-secondary">
              <div className="flex items-center gap-2.5">
                <Code2 className="w-4 h-4 text-txt-main flex-shrink-0" />
                <div>
                  <div className="font-semibold text-txt-main">
                    {LOGIC_ITEMS.length} Scaffolds
                  </div>
                  <div className="text-[11px] text-txt-muted">Stateless UI</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-txt-main flex-shrink-0" />
                <div>
                  <div className="font-semibold text-txt-main">
                    8 Categories
                  </div>
                  <div className="text-[11px] text-txt-muted">UI Mechanics</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Activity className="w-4 h-4 text-cyan flex-shrink-0" />
                <div>
                  <div className="font-semibold text-txt-main">
                    Hook Notebook
                  </div>
                  <div className="text-[11px] text-txt-muted">
                    Blank Code Block
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-6 sm:px-12 max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <div>
              <h2 className="text-xl font-bold text-txt-main">
                Interaction Categories
              </h2>
              <p className="text-xs text-txt-secondary mt-1">
                Select a category to view scaffolds with sidebar navigation
              </p>
            </div>
            <Link
              to="/home"
              className="text-xs font-mono text-txt-main hover:text-cyan"
            >
              View Workspace →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => {
              const catItemsCount = LOGIC_ITEMS.filter(
                (i) => i.categorySlug === cat.slug,
              ).length;
              return (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="p-5 bg-card border border-line hover:border-dark-line dark:hover:border-cyan transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-txt-muted uppercase tracking-wider block">
                      {catItemsCount} Scaffolds
                    </span>
                    <h3 className="text-sm font-semibold text-txt-main group-hover:underline">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="pt-4 border-t border-line mt-4 flex items-center justify-between text-xs text-txt-secondary">
                    <span>Inspect</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
