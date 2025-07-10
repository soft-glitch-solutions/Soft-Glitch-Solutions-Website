import { motion } from "framer-motion";
import careersData from "../data/careers.json";
import { Footer } from "../components/Footer";
import Navigation from "../components/Navigation";

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navigation />
      <div className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-4">
              {careersData.title}
            </h1>
            <p className="text-xl text-gray-600">{careersData.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-secondary-dark mb-4">
                  {careersData.content.culture.heading}
                </h2>
                <p className="text-gray-700 mb-6">
                  {careersData.content.culture.description}
                </p>
                <ul className="space-y-3">
                  {careersData.content.culture.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="text-primary mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-secondary-dark">Open Positions</h2>
              {careersData.content.openings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {job.department}
                    </span>
                    <span className="bg-secondary/10 text-secondary-dark px-3 py-1 rounded-full text-sm">
                      {job.location}
                    </span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>
                  <button className="text-primary hover:text-primary-dark transition-colors">
                    Learn more →
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
