import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { MENU_ITEMS } from './constants';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const scrollDirection = useScrollDirection();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const checkHeroSection = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsHeroSection(rect.bottom > 0);
      }
    };

    window.addEventListener('scroll', checkHeroSection);
    return () => window.removeEventListener('scroll', checkHeroSection);
  }, []);

  const showMobileHeader = isHeroSection || scrollDirection === 'up';

  return (
    <header className="fixed w-full top-4 z-50 px-4">
      {/* Desktop Menu */}
      <nav className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 rounded-full p-4 shadow-2xl border border-white/20 dark:border-gray-700/20 transform-gpu md:block hidden">
        <div className="flex items-center justify-between">
          <DesktopMenu menuItems={MENU_ITEMS} onItemClick={scrollToSection} />
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
      </nav>

      {/* Mobile Header */}
      <motion.div
        initial={false}
        animate={{
          y: showMobileHeader ? 0 : -100,
          opacity: showMobileHeader ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden flex justify-between items-center"
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-full hover:bg-gray-200/20 dark:hover:bg-gray-800/20"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </button>

        <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      </motion.div>

      <MobileMenu
        isOpen={isMenuOpen}
        menuItems={MENU_ITEMS}
        onItemClick={scrollToSection}
      />
    </header>
  );
};

export default Header;