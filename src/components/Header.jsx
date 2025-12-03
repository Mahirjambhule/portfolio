import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { DATA } from '../data';


export const Header = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const navItems = [
{ name: 'About', href: '#about' },
{ name: 'Projects', href: '#projects' },
{ name: 'Skills', href: '#skills' },
{ name: 'Certifications', href: '#certifications' },
{ name: 'Contact', href: '#contact' }
];


return (
    <header className="fixed top-0 w-full bg-gray-950/95 border-b border-gray-800 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="font-bold text-lg text-white tracking-wide">{DATA.name.split(' ')[0].toUpperCase()}.DEV</a>


            <nav className="hidden md:flex gap-6 text-sm font-medium">
                {navItems.map(item => (
                <a key={item.name} href={item.href} className="hover:text-blue-400 transition-colors">{item.name}</a>
                ))}
                <a href={DATA.socials.resume} className="text-blue-400 hover:underline flex items-center gap-2"><FileText size={16} />Resume</a>
            </nav>


            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>


        {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 p-4 space-y-4">
        {navItems.map(item => (
        <a key={item.name} href={item.href} className="block hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>{item.name}</a>
        ))}
        </div>
        )}
    </header>
);
};