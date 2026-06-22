const ICON_AWARD = `
<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="32" cy="24" r="15"></circle>
  <circle cx="32" cy="24" r="11"></circle>
  <g stroke-width="1">
    <line x1="32" y1="6" x2="32" y2="10"></line>
    <line x1="32" y1="38" x2="32" y2="42"></line>
    <line x1="14" y1="24" x2="18" y2="24"></line>
    <line x1="46" y1="24" x2="50" y2="24"></line>
    <line x1="20" y1="12" x2="22.5" y2="14.5"></line>
    <line x1="41.5" y1="33.5" x2="44" y2="36"></line>
    <line x1="44" y1="12" x2="41.5" y2="14.5"></line>
    <line x1="22.5" y1="33.5" x2="20" y2="36"></line>
  </g>
  <path d="M26 24.5 L30.5 29 L38 20.5" stroke-width="1.6"></path>
  <path d="M23 37 L18 56 L26 52 L32 56 L38 52 L46 56 L41 37"></path>
</svg>`;

const ICON_RULER = `
<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  <g transform="rotate(-28 32 32)">
    <rect x="6" y="26" width="52" height="12"></rect>
    <line x1="12" y1="26" x2="12" y2="32"></line>
    <line x1="18" y1="26" x2="18" y2="30"></line>
    <line x1="24" y1="26" x2="24" y2="32"></line>
    <line x1="30" y1="26" x2="30" y2="30"></line>
    <line x1="36" y1="26" x2="36" y2="32"></line>
    <line x1="42" y1="26" x2="42" y2="30"></line>
    <line x1="48" y1="26" x2="48" y2="32"></line>
    <line x1="54" y1="26" x2="54" y2="30"></line>
  </g>
</svg>`;

const ICON_MILWAUKEE = `
<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="miter" stroke-linecap="square">
  <path d="M8 54 L8 14 L22 14 L32 34 L42 14 L56 14 L56 54 L46 54 L46 28 L36 48 L28 48 L18 28 L18 54 Z"></path>
  <path d="M38 14 L24 38 L32 38 L26 54" stroke-width="1.8" stroke-linejoin="miter"></path>
</svg>`;

const items = [
  {
    icon: ICON_AWARD,
    title: "Licensed & Bonded (WA)",
    lines: ["Full compliance."],
  },
  {
    icon: ICON_RULER,
    title: "Itemized Quotes",
    lines: ["No hidden fees.", "Transparent, detailed estimates."],
  },
  {
    icon: ICON_MILWAUKEE,
    title: "Milwaukee Precision",
    lines: ["(Utilizing top-tier tools", "for every cut.)"],
  },
];

export const PrimeStandard = () => {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-title-row">
          <div className="line" />
          <h2>The Prime Standard</h2>
          <div className="line" />
        </div>

        <div className="standard">
          {items.map((it, i) => (
            <div className="standard-item" key={i}>
              <div
                className="standard-ico"
                dangerouslySetInnerHTML={{ __html: it.icon }}
              />
              <div>
                <h4>{it.title}</h4>
                <p>
                  {it.lines.map((ln, j) => (
                    <span key={j}>
                      {ln}
                      {j < it.lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
