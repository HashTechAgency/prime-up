import { Footer, Header, Main,PorsfessionalSection,ServicesSection,GuaranteeSection, WorksStepSection, CallSection, FAQSection} from "./_components";
import TestimonialsSection from "./_components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[var(--dark-blue)]">
         <Header/>
         <Main/>
      </div>
      <ServicesSection/>
      <GuaranteeSection/>
      <WorksStepSection/>
      <PorsfessionalSection/>
      <FAQSection/>
      <TestimonialsSection/>
      <CallSection/>
      <Footer/>
    </div>
  );
}
