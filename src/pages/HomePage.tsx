import { useLoaderData, Link } from "react-router";
import { CATEGORIES, LOGIC_ITEMS } from "../data/logicItems";
import LogicCard from "../components/common/LogicCard";
import { Sparkles, Layers, ArrowLeft } from "lucide-react";

export async function homeLoader() {
  return { categories: CATEGORIES, items: LOGIC_ITEMS };
}

export default function HomePage() {
  const { categories, items } = useLoaderData() as {
    categories: typeof CATEGORIES;
    items: typeof LOGIC_ITEMS;
  };

  return (
    <div className="space-y-10 font-poppins">
      {/* Top Banner / Welcome Bar inside the Main Shell */}
      <div className="border border-line bg-card p-6 sm:p-8 space-y-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-txt-secondary">
                LogicLab Playground
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-txt-main">
              React & JS Logic Scaffolds
            </h1>
          </div>

          <Link
            to="/"
            className="text-xs text-txt-secondary hover:text-txt-main flex items-center gap-1 font-mono self-start sm:self-auto border border-line px-3 py-1.5 bg-sidebar hover:border-txt-main transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Landing Banner
          </Link>
        </div>

        <p className="text-txt-secondary text-sm max-w-3xl leading-relaxed">
          Welcome to the main interaction playground. Choose a category from the sidebar or grid below to inspect stateless UI scaffolds and empty logic notebook blocks.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-txt-secondary pt-2">
          <span className="px-2.5 py-1 bg-sidebar border border-line flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-txt-main" /> {categories.length} Categories
          </span>
          <span className="px-2.5 py-1 bg-sidebar border border-line flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan" /> {items.length} Interactive Mechanics
          </span>
        </div>
      </div>

      {/* Categories & Logic Items Grid */}
      <div className="space-y-12">
        {categories.map((cat) => {
          const categoryItems = items.filter(
            (item) => item.categorySlug === cat.slug,
          );
          return (
            <div key={cat.slug} className="space-y-4">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 justify-between border-b border-line pb-2">
                <Link
                  to={`/category/${cat.slug}`}
                  className="group flex items-center gap-2"
                >
                  <h2 className="text-lg md:text-xl font-semibold text-txt-main group-hover:underline">
                    {cat.title}{" "}
                    <span className="text-txt-secondary text-md md:text-lg font-normal">
                      ({categoryItems.length})
                    </span>
                  </h2>
                </Link>
                <Link
                  to={`/category/${cat.slug}`}
                  className="text-xs text-txt-secondary hover:text-txt-main dark:hover:text-cyan font-mono"
                >
                  View Category →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryItems.map((item) => (
                  <LogicCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
