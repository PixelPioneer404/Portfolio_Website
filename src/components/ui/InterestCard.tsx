import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from './Modal';

interface InterestCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  type: 'interest' | 'hobby';
  longDescription: string;
}

export const InterestCard: React.FC<InterestCardProps> = ({
  title,
  description,
  icon: Icon,
  type,
  longDescription,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsModalOpen(true)}
        className="p-6 rounded-xl card-bg-light backdrop-blur-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
        <span className={`mt-3 inline-block px-3 py-1 rounded-full text-sm ${
          type === 'interest'
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
            : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
        }`}>
          {type === 'interest' ? 'Interest' : 'Hobby'}
        </span>
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{longDescription}</p>
        </div>
      </Modal>
    </>
  );
};