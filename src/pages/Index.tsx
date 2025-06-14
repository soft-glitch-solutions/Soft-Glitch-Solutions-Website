
import { Hero } from "../components/Hero";
import { Mission } from "../components/Mission";
import { Portfolio } from "../components/Portfolio";
import { Vision } from "../components/Vision";
import { Business } from "../components/Business";
import { WebsiteServicesSection } from "../components/WebsiteServicesSection";
import { ConsultingSection } from "../components/ConsultingSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Portfolio />
      <Business />
      <WebsiteServicesSection />
      <ConsultingSection />
      <Vision />
      <Footer />
    </main>
  );
};

export default Index;
