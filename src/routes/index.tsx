import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getProducts, type Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ofertas Imperdíveis — Vitrine de Produtos" },
      {
        name: "description",
        content:
          "Confira as melhores ofertas com descontos exclusivos. Produtos selecionados a preços imperdíveis.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const load = () => setProducts(getProducts());
    load();
    window.addEventListener("products-updated", load);
    return () => window.removeEventListener("products-updated", load);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
            🔥 Ofertas Imperdíveis
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Produtos selecionados com os melhores descontos
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {products.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            Nenhum produto disponível no momento.
          </div>
        )}
      </main>

      <footer className="mt-12 py-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Vitrine de Ofertas
      </footer>

      <a
        href="https://cristoteama.lovable.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105"
      >
        ✝️ Cristo Te Ama
      </a>
    </div>
  );
}
