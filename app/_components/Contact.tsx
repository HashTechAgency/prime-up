"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PhoneIcon } from "./icons";

const projectTypes = [
  "Home Remodeling",
  "Decks & Pergolas",
  "Siding",
  "Fences",
  "Painting",
  "Roof Leak Repairs",
  "Other",
];

const contactRows = [
  {
    icon: "/svg/phone.svg",
    label: "Call or text",
    value: "+1 (206) 612-2158",
    href: "tel:+12066122158",
  },
  {
    icon: "/svg/mail.svg",
    label: "Email",
    value: "llcprimeup@gmail.com",
    href: "mailto:llcprimeup@gmail.com",
  },
  {
    icon: "/svg/whatsapp.svg",
    label: "WhatsApp",
    value: "Message us",
    href: "https://wa.me/message/FEDFRB6DTVC3J1",
  },
];

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: projectTypes[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Estimate request: ${form.type}${form.name ? ` — ${form.name}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nProject: ${form.type}\n\n${form.message}`
    );
    window.location.href = `mailto:llcprimeup@gmail.com?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full bg-[#f5f7fb] border border-[var(--line)] rounded-[12px] px-[16px] py-[13px] text-[15px] text-[var(--dark-blue)] placeholder:text-[var(--grey)] focus:border-[var(--blue-strong)] transition-colors";

  return (
    <section id="contact" className="section">
      <div className="wrapper">
        <div className="card overflow-hidden grid lg:grid-cols-[1fr_1.1fr]">
          {/* Left — info */}
          <div className="bg-[var(--dark-blue)] p-[36px] sm:p-[48px] text-white">
            <span className="eyebrow !text-[var(--blue)]">Free estimate</span>
            <h2 className="mt-[14px] text-[30px] sm:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Ready to start your project?
            </h2>
            <p className="mt-[16px] text-white/75 text-[17px] leading-[1.6]">
              Get a clear scope and a free, no-obligation estimate from a
              licensed Washington contractor. We'll get back to you fast.
            </p>

            <div className="mt-[36px] flex flex-col gap-[18px]">
              {contactRows.map((c, i) => (
                <Link
                  key={i}
                  href={c.href}
                  className="flex items-center gap-[14px] group"
                >
                  <span className="w-[46px] h-[46px] rounded-[12px] bg-white/10 grid place-items-center group-hover:bg-white/20 transition-colors">
                    <Image src={c.icon} width={22} height={22} alt="" />
                  </span>
                  <span>
                    <span className="block text-white/55 text-[13px] font-semibold">
                      {c.label}
                    </span>
                    <span className="block text-white text-[17px] font-bold">
                      {c.value}
                    </span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-[36px] flex items-center gap-[10px] text-white/70 text-[14px] font-semibold">
              <span className="w-[8px] h-[8px] rounded-full bg-[#5eff8a]" />
              Licensed · Bonded · Insured · Lic. # PRIMEUL753MB
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="p-[36px] sm:p-[48px]">
            <div className="flex flex-col gap-[16px]">
              <div className="grid sm:grid-cols-2 gap-[16px]">
                <input
                  className={field}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  className={field}
                  placeholder="Phone number"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                />
              </div>

              <select
                className={field}
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                {projectTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <textarea
                className={`${field} min-h-[120px] resize-y`}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <button type="submit" className="p-button w-full">
                Request My Free Estimate
              </button>

              <Link
                href="tel:+12066122158"
                className="p-button secondary w-full"
              >
                <PhoneIcon width={18} height={18} className="text-[var(--blue-strong)]" />
                Prefer to call? +1 (206) 612-2158
              </Link>

              <p className="text-center text-[13px] text-[var(--grey)]">
                No spam, no obligation — just a clear estimate.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
