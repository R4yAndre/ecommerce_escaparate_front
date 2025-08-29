import { Link } from "react-router-dom";

export default function ProductCard({ producto }) {
  return (
    <Link to={`/producto/${producto.id}`}>
      <article className="product-card">
        <div className="product-card-img-container">
          <img src={producto.url_imagen} alt={producto.nombre} className="product-card-img" />
        </div>
        <h3 className="product-card-title">{producto.nombre}</h3>
        <p className="product-card-price">S/ {producto.precio}</p>
      </article>
    </Link>
  );
}