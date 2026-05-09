import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ADMIN_PASSWORD,
  AUTH_KEY,
  deleteProduct,
  getProducts,
  upsertProduct,
  type BadgeType,
  type GainType,
  type Product,
} from "@/lib/products";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel Admin" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(AUTH_KEY) === "1") {
      setAuthed(true);
    }
  }, []);

  const submit = (e: FormEvent) => {
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
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={submit}
          className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl"
        >
          <h1 className="mb-6 text-xl font-bold text-gray-900">Acesso Restrito</h1>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Senha"
            autoFocus
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-gray-900 focus:outline-none"
          />
          {err && <p className="mt-2 text-sm text-red-600">{err}</p>}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return <AdminPanel onLogout={() => { sessionStorage.removeItem(AUTH_KEY); setAuthed(false); }} />;
}

const EMPTY: Product = {
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
};

function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product>(EMPTY);

  const refresh = () => setProducts(getProducts());
  useEffect(refresh, []);

  const save = (e: FormEvent) => {
    e.preventDefault();
    const p: Product = {
      ...editing,
      id: editing.id || crypto.randomUUID(),
      rating: Number(editing.rating),
      gainPercent: Number(editing.gainPercent),
      originalPrice: Number(editing.originalPrice),
      promoPrice: Number(editing.promoPrice),
      discountPercent: Number(editing.discountPercent),
    };
    upsertProduct(p);
    setEditing(EMPTY);
    refresh();
  };

  const remove = (id: string) => {
    if (confirm("Excluir este produto?")) {
      deleteProduct(id);
      refresh();
    }
  };

  const input = "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none";
  const label = "block text-xs font-semibold text-gray-700 mb-1";

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold">Painel Administrador</h1>
          <button
            onClick={onLogout}
            className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Sair
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-8 lg:grid-cols-[1fr_1.2fr]">
        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold">
            {editing.id ? "Editar produto" : "Novo produto"}
          </h2>
          <form onSubmit={save} className="space-y-3">
            <div>
              <label className={label}>Badge</label>
              <select
                className={input}
                value={editing.badge}
                onChange={(e) => setEditing({ ...editing, badge: e.target.value as BadgeType })}
              >
                <option value="NONE">Nenhum</option>
                <option value="MAIS VENDIDO">MAIS VENDIDO</option>
                <option value="OFERTA IMPERDÍVEL">OFERTA IMPERDÍVEL</option>
              </select>
            </div>
            <div>
              <label className={label}>URL da imagem</label>
              <input className={input} required value={editing.imageUrl}
                onChange={(e) => setEditing({ ...editing, imageUrl: e.target.value })} />
            </div>
            <div>
              <label className={label}>Nome</label>
              <input className={input} required value={editing.name}
                onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={label}>Nota (estrelas)</label>
                <input className={input} type="number" step="0.1" min="0" max="5" required
                  value={editing.rating}
                  onChange={(e) => setEditing({ ...editing, rating: Number(e.target.value) })} />
              </div>
              <div>
                <label className={label}>Quantidade vendas</label>
                <input className={input} required placeholder="+100mil vendidos" value={editing.sales}
                  onChange={(e) => setEditing({ ...editing, sales: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={label}>Tipo de ganho</label>
                <select className={input} value={editing.gainType}
                  onChange={(e) => setEditing({ ...editing, gainType: e.target.value as GainType })}>
                  <option value="GANHOS">GANHOS</option>
                  <option value="GANHOS EXTRAS">GANHOS EXTRAS</option>
                </select>
              </div>
              <div>
                <label className={label}>% Ganhos</label>
                <input className={input} type="number" required value={editing.gainPercent}
                  onChange={(e) => setEditing({ ...editing, gainPercent: Number(e.target.value) })} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className={label}>Preço original</label>
                <input className={input} type="number" step="0.01" required value={editing.originalPrice}
                  onChange={(e) => setEditing({ ...editing, originalPrice: Number(e.target.value) })} />
              </div>
              <div>
                <label className={label}>Preço promocional</label>
                <input className={input} type="number" step="0.01" required value={editing.promoPrice}
                  onChange={(e) => setEditing({ ...editing, promoPrice: Number(e.target.value) })} />
              </div>
              <div>
                <label className={label}>% Desconto</label>
                <input className={input} type="number" required value={editing.discountPercent}
                  onChange={(e) => setEditing({ ...editing, discountPercent: Number(e.target.value) })} />
              </div>
            </div>
            <div>
              <label className={label}>Link de afiliado</label>
              <input className={input} type="url" required value={editing.affiliateLink}
                onChange={(e) => setEditing({ ...editing, affiliateLink: e.target.value })} />
            </div>
            <div className="flex gap-2 pt-2">
              <button type="submit" className="flex-1 rounded-lg bg-[#00a650] py-2.5 text-sm font-bold text-white hover:bg-[#008a42]">
                {editing.id ? "Salvar alterações" : "Adicionar produto"}
              </button>
              {editing.id && (
                <button type="button" onClick={() => setEditing(EMPTY)}
                  className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50">
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold">Produtos cadastrados ({products.length})</h2>
          <div className="space-y-3">
            {products.map((p) => (
              <div key={p.id} className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                <img src={p.imageUrl} alt={p.name} className="h-14 w-14 rounded-md object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-semibold">{p.name}</p>
                  <p className="text-xs text-gray-500">
                    R$ {p.promoPrice.toFixed(2)} • {p.discountPercent}% OFF
                  </p>
                </div>
                <button onClick={() => setEditing(p)}
                  className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800">
                  Editar
                </button>
                <button onClick={() => remove(p.id)}
                  className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700">
                  Excluir
                </button>
              </div>
            ))}
            {products.length === 0 && (
              <p className="py-8 text-center text-sm text-gray-500">Nenhum produto cadastrado.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
