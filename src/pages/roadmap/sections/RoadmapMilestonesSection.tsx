import { ROADMAP_DATA, type RoadmapItem } from "../../../data/roadmapData";
import { CheckCircle2, Clock, CircleDot, HelpCircle } from "lucide-react";

export default function RoadmapMilestonesSection() {
  const getStatusBadge = (status: RoadmapItem["status"]) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            Completed
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono border border-cyan/40 bg-cyan/10 text-cyan-600 dark:text-cyan">
            <Clock className="w-3 h-3 animate-spin" />
            In Progress
          </span>
        );
      case "Planned":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <CircleDot className="w-3 h-3" />
            Planned
          </span>
        );
      case "Under Consideration":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono border border-line bg-sidebar text-txt-muted">
            <HelpCircle className="w-3 h-3" />
            Under Review
          </span>
        );
    }
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-txt-main">
          Strategic Milestones & Planned Features
        </h2>
        <span className="text-xs font-mono text-txt-muted">
          Updated September 2026
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ROADMAP_DATA.map((milestone) => (
          <div
            key={milestone.id}
            className="border border-line bg-card p-5 sm:p-6 space-y-4 hover:border-dark-line dark:hover:border-cyan transition-colors relative flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-mono font-semibold text-txt-secondary border border-line px-2 py-0.5 bg-sidebar">
                  {milestone.quarter}
                </span>
                {getStatusBadge(milestone.status)}
              </div>

              <div>
                <h3 className="text-base font-semibold text-txt-main">
                  {milestone.title}
                </h3>
                {milestone.targetDate && (
                  <p className="text-[11px] font-mono text-txt-muted mt-0.5">
                    Target: {milestone.targetDate}
                  </p>
                )}
              </div>

              <p className="text-xs text-txt-secondary leading-relaxed">
                {milestone.description}
              </p>
            </div>

            <div className="pt-3 border-t border-line/70 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-txt-muted block">
                Key Objectives
              </span>
              <ul className="space-y-1.5">
                {milestone.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-txt-main flex items-start gap-2"
                  >
                    <span className="text-cyan text-xs mt-0.5">•</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
