import React from 'react';
import { DATA } from '../data';


export const Footer = () => (
    <footer className="text-center py-8 text-sm text-gray-600">
        <p>Built with React & Tailwind CSS by {DATA.name}</p>
    </footer>
);