import React from 'react';

export const Tag = ({ text }) => (
    <span className="px-3 py-1.5 text-xs font-semibold bg-[var(--surface)] text-[var(--text-secondary)] rounded-md border border-[var(--border)] shadow-xs hover:border-[var(--accent)]/40 transition-colors">
        {text}
    </span>
);