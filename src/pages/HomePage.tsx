import { useLoaderData, Link } from "react-router";
import { CATEGORIES, LOGIC_ITEMS } from "../data/logicItems";
import LogicCard from "../components/common/LogicCard";

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
      {/* Hero Section */}
      <div className="border-b border-line pb-8 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-txt-main">
          React & JS Logics
        </h1>
        <p className="text-txt-secondary text-sm max-w-2xl leading-relaxed">
          A visual playground showcasing 38 core Web & React UI interaction
          mechanics. Scaffolds are rendered as stateless UI layouts with an
          empty logic code block for developer hooks.
        </p>
      </div>

      {/* Categories Grid */}
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
                    <span className="text-txt-secondary text-md md:text-lg">
                      ({categoryItems.length})
                    </span>
                  </h2>
                </Link>
                <Link
                  to={`/category/${cat.slug}`}
                  className="text-xs text-txt-secondary hover:text-txt-main dark:hover:text-cyan"
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
