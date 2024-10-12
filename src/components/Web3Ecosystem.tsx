import React from 'react';

const Web3Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Web3 & NFT Ecosystem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">NFT Avatars</h3>
            <p>Own your digital identity as a unique NFT, tradeable on the blockchain.</p>
          </div>
          <div className="bg-purple-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Decentralized Identity</h3>
            <p>Secure and portable identity management across multiple platforms.</p>
          </div>
          <div className="bg-green-600 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Token Economy</h3>
            <p>Participate in our ecosystem with DIGI tokens, powering transactions and governance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Ecosystem;