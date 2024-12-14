import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  FileCode, 
  Terminal, 
  Globe, 
  Eclipse, 
  Braces, 
  Atom 
} from 'lucide-react';

const skills = [
  { name: 'C', level: 95, icon: Code},
  { name: 'C++', level: 90, icon: FileCode},
  { name: 'Python', level: 80, icon: Terminal},
  { name: 'HTML', level: 85, icon: Globe},
  { name: 'CSS', level: 70, icon: Eclipse},
  { name: 'JavaScript', level: 75, icon: Braces},
  { name: 'ReactJS', level: 60, icon: Atom},
];

const Learning = () => {
  return (
    <section id="learning" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Learning Journey</h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => {
            const SkillIcon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <SkillIcon 
                      className="mr-3 text-gray-700 dark:text-gray-300" 
                      size={24} 
                    />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-blue-600 rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Learning;