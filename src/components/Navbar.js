import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo Placeholder */}
            <Link to="/">
              <img src="/logo.png" alt="Ubuntu AI Center Logo" className="h-10" />
            </Link>
          </div>
          <div className="flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
            <Link to="/our-work" className="text-gray-700 hover:text-green-600 font-medium">Our Work</Link>
            <Link to="/who-we-are" className="text-gray-700 hover:text-green-600 font-medium">Who We Are</Link>
            <Link to="/trainings" className="text-gray-700 hover:text-green-600 font-medium">Trainings</Link>
            <Link to="/resources" className="text-gray-700 hover:text-green-600 font-medium">Resources</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;