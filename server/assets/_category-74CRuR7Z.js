import { r as reactExports, T as jsxRuntimeExports } from "./server-Bu87MRte.js";
import { R as Route, s as slugToLabel, L as Link, g as getProducts } from "./router-D1_HIheo.js";
import { C as CategoryNav, P as ProductCard } from "./CategoryNav-DQl7DYgw.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function CategoryPage() {
  const {
    category
  } = Route.useParams();
  const label = slugToLabel(category);
  const [products, setProducts] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const load = () => setProducts(getProducts().filter((p) => p.category === label));
    load();
    window.addEventListener("products-updated", load);
    return () => window.removeEventListener("products-updated", load);
  }, [label]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm text-gray-600 hover:text-gray-900", children: "← Voltar para todas as ofertas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-2xl font-bold text-gray-900 md:text-3xl", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-gray-600", children: [
        products.length,
        " ",
        products.length === 1 ? "produto" : "produtos"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-7xl px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) }),
      products.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center text-gray-500", children: "Nenhum produto nesta categoria ainda." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-12 py-8 text-center text-xs text-gray-400", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Vitrine de Ofertas"
    ] })
  ] });
}
export {
  CategoryPage as component
};
