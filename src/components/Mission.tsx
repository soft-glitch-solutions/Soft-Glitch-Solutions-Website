import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export const Mission = () => {
  const values = [
    {
      title: "Innovate Everywhere",
      description: "Pioneering breakthroughs in technology, sustainability, and community-focused initiatives.",
      icon: "💡",
    },
    {
      title: "Drive Sustainability",
      description: "Embedding eco-conscious practices into every product and service to reduce environmental footprints.",
      icon: "🌱",
    },
    {
      title: "Empower Communities",
      description: "Offering tools and platforms that help individuals, businesses, and organizations thrive.",
      icon: "🤝",
    },
    {
      title: "Solve Complex Problems",
      description: "Turning inefficiencies and 'soft glitches' into opportunities for growth and improvement.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Mission and Core Values
          </h2>
          <p className="text-gray-600">Built on innovation, creativity, and impact</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};