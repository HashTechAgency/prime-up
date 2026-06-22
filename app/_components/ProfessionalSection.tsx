import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, CheckboxIcon } from "./icons";

const reasons = [
  {
    title: "Licensed, bonded & insured",
    text: "Licensed residential & commercial contractor in Washington State.",
  },
  {
    title: "Code-compliant work",
    text: "Every project is built to current WA building codes and permitted when required.",
  },
  {
    title: "Clear contracts & scopes",
    text: "Defined scope, materials and pricing up front — no surprises mid-project.",
  },
  {
    title: "Local Washington team",
    text: "Owner-operated and accountable, serving King & Snohomish County.",
  },
];

export const PorsfessionalSection = () => {
  return (
    <section id="why-choose-us" className="section bg-white">
      <div className="wrapper grid items-center gap-[48px] lg:grid-cols-2">
        {/* Image */}
        <div className="relative">
          <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] shadow-[0_40px_80px_-40px_rgba(13,33,58,0.6)]">
            <Image
              src="/img/worker.jpeg"
              alt="Prime Up contractor at work"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating license card */}
          <div className="absolute -bottom-[24px] left-[24px] right-[24px] sm:left-auto sm:right-[24px] sm:w-[280px] card p-[20px]">
            <div className="flex items-center gap-[12px]">
              <div className="w-[44px] h-[44px] rounded-full bg-[#e8f6ec] grid place-items-center text-[#1f9d54]">
                <CheckboxIcon width={24} height={24} />
              </div>
              <div>
                <div className="text-[13px] font-bold text-[var(--grey-2)]">
                  Washington License
                </div>
                <div className="text-[17px] font-extrabold text-[var(--dark-blue)]">
                  # PRIMEUL753MB
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="eyebrow">Why Prime Up</span>
          <h2 className="s-title mt-[14px]">
            A contractor you can actually trust
          </h2>
          <p className="s-text mt-[16px]">
            We keep the process simple and transparent — clear communication,
            quality workmanship and accountability from the first estimate to
            the final walkthrough.
          </p>

          <ul className="mt-[32px] flex flex-col gap-[20px]">
            {reasons.map((r, i) => (
              <li key={i} className="flex gap-[14px]">
                <div className="shrink-0 w-[28px] h-[28px] rounded-full bg-[var(--blue-strong)] grid place-items-center text-white mt-[2px]">
                  <CheckboxIcon width={18} height={18} />
                </div>
                <div>
                  <div className="text-[18px] font-extrabold text-[var(--dark-blue)]">
                    {r.title}
                  </div>
                  <div className="text-[15px] text-[var(--grey-2)] leading-[1.55]">
                    {r.text}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-[34px] flex flex-wrap gap-[14px]">
            <Link href="#contact" className="p-button">
              Request Free Estimate
            </Link>
            <Link href="tel:+12066122158" className="p-button secondary">
              <PhoneIcon width={18} height={18} className="text-[var(--blue-strong)]" />
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
