
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-between bg-white relative overflow-hidden px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-dark mb-6">
            Soft Glitch Solution
            <span className="text-primary block mt-2">Innovation with Purpose</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
          Developing cutting-edge, sustainable solutions that address critical challenges in the modern world.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Enquire Now
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="/lovable-uploads/660a8d86-ae03-4137-ae45-d537a30ef4af.png"
            alt="Soft Glitch Solutions"
            className="w-full max-w-md mx-auto transition-transform duration-300 hover:scale-110"
          />
        </motion.div>
      </div>
    </section>
  );
};
