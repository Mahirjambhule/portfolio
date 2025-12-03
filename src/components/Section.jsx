import React from 'react';


export const Section = ({ id, title, children, className = '' }) => (
    <section id={id} className={`py-16 border-b border-gray-800 last:border-0 ${className}`}>
    <h2 className="text-2xl font-bold text-gray-100 mb-8 flex items-center gap-3">
    <span className="text-blue-400">#</span> {title}
    </h2>
    {children}
    </section>
);


