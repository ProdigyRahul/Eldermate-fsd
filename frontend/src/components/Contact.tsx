import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get in touch with us for any questions or concerns.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form className="space-y-6">
            {/* Add contact form here */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
