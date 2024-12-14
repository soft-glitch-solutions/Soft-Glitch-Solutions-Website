import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export const Portfolio = () => {
  const clients = [
    {
      name: "Client 1",
      logo: "🏢",
    },
    {
      name: "Client 2",
      logo: "🏛️",
    },
    {
      name: "Client 3",
      logo: "🏪",
    },
    {
      name: "Client 4",
      logo: "🏭",
    },
    {
      name: "Client 5",
      logo: "🏗️",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Our Clients
          </h2>
          <p className="text-gray-600">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-4xl grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              {client.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};