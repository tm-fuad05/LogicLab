import { Link } from "react-router";

export interface LogicCardProps {
  item: {
    id: string;
    title: string;
    category: string;
    description: string;
  };
}

export default function LogicCard({ item }: LogicCardProps) {
  return (
    <Link
      to={`/playground/${item.id}`}
      className="block p-6 bg-white border border-[#e5e7eb] hover:border-[#222222] transition-colors rounded-none group"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs  tracking-wider text-[#666666] uppercase">
          {item.category}
        </span>
        <span className="text-xs  text-[#222222] group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
      <h3 className="text-base font-semibold text-[#121212] mb-1">
        {item.title}
      </h3>
      <p className="text-sm text-[#666666] line-clamp-2">{item.description}</p>
    </Link>
  );
}
