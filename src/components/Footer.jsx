import React from 'react';
import { DATA } from '../data';

export const Footer = () => (
    <footer className="text-center py-12 text-sm text-[var(--text-secondary)] border-t border-[var(--border)] bg-[var(--surface)]/40">
        <p>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
    </footer>
);