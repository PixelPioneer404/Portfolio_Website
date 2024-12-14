import React from 'react';
import { MenuItem } from './types';
import { Logo } from './Logo';

interface DesktopMenuProps {
  menuItems: MenuItem[];
  onItemClick: (id: string) => void;
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems, onItemClick }) => {
  return (
    <div className="flex items-center space-x-8">
      <Logo className="mr-4" />
      {menuItems.map((item) => (
        <button
          key={item.name}
          onClick={() => onItemClick(item.id)}
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};