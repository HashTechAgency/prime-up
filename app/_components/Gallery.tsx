export const Gallery = () => {
  return (
    <section className="section" id="portfolio">
      <div className="wrap">
        <div className="section-title-row">
          <div className="line" />
          <h2>Prime Up Pride: Recent Masterpieces</h2>
          <div className="line" />
        </div>

        <div className="carousel-wrap">
          <div className="portfolio">
            <div
              className="tile big"
              style={{ backgroundImage: "url('/img/project-1.jpg')" }}
            />
            <div
              className="tile"
              style={{ backgroundImage: "url('/img/gallery-2.jpg')" }}
            />
            <div
              className="tile"
              style={{ backgroundImage: "url('/img/project-2.jpg')" }}
            />
            <div
              className="tile"
              style={{ backgroundImage: "url('/img/project-3.jpg')" }}
            />
            <div
              className="tile"
              style={{ backgroundImage: "url('/img/project-4.jpg')" }}
            />
          </div>
        </div>

        <div className="center-cta">
          <a href="#portfolio" className="btn-bracket-filled">
            EXPLORE THE PORTFOLIO
          </a>
        </div>
      </div>
    </section>
  );
};
