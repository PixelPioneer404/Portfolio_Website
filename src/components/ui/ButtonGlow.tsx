import React from 'react';
import { motion } from 'framer-motion';

interface ButtonGlowProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'outline';
}

export const ButtonGlow: React.FC<ButtonGlowProps> = ({ children, onClick, variant = 'default' }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-8 py-3 rounded-full overflow-hidden group transition-all duration-300
        ${variant === 'default' 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-transparent border-2 border-blue-600 text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white'
        }
      `}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className={`
          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ${variant === 'default'
            ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
            : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600'
          }
        `}
        initial={false}
        animate={{
          y: ['100%', '-100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.button>
  );
};