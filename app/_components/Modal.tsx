"use client";
import { useEffect, type ReactNode } from "react";

export const Modal = ({
  open,
  onClose,
  labelledBy,
  children,
}: {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="call-modal-backdrop" onClick={onClose}>
      <div
        className="call-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="call-modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};
