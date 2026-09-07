import { CHANGELOG_DATA, type ChangelogItem } from "../../../data/roadmapData";
import { PlusCircle, Sparkles, Wrench } from "lucide-react";

export default function ChangelogTimelineSection() {
  const getChangeTypeIcon = (type: ChangelogItem["changes"][0]["type"]) => {
    switch (type) {
      case "added":
        return <PlusCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />;
      case "improved":
        return <Sparkles className="w-3.5 h-3.5 text-cyan shrink-0 mt-0.5" />;
      case "fixed":
        return <Wrench className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />;
    }
  };

  const getTagBadge = (tag: ChangelogItem["tag"]) => {
    return (
      <span className="text-[10px] font-mono px-2 py-0.5 border border-line bg-sidebar text-txt-secondary">
        {tag}
      </span>
    );
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-txt-main">
          Release History & Changelog
        </h2>
        <span className="text-xs font-mono text-txt-muted">
          {CHANGELOG_DATA.length} Releases Shipped
        </span>
      </div>

      <div className="relative border-l border-line pl-4 sm:pl-6 space-y-10 ml-2 sm:ml-4">
        {CHANGELOG_DATA.map((entry, index) => (
          <div key={entry.version} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[21px] sm:-left-[29px] top-1.5 w-3 h-3 bg-card border-2 border-txt-main group-hover:border-cyan group-hover:bg-cyan/20 transition-colors" />

            <div className="border border-line bg-card p-5 sm:p-6 space-y-4 hover:border-dark-line dark:hover:border-cyan transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-base font-bold font-mono text-txt-main">
                    {entry.version}
                  </span>
                  {getTagBadge(entry.tag)}
                  {index === 0 && (
                    <span className="text-[10px] font-mono uppercase bg-cyan/20 text-cyan-700 dark:text-cyan px-2 py-0.5 font-semibold">
                      Latest
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-txt-muted">
                  {entry.date}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-sm sm:text-base font-semibold text-txt-main">
                  {entry.title}
                </h3>
                <p className="text-xs sm:text-sm text-txt-secondary leading-relaxed">
                  {entry.description}
                </p>
              </div>

              <div className="pt-2 border-t border-line/60 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-txt-muted block">
                  Detailed Changes
                </span>
                <ul className="space-y-2">
                  {entry.changes.map((change, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-txt-main flex items-start gap-2.5"
                    >
                      {getChangeTypeIcon(change.type)}
                      <span className="leading-snug">{change.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
