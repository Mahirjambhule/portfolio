import React from 'react';

export const Tag = ({ text }) => (
    <span className="px-3 py-1.5 text-xs font-semibold bg-white text-zinc-800 rounded-md border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors">
        {text}
    </span>
);