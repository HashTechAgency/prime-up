const services = [
  {
    img: "/img/custom-decks.jpg",
    title: ["Custom", "Decks"],
    text: "Outdoor living spaces designed for the Pacific Northwest.",
  },
  {
    img: "/img/premium-siding.jpg",
    title: ["Premium", "Siding"],
    text: "High-performance protection with James Hardie & LP SmartSide.",
  },
  {
    img: "/img/remodelling.jpg",
    title: ["Remodelling"],
    text: "Kitchen, bathroom and whole-home remodelling.",
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
        </div>

        <div className="trust-line">
          Licensed <span>•</span> Bonded <span>•</span> Insured
        </div>
      </div>
    </section>
  );
};
