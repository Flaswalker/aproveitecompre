import { r as reactExports, T as jsxRuntimeExports } from "./server-Bu87MRte.js";
import { L as Link, C as CATEGORIES } from "./router-D1_HIheo.js";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function ProductCard({ product }) {
  const formatPrice = (n) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]", children: [
    product.badge !== "NONE" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `absolute left-3 top-3 z-10 rounded-md px-3 py-1 text-xs font-bold tracking-wide ${product.badge === "MAIS VENDIDO" ? "bg-black text-white" : "bg-red-600 text-white"}`,
        children: product.badge
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-full overflow-hidden bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: product.imageUrl,
        alt: product.name,
        className: "h-full w-full object-cover",
        loading: "lazy"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-3 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold leading-snug text-gray-900 line-clamp-2", children: product.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 text-yellow-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-gray-800", children: product.rating.toFixed(1) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-500", children: [
          "| ",
          product.sales
        ] })
      ] }),
      product.gainPercent > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex w-fit items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-blue-900", children: [
        product.gainType,
        " ",
        product.gainPercent,
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-400 line-through", children: formatPrice(product.originalPrice) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-[#00a650]", children: formatPrice(product.promoPrice) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-[#007a3d]", children: [
            product.discountPercent,
            "% OFF"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: product.affiliateLink,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-2 block w-full rounded-xl bg-[#00a650] py-3.5 text-center text-base font-bold text-white transition-colors hover:bg-[#008a42]",
          children: "COMPRE"
        }
      )
    ] })
  ] });
}
function CategoryNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "border-b border-gray-200 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 overflow-x-auto py-2 scrollbar-hide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        activeOptions: { exact: true },
        className: "whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100",
        activeProps: { className: "bg-gray-900 text-white hover:bg-gray-900" },
        children: "Todas"
      }
    ),
    CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/$category",
        params: { category: c.slug },
        className: "whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100",
        activeProps: { className: "bg-gray-900 text-white hover:bg-gray-900" },
        children: c.label
      },
      c.slug
    ))
  ] }) }) });
}
export {
  CategoryNav as C,
  ProductCard as P
};
