import React, { useState } from 'react';

const Trainings = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly for payment and confirmation.');
    setFormData({ name: '', email: '', phone: '', amount: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-ubuntuBlue text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Training Registration</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Build the skills to lead Africa’s AI transformation through our bootcamps, fellowships, and school programs.
        </p>
      </section>

      {/* Registration Form */}
      <section className="section bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-100"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
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

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-ubuntuGreen focus:border-ubuntuGreen"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Amount (USD) *</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                placeholder="e.g. 50"
                className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-ubuntuGreen focus:border-ubuntuGreen"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Register & Pay
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Trainings;
