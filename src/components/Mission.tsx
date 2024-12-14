import { motion } from "framer-motion";

export const Mission = () => {
  const values = [
    {
      title: "Innovate Everywhere",
      description: "Pioneering breakthroughs in technology and sustainability.",
    },
    {
      title: "Drive Sustainability",
      description: "Embedding eco-conscious practices into every solution.",
    },
    {
      title: "Empower Communities",
      description: "Offering tools that help individuals and businesses thrive.",
    },
    {
      title: "Solve Complex Problems",
      description: "Turning inefficiencies into opportunities for growth.",
    },
  ];

  return (
    <section className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary-dark mb-16">
          Our Mission & Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};