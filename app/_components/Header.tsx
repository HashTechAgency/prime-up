"use client";
import { useState } from "react";

const links = [
  { label: "Home", href: "#home", active: true },
  { label: "Custom Decks", href: "#services" },
  { label: "Siding", href: "#services" },
  { label: "Interior Transformations", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="topbar">
      <div className="nav">
        <a
          href="#home"
          className="logo-mark"
          aria-label="Prime Up — General Construction"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.png"
            alt="Prime Up — General Construction"
            className="nav-logo"
          />
        </a>

        <nav className="nav-links">
          {links.map((l, i) => (
            <a key={i} href={l.href} className={l.active ? "active" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-bracket-filled nav-cta">
          [ REQUEST AN ESTIMATE ]
        </a>

        <button
          className={`nav-burger ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {links.map((l, i) => (
          <a key={i} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn-bracket-filled" onClick={close}>
          [ REQUEST AN ESTIMATE ]
        </a>
      </div>
    </div>
  );
};
