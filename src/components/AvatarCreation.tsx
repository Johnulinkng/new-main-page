import React from 'react';

const AvatarCreation: React.FC = () => {
  return (
    <section id="avatars" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Create Your Digital Self</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1613177794106-be20802b11d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Avatar Creation"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-2xl font-semibold mb-4">Personalize Your Avatar</h3>
            <p className="mb-6">
              Our advanced AI-powered avatar creation tool allows you to design a unique digital representation of yourself. Customize every aspect, from facial features to clothing, and bring your digital persona to life.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Start Creating
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarCreation;