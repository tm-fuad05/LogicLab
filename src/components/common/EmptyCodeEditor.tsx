import { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import { CODE_SNIPPETS } from "../../data/codeSnippet";

SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);

// Authentic Tokyo Night Theme definition for Prism Syntax Highlighter
const tokyoNightTheme: Record<string, React.CSSProperties> = {
  'code[class*="language-"]': {
    color: "#c0caf5",
    fontFamily: "'Geist Mono', monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.6",
    tabSize: 2,
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#c0caf5",
    fontFamily: "'Geist Mono', monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.6",
    tabSize: 2,
    hyphens: "none",
    padding: "1.25rem",
    margin: 0,
    overflow: "auto",
    background: "transparent",
  },
  comment: { color: "#565f89", fontStyle: "italic" },
  prolog: { color: "#565f89" },
  doctype: { color: "#565f89" },
  cdata: { color: "#565f89" },
  punctuation: { color: "#89ddff" },
  namespace: { opacity: 0.7 },
  tag: { color: "#f7768e" },
  "tag-id": { color: "#f7768e" },
  "attr-name": { color: "#7dcfff" },
  "attr-value": { color: "#9ece6a" },
  string: { color: "#9ece6a" },
  "template-string": { color: "#9ece6a" },
  "template-punctuation": { color: "#89ddff" },
  boolean: { color: "#ff9e64" },
  number: { color: "#ff9e64" },
  keyword: { color: "#bb9af7", fontWeight: "600" },
  function: { color: "#7aa2f7" },
  "class-name": { color: "#0db9d7" },
  regex: { color: "#b4f9f8" },
  important: { color: "#bb9af7" },
  variable: { color: "#c0caf5" },
  operator: { color: "#89ddff" },
  builtin: { color: "#2ac3de" },
  char: { color: "#9ece6a" },
  inserted: { color: "#9ece6a" },
  deleted: { color: "#f7768e" },
  property: { color: "#7dcfff" },
};

interface EmptyCodeEditorProps {
  logicId: string;
  title: string;
}

export default function EmptyCodeEditor({
  logicId,
  title,
}: EmptyCodeEditorProps) {
  const [activeTab, setActiveTab] = useState<"js" | "ts">("js");
  const [isExpanded, setIsExpanded] = useState(false);

  const snippetObj = CODE_SNIPPETS[logicId];
  const currentSnippet = snippetObj
    ? activeTab === "js"
      ? snippetObj.js
      : snippetObj.ts
    : `// Code snippet for ${title} will be added soon.`;

  return (
    <section className="mt-10 border border-zinc-800 bg-zinc-950 rounded-none font-poppins text-zinc-100 relative">
      <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-zinc-900 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-cyan"></span>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Logic : {title}
          </h3>
        </div>
        <div className="flex border border-zinc-700 overflow-hidden text-xs">
          <button
            onClick={() => setActiveTab("js")}
            className={`px-3 py-1 font-semibold transition-colors ${
              activeTab === "js"
                ? "bg-cyan text-black"
                : "bg-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            JavaScript
          </button>
          <button
            onClick={() => setActiveTab("ts")}
            className={`px-3 py-1 font-semibold transition-colors border-l border-zinc-700 ${
              activeTab === "ts"
                ? "bg-cyan text-black"
                : "bg-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            TypeScript
          </button>
        </div>
      </div>

      {/* Code Container with Collapsible Height */}
      <div
        className={`bg-zinc-950 text-sm transition-all duration-300 relative ${
          isExpanded ? "max-h-none" : "max-h-[220px] overflow-hidden"
        }`}
      >
        <div
          className={
            isExpanded
              ? "overflow-x-auto w-full code-editor-scroll"
              : "overflow-hidden"
          }
        >
          <SyntaxHighlighter
            language={activeTab === "js" ? "jsx" : "tsx"}
            style={tokyoNightTheme}
            customStyle={{
              margin: 0,
              padding: "1.25rem",
              paddingBottom: isExpanded ? "1rem" : "3.5rem",
              background: "transparent",
              fontSize: "0.875rem",
              fontFamily: "'Geist Mono', monospace",
              overflowX: "visible",
              overflowY: "hidden",
            }}
            codeTagProps={{
              style: {
                whiteSpace: "pre",
                wordBreak: "normal",
                wordWrap: "normal",
                display: "inline-block",
                minWidth: "100%",
              },
            }}
          >
            {currentSnippet}
          </SyntaxHighlighter>
        </div>

        {/* Overlay Fade when Collapsed */}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Collapse / Expand Control Bar (Always placed below the scrollbar) */}
      <div className="flex items-center justify-center p-3 bg-zinc-900/90 border-t border-zinc-800">
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-medium cursor-pointer transition-colors flex items-center gap-1.5 shadow-sm"
        >
          {isExpanded ? (
            <>
              <span>Collapse Code</span>
              <span>▲</span>
            </>
          ) : (
            <>
              <span>Expand Code</span>
              <span>▼</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
