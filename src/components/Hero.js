import React from 'react';

const Hero = ({ title, subtitle }) => {
  return (
    <section className="bg-ubuntuBlue text-white py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="max-w-2xl mx-auto text-lg">{subtitle}</p>
    </section>
  );
};

export default Hero;
