import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Globe } from 'lucide-react';

const timeline = [
  {
    year: '2019',
    title: 'Started Coding Journey',
    description: 'Began learning C as my first programming language',
    icon: Code2,
  },
  {
    year: '2021',
    title: 'Advanced Programming',
    description: 'Mastered C++ and started learning Python',
    icon: BrainCircuit,
  },
  {
    year: '2023',
    title: 'Web Development',
    description: 'Started web development journey in February',
    icon: Globe,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Experience</h2>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
          
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10"
              >
                <div className="absolute w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full -m-2 animate-ping opacity-75" />
              </motion.div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-sm font-semibold text-blue-600">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;