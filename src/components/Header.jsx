import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { DATA } from '../data';

// 👇 Added onNavigate prop so the header can tell App.jsx to change pages
export const Header = ({ isDarkMode, toggleTheme, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 👇 Reordered: Blogs is now at the very bottom/end
    const navItems = [
        { name: 'Home', target: 'home', isSection: false },
        { name: 'About', target: 'about', isSection: true },
        { name: 'Projects', target: 'projects', isSection: true },
        { name: 'Skills', target: 'skills', isSection: true },
        { name: 'Certifications', target: 'certifications', isSection: true },
        { name: 'Contact', target: 'contact', isSection: true },
        { name: 'Blogs', target: 'blogs', isSection: false } 
    ];

    const handleNavClick = (e, item) => {
        e.preventDefault();
        setIsMenuOpen(false);
        // Pass the target to the App to handle the page switch or scrolling
        onNavigate(item.target, item.isSection);
    };

    return (
        <header className="fixed top-0 w-full bg-[#f8faff]/80 dark:bg-[#111520]/80 backdrop-blur-md z-50 transition-colors duration-300 border-b border-slate-200 dark:border-white/10">
            <div className="max-w-5xl mx-auto pl-6 pr-12 md:pr-16 h-20 flex items-center justify-between">
                
                <a href="#" onClick={(e) => handleNavClick(e, { target: 'home', isSection: false })} className="font-bold text-xl text-slate-900 dark:text-white tracking-wide">
                    {DATA.name.split(' ')[0]}
                </a>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navItems.map(item => (
                        <a 
                            key={item.name} 
                            href={`#${item.target}`}
                            onClick={(e) => handleNavClick(e, item)}
                            className="text-slate-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}

                    <button 
                        onClick={toggleTheme} 
                        className="ml-4 text-slate-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors p-2"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </nav>

                <div className="flex items-center gap-4 md:hidden">
                    <button onClick={toggleTheme} className="text-slate-500 dark:text-gray-400">
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className="text-slate-800 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};