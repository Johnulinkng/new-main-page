import React from 'react';

const TrustCenter: React.FC = () => {
  return (
    <section id="trust" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Trust & Information Center</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Privacy & Security</h3>
            <p className="mb-4">We prioritize your data protection and privacy. Learn about our advanced security measures and how we safeguard your digital identity.</p>
            <a href="#" className="text-blue-400 hover:underline">Read our Privacy Policy</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Blockchain Technology</h3>
            <p className="mb-4">Understand how we leverage blockchain to ensure transparency, security, and ownership of your digital assets.</p>
            <a href="#" className="text-blue-400 hover:underline">Explore our Blockchain FAQ</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Community Guidelines</h3>
            <p className="mb-4">Learn about our community standards and how we maintain a safe and respectful environment for all users.</p>
            <a href="#" className="text-blue-400 hover:underline">View Community Guidelines</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Support & Resources</h3>
            <p className="mb-4">Access our knowledge base, tutorials, and customer support to make the most of your Digiternity experience.</p>
            <a href="#" className="text-blue-400 hover:underline">Visit Help Center</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCenter;