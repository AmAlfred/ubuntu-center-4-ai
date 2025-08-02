const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ubuntu Center for AI Governance and Innovation. All rights reserved.</p>
        <p className="mt-2">Driving ethical, African-led AI for sustainable development and digital sovereignty.</p>
      </div>
    </footer>
  );
};

export default Footer;