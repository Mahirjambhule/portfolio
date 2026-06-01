import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { DATA } from '../data';

export const Header = ({ onNavigate, currentView }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
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
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        navItems.forEach(item => {
            if (item.isSection) {
                const el = document.getElementById(item.target);
                if (el) observer.observe(el);
            }
        });

        const handleTopScroll = () => {
            if (window.scrollY < 150) {
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
        <header className="fixed top-0 w-full bg-[#FAFAF9]/90 backdrop-blur-md z-50 border-b border-zinc-200/60">
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">

                <a
                    href="#"
                    onClick={(e) => handleNavClick(e, { target: 'home', isSection: false })}
                    className="font-bold text-xl text-[#18181B] tracking-tight font-serif"
                >
                    {DATA.name.split(' ')[0]}<span className="text-[#DC2626]">.</span>
                </a>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navItems.map(item => {
                        const isActive = activeSection === item.target;
                        return (
                            <a
                                key={item.name}
                                href={`#${item.target}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className={`relative py-1 transition-colors group ${isActive ? 'text-[#DC2626]' : 'text-zinc-600 hover:text-[#DC2626]'
                                    }`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#DC2626] transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </a>
                        );
                    })}

                    <button
                        onClick={() => onNavigate('resume', false)}
                        className={`flex items-center gap-2 border px-4 py-2 rounded-lg text-xs transition-colors font-semibold ${currentView === 'resume'
                                ? 'border-[#DC2626] bg-[#DC2626]/5 text-[#DC2626]'
                                : 'border border-zinc-300 text-[#18181B] hover:bg-zinc-100 hover:border-zinc-400'
                            }`}
                    >
                        <FileText size={14} className={currentView === 'resume' ? 'text-[#DC2626]' : 'text-[#DC2626]'} /> Resume
                    </button>
                </nav>

                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => onNavigate('resume', false)}
                        className={`p-2 ${currentView === 'resume' ? 'text-[#DC2626]' : 'text-[#18181B]'}`}
                    >
                        <FileText size={20} />
                    </button>
                    <button className="text-[#18181B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[#FAFAF9] border-b border-zinc-200 flex flex-col p-6 gap-4 shadow-lg">
                    {navItems.map(item => (
                        <a
                            key={item.name}
                            href={`#${item.target}`}
                            onClick={(e) => handleNavClick(e, item)}
                            className={`font-medium text-base ${activeSection === item.target ? 'text-[#DC2626]' : 'text-zinc-700'
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};