import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getColor, getMaterial } from "../services/api.js";
import React from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Traer producto
        const productosRes = await getProductos();
        const prod = productosRes.data.find(p => Number(p.id) === Number(id));
        if (!prod) {
          setLoading(false);
          return;
        }
        setProducto(prod);

        // Traer color y material
        const [colorRes, materialRes] = await Promise.all([
          getColor(prod.id_color),
          getMaterial(prod.id_material)
        ]);

        setColor(colorRes.data.nombre);
        setMaterial(materialRes.data.nombre);

      } catch (error) {
        console.error("Error al obtener producto o referencias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p className="text-gray-500">Cargando...</p>;
  if (!producto) return <p className="text-gray-500">Producto no encontrado.</p>;

  return (
    <section className="product-detail">
      <div className="product-detail-container">
        <img className="product-detail-img" src={producto.url_imagen} alt={producto.nombre} />
        <div className="detail-info">
          <h2>{producto.nombre}</h2>
          <p className="detail-price">S/ {producto.precio}</p>
          <p className="detail-description">
            {producto.descripcion.split(/(?=Tallas:|Colores:)/).map((line, index) => {
              const regex = /(Tallas:[^.,]*|Colores:[^.,]*)/gi;
              const parts = [];
              let lastIndex = 0;

              line.replace(regex, (match, _, offset) => {
                if (offset > lastIndex) {
                  parts.push(<span key={parts.length}>{line.slice(lastIndex, offset)}</span>);
                }

                // br + recuadro (sin agregar puntos extra)
                parts.push(
                  <span key={parts.length}>
                    <br />
                    <span className="detail-box">{match.trim()}</span>
                  </span>
                );

                lastIndex = offset + match.length;
              });

              if (lastIndex < line.length) {
                parts.push(<span key={parts.length}>{line.slice(lastIndex)}</span>);
              }

              return <React.Fragment key={index}>{parts}</React.Fragment>;
            })}
          </p>
          <ul className="detail-meta">
            <li><strong>Color:</strong> {color}</li>
            <li><strong>Material:</strong> {material}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}