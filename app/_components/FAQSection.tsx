"use client"
import Image from "next/image";
import Link from "next/link";

const faq = [
  {
    question: "What is “Company Name”?",
    answer:
      "Prime UP is a home care platform that connects homeowners with professional service providers offering a wide range of home services, including repairs, maintenance, cleaning, and more.",
  },
  {
    question: "Are the service providers on Prime UP reliable and qualified?",
    answer: "Prime UP is a home care platform that connects homeowners with professional service providers offering a wide range of home services, including repairs, maintenance, cleaning, and more.",
  },
  {
    question: "What if I have an issue or complaint about a service provider?",
    answer: "",
  },
  { question: "How are payments handled on Prime Up?", answer: "" },
  { question: "How do I leave a review for a service provider?", answer: "" },
];
export const FAQSection = () => {

  return (
    <section id="faq">
      <div className="wrapper py-[32px] lg:py-[120px] flex max-lg:flex-wrap gap-[32px] sm:gap-[128px]">
        <div className="basis-[469px] max-w-full shrink-0">
          <h2 className="s-title max-sm:text-center">
            Frequently Asked <br /> Questionss
          </h2>
          <p className="s-text mt-[16px] sm:mt-[24px] max-w-[552px] max-sm:text-center">
            Still need help?{" "}
            <Link className="text-(--blue) font-bold underline" href={"/"}>
              Call Us Now
            </Link>
          </p>
        </div>

        <div className="grow-1 flex flex-col gap-y-[12px]">
          {faq.map((f, i) => (
            <details className="faq_box transition hover:bg-[#F3F5F9] open:bg-[#F3F5F9] p-[24px_32px] rounded-[12px]" key={i}>
              <summary className="select-none flex gap-[12px] justify-between text-[18px] sm:text-[24px] text-[#545971] font-bold cursor-pointer">
                {f.question}
                
                <Image width={32} height={32} src='/svg/arrow.svg' alt=""/>
              </summary>
              <p className="mt-[16px] text-[16px] text-[#737373]">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
