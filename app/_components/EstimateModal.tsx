"use client";
import { useState, type FormEvent, type ReactNode } from "react";
import { Modal } from "./Modal";

const PHONE_HREF = "tel:+12066122158";
const PHONE_LABEL = "+1 (206) 612-2158";

const projectTypes = [
  "Custom Deck",
  "Siding",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Whole-Home Remodel",
  "Other",
];

const emptyForm = { name: "", email: "", phone: "", type: "", website: "" };

export const EstimateModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const close = () => {
    onClose();
    if (status === "sent") setStatus("idle");
  };

  const set =
    (key: keyof typeof emptyForm) =>
    (e: { target: { value: string } }) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      if (
        typeof window !== "undefined" &&
        (window as any).gtag_report_conversion
      ) {
        (window as any).gtag_report_conversion();
      }
      setForm(emptyForm);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Modal open={open} onClose={close} labelledBy="estimate-modal-title">
      {status === "sent" ? (
        <>
          <p className="call-modal-eyebrow">Thank You</p>
          <h2 id="estimate-modal-title" className="call-modal-title">
            Request received
          </h2>
          <p className="estimate-note">
            We&apos;ll get back to you shortly. Need us sooner? Call{" "}
            <a href={PHONE_HREF}>{PHONE_LABEL}</a>.
          </p>
          <button
            type="button"
            className="btn-bracket-filled call-modal-btn"
            onClick={close}
          >
            CLOSE
          </button>
        </>
      ) : (
        <>
          <p className="call-modal-eyebrow">Free Estimate</p>
          <h2 id="estimate-modal-title" className="call-modal-title">
            Tell us about your project
          </h2>
          <form className="estimate-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                value={form.name}
                onChange={set("name")}
                autoComplete="name"
                required
                autoFocus
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={form.email}
                onChange={set("email")}
                autoComplete="email"
                required
              />
            </label>
            <label>
              Phone
              <input
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                autoComplete="tel"
                required
              />
            </label>
            <label>
              What kind of project
              <select value={form.type} onChange={set("type")} required>
                <option value="" disabled>
                  Select a project
                </option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <input
              className="estimate-hp"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.website}
              onChange={set("website")}
            />
            {status === "error" && (
              <p className="estimate-note error" role="alert">
                Something went wrong. Please try again or call{" "}
                <a href={PHONE_HREF}>{PHONE_LABEL}</a>.
              </p>
            )}
            <button
              type="submit"
              className="btn-bracket-filled call-modal-btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? "SENDING…" : "SEND REQUEST"}
            </button>
          </form>
        </>
      )}
    </Modal>
  );
};

export const EstimateButton = ({
  className,
  onOpen,
  children,
}: {
  className?: string;
  onOpen?: () => void;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
      >
        {children}
      </button>
      <EstimateModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};
