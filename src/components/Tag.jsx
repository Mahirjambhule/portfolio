import React from 'react';

export const Tag = ({ text }) => (
    <span className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-[#1a2035] text-slate-700 dark:text-gray-300 rounded-full border border-slate-200 dark:border-white/10 shadow-sm transition-colors duration-300">
        {text}
    </span>
);