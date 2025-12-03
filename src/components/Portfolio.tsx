import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export const Portfolio = () => {
  const innovations = [
    {
      name: "Refloat",
      description: "A sustainable tool that transforms discarded tires into skimmers for cleaning rivers and oceans. Combats marine pollution while promoting upcycling and community engagement.",
      icon: "🌊",
    },
    {
      name: "Commiploy",
      description: "A business empowerment platform that equips local entrepreneurs with tools to grow and connect within their communities. Stimulates economic development and supports small enterprises.",
      icon: "💼",
    },
    {
      name: "Crechespots",
      description: "A user-friendly app helping parents find reliable creches and daycare centers. Enhances childcare accessibility and fosters trust in local childcare services.",
      icon: "👶",
    },
    {
      name: "Uthotho",
      description: "A sustainable navigation system promoting eco-friendly travel and local tourism. Reduces carbon footprints while supporting regional businesses.",
      icon: "🗺️",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Our Innovations
          </h2>
          <p className="text-gray-600">
            Spanning multiple sectors, showcasing versatility and creativity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{innovation.icon}</span>
                    <h3 className="text-2xl font-semibold text-secondary-dark">
                      {innovation.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">{innovation.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};