import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-ubuntuBlue to-ubuntuGreen text-white px-6">
        {/* Heading */}
        <h1
          className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl"
          data-aos="fade-up"
        >
          Shaping Africa’s Digital Future
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl max-w-2xl mb-8 opacity-90"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ethical, inclusive, and transformative AI for Africa — empowering
          governance, innovation, and people.
        </p>

        {/* Call to Actions */}
        <div className="flex gap-4" data-aos="fade-up" data-aos-delay="400">
          <Link
            to="/our-work"
            className="bg-white text-ubuntuBlue px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg hover:scale-105 transition"
          >
            Explore Our Work
          </Link>
          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-ubuntuBlue transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
