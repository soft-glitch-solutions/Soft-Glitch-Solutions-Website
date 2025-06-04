
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Users, TrendingUp, Settings, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

export const ConsultingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            IT Consulting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with strategic IT solutions. We help companies integrate technology 
            to improve efficiency, reduce costs, and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center p-6"
          >
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-dark mb-2">Digital Transformation</h3>
            <p className="text-gray-600">Modernize your operations with cutting-edge technology solutions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-6"
          >
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-dark mb-2">Process Optimization</h3>
            <p className="text-gray-600">Streamline workflows and increase productivity through automation</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center p-6"
          >
            <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-dark mb-2">System Integration</h3>
            <p className="text-gray-600">Connect disparate systems for seamless data flow and communication</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center p-6"
          >
            <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-dark mb-2">Strategic Planning</h3>
            <p className="text-gray-600">Develop comprehensive IT strategies aligned with your business goals</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Schedule a Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
