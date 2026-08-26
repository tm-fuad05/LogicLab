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
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="border-b border-[#e5e7eb] pb-8 space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-[#121212]">
          React & JS Logics
        </h1>
        <p className="text-[#666666] text-sm max-w-2xl leading-relaxed">
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
              <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-2">
                <Link
                  to={`/category/${cat.slug}`}
                  className="group flex items-center gap-2"
                >
                  <h2 className="text-xl font-bold text-[#121212] group-hover:underline">
                    {cat.title}
                  </h2>
                  <span className="text-xs  text-[#666666]">
                    ({categoryItems.length})
                  </span>
                </Link>
                <Link
                  to={`/category/${cat.slug}`}
                  className="text-xs  text-[#666666] hover:text-[#121212]"
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
