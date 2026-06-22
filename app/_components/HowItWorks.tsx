const steps = [
  {
    title: "Free Estimate",
    text: "On-site evaluation and a clear discussion of your project.",
  },
  {
    title: "Clear Scope & Pricing",
    text: "Defined scope, materials and transparent, itemized pricing.",
  },
  {
    title: "Scheduled Start Date",
    text: "An agreed timeline and a firm start date you can plan around.",
  },
  {
    title: "Professional Execution",
    text: "Licensed, code-compliant work performed with care.",
  },
  {
    title: "Final Walkthrough",
    text: "A shared review, completion and clean close-out.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="process" className="section">
      <div className="wrapper">
        <div className="text-center max-w-[620px] mx-auto">
          <span className="eyebrow">How it works</span>
          <h2 className="s-title mt-[14px]">A simple, transparent process</h2>
          <p className="s-text mt-[16px]">
            Five clear steps from first call to finished project — so you always
            know exactly what happens next.
          </p>
        </div>

        <div className="relative mt-[56px]">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-[26px] left-[10%] right-[10%] h-[2px] bg-[var(--line)]" />

          <ol className="grid gap-[36px] sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={i} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 w-[54px] h-[54px] rounded-full bg-[var(--blue-strong)] text-white grid place-items-center text-[22px] font-extrabold shadow-[0_12px_24px_-10px_rgba(47,111,179,0.8)] ring-8 ring-[var(--bg)]">
                  {i + 1}
                </div>
                <h3 className="mt-[18px] text-[18px] font-extrabold text-[var(--dark-blue)] leading-tight">
                  {s.title}
                </h3>
                <p className="mt-[8px] text-[15px] text-[var(--grey-2)] leading-[1.55] max-w-[210px]">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
