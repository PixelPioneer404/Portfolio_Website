import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "../hooks/useScrollDirection";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroSection, setIsHeroSection] = useState(true);
  const scrollDirection = useScrollDirection();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const checkHeroSection = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsHeroSection(rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", checkHeroSection);
    return () => window.removeEventListener("scroll", checkHeroSection);
  }, []);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Education", id: "education" },
    { name: "Interests", id: "interests" },
    { name: "Learning", id: "learning" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
  ];

  const showMobileHeader = isHeroSection || scrollDirection === "up";

  return (
    <header className="fixed w-full top-4 z-50 px-4">
      {/* Desktop Menu */}
      <nav className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 dark:bg-gray-900/10 rounded-full p-4 shadow-2xl border border-white/20 dark:border-gray-700/20 transform-gpu md:block hidden">
        <div className="flex items-center justify-between">
          <div className="flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: isDark ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            className="p-2 rounded-full hover:bg-gray-200/20 dark:hover:bg-gray-800/20 transition-colors duration-200"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-200" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>
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
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.div>
        </button>

        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isDark ? 360 : 0 }}
          transition={{ duration: 0.5 }}
          className="p-2 rounded-full hover:bg-gray-200/20 dark:hover:bg-gray-800/20"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-gray-200" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4 bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg rounded-[2rem] p-6 border border-white/20 dark:border-gray-700/20">
              {menuItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
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
    </header>
  );
};

export default Header;
