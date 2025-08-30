import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="overlay"></div>
      <div className="content">
        <h1>
          Bienvenido a <span className="highlight">Galerias El Congreso 122-217</span>
        </h1>
        <p>Moda a tu estilo.</p>
        <Link to="/productos" className="btn">Ver Productos</Link>
      </div>
    </section>
  );
}