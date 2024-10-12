import React from 'react';

const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Our Vision & Mission</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-blue-500 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p>To revolutionize digital interaction through immersive avatar experiences and blockchain technology.</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-purple-500 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p>Empowering individuals and businesses with cutting-edge avatar solutions and a robust Web3 ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;