import { useState } from "react";

interface EmptyCodeEditorProps {
  logicId: string;
  title: string;
  codeSnippetJS?: string;
  codeSnippetTS?: string;
}

export default function EmptyCodeEditor({
  title,
  codeSnippetJS = "",
  codeSnippetTS = "",
}: EmptyCodeEditorProps) {
  const [activeTab, setActiveTab] = useState<"js" | "ts">("js");

  const currentSnippet = activeTab === "js" ? codeSnippetJS : codeSnippetTS;

  return (
    <section className="mt-10 border border-line bg-card rounded-none font-poppins">
      <div className="flex items-center justify-between px-5 py-3 border-b border-line bg-sidebar flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-dark-line dark:bg-cyan"></span>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-txt-main">
            Logic : {title}
          </h3>
        </div>
        <div className="flex border border-line overflow-hidden text-xs">
          <button
            onClick={() => setActiveTab("js")}
            className={`px-3 py-1 font-semibold transition-colors ${
              activeTab === "js"
                ? "bg-dark-line text-white dark:bg-cyan dark:text-black"
                : "bg-transparent text-txt-secondary hover:text-txt-main"
            }`}
          >
            JavaScript
          </button>
          <button
            onClick={() => setActiveTab("ts")}
            className={`px-3 py-1 font-semibold transition-colors border-l border-line ${
              activeTab === "ts"
                ? "bg-dark-line text-white dark:bg-cyan dark:text-black"
                : "bg-transparent text-txt-secondary hover:text-txt-main"
            }`}
          >
            TypeScript
          </button>
        </div>
      </div>
      <div className="bg-code text-sm min-h-[220px] p-5">
        <pre className="text-gray-700 dark:text-txt-secondary whitespace-pre-wrap outline-none font-mono">
          <code>{currentSnippet}</code>
        </pre>
      </div>
    </section>
  );
}
