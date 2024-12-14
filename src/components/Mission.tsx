import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export const Mission = () => {
  const values = [
    {
      title: "Membership Organizations",
      description: "For membership programs and community management.",
      icon: "👥",
    },
    {
      title: "National Associations",
      description: "Supporting nationwide organizational networks.",
      icon: "🏢",
    },
    {
      title: "Clubs And Groups",
      description: "Perfect for social clubs and interest groups.",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
            Manage your entire community
          </h2>
          <p className="text-gray-600">in a single system</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-white hover:shadow-lg transition-shadow">
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