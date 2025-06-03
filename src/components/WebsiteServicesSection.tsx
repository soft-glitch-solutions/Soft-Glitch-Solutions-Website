
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Globe, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const WebsiteServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Need a Professional Website?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let us create a stunning, professional website for your business. From basic websites to e-commerce solutions, we have competitive packages to suit your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center p-6"
          >
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-dark mb-2">Professional Design</h3>
            <p className="text-gray-600">Mobile-responsive websites with custom design elements</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-6"
          >
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-dark mb-2">Competitive Pricing</h3>
            <p className="text-gray-600">Packages starting from R2,500 with free domain and hosting</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center p-6"
          >
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-dark mb-2">Ongoing Support</h3>
            <p className="text-gray-600">Maintenance plans to keep your website secure and updated</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link to="/website-services">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              View Our Website Packages
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
