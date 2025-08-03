import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md text-ubuntuBlue"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          Ubuntu AI Center
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/our-work" className="hover:text-ubuntuGreen transition">
            Our Work
          </Link>
          <Link to="/who-we-are" className="hover:text-ubuntuGreen transition">
            Who We Are
          </Link>
          <Link to="/trainings" className="hover:text-ubuntuGreen transition">
            Trainings
          </Link>
          <Link to="/resources" className="hover:text-ubuntuGreen transition">
            Resources
          </Link>
          <Link to="/contact" className="hover:text-ubuntuGreen transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
