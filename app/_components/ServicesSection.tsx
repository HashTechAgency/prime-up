const services = [
  {
    img: "/img/gallery-1.jpg",
    title: ["Custom", "Decks"],
    text: "Outdoor living spaces designed for the Pacific Northwest.",
  },
  {
    img: "/img/gallery-2.jpg",
    title: ["Premium", "Siding"],
    text: "High-performance protection with James Hardie & LP SmartSide.",
  },
  {
    img: "/img/exterior-remodeling.jpg",
    title: ["Exterior", "Remodeling"],
    text: "Structural upgrades and high-end exterior transformations.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-title-row">
          <div className="line" />
          <h2>The Core Services</h2>
          <div className="line" />
        </div>

        <div className="services-carousel">
          <button className="services-arrow left" aria-label="Previous">
            ‹
          </button>

          <div className="services">
            {services.map((s, i) => (
              <article
                key={i}
                className="service-card"
                style={{ backgroundImage: `url('${s.img}')` }}
              >
                <div className="body">
                  <h3>
                    {s.title[0]}
                    <br />
                    {s.title[1]}
                  </h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>

          <button className="services-arrow right" aria-label="Next">
            ›
          </button>
        </div>

        <div className="trust-line">
          Licensed <span>•</span> Bonded <span>•</span> Insured
        </div>
      </div>
    </section>
  );
};
