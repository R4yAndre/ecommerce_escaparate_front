import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProductos } from "../services/api.js";

export default function Products() {
  const [productos, setProductos] = useState([]);
  const [q, setQ] = useState("");
  const [filtroGenero, setFiltroGenero] = useState(""); 
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false); // estado para abrir/cerrar dropdown

  useEffect(() => {
    getProductos()
      .then(res => {
        setProductos(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al obtener productos:", err);
        setLoading(false);
      });
  }, []);

  const filtered = productos.filter(p => {
    const busquedaTexto = (p.nombre + p.descripcion).toLowerCase().includes(q.toLowerCase());
    const filtroGeneroCheck = filtroGenero ? p.id_categoria === Number(filtroGenero) : true;
    return busquedaTexto && filtroGeneroCheck;
  });

  if (loading) return <p className="loading-text">Cargando productos...</p>;

  return (
    <section className="products-section">
      <div className="products-header">
        <h2>Productos</h2>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
          <input
            placeholder="Buscar…"
            value={q}
            onChange={e => setQ(e.target.value)}
            className="search-input"
          />

          {/* Botón desplegable de género */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                padding: "0.6rem 1rem",
                borderRadius: "0.5rem",
                border: "1px solid #666",
                background: "#fff",
                color: "#111",
                cursor: "pointer",
                minWidth: "120px",
                fontWeight: "500",
              }}
            >
              {filtroGenero === "1" ? "Hombre" : filtroGenero === "2" ? "Mujer" : "Género"}
            </button>

            {dropdownOpen && (
              <ul
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "#fff",
                  color: "#111",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  border: "1px solid #666",
                  borderRadius: "0.5rem",
                  width: "100%",
                  zIndex: 10,
                }}
              >
                <li
                  style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
                  onClick={() => { setFiltroGenero(""); setDropdownOpen(false); }}
                >
                  Todos los géneros
                </li>
                <li
                  style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
                  onClick={() => { setFiltroGenero("1"); setDropdownOpen(false); }}
                >
                  Hombre
                </li>
                <li
                  style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
                  onClick={() => { setFiltroGenero("2"); setDropdownOpen(false); }}
                >
                  Mujer
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="products-grid">
        {filtered.map(p => <ProductCard key={p.id} producto={p} />)}
      </div>

      {filtered.length === 0 && (
        <p className="no-results">No encontramos resultados.</p>
      )}
    </section>
  );
}