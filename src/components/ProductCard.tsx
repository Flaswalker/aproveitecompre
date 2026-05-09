import type { Product } from "@/lib/products";
import { Star } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const formatPrice = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
      {product.badge !== "NONE" && (
        <div
          className={`absolute left-3 top-3 z-10 rounded-md px-3 py-1 text-xs font-bold tracking-wide ${
            product.badge === "MAIS VENDIDO"
              ? "bg-black text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {product.badge}
        </div>
      )}

      <div className="aspect-square w-full overflow-hidden bg-gray-50">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold leading-snug text-gray-900 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-0.5 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-semibold text-gray-800">
              {product.rating.toFixed(1)}
            </span>
          </div>
          <span className="text-gray-500">| {product.sales}</span>
        </div>

        <div className="inline-flex w-fit items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-900">
          {product.gainType} {product.gainPercent}%
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-sm text-gray-400 line-through">
            {formatPrice(product.originalPrice)}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#00a650]">
              {formatPrice(product.promoPrice)}
            </span>
            <span className="text-sm font-bold text-[#007a3d]">
              {product.discountPercent}% OFF
            </span>
          </div>
        </div>

        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block w-full rounded-xl bg-[#00a650] py-3.5 text-center text-base font-bold text-white transition-colors hover:bg-[#008a42]"
        >
          COMPRE
        </a>
      </div>
    </div>
  );
}
