import { MapEmbed } from "./MapEmbed";

export const ServiceAreas = () => {
  return (
    <section className="section" style={{ paddingTop: 32 }} id="contact">
      <div className="wrap">
        <div className="section-title-row">
          <div className="line" />
          <h2>Prime Up Stories: WA Home Transformations</h2>
          <div className="line" />
        </div>

        <h3 className="map-title">Service Area</h3>

        <div className="map-block">
          <MapEmbed />
          <a
            className="map-pin"
            href="https://www.google.com/maps/place/Seattle,+WA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="map-pin-dot" />
            Seattle, WA — Greater Puget Sound
          </a>
        </div>

        <div
          className="center-cta"
          style={{ justifyContent: "flex-end", marginTop: 28 }}
        >
          <a href="#portfolio" className="btn-bracket-filled">
            EXPLORE THE PORTFOLIO
          </a>
        </div>
      </div>
    </section>
  );
};
