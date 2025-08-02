import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent! We will respond within 48 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-ubuntuBlue text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We’d love to hear from you — partnerships, collaborations, or just to say hello.
        </p>
      </section>

      {/* Main Section */}
      <section className="section bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-ubuntuGreen focus:border-ubuntuGreen"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-ubuntuGreen focus:border-ubuntuGreen"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject / Inquiry Type *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-ubuntuGreen focus:border-ubuntuGreen"
              >
                <option value="">Select an option</option>
                <option value="Partnership">Partnership</option>
                <option value="Training">Training</option>
                <option value="Media">Media Inquiry</option>
                <option value="General">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message / Comment *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-ubuntuGreen focus:border-ubuntuGreen"
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-center mt-16">
            <h3 className="text-xl font-semibold text-ubuntuBlue mb-4">Get In Touch</h3>
            <p className="text-gray-600">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@ubuntucenter4ai.org" className="text-ubuntuBlue underline">
                info@ubuntucenter4ai.org
              </a>
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong>{' '}
              <a href="tel:+254XXXXXXXXX" className="text-ubuntuBlue underline">
                +254 XXX XXX XXX
              </a>
            </p>

            <div className="mt-4">
              <strong>Follow Us:</strong>
              <div className="flex justify-center space-x-6 mt-2 text-ubuntuBlue">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
