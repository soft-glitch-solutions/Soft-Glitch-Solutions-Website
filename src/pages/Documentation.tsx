import { motion } from "framer-motion";
import docData from "../data/documentation.json";
import { Footer } from "../components/Footer";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-4">
            {docData.title}
          </h1>
          <p className="text-xl text-gray-600">{docData.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-secondary-dark mb-6">
                {docData.content.gettingStarted.title}
              </h2>
              {docData.content.gettingStarted.sections.map((section, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-secondary-dark mb-6">
                {docData.content.api.title}
              </h2>
              {docData.content.api.sections.map((section, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600">{section.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;