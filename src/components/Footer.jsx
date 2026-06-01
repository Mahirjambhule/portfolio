import React from 'react';
import { DATA } from '../data';

export const Footer = () => (
    <footer className="text-center py-12 text-sm text-zinc-500 border-t border-zinc-200 bg-[#FAFAF9]">
        <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
    </footer>
);