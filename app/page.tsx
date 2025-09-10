import { Footer, Header, Main,PorsfessionalSection,ServicesSection,GuaranteeSection, WorksStepSection, CallSection, FAQSection, Gallery} from "./_components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[var(--dark-blue)]">
         <Header/>
         <Main/>
      </div>
      <ServicesSection/>
      <Gallery/>
      <GuaranteeSection/>
      <WorksStepSection/>
      <PorsfessionalSection/>
      <FAQSection/>
      <CallSection/>
      <Footer/>
    </div>
  );
}
