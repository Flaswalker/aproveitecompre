import { r as reactExports, T as jsxRuntimeExports } from "./server-Bu87MRte.js";
import { A as AUTH_KEY, a as ADMIN_PASSWORD, C as CATEGORIES, g as getProducts, u as upsertProduct, d as deleteProduct } from "./router-D1_HIheo.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function AdminPage() {
  const [authed, setAuthed] = reactExports.useState(false);
  const [pwd, setPwd] = reactExports.useState("");
  const [err, setErr] = reactExports.useState("");
  reactExports.useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(AUTH_KEY) === "1") {
      setAuthed(true);
    }
  }, []);
  const submit = (e) => {
    e.preventDefault();
    if (pwd === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      setAuthed(true);
      setErr("");
    } else {
      setErr("Senha incorreta");
    }
  };
  if (!authed) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-gray-100 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-6 text-xl font-bold text-gray-900", children: "Acesso Restrito" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: pwd, onChange: (e) => setPwd(e.target.value), placeholder: "Senha", autoFocus: true, className: "w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none" }),
      err && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-red-600", children: err }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-4 w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-gray-800", children: "Entrar" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminPanel, { onLogout: () => {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthed(false);
  } });
}
const EMPTY = {
  id: "",
  badge: "NONE",
  imageUrl: "",
  name: "",
  rating: 4.5,
  sales: "",
  gainType: "GANHOS",
  gainPercent: 12,
  originalPrice: 0,
  promoPrice: 0,
  discountPercent: 0,
  affiliateLink: "",
  category: "Utilidades"
};
function AdminPanel({
  onLogout
}) {
  const [products, setProducts] = reactExports.useState([]);
  const [editing, setEditing] = reactExports.useState(EMPTY);
  const refresh = () => setProducts(getProducts());
  reactExports.useEffect(refresh, []);
  const save = (e) => {
    e.preventDefault();
    const p = {
      ...editing,
      id: editing.id || crypto.randomUUID(),
      rating: Number(editing.rating),
      gainPercent: Number(editing.gainPercent),
      originalPrice: Number(editing.originalPrice),
      promoPrice: Number(editing.promoPrice),
      discountPercent: Number(editing.discountPercent)
    };
    upsertProduct(p);
    setEditing(EMPTY);
    refresh();
  };
  const remove = (id) => {
    if (confirm("Excluir este produto?")) {
      deleteProduct(id);
      refresh();
    }
  };
  const input = "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none";
  const label = "block text-xs font-semibold text-gray-700 mb-1";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "Painel Administrador" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onLogout, className: "rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800", children: "Sair" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl bg-white p-6 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-lg font-bold", children: editing.id ? "Editar produto" : "Novo produto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: save, className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "Badge" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: input, value: editing.badge, onChange: (e) => setEditing({
              ...editing,
              badge: e.target.value
            }), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NONE", children: "Nenhum" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MAIS VENDIDO", children: "MAIS VENDIDO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "OFERTA IMPERDÍVEL", children: "OFERTA IMPERDÍVEL" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "URL da imagem" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: input, required: true, value: editing.imageUrl, onChange: (e) => setEditing({
              ...editing,
              imageUrl: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "Nome" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: input, required: true, value: editing.name, onChange: (e) => setEditing({
              ...editing,
              name: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "Nota (estrelas)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: input, type: "number", step: "0.1", min: "0", max: "5", required: true, value: editing.rating, onChange: (e) => setEditing({
                ...editing,
                rating: Number(e.target.value)
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "Quantidade vendas" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: input, required: true, placeholder: "+100mil vendidos", value: editing.sales, onChange: (e) => setEditing({
                ...editing,
                sales: e.target.value
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "Tipo de ganho" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: input, value: editing.gainType, onChange: (e) => setEditing({
                ...editing,
                gainType: e.target.value
              }), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "GANHOS", children: "GANHOS" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "GANHOS EXTRAS", children: "GANHOS EXTRAS" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "% Ganhos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: input, type: "number", required: true, value: editing.gainPercent, onChange: (e) => setEditing({
                ...editing,
                gainPercent: Number(e.target.value)
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "Preço original" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: input, type: "number", step: "0.01", required: true, value: editing.originalPrice, onChange: (e) => setEditing({
                ...editing,
                originalPrice: Number(e.target.value)
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "Preço promocional" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: input, type: "number", step: "0.01", required: true, value: editing.promoPrice, onChange: (e) => setEditing({
                ...editing,
                promoPrice: Number(e.target.value)
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "% Desconto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: input, type: "number", required: true, value: editing.discountPercent, onChange: (e) => setEditing({
                ...editing,
                discountPercent: Number(e.target.value)
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "Link de afiliado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: input, type: "url", required: true, value: editing.affiliateLink, onChange: (e) => setEditing({
              ...editing,
              affiliateLink: e.target.value
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: label, children: "Categoria" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: input, value: editing.category, onChange: (e) => setEditing({
              ...editing,
              category: e.target.value
            }), children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: c.label, children: c.label }, c.slug)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "flex-1 rounded-lg bg-[#00a650] py-2.5 text-sm font-bold text-white hover:bg-[#008a42]", children: editing.id ? "Salvar alterações" : "Adicionar produto" }),
            editing.id && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setEditing(EMPTY), className: "rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50", children: "Cancelar" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-2xl bg-white p-6 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mb-4 text-lg font-bold", children: [
          "Produtos cadastrados (",
          products.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-lg border border-gray-200 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.imageUrl, alt: p.name, className: "h-14 w-14 rounded-md object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-semibold", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500", children: [
                "R$ ",
                p.promoPrice.toFixed(2),
                " • ",
                p.discountPercent,
                "% OFF"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setEditing(p), className: "rounded-md bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800", children: "Editar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(p.id), className: "rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700", children: "Excluir" })
          ] }, p.id)),
          products.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "py-8 text-center text-sm text-gray-500", children: "Nenhum produto cadastrado." })
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminPage as component
};
