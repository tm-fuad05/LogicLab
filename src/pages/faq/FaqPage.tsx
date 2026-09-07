import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Code2,
  Sparkles,
  BookOpen,
  Layers,
} from "lucide-react";
import { CATEGORIES, LOGIC_ITEMS } from "../../data/logicItems";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "content",
    question: "What is included on this website?",
    answer: `LogicLab features over ${LOGIC_ITEMS.length}+ production-ready frontend UI logic modules divided across ${CATEGORIES.length} core architectural categories (such as DOM & Visibility, Forms & Inputs, Navigation & Overlays, Animation & Micro-Interactions, and more). Each module includes an interactive playground, live state inspection, copy-ready executable code snippets, architectural notes, and interview prep queries.`,
  },
  {
    id: "purpose",
    question: "What is the primary purpose of LogicLab?",
    answer:
      "To serve as a complete interactive notebook and reference guide. It enables developers to visually deconstruct, understand, and implement complex UI state and behavior patterns directly into real-world production projects.",
  },
  {
    id: "tech-scope",
    question: "Is LogicLab strictly frontend-based?",
    answer:
      "Currently, yes. It focuses purely on client-side frontend UI logic, React state patterns, and DOM mechanics. However, we have roadmap plans to introduce full-stack architectural modules, server-state handling, caching strategies, and backend workflow logic in future releases.",
  },
  {
    id: "code-usage",
    question: "Can I use the code snippets directly in my own projects?",
    answer:
      "Absolutely! LogicLab is completely free and open-source. All component code, custom hooks, and state logic patterns can be copied and adapted directly into your React, Next.js, or vanilla JavaScript applications without any restrictions.",
  },
  {
    id: "contribution",
    question: "Can I suggest or contribute new UI mechanics?",
    answer:
      "Yes! Community contributions are warmly welcome. You can suggest a new UI mechanic or edge-case behavior by opening a GitHub Issue, or submit a Pull Request (PR) to add new modules to the collection.",
  },
  {
    id: "offline-learning",
    question: "Does this rely on heavy external UI component libraries?",
    answer:
      "No. LogicLab intentionally avoids heavy third-party component libraries. All mechanics are authored using native browser web APIs (such as IntersectionObserver, ResizeObserver, Web Storage) and idiomatic React patterns to ensure peak performance, accessibility, and clean comprehension.",
  },
];

export default function FaqPage() {
  const [openId, setOpenId] = useState<string | null>("content");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10 py-4 sm:py-8 font-poppins">
      {/* 1. Header / Hero Section */}
      <section className="space-y-4 border-b border-line pb-8">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-line bg-sidebar text-[11px] font-mono text-cyan-600 dark:text-cyan">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-txt-main">
              Frequently Asked Questions
            </h1>
            <p className="text-xs sm:text-sm text-txt-secondary leading-relaxed max-w-2xl">
              Common questions about LogicLab. Learn about the platform's
              vision, included modules, architectural principles, and future
              roadmap.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono shrink-0">
            {openId !== null && (
              <button
                onClick={() => setOpenId(null)}
                className="px-2.5 py-1 border border-line bg-card hover:bg-sidebar text-txt-secondary hover:text-txt-main transition-colors cursor-pointer"
              >
                Collapse All
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 2. Quick Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 border border-line bg-card space-y-2">
          <div className="w-8 h-8 flex items-center justify-center border border-line bg-sidebar text-cyan-600 dark:text-cyan">
            <BookOpen className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-semibold text-txt-main">
            Interactive Notebook
          </h3>
          <p className="text-[11px] text-txt-secondary leading-relaxed">
            Deconstruct real UI mechanics with live state inspection and
            reactive controls.
          </p>
        </div>

        <div className="p-4 border border-line bg-card space-y-2">
          <div className="w-8 h-8 flex items-center justify-center border border-line bg-sidebar text-cyan-600 dark:text-cyan">
            <Code2 className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-semibold text-txt-main">
            Production Code
          </h3>
          <p className="text-[11px] text-txt-secondary leading-relaxed">
            Clean, modular, dependency-free React patterns designed to be copied
            into real apps.
          </p>
        </div>

        <div className="p-4 border border-line bg-card space-y-2">
          <div className="w-8 h-8 flex items-center justify-center border border-line bg-sidebar text-cyan-600 dark:text-cyan">
            <Layers className="w-4 h-4" />
          </div>
          <h3 className="text-xs font-semibold text-txt-main">
            Future Expansion
          </h3>
          <p className="text-[11px] text-txt-secondary leading-relaxed">
            Upcoming modules covering backend integration patterns, server
            state, and caching.
          </p>
        </div>
      </div>

      {/* 3. Accordion List */}
      <section className="space-y-3">
        {FAQ_DATA.map((faq, index) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`border transition-colors ${
                isOpen
                  ? "border-dark-line dark:border-cyan/50 bg-card"
                  : "border-line bg-sidebar/50 hover:border-dark-line/50"
              }`}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer gap-4"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan font-bold">
                    0{index + 1}.
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-txt-main">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-6 h-6 shrink-0 flex items-center justify-center border border-line transition-transform duration-200 ${
                    isOpen
                      ? "rotate-180 bg-sidebar text-cyan-600 dark:text-cyan"
                      : "text-txt-muted"
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 py-5 text-xs sm:text-sm text-txt-secondary leading-relaxed border-t border-line/60">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 4. Help & Suggestion Box */}
      <section className="p-6 border border-line bg-card flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-txt-main">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan" />
            <span>Still have questions?</span>
          </div>
          <p className="text-xs text-txt-secondary">
            Have a question or want to request a specific mechanic? Let us know
            on GitHub.
          </p>
        </div>

        <a
          href="https://github.com/tm-fuad05/LogicLab/issues/new"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 text-xs font-medium bg-txt-main text-main hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Ask on GitHub →
        </a>
      </section>
    </div>
  );
}
