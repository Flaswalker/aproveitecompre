import { Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/products";

export function CategoryNav() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            activeProps={{ className: "bg-gray-900 text-white hover:bg-gray-900" }}
          >
            Todas
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/$category"
              params={{ category: c.slug }}
              className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
              activeProps={{ className: "bg-gray-900 text-white hover:bg-gray-900" }}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
