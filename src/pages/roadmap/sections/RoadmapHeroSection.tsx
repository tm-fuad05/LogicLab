import { ArrowUpRight } from "lucide-react";

export default function RoadmapHeroSection() {
  return (
    <section className="space-y-5 border-b border-line pb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-line bg-sidebar text-[11px] font-mono text-cyan-600 dark:text-cyan">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan animate-pulse" />
          <span>PROJECT PROGRESSION & RELEASES</span>
        </div>

        {/* Suggest Mechanic / Feature Button */}
        <a
          href="https://github.com/tm-fuad05/LogicLab/issues/new"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-line bg-card hover:bg-sidebar text-txt-main transition-colors group"
        >
          <span>Suggest a Mechanic</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-txt-secondary group-hover:text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-txt-main">
          Roadmap & Release Changelog
        </h1>
        <p className="text-xs sm:text-sm text-txt-secondary leading-relaxed max-w-3xl">
          Follow the evolution of <strong className="text-txt-main">LogicLab</strong>.
          Explore what we've shipped, our active architectural priorities, and upcoming
          features designed to advance frontend engineering education.
        </p>
      </div>
    </section>
  );
}
