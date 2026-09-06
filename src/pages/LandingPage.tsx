import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence, type Variants } from "framer-motion";
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
  Zap,
} from "lucide-react";
import Logo from "../components/common/Logo";
import { useTheme } from "../context/ThemeContext";
import { CATEGORIES, LOGIC_ITEMS } from "../data/logicItems";
import Footer from "../components/layout/Footer";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

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
    <div className="min-h-screen bg-main text-txt-main font-poppins flex flex-col selection:bg-cyan/20 overflow-x-clip">
      {/* UNIQUE INTERACTIVE NAVBAR */}
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="h-16 border-b border-line bg-main/90 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-3 sm:px-8"
      >
        {/* Left: Brand Logo & Interactive Dropdown Menu */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link to="/" className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Logo size="lg" />
            </motion.div>
          </Link>

          {/* Interactive Mechanics Mega Dropdown Menu */}
          <div className="relative hidden lg:block" ref={catRef}>
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setMechanicsDropdownOpen((prev) => !prev)}
              className="h-8 sm:h-9 flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-txt-secondary hover:text-txt-main px-2 sm:px-2.5 border border-line bg-sidebar hover:border-dark-line dark:hover:border-cyan transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-cyan" />
              <span>Categories</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${mechanicsDropdownOpen ? "rotate-180 text-cyan" : ""}`}
              />
            </motion.button>

            {/* Dropdown Menu Window */}
            <AnimatePresence>
              {mechanicsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-72 sm:w-80 bg-card border border-line shadow-xl z-50 p-3 space-y-2 max-w-[calc(100vw-2rem)]"
                >
                  <div className="flex items-center justify-between px-2 pb-2 border-b border-line text-[11px] font-mono text-txt-muted uppercase">
                    <span>Interaction Categories</span>
                    <span>8 Categories</span>
                  </div>
                  <div
                    data-lenis-prevent
                    className="space-y-1 max-h-64 sm:max-h-80 overflow-y-auto"
                  >
                    {CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/category/${cat.slug}`}
                        onClick={() => setMechanicsDropdownOpen(false)}
                        className="block p-2 hover:bg-sidebar transition-colors text-xs border border-transparent hover:border-line group"
                      >
                        <div className="font-medium text-txt-main group-hover:text-cyan transition-colors">
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
                      Open Full Workspace →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Center/Right: Quick Search Command Trigger & Status Badge */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Command Palette Trigger (Ctrl + K) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSearchOpen(true)}
            className="h-8 sm:h-9 flex items-center justify-center gap-2 sm:gap-3 px-2.5 sm:px-3 bg-sidebar border border-line text-xs font-mono text-txt-muted hover:border-dark-line dark:hover:border-cyan transition-colors cursor-pointer"
            title="Press Ctrl + K to search all mechanics"
          >
            <Search className="w-3.5 h-3.5 text-txt-main" />
            <span className="hidden md:inline">Search mechanics...</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] bg-card border border-line text-txt-secondary">
              <Command className="w-2.5 h-2.5" /> K
            </kbd>
          </motion.button>

          {/* Theme Switcher */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center border border-line text-txt-main bg-card hover:border-dark-line dark:hover:border-cyan transition-colors cursor-pointer"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-cyan" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </motion.button>

          {/* Primary Explore Action Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/home"
              className="h-8 sm:h-9 px-3 sm:px-4 bg-txt-main text-main hover:opacity-90 font-semibold text-[11px] sm:text-xs flex items-center justify-center gap-1.5 border border-txt-main transition-all cursor-pointer shadow-xs whitespace-nowrap group"
            >
              <span className="hidden md:block">Explore</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.header>

      {/* QUICK COMMAND PALETTE MODAL (CTRL + K SEARCH OVERLAY) */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              onClick={() => setSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-xl bg-card border border-line shadow-2xl overflow-hidden font-poppins rounded-none"
            >
              <div className="p-3 sm:p-4 border-b border-line flex items-center gap-2 sm:gap-3 bg-sidebar">
                <Search className="w-4 h-4 text-cyan flex-shrink-0" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search any mechanics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm text-txt-main placeholder-txt-muted outline-none"
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-txt-muted hover:text-txt-main p-1 border border-line bg-main text-xs cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div
                data-lenis-prevent
                className="max-h-72 sm:max-h-96 overflow-y-auto p-2 space-y-1"
              >
                {filteredItems.length === 0 ? (
                  <div className="p-6 text-center text-xs text-txt-muted font-mono">
                    No mechanics found for "{searchQuery}".
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <motion.button
                      whileHover={{ x: 3 }}
                      key={item.id}
                      onClick={() => {
                        setSearchOpen(false);
                        navigate(`/playground/${item.id}`);
                      }}
                      className="w-full text-left p-2.5 sm:p-3 hover:bg-sidebar border border-transparent hover:border-line transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <span className="text-[10px] font-mono text-txt-muted uppercase block truncate max-w-[200px] sm:max-w-none">
                          {item.category}
                        </span>
                        <span className="text-xs font-semibold text-txt-main group-hover:text-cyan transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-xs text-txt-muted group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </motion.button>
                  ))
                )}
              </div>

              <div className="p-2.5 sm:p-3 border-t border-line bg-sidebar text-[10px] sm:text-[11px] font-mono text-txt-muted flex justify-between items-center">
                <span>Click any item to open</span>
                <kbd className="px-1.5 py-0.5 bg-card border border-line text-[10px]">
                  ESC to close
                </kbd>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Hero View */}
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-line h-[calc(100vh-4rem)] min-h-screen flex flex-col justify-center items-center py-6 sm:py-10 px-4 sm:px-8 lg:px-12 bg-main text-center">
          {/* Subtle Ambient Background Grid & Animated Soft Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:28px_28px] opacity-60 pointer-events-none" />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-48 sm:h-64 bg-cyan/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none"
          />

          {/* Decorative Minimal Corner Crosshairs */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t border-l border-txt-main/20 pointer-events-none" />
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t border-r border-txt-main/20 pointer-events-none" />
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b border-l border-txt-main/20 pointer-events-none" />
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b border-r border-txt-main/20 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center py-4 sm:py-20">
            {/* Version Pill Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 bg-sidebar border border-line text-[11px] sm:text-xs font-mono text-txt-secondary mb-4 sm:mb-6 hover:border-dark-line dark:hover:border-cyan transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse shadow-[0_0_8px_#02befb]" />
              <span className="font-semibold text-txt-main">LogicLab v1.0</span>
              <span className="text-txt-muted">•</span>
              <span className="hidden lg:block">Typescript Ready</span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-txt-main max-w-4xl leading-[1.15] mb-4 sm:mb-5"
            >
              Visual Interactive Dev Notebook{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-cyan-400 to-cyan dark:from-cyan dark:via-cyan-300 dark:to-cyan">
                & Showcase for React & JS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xs sm:text-base text-txt-secondary max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2"
            >
              Stateless presentational UI layouts paired with clean hook
              implementation notebook blocks. Designed for developers to
              inspect, learn, and implement real-world web interactivity.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md mb-6 sm:mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/home"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-txt-main text-main font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md group border border-txt-main cursor-pointer"
                >
                  <span>Explore Logic</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Summary Highlights - 4 Balanced Items Grid */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-5 sm:pt-6 border-t border-line w-full max-w-2xl text-left font-mono text-[11px] sm:text-xs text-txt-secondary w-fit mx-auto"
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 sm:gap-2.5"
              >
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-txt-main flex-shrink-0" />
                <div>
                  <div className="font-semibold text-txt-main">
                    {LOGIC_ITEMS.length} Scaffolds
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-txt-muted">
                    Stateless UI
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 sm:gap-2.5"
              >
                <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-txt-main flex-shrink-0" />
                <div>
                  <div className="font-semibold text-txt-main">
                    8 Categories
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-txt-muted">
                    UI Mechanics
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 sm:gap-2.5"
              >
                <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan flex-shrink-0" />
                <div>
                  <div className="font-semibold text-txt-main">
                    Hook Notebook
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-txt-muted">
                    Blank Code Block
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 sm:gap-2.5"
              >
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-txt-main flex-shrink-0" />
                <div>
                  <div className="font-semibold text-txt-main">Zero Config</div>
                  <div className="text-[10px] sm:text-[11px] text-txt-muted">
                    Instant Setup
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-10 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-line pb-4"
          >
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-txt-main">
                Interaction Categories
              </h2>
              <p className="text-xs text-txt-secondary mt-0.5">
                Select a category to view scaffolds with sidebar navigation
              </p>
            </div>
            <Link
              to="/home"
              className="text-xs font-mono text-txt-main hover:text-cyan group inline-flex items-center gap-1"
            >
              <span>View Workspace</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {CATEGORIES.map((cat, idx) => {
              const catItemsCount = LOGIC_ITEMS.filter(
                (i) => i.categorySlug === cat.slug,
              ).length;
              return (
                <motion.div
                  key={cat.slug}
                  variants={fadeInUp}
                  custom={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={`/category/${cat.slug}`}
                    className="p-4 sm:p-5 bg-card border border-line hover:border-dark-line dark:hover:border-cyan transition-all group flex flex-col justify-between min-h-[120px] h-full"
                  >
                    <div className="space-y-1.5 sm:space-y-2">
                      <span className="text-[10px] font-mono text-txt-muted uppercase tracking-wider block">
                        {catItemsCount} Scaffolds
                      </span>
                      <h3 className="text-xs sm:text-sm font-semibold text-txt-main group-hover:underline">
                        {cat.title}
                      </h3>
                    </div>
                    <div className="pt-3 border-t border-line mt-3 flex items-center justify-between text-xs text-txt-secondary">
                      <span>Inspect</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
