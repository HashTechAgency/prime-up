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

const ICON_PERMIT = `
<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  <rect x="14" y="10" width="36" height="46" rx="2"></rect>
  <rect x="24" y="6" width="16" height="8" rx="1.5"></rect>
  <path d="M22 26 L32 19 L42 26"></path>
  <path d="M25 24 L25 34 L39 34 L39 24"></path>
  <line x1="21" y1="41" x2="35" y2="41"></line>
  <line x1="21" y1="47" x2="31" y2="47"></line>
  <circle cx="43" cy="47" r="6"></circle>
  <path d="M40.5 47 L42.5 49 L46 45" stroke-width="1.6"></path>
</svg>`;

const items = [
  {
    icon: ICON_AWARD,
    title: "Licensed, Bonded & Insured",
    lines: ["Full compliance."],
  },
  {
    icon: ICON_RULER,
    title: "Detailed Estimates",
    lines: ["Clear scope, transparent pricing,", "no hidden fees."],
  },
  {
    icon: ICON_PERMIT,
    title: "Permits & Code Compliance",
    lines: ["Projects completed to", "Washington building standards."],
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
