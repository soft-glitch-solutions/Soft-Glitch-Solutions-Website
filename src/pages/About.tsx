import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import aboutData from "../data/about.json";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-4">
            {aboutData.title}
          </h1>
          <p className="text-xl text-gray-600">{aboutData.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">{aboutData.content.intro}</p>
            <p className="text-lg text-gray-700">{aboutData.content.story}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-2xl font-semibold text-secondary-dark">Our Values</h2>
            {aboutData.content.values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-secondary-dark mb-8 text-center">
            {aboutData.content.team.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.content.team.members.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-secondary-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-primary mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;