export default function Home() {
  return (
    <section className="home">
      <div className="overlay"></div>
      <div className="content">
        <h1>
          Bienvenido a <span className="highlight">Galerias El Congreso 122-217</span>
        </h1>
        <p>Moda a tu estilo.</p>
        <a href="/productos" className="btn">Ver Productos</a>
      </div>
    </section>
  );
}