import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import crechespotsLogo from "@/assets/crechespots-logo.png";
import uthuthoLogo from "@/assets/uthutho-logo.png";

export const Portfolio = () => {
  const innovations = [
    {
      name: "Recoza",
      description: "An open-source, South African green-tech mobile application designed to help unemployed youth earn income by organising community recycling through trusted networks of friends, family, and neighbours.",
      icon: "♻️",
    },
    {
      name: "Commiploy",
      description: "A business empowerment platform that equips local entrepreneurs with tools to grow and connect within their communities. Stimulates economic development and supports small enterprises.",
      icon: "💼",
    },
    {
      name: "Crechespots",
      description: "A user-friendly app helping parents find reliable creches and daycare centers. Enhances childcare accessibility and fosters trust in local childcare services.",
      logo: crechespotsLogo,
      link: "https://crechespots.co.za",
    },
    {
      name: "Uthutho",
      description: "A sustainable navigation system promoting eco-friendly travel and local tourism. Reduces carbon footprints while supporting regional businesses.",
      logo: uthuthoLogo,
      link: "https://uthutho.co.za",
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
                    {innovation.logo ? (
                      <img src={innovation.logo} alt={innovation.name} className="w-12 h-12 mr-4 object-contain" />
                    ) : (
                      <span className="text-4xl mr-4">{innovation.icon}</span>
                    )}
                    <h3 className="text-2xl font-semibold text-secondary-dark">
                      {innovation.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{innovation.description}</p>
                  {innovation.link && (
                    <a href={innovation.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary hover:underline text-sm font-medium">
                      Visit {innovation.name} →
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};