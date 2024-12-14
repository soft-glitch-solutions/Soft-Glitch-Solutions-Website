import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export const Business = () => {
  const divisions = [
    {
      name: "Soft Glitch Green",
      description: "Our eco-focused division dedicated to developing sustainable solutions and environmental technologies.",
      icon: "🌱",
      color: "bg-primary/10",
    },
    {
      name: "Soft Glitch Studios",
      description: "Gaming and media division creating immersive experiences and innovative digital content.",
      icon: "🎮",
      color: "bg-purple-100",
    },
    {
      name: "Soft Glitch Support",
      description: "Technical support division providing expert assistance and solutions for all your technology needs.",
      icon: "🛠️",
      color: "bg-blue-100",
    },
    {
      name: "Soft Glitch Learn",
      description: "Our NGO initiative focused on education and skill development for underserved communities.",
      icon: "📚",
      color: "bg-orange-100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Our Business Divisions
          </h2>
          <p className="text-gray-600">
            Specialized teams driving innovation across multiple sectors
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((division, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className={`h-full hover:shadow-lg transition-shadow ${division.color}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{division.icon}</span>
                    <h3 className="text-2xl font-semibold text-secondary-dark">
                      {division.name}
                    </h3>
                  </div>
                  <p className="text-gray-600">{division.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};