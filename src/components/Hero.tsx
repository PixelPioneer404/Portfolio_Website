import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { ButtonGlow } from './ui/ButtonGlow';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-y-0 space-y-8">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold flex items-center min-h-[4rem] md:min-h-[5rem]"
            >
              <span className="mr-2 text-black dark:text-white">I'm</span>
              <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-800 text-transparent bg-clip-text leading-normal drop-shadow-[0_0_1px_rgba(59,130,246,0.5)]">
                <Typewriter
                  options={{
                    strings: ['Rajbeer Saha', 'a developer', 'a designer'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 100,
                    skipAddStyles: true,
                  }}
                />
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-black dark:text-gray-400 mb-8 mt-6"
            >
              Passionate developer blending technical expertise with artistic vision to craft immersive digital experiences.
            </motion.p>
            <div className="flex space-x-4 md:justify-start justify-center">
              <ButtonGlow onClick={scrollToProjects} className="md:text-base text-sm">
                View Projects
              </ButtonGlow>
              <ButtonGlow variant="outline" onClick={scrollToContact} className="md:text-base text-sm">
                Contact me
              </ButtonGlow>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center space-x-8">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <Code className="w-16 md:w-24 h-16 md:h-24 text-blue-600" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500/50 rounded-full blur-xl"
              />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="relative"
            >
              <Bot className="w-16 md:w-24 h-16 md:h-24 text-blue-600" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500/50 rounded-full blur-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;