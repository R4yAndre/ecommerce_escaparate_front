export default function Home() {
  return (
    <section className="home">
      <div className="overlay"></div>
      <div className="content">
        <h1>
          Bienvenido a <span className="highlight">Tu Tienda</span>
        </h1>
        <p>Moda atemporal, calidad y elegancia para tu día a día.</p>
        <a href="/productos" className="btn">Ver Colección</a>
      </div>
    </section>
  );
}