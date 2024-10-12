import React from 'react';

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Use Case Dioramas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Virtual Meetings</h3>
            <p>Transform your online meetings with lifelike avatar representations.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Social Networking</h3>
            <p>Connect with friends in immersive virtual environments.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
            <p>Try on virtual clothes and accessories with your personalized avatar.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Gaming</h3>
            <p>Use your avatar across multiple gaming platforms and metaverses.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p>Engage in immersive learning experiences with avatar-based classrooms.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <p>Provide personalized support with AI-powered avatar representatives.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;