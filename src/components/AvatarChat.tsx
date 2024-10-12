import React from 'react';

const AvatarChat: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Engage in Avatar Chat</h2>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt="Avatar Chat"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Lifelike Conversations</h3>
            <p className="mb-6">
              Experience the future of digital communication with our avatar chat feature. Engage in lifelike conversations, express emotions, and connect with others in a whole new way.
            </p>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300">
              Try Avatar Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarChat;