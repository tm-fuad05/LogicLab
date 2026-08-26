import { useLoaderData, type Params } from "react-router";
import {
  CATEGORIES,
  LOGIC_ITEMS,
  type Category,
  type LogicItem,
} from "../data/logicItems";
import LogicCard from "../components/common/LogicCard";

export async function categoryLoader({
  params,
}: {
  params: Params<"categoryId">;
}) {
  const category = CATEGORIES.find((c) => c.slug === params.categoryId);
  if (!category) {
    throw new Response("Category Not Found", { status: 404 });
  }
  const items = LOGIC_ITEMS.filter((i) => i.categorySlug === params.categoryId);
  return { category, items };
}

export default function CategoryOverview() {
  const { category, items } = useLoaderData() as {
    category: Category;
    items: LogicItem[];
  };

  return (
    <div className="space-y-8">
      <div className="border-b border-[#e5e7eb] pb-6 space-y-2">
        <span className="text-xs  text-[#666666] uppercase tracking-wider">
          Category Overview
        </span>
        <h1 className="text-2xl font-bold text-[#121212]">{category.title}</h1>
        <p className="text-sm text-[#666666]">{category.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <LogicCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
