import React from 'react';

export const Section = ({ id, title, children, className = '' }) => (
    // Added scroll-mt-24 to fix the layout scroll alignment bug
    <section id={id} className={`py-16 scroll-mt-24 border-b border-slate-200 dark:border-white/10 last:border-0 ${className}`}>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-8 flex items-center gap-3 tracking-tight">
            <span className="text-purple-600 dark:text-purple-500">#</span> {title}
        </h2>
        {children}
    </section>
);