import { r as reactExports, T as jsxRuntimeExports } from "./server-Bu87MRte.js";
import { g as getProducts } from "./router-D1_HIheo.js";
import { C as CategoryNav, P as ProductCard } from "./CategoryNav-DQl7DYgw.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Index() {
  const [products, setProducts] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const load = () => setProducts(getProducts());
    load();
    window.addEventListener("products-updated", load);
    return () => window.removeEventListener("products-updated", load);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-gray-900 md:text-3xl", children: "🔥 Ofertas Imperdíveis" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-600", children: "Produtos selecionados com os melhores descontos" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-7xl px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) }),
      products.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 text-center text-gray-500", children: "Nenhum produto disponível no momento." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-12 py-8 text-center text-xs text-gray-400", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Vitrine de Ofertas"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://cristoteama.lovable.app/", target: "_blank", rel: "noopener noreferrer", className: "fixed bottom-4 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105", children: "✝️ Cristo Te Ama" })
  ] });
}
export {
  Index as component
};
