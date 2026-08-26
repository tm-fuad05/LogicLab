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
      className="block p-6 bg-card border border-line hover:border-dark-line dark:hover:border-cyan transition-colors rounded-none group font-poppins"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs tracking-wider text-txt-secondary uppercase">
          {item.category}
        </span>
        <span className="text-xs text-txt-main dark:text-cyan group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
      <h3 className="text-base font-semibold text-txt-main mb-1">
        {item.title}
      </h3>
      <p className="text-sm text-txt-secondary line-clamp-2">{item.description}</p>
    </Link>
  );
}
