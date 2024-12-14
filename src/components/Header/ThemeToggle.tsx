import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: isDark ? 360 : 0 }}
      transition={{ duration: 0.5 }}
      className="p-2 rounded-full hover:bg-gray-200/20 dark:hover:bg-gray-800/20 transition-colors duration-200"
    >
      {isDark ? <Sun className="w-5 h-5 text-gray-200" /> : <Moon className="w-5 h-5 text-gray-700" />}
    </motion.button>
  );
};