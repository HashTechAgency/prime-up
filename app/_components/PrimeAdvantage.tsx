const ICON_BLUEPRINT = `
<svg viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-width="1.5">
  <rect x="18" y="42" width="118" height="88" rx="2" opacity="0.9"></rect>
  <path d="M22 46 c4 0 4 -4 8 -4" opacity="0.6"></path>
  <path d="M50 110 L50 72 L80 54 L110 72 L110 110 Z"></path>
  <path d="M50 90 L110 90" opacity="0.5"></path>
  <rect x="70" y="92" width="12" height="18" opacity="0.7"></rect>
  <rect x="92" y="78" width="10" height="10" opacity="0.6"></rect>
  <rect x="58" y="78" width="10" height="10" opacity="0.6"></rect>
  <line x1="120" y1="18" x2="120" y2="70"></line>
  <line x1="120" y1="18" x2="60" y2="28"></line>
  <line x1="60" y1="28" x2="120" y2="28" opacity="0.6"></line>
  <line x1="70" y1="28" x2="70" y2="38"></line>
  <path d="M64 40 h12 v6 h-12z" opacity="0.7"></path>
  <path d="M14 38 c0 -4 4 -4 4 0 v96 c0 4 -4 4 -4 0z" opacity="0.6"></path>
</svg>`;

const ICON_HANDSHAKE = `
<svg viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-width="1.5">
  <rect x="22" y="16" width="116" height="128" rx="2"></rect>
  <rect x="30" y="24" width="100" height="112" rx="1" opacity="0.5"></rect>
  <path d="M46 82 c4 -6 12 -8 18 -4 l10 6 c4 2 8 2 12 0 l8 -4 c6 -4 14 -2 18 4"></path>
  <path d="M54 86 L66 96 c3 2 7 2 10 0 l4 -2"></path>
  <path d="M80 94 L90 100 c3 2 7 2 10 0 l8 -6"></path>
  <path d="M38 76 L48 76 L52 90 L42 92 Z" opacity="0.6"></path>
  <path d="M122 76 L112 76 L108 90 L118 92 Z" opacity="0.6"></path>
  <circle cx="80" cy="118" r="10" stroke-width="1.2"></circle>
  <path d="M74 126 L72 138 L80 134 L88 138 L86 126" stroke-width="1.2"></path>
  <circle cx="80" cy="118" r="5" opacity="0.4" fill="currentColor"></circle>
</svg>`;

const ICON_PNW = `
<svg viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">
  <path d="M16 112 L54 56 L82 98 L100 74 L144 112" opacity="0.75"></path>
  <path d="M45 72 L54 56 L63 72" opacity="0.55"></path>
  <path d="M50 132 L50 96 L80 74 L110 96 L110 132 Z"></path>
  <rect x="72" y="110" width="16" height="22"></rect>
  <rect x="58" y="100" width="10" height="10" opacity="0.65"></rect>
  <rect x="92" y="100" width="10" height="10" opacity="0.65"></rect>
  <g opacity="0.85">
    <path d="M122 130 L134 130 L128 118 Z"></path>
    <path d="M123.5 120 L132.5 120 L128 110 Z"></path>
    <path d="M125 112 L131 112 L128 104 Z"></path>
    <line x1="128" y1="130" x2="128" y2="135"></line>
  </g>
  <line x1="20" y1="135" x2="140" y2="135" opacity="0.6"></line>
</svg>`;

export const PrimeAdvantage = () => {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-title-row">
          <div className="line" />
          <h2>The Prime Advantage</h2>
          <div className="line" />
        </div>
        <p className="section-sub">
          Delivering Precision and Peace of Mind at Every Step.
        </p>

        <div className="advantage">
          <div className="adv-card">
            <div
              className="adv-ico"
              dangerouslySetInnerHTML={{ __html: ICON_BLUEPRINT }}
            />
            <h3>
              Precision
              <br />
              Craftsmanship
            </h3>
          </div>

          <div className="adv-card">
            <div
              className="adv-ico"
              dangerouslySetInnerHTML={{ __html: ICON_HANDSHAKE }}
            />
            <h3>
              Transparent
              <br />
              Partnership
            </h3>
          </div>

          <div className="adv-card">
            <div
              className="adv-ico"
              dangerouslySetInnerHTML={{ __html: ICON_PNW }}
            />
            <h3>
              Built to Last
              <br />
              in the Pacific
              <br />
              Northwest.
            </h3>
          </div>
        </div>

        <div className="center-cta">
          <a href="#contact" className="btn-bracket-filled">
            [ REQUEST A PERSONALIZED CONSULTATION ]
          </a>
        </div>
      </div>
    </section>
  );
};
