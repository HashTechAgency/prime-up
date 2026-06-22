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
          <div className="car-arrow left">‹</div>
          <div className="car-arrow right">›</div>

          <div className="portfolio">
            <div
              className="tile big"
              style={{ backgroundImage: "url('/img/gallery-3.jpg')" }}
            >
              <span className="tag tl">Seattle, WA</span>
              <span className="tag bl">Seattle, WA</span>
            </div>
            <div
              className="tile"
              style={{ backgroundImage: "url('/img/gallery-2.jpg')" }}
            >
              <span className="tag">Seattle, WA</span>
            </div>
            <div
              className="tile"
              style={{ backgroundImage: "url('/img/gallery-4.jpg')" }}
            >
              <span className="tag">Bellevue, WA</span>
            </div>
            <div
              className="tile"
              style={{ backgroundImage: "url('/img/gallery-5.jpg')" }}
            >
              <span className="tag">Tacoma, WA</span>
            </div>
            <div
              className="tile"
              style={{ backgroundImage: "url('/img/gallery-1.jpg')" }}
            >
              <span className="tag">Bellevue, WA</span>
            </div>
          </div>
        </div>

        <div className="center-cta">
          <a href="#portfolio" className="btn-bracket-filled">
            [ EXPLORE THE PORTFOLIO ]
          </a>
        </div>
      </div>
    </section>
  );
};
