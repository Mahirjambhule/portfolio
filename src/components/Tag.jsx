import React from 'react';

export const Tag = ({ text }) => (
<span className="px-3 py-1.5 text-xs font-semibold bg-zinc-200/60 text-zinc-800 rounded-md border border-zinc-300/40 shadow-xs hover:border-zinc-400/60 transition-colors">        {text}
    </span>
);