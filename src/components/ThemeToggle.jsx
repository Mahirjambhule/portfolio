import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-borderLight dark:border-borderDark hover:bg-borderLight/30 dark:hover:bg-borderDark/30 transition-all duration-200"
      aria-label="Toggle structural theme"
    >
      {darkMode ? (
        <Sun size={18} className="text-brandOrange" />
      ) : (
        <Moon size={18} className="text-textLight" />
      )}
    </button>
  );
}