const MEDALLION_1 = `
<svg viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="1">
  <circle cx="48" cy="48" r="44" fill="rgba(212,184,120,0.18)"></circle>
  <circle cx="48" cy="48" r="38"></circle>
  <circle cx="48" cy="48" r="34" opacity="0.4"></circle>
  <path d="M48 16 L52 26 L62 27 L54 34 L56 44 L48 39 L40 44 L42 34 L34 27 L44 26 Z" fill="currentColor" opacity="0.4"></path>
  <text x="48" y="54" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="7" font-weight="700" fill="#d4b878" letter-spacing="1">PRIME UP</text>
  <text x="48" y="62" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="6" font-weight="600" fill="#d4b878">MASTER</text>
  <text x="48" y="69" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="6" font-weight="600" fill="#d4b878">CRAFTSMEN</text>
  <path d="M48 76 l1 3 3 0.3 -2.3 2 0.6 3 -2.3-1.5 -2.3 1.5 0.6-3 -2.3-2 3-0.3z" fill="currentColor"></path>
</svg>`;

const MEDALLION_2 = `
<svg viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="1">
  <circle cx="48" cy="48" r="44" fill="rgba(212,184,120,0.18)"></circle>
  <circle cx="48" cy="48" r="38"></circle>
  <circle cx="48" cy="48" r="34" opacity="0.4"></circle>
  <path d="M48 16 L52 26 L62 27 L54 34 L56 44 L48 39 L40 44 L42 34 L34 27 L44 26 Z" fill="currentColor" opacity="0.4"></path>
  <text x="48" y="52" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="7" font-weight="700" fill="#d4b878">PRIME UP</text>
  <text x="48" y="60" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="6" font-weight="600" fill="#d4b878">MASTER</text>
  <text x="48" y="67" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="6" font-weight="600" fill="#d4b878">CRAFTSMEN</text>
  <text x="48" y="74" text-anchor="middle" font-family="Inter, sans-serif" font-size="4" font-weight="500" fill="#d4b878">· WASHINGTON ·</text>
  <text x="48" y="80" text-anchor="middle" font-family="Inter, sans-serif" font-size="4" font-weight="500" fill="#d4b878">STATE</text>
</svg>`;

const reviews = [
  {
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    name: "John & Debbie P., Seattle, WA",
    text: '"The team at Prime Up put in a beautiful new Ipe deck for us. Total change from our old, rotten one. We\'re very pleased."',
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    name: "Sarah J., Spokane, WA",
    text: '"Just had new James Hardie siding installed. It looks perfect and was done so fast. Prime Up did a great job."',
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=200&q=80",
    name: "The Davis's, Gig Harbor, WA",
    text: '"Our full room addition and interior remodel exceeded expectations. Transparent pricing and good people to work with. Highly recommend."',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-title-row">
          <div className="line" />
          <h2>Prime Up Stories: WA Home Transformations</h2>
          <div className="line" />
        </div>

        <div className="carousel-wrap">
          <div className="car-arrow left">‹</div>
          <div className="car-arrow right">›</div>

          <div className="testi-grid">
            <div className="testi-hero">
              <div
                className="medallion m1"
                dangerouslySetInnerHTML={{ __html: MEDALLION_1 }}
              />
              <div
                className="medallion m2"
                dangerouslySetInnerHTML={{ __html: MEDALLION_2 }}
              />
              <div className="testi-caption">
                The Thompson Family Residence, Cle Elum, WA. — August 2025.
              </div>
            </div>

            <div className="testi-list">
              {reviews.map((r, i) => (
                <div className="testi-card" key={i}>
                  <div
                    className="avatar"
                    style={{ backgroundImage: `url('${r.avatar}')` }}
                  />
                  <div>
                    <h5>{r.name}</h5>
                    <p>{r.text}</p>
                    <div className="stars">★ ★ ★ ★ ★</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="center-cta"
          style={{ justifyContent: "flex-end", marginTop: 28 }}
        >
          <a href="#portfolio" className="btn-bracket-filled">
            [ EXPLORE THE PORTFOLIO ]
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
