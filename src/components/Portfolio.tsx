import { motion } from "framer-motion";

export const Portfolio = () => {
  const innovations = [
    {
      title: "Refloat",
      description:
        "A sustainable tool transforming discarded tires into ocean cleaning skimmers.",
      icon: "🌊",
    },
    {
      title: "Commiploy",
      description:
        "Business empowerment platform for local entrepreneurs to grow and connect.",
      icon: "💼",
    },
    {
      title: "Crechespots",
      description:
        "User-friendly app helping parents find reliable daycare centers.",
      icon: "👶",
    },
    {
      title: "Uthotho Maps",
      description:
        "Sustainable navigation system promoting eco-friendly travel.",
      icon: "🗺️",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary-dark mb-16">
          Our Innovations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-secondary-light p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{innovation.icon}</div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {innovation.title}
              </h3>
              <p className="text-gray-600">{innovation.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};