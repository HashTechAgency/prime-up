import Link from "next/link";
import {
  Footer,
  Header,
  Main,
  PorsfessionalSection,
  ServicesSection,
  GuaranteeSection,
  WorksStepSection,
  CallSection,
  FAQSection,
  HowItWorks,
  ReadyStart,
} from "./_components";
import TestimonialsSection from "./_components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[var(--dark-blue)]">
        {/* <Header/> */}
        <Main />
      </div>
      <ServicesSection />
      {/* <GuaranteeSection/> */}
      {/* <WorksStepSection/> */}
      <PorsfessionalSection />
      <HowItWorks />
      {/* <FAQSection/> */}
      <div className="wrapper min-h-[60vh] flex items-center">
        <div>
          <h2 className="s-title text-center">Service Areas</h2>
          <p className="text-center text-(--grey-2) text-[18px] sm:text-[24px] max-w-[800px] mt-[24px] sm:mt-[30px]">
            Proudlly serving Washington homeowners across King & Snohomish
            Country - and surrounding areas.
          </p>
        </div>
      </div>
      <TestimonialsSection />
      <ReadyStart />

      {/* <CallSection/> */}
      {/* <Footer/> */}
    </div>
  );
}
