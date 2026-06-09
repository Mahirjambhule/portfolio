import React from 'react';

export const Section = ({ id, title, children, className = '' }) => (
    <section id={id} className={`py-16 scroll-mt-24 ${className}`}>
        <div className="mb-8">
            <h2 className="text-3xl font-bold font-serif text-[var(--text)] tracking-tight">
                {title}
            </h2>
            <div className="w-10 h-[3px] bg-[var(--accent)] mt-2"></div>
        </div>
        {children}
    </section>
);