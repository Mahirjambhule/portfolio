import React from 'react';

export const Section = ({ id, title, children, className = '' }) => (
    <section id={id} className={`py-12 scroll-mt-24 border-b border-zinc-200/60 last:border-0 ${className}`}>
        <div className="mb-8">
            <h2 className="text-3xl font-bold font-serif text-[#18181B] tracking-tight">
                {title}
            </h2>
            <div className="w-10 h-[3px] bg-[#DC2626] mt-2"></div>
        </div>
        {children}
    </section>
);