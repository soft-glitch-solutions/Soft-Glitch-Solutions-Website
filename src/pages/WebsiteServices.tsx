
import { motion } from "framer-motion";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Check, Globe, Shield, Zap } from "lucide-react";

const WebsiteServices = () => {
  const packages = [
    {
      name: "Basic Web Package",
      price: "R2,500 – R4,500",
      subtitle: "Once-off",
      features: [
        "Up to 5 pages (Home, About, Services, Contact, etc.)",
        "Mobile-responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "1-year free .co.za domain registration",
        "1-year free hosting"
      ]
    },
    {
      name: "Standard Web Package",
      price: "R5,000 – R7,500",
      subtitle: "Once-off",
      features: [
        "Up to 10 pages",
        "Custom design elements",
        "Blog or news section",
        "Enhanced SEO optimization",
        "Social media integration",
        "1-year free .co.za domain registration",
        "1-year free hosting"
      ]
    },
    {
      name: "E-commerce Web Package",
      price: "R8,000 – R12,000",
      subtitle: "Once-off",
      features: [
        "Up to 15 pages",
        "Online store setup with up to 20 products",
        "Payment gateway integration (e.g., PayFast, PayGate)",
        "Inventory management system",
        "Enhanced SEO optimization",
        "Social media integration",
        "1-year free .co.za domain registration",
        "1-year free hosting"
      ]
    }
  ];

  const maintenancePlans = [
    {
      name: "Basic Maintenance Plan",
      price: "R500/month",
      features: [
        "Monthly software updates",
        "Security monitoring",
        "Backup services",
        "1 hour of content updates per month"
      ]
    },
    {
      name: "Standard Maintenance Plan",
      price: "R1,000/month",
      features: [
        "All features of the Basic Plan",
        "3 hours of content updates per month",
        "Performance optimization",
        "Monthly analytics report"
      ]
    },
    {
      name: "Premium Maintenance Plan",
      price: "R1,500/month",
      features: [
        "All features of the Standard Plan",
        "5 hours of content updates per month",
        "Priority support",
        "Quarterly strategy sessions"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Competitive Pricing",
      description: "Our packages are designed to be affordable without compromising on quality."
    },
    {
      icon: Globe,
      title: "Comprehensive Services",
      description: "From design to maintenance, we offer end-to-end solutions."
    },
    {
      icon: Shield,
      title: "Local Expertise",
      description: "Based in Cape Town, we understand the unique needs of local businesses."
    },
    {
      icon: Check,
      title: "Customer-Centric Approach",
      description: "We prioritize client satisfaction and long-term relationships."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-4">
            Soft Glitch Solutions — Competitive Pricing Packages
          </h1>
          <p className="text-xl text-gray-600">
            Professional website solutions tailored for your business needs
          </p>
        </motion.div>

        {/* Website Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-secondary-dark text-center mb-12">
            Website Development Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-8 border-2 border-gray-100 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-secondary-dark">{pkg.price}</span>
                  <span className="text-gray-600 block">({pkg.subtitle})</span>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Maintenance Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-secondary-dark text-center mb-4">
            🔧 Maintenance & Support Plans
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            (Where the Value Lies)
          </p>
          <p className="text-gray-600 text-center mb-12">
            To ensure your clients' websites remain secure, updated, and optimized, we offer the following maintenance packages:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <div key={index} className="bg-gray-50 shadow-lg rounded-lg p-8 border-2 border-gray-200 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-secondary-dark">{plan.price}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-secondary-dark text-center mb-12">
            💡 Why Choose Soft Glitch Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <item.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-secondary-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <ContactForm />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default WebsiteServices;
