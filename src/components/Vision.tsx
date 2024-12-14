import { motion } from "framer-motion";

export const Vision = () => {
  return (
    <section className="py-20 bg-secondary-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We envision a world where innovation fuels sustainable growth, fosters
            inclusivity, and addresses global challenges. By combining cutting-edge
            technology with a focus on real-world impact, we strive to inspire and
            enable positive change.
          </p>
        </motion.div>
      </div>
    </section>
  );
};