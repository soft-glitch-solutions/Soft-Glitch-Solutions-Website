import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/660a8d86-ae03-4137-ae45-d537a30ef4af.png')] opacity-10 bg-center bg-no-repeat bg-contain animate-float" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            src="/lovable-uploads/660a8d86-ae03-4137-ae45-d537a30ef4af.png"
            alt="Soft Glitch Solutions Logo"
            className="w-48 h-48 mx-auto mb-8 animate-glitch"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-primary-light mb-4">
            Soft Glitch Solutions
          </h1>
          <p className="text-xl md:text-2xl text-green-400">
            Innovation with Purpose
          </p>
        </motion.div>
      </div>
    </section>
  );
};