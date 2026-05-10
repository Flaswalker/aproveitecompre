import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getProducts, slugToLabel, type Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { CategoryNav } from "@/components/CategoryNav";

export const Route = createFileRoute("/$category")({
  beforeLoad: ({ params }) => {
    if (!slugToLabel(params.category)) throw notFound();
  },
  head: ({ params }) => {
    const label = slugToLabel(params.category) ?? "Categoria";
    return {
      meta: [
        { title: `${label} — Ofertas` },
        { name: "description", content: `Ofertas de ${label} selecionadas com os melhores descontos.` },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Categoria não encontrada</h1>
        <Link to="/" className="mt-4 inline-block text-blue-600 underline">Voltar ao início</Link>
      </div>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();
  const label = slugToLabel(category)!;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const load = () => setProducts(getProducts().filter((p) => p.category === label));
    load();
    window.addEventListener("products-updated", load);
    return () => window.removeEventListener("products-updated", load);
  }, [label]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-900">← Voltar para todas as ofertas</Link>
          <h1 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">{label}</h1>
          <p className="mt-1 text-sm text-gray-600">{products.length} {products.length === 1 ? "produto" : "produtos"}</p>
        </div>
      </header>

      <CategoryNav />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {products.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            Nenhum produto nesta categoria ainda.
          </div>
        )}
      </main>

      <footer className="mt-12 py-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Vitrine de Ofertas
      </footer>
    </div>
  );
}
