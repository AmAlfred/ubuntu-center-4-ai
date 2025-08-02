import React from 'react';

const Home = () => {
  return (
    <div className="py-10 bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 via-blue-600 to-green-700 text-white py-24">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Empowering Africa’s Future Through Inclusive and Responsible AI
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            We are building ethical, inclusive, and African-led AI ecosystems where governance, innovation, and policy come together to drive sustainable development, digital sovereignty, and global influence.
          </p>
          <p className="text-md md:text-lg mb-10 max-w-3xl mx-auto">
            From shaping national strategies to incubating groundbreaking startups, we equip governments, institutions, and changemakers to lead in the age of artificial intelligence.
          </p>
          <p className="text-lg font-medium mb-12">Join us in placing Africa at the heart of the global AI movement.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Partner With Us
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
              Explore Our Innovation Lab
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
              Access Our Programs
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Shaping Africa’s AI Future — Together</h2>
          <p className="text-lg text-gray-600">
            We believe African voices must lead the global AI conversation. Through policy, innovation, and education, we’re building a future where AI serves the people, respects rights, and drives equitable growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;