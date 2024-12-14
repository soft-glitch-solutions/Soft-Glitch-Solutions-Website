import { motion } from "framer-motion";
import { Button } from "./ui/button";

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
            Lessons and insights
            <span className="text-primary block mt-2">from 8 years</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark">
            Register Now
          </Button>
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
            className="w-full max-w-md mx-auto animate-glitch"
          />
        </motion.div>
      </div>
    </section>
  );
};