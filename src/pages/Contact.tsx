import { motion } from "framer-motion";
import contactData from "../data/contact.json";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import Navigation from "../components/Navigation";

const Contact = () => {
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
              {contactData.title}
            </h1>
            <p className="text-xl text-gray-600">{contactData.description}</p>
          </motion.div>

          {/* Professional Website Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <ContactForm />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-secondary-dark mb-6">Our Offices</h2>
                {contactData.content.offices.map((office, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary">{office.name}</h3>
                    <p className="text-gray-600">{office.address}</p>
                    <p className="text-gray-600">
                      <strong>Email:</strong> {office.email}
                    </p>
                    <p className="text-gray-600">
                      <strong>Phone:</strong> {office.phone}
                    </p>
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
                  Department Contacts
                </h2>
                <div className="space-y-6">
                  {contactData.content.departments.map((dept, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                      <h3 className="text-lg font-semibold text-primary mb-2">{dept.name}</h3>
                      <p className="text-gray-600">{dept.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
