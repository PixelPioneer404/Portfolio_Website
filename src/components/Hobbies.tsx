import React from 'react';
import { motion } from 'framer-motion';
import { Pencil, Box, Plane } from 'lucide-react';

const hobbies = [
  { title: 'Drawing', icon: Pencil, description: 'Expressing creativity through art' },
  { title: 'Cube Solving', icon: Box, description: 'Mastering the Rubik\'s cube' },
  { title: 'Travelling', icon: Plane, description: 'Exploring new places and cultures' },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Hobbies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-6 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.1)',
              }}
            >
              <hobby.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{hobby.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
