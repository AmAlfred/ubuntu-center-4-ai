import React from 'react';

const OurWork = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-ubuntuBlue text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Work</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Driving Africa’s AI future through governance, innovation, and inclusive capacity building.
        </p>
      </section>

      {/* Main Content */}
      <section className="section bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* AI Policy & Governance */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-ubuntuGreen mb-6">
              AI Policy and Governance
            </h3>
            <p className="text-lg text-gray-700 mb-6 italic">
              Building Ethical AI Ecosystems for Africa’s Sustainable Development
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-5">
              <li><strong>National AI Policy Advisory:</strong> Help governments develop or revise AI strategies and regulatory frameworks aligned with global standards.</li>
              <li><strong>AI Ethics Auditing & Risk Assessment:</strong> Tools and services to evaluate algorithmic bias, data privacy, explainability, and social impact.</li>
              <li><strong>AI Impact Assessments:</strong> Evaluate economic, social, and human rights impacts of AI in health, education, and security.</li>
              <li><strong>Multistakeholder Dialogue:</strong> Facilitate roundtables between government, private sector, academia, and civil society.</li>
              <li><strong>AI Research & Reports:</strong> Publish evidence-based research on AI development, deployment, and governance across Africa.</li>
              <li><strong>AI Initiative Consulting:</strong> Align stakeholder initiatives with continental frameworks like AU’s AI Continental Strategy.</li>
            </ul>
          </div>

          {/* Capacity Building */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-ubuntuBlue mb-6">
              AI Capacity Building and Innovation
            </h3>
            <p className="text-lg text-gray-700 mb-6 italic">
              From local solutions to global influence; one policy, one innovation, one leader at a time
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-5">
              <li><strong>AI Governance Bootcamps:</strong> Short-term executive training for policymakers, legal professionals, regulators, and public servants.</li>
              <li><strong>AI Governance Fellowships:</strong> Train African students, researchers, and professionals in socially beneficial AI.</li>
              <li><strong>AI in Schools Program:</strong> Promote computational thinking and AI literacy through digital curriculum modules.</li>
              <li><strong>Public AI Literacy Campaigns:</strong> Raise awareness of data rights, algorithmic fairness, and ethical tech.</li>
            </ul>
          </div>

          {/* AI & Robotics Lab */}
          <div>
            <h3 className="text-2xl font-bold text-ubuntuGreen mb-6">
              AI and Robotics Lab
            </h3>
            <p className="text-lg text-gray-700 mb-6 italic">
              Where African AI and Robotics Innovations Meet Responsible Governance
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-5">
              <li><strong>Incubates AI Startups:</strong> Solving local challenges in health, agriculture, climate, education, and finance.</li>
              <li><strong>Hosts Innovation Challenges:</strong> Crowdsource scalable AI solutions for the Sustainable Development Goals (SDGs).</li>
              <li><strong>Robotics Hackathons:</strong> Foster innovation, collaboration, and learning in robotics.</li>
              <li><strong>Data Sharing Platforms:</strong> Connect government, private sector, and researchers to share and govern data responsibly.</li>
              <li><strong>Ethical AI Tools:</strong> Design and test tools for local government planning, tax collection, and resource allocation.</li>
              <li><strong>Global Representation:</strong> Support individuals to represent African interests in global AI platforms.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
