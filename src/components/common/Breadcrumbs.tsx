import { Link } from "react-router";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-xs  text-[#666666] mb-6">
      <Link to="/" className="hover:text-[#121212] transition-colors">
        docs
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center space-x-2">
          <span>/</span>
          {item.href ? (
            <Link
              to={item.href}
              className="hover:text-[#121212] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#121212] font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
