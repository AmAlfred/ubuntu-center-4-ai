import React from 'react';

const Resources = () => {
  // Sample resources (you can later pull from a CMS)
  const resources = [
    { title: "AI Governance in Africa: 2024 Report", type: "Report", link: "#" },
    { title: "Ethical AI for Public Services", type: "Blog", link: "#" },
    { title: "Monthly Newsletter: Ubuntu AI Digest", type: "Newsletter", link: "#" },
    { title: "AI in Education: Case Studies from Kenya & Nigeria", type: "Article", link: "#" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-ubuntuBlue text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Resources</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Insights, research, and updates on AI governance, innovation, and ethics in Africa.
        </p>
      </section>

      {/* Resource List */}
      <section className="section bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((item, index) => (
              <div key={index} className="card flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <span className="text-sm text-ubuntuBlue font-medium">{item.type}</span>
                </div>
                <a href={item.link} className="text-ubuntuGreen hover:underline font-medium">
                  Read →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500">
              More resources coming soon. Subscribe to our newsletter for updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
