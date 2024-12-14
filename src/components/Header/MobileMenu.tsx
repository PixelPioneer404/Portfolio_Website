import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: { name: string; id: string }[];
  onClose: () => void;
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, menuItems, onClose, scrollToSection }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg rounded-[2rem] p-6 border border-white/20 dark:border-gray-700/20"
        >
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.id);
                  onClose(); // Close menu after navigation
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
