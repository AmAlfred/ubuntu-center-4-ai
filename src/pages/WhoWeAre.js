import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-ubuntuBlue text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Shaping Africa’s digital future through ethical, inclusive, and transformative AI.
        </p>
      </section>

      {/* Main Content */}
      <section className="section bg-gray-50">
        <div className="max-w-5xl mx-auto text-center px-6">
          <p className="text-xl text-gray-700 leading-relaxed">
            The <strong>Ubuntu Center for AI Governance and Innovation</strong> is a pan-African think-and-do tank dedicated to shaping Africa’s digital future through ethical, inclusive, and transformative artificial intelligence.
          </p>
          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            We work closely with governments, institutions, and sectors across Africa to co-create robust AI ecosystems that serve the public good. From advising on national AI strategies and policy frameworks, to building the talent and infrastructure needed to govern AI responsibly, we are equipping Africa to lead in the global AI era.
          </p>
          <div className="mt-10 p-8 bg-ubuntuBlue/10 border-l-4 border-ubuntuBlue rounded">
            <p className="text-lg italic text-ubuntuBlue">
              "We believe technology must reflect African values, priorities, and wisdom. Ubuntu — I am because we are — guides our mission."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
