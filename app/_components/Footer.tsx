const COMPASS_SVG = `
<svg class="compass" viewBox="0 0 24 24" fill="none">
  <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor"></path>
</svg>`;

export const Footer = () => {
  return (
    <footer className="footer-bar">
      <span>
        Prime Up General Construction · Washington State Licensed, Bonded, and
        Insured
      </span>
      <span dangerouslySetInnerHTML={{ __html: COMPASS_SVG }} />
    </footer>
  );
};
