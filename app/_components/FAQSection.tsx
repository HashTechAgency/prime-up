"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const faq = [
  {
    question: "What is “Company Name”?",
    answer:
      "Prime UP is a licensed and insured home improvement company providing a wide range of handyman, appliance repair, and general construction services for homeowners in Washington",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Prime UP is fully licensed and insured in Washington State, giving our clients peace of mind and guaranteed professionalism.",
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, when you choose Prime UP, we offer a free inspection and a free estimate for your project. This way, you can understand the scope of work and cost before making any decisions.",
  },
  { question: "How soon can you start the job?", answer: "In most cases, we can start within a few days after scheduling. For urgent jobs, we do our best to provide same-day or next-day service." },
  { question: "How are payments handled?", answer: "We use secure invoicing for all payments. With our invoices, clients can choose the payment method that works best for them — Zelle, PayPal, credit or debit cards, and bank transfers are all accepted." },
];
export const FAQSection = () => {

  
  useGSAP(() => {
    gsap.from('#faq .faq_container', {
      opacity: 0,
      x: 40,
      duration: 1,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: '#faq .faq_container', 
        start: "top 85%",
        end: "top 25%",
        toggleActions: "play none none reverse",
      }
    });
  });
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

        <div className="faq_container grow-1 flex flex-col gap-y-[12px]">
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
