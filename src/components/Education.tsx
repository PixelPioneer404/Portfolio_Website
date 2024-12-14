import React from 'react';
import { motion } from 'framer-motion';
import { School, LibraryBig, GraduationCap } from 'lucide-react';

const educationData = [
  {
    level: 'Primary School',
    school: 'Barisha High School',
    description: 'The place from where I got focus on foundational learning, creativity, and social growth in a supportive environment.',
    icon: School,
  },
  {
    level: 'High School',
    school: 'Sarsuna High School',
    description: 'I transferred from Barisha High School because it didn\'t offer computer science in the science stream, which I wanted to pursue. I decided to join Sarsuna High School, as it was the only nearby school that offered computer science in the science stream',
    icon: LibraryBig,
  },
  {
    level: 'UG Degree',
    school: "St. Thomas' College of Engineering and Technology",
    description: "I am currently a B.Tech computer science UG student of 'St. Thomas' College of Engineering and Technology' and have a dream to pursue MTech degree from Massachusetts Institute of Technology (MIT), USA",
    icon: GraduationCap,
  },
];

const grades = [
  { name: '10th Grade', percentage: 77 },
  { name: '12th Grade', percentage: 88 },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-200 dark:bg-gray-800 rounded-3xl section-gradient-1">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <edu.icon className="w-12 h-12 text-blue-500 dark:text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{edu.level}</h3>
              <h4 className="text-lg font-medium mb-3 text-blue-500 dark:text-blue-300">{edu.school}</h4>
              <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl mx-auto px-6 py-4">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">Academic Performance</h3>
          {grades.map((grade, index) => (
            <motion.div
              key={grade.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{grade.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{grade.percentage}%</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${grade.percentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
