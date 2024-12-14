import { Hero } from "../components/Hero";
import { Mission } from "../components/Mission";
import { Portfolio } from "../components/Portfolio";
import { Vision } from "../components/Vision";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Portfolio />
      <Vision />
    </main>
  );
};

export default Index;