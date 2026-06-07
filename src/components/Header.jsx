import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
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

    React.useEffect(() => {
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
        <header className="fixed top-0 w-full bg-[#F5F5F4]/90 backdrop-blur-md z-50 border-b border-zinc-200/60">
            <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                
                <a 
                    href="#" 
                    onClick={(e) => handleNavClick(e, { target: 'home', isSection: false })} 
                    className="font-bold text-xl text-[#18181B] tracking-tight font-serif"
                >
                    {DATA.name.split(' ')[0]}<span className="text-[#DC2626]">.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navItems.map(item => {
                        const isActive = activeSection === item.target;
                        const isBlogs = item.target === 'blogs';

                        if (isBlogs) {
                            return (
                                <a 
                                    key={item.name} 
                                    href={`#${item.target}`}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className={`px-3.5 py-1.5 rounded-md border transition-all duration-200 ${
                                        isActive 
                                        ? 'bg-[#DC2626] text-white border-[#DC2626]' 
                                        : 'border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            );
                        }

                        return (
                            <a 
                                key={item.name} 
                                href={`#${item.target}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className={`relative py-1 transition-colors group ${
                                    isActive ? 'text-[#DC2626]' : 'text-zinc-600 hover:text-[#DC2626]'
                                }`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#DC2626] transition-all ${
                                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </a>
                        );
                    })}
                </nav>

                {/* Mobile Menu Trigger */}
                <div className="flex items-center gap-4 md:hidden">
                    <button className="text-[#18181B]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[#F5F5F4] border-b border-zinc-200 flex flex-col p-6 gap-4 shadow-lg">
                    {navItems.map(item => {
                        const isBlogs = item.target === 'blogs';
                        const isActive = activeSection === item.target;

                        if (isBlogs) {
                            return (
                                <a 
                                    key={item.name} 
                                    href={`#${item.target}`}
                                    onClick={(e) => handleNavClick(e, item)}
                                    className={`text-center font-medium text-base px-4 py-2 rounded-md border mt-2 transition-colors ${
                                        isActive 
                                        ? 'bg-[#DC2626] text-white border-[#DC2626]' 
                                        : 'border-[#DC2626] text-[#DC2626] bg-white'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            );
                        }

                        return (
                            <a 
                                key={item.name} 
                                href={`#${item.target}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className={`font-medium text-base py-1 ${
                                    isActive ? 'text-[#DC2626]' : 'text-zinc-700'
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