import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import WhoWeAre from './pages/WhoWeAre';
import Trainings from './pages/Trainings';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed in ms
      once: true,     // Run animation only once
      offset: 100,    // Start animation 100px before element is in view
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/trainings" element={<Trainings />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
