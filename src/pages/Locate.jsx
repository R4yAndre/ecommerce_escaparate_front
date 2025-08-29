export default function Locate() {
  return (
    <section className="locate-section">
      <h2>Ubícanos</h2>
      <p>
        Av. Ejemplo 123, Ciudad — Referencia: frente al parque central.
      </p>

      <div className="map-container">
        <iframe
          title="Mapa"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9659738935056!2d-77.02794608850569!3d-12.04586214183646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b3d73b82af%3A0x6ab97245ce3a66e6!2sGaleria%20el%20Congreso!5e0!3m2!1ses-419!2spe!4v1756330051834!5m2!1ses-419!2spe"
        />
      </div>
    </section>
  );
}