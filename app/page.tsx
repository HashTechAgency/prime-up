import {
  Header,
  Main,
  ServicesSection,
  PrimeStandard,
  PrimeAdvantage,
  Gallery,
  ServiceAreas,
  Footer,
} from "./_components";
import TestimonialsSection from "./_components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <ServicesSection />
      <PrimeStandard />
      <PrimeAdvantage />
      <Gallery />
      <ServiceAreas />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
