import React from 'react';
import { motion } from 'framer-motion';
import { Video, Palette, Code, Cpu } from 'lucide-react';

const interests = [
  { title: 'Video Editing', icon: Video, description: 'Creating engaging visual content' },
  { title: 'UI/UX Design', icon: Palette, description: 'Crafting beautiful user experiences' },
  { title: 'Development', icon: Code, description: 'Building powerful applications' },
  { title: 'Robotics', icon: Cpu, description: 'Exploring automation and AI' },
];

const Interests = () => {
  return (
    <section id="interests" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.1)',
              }}
            >
              <interest.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{interest.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
