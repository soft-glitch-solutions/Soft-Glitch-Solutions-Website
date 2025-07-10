
import { Helmet } from 'react-helmet-async';
import Navigation from "../components/Navigation";
import { Hero } from "../components/Hero";
import { Mission } from "../components/Mission";
import { Portfolio } from "../components/Portfolio";
import { Vision } from "../components/Vision";
import { Business } from "../components/Business";
import { WebsiteServicesSection } from "../components/WebsiteServicesSection";
import { ConsultingSection } from "../components/ConsultingSection";
import { HomeEnquiryForm } from "../components/HomeEnquiryForm";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Soft Glitch Solutions - Professional Web Development & IT Consulting Services</title>
        <meta name="description" content="Transform your business with professional web development and IT consulting services. We create modern websites and provide technology solutions to help your business grow." />
        <meta name="keywords" content="web development, IT consulting, website design, digital transformation, technology solutions, business automation" />
        <link rel="canonical" href="https://softglitchsolutions.com" />
      </Helmet>
      
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-16">
          <Hero />
          <Mission />
          <Portfolio />
          <WebsiteServicesSection />
          <ConsultingSection />
          <Business />
          <Vision />
          <HomeEnquiryForm />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
