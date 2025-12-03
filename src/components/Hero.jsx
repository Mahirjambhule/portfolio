import React from "react";
import { DATA } from "../data";

export const Hero = () => (
  <section className="py-20 flex flex-col justify-center min-h-[60vh] border-b border-gray-800">
    <p className="text-blue-400 font-mono mb-4">Hi, my name is</p>

    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
      {DATA.name}
    </h1>

    <h2 className="text-3xl md:text-4xl font-bold text-gray-500 mb-6">
      {DATA.role}
    </h2>

  </section>
);
