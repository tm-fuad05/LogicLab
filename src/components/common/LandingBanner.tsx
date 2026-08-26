import { ArrowRight, Sparkles } from "lucide-react";

interface LandingBannerProps {
  onExploreClick?: () => void;
}

export default function LandingBanner({ onExploreClick }: LandingBannerProps) {
  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const exploreElement = document.getElementById("explore-section");
      if (exploreElement) {
        exploreElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative overflow-hidden border border-line bg-card py-12 px-6 sm:px-10 mb-12 select-none transition-all">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sidebar border border-line text-xs font-mono text-txt-secondary mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan" />
          <span className="font-semibold text-txt-main">LogicLab Engine</span>
          <span className="text-txt-muted">•</span>
          <span>38 Interactive UI Scaffolds</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-txt-main leading-tight mb-4">
          Visual Interaction Playground for React & Web Logic
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-txt-secondary max-w-xl leading-relaxed mb-8">
          Stateless layout scaffolds paired with clean logic hook notebook blocks for developers to build real-world interactivity.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <button
            onClick={handleExplore}
            className="w-full sm:w-auto px-8 py-3.5 bg-txt-main text-main font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xs group border border-txt-main cursor-pointer"
          >
            <span>Explore Logics</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleExplore}
            className="w-full sm:w-auto px-6 py-3.5 bg-sidebar hover:bg-card text-txt-main font-medium text-xs flex items-center justify-center gap-2 border border-line hover:border-dark-line dark:hover:border-cyan transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan" />
            <span>Browse Categories</span>
          </button>
        </div>
      </div>
    </div>
  );
}
