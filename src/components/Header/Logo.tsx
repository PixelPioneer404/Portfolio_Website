import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative overflow-hidden rounded-full ${className}`}
    >
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocIHLxEkDDs4WCc0l2XuOj11B0D4huFhQfroau8CKNgsUJFijcM=s288-c-no"
        alt="Profile"
        className="w-10 h-10 object-cover"
      />
    </motion.div>
  );
};