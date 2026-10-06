"use client";
import { useState, type MouseEvent } from "react";
import { Modal } from "./Modal";
import { EstimateModal } from "./EstimateModal";

const PHONE_HREF = "tel:+12066122158";
const PHONE_LABEL = "+1 (206) 612-2158";

const links = [
  { label: "Home", href: "#home", active: true },
  { label: "Custom Decks", href: "#services" },
  { label: "Siding", href: "#services" },
  { label: "Interior Transformations", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: PHONE_HREF, callModal: true },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);
  const [estimateOpen, setEstimateOpen] = useState(false);
  const close = () => setOpen(false);

  const openCall = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    setCallOpen(true);
  };

  const reportCall = () => {
    if (
      typeof window !== "undefined" &&
      (window as any).gtag_report_conversion
    ) {
      (window as any).gtag_report_conversion();
    }
  };

  const openEstimate = () => {
    setOpen(false);
    setEstimateOpen(true);
  };

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

        <span className="nav-tagline">General Contractor</span>

        <nav className="nav-links">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className={l.active ? "active" : undefined}
              onClick={l.callModal ? openCall : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="btn-bracket-filled nav-cta"
          onClick={openEstimate}
        >
          REQUEST AN ESTIMATE
        </button>

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
          <a key={i} href={l.href} onClick={l.callModal ? openCall : close}>
            {l.label}
          </a>
        ))}
        <button
          type="button"
          className="btn-bracket-filled"
          onClick={openEstimate}
        >
          REQUEST AN ESTIMATE
        </button>
      </div>

      <Modal
        open={callOpen}
        onClose={() => setCallOpen(false)}
        labelledBy="call-modal-title"
      >
        <p className="call-modal-eyebrow">Contact Us</p>
        <h2 id="call-modal-title" className="call-modal-title">
          Call us today
        </h2>
        <a href={PHONE_HREF} className="call-modal-phone" onClick={reportCall}>
          {PHONE_LABEL}
        </a>
        <a
          href={PHONE_HREF}
          className="btn-bracket-filled call-modal-btn"
          onClick={reportCall}
          autoFocus
        >
          CALL NOW
        </a>
      </Modal>

      <EstimateModal
        open={estimateOpen}
        onClose={() => setEstimateOpen(false)}
      />
    </div>
  );
};
