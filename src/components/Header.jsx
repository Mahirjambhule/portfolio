import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { DATA } from '../data';

export const Header = ({ onNavigate, currentView, darkMode, setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { name: 'Home', target: 'home', isSection: true },
        { name: 'About', target: 'about', isSection: true },
        { name: 'Projects', target: 'projects', isSection: true },
        { name: 'Skills', target: 'skills', isSection: true },
        { name: 'Certifications', target: 'certifications', isSection: true },
        { name: 'Contact', target: 'contact', isSection: true },
        { name: 'Blogs', target: 'blogs', isSection: false }
    ];

    useEffect(() => {
        if (currentView !== 'home') {
            setActiveSection(currentView);
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -50% 0px',
            threshold: 0
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id === 'hero' ? 'home' : entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        navItems.forEach(item => {
            if (item.isSection) {
                const el = document.getElementById(item.target === 'home' ? 'hero' : item.target);
                if (el) observer.observe(el);
            }
        });

        const handleTopScroll = () => {
            if (window.scrollY < 100) {
                setActiveSection('home');
            }
        };
        window.addEventListener('scroll', handleTopScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleTopScroll);
        };
    }, [currentView]);

    const handleNavClick = (e, item) => {
        e.preventDefault();
        setIsMenuOpen(false);
        setActiveSection(item.target);
        onNavigate(item.target, item.isSection);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-[var(--bg)]/90 backdrop-blur-md z-50 border-b border-[var(--border)]">
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">

                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = window.location.origin + '/';
                    }}
                    className="font-bold text-xl text-[var(--text)] tracking-tight font-serif cursor-pointer select-none"
                >
                    Mahir<span className="text-[var(--accent)]">.</span>
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map(item => {
                        const isActive = activeSection === item.target;

                        return (
                            <a
                                key={item.name}
                                href={`#${item.target}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className={`relative py-1 transition-colors group cursor-pointer ${isActive ? 'text-[var(--accent)] font-semibold' : 'text-[var(--text-secondary)] hover:text-[var(--accent)]'
                                    }`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--accent)] transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </a>
                        );
                    })}

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="ml-4 p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                        aria-label="Toggle layout color palette"
                    >
                        {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </nav>

                {/* Mobile Navigation Row Buttons */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-lg text-[var(--text-secondary)] cursor-pointer"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button className="text-[var(--text)] cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown Panel Grid */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[var(--bg)] border-b border-[var(--border)] flex flex-col p-6 gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
                    {navItems.map(item => {
                        const isActive = activeSection === item.target;

                        return (
                            <a
                                key={item.name}
                                href={`#${item.target}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className={`font-medium text-base py-1 cursor-pointer ${isActive ? 'text-[var(--accent)] font-semibold' : 'text-[var(--text-secondary)]'
                                    }`}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
};