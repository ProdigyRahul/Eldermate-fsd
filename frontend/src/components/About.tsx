import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Eldermate</h2>
          <p className="mt-4 text-lg text-gray-600">
            We're dedicated to providing exceptional care and companionship to seniors,
            ensuring they live their golden years with dignity and joy.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Add about content here */}
        </div>
      </div>
    </section>
  );
};

export default About;
