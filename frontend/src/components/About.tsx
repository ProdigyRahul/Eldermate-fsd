import React from 'react';
import rahul from '../assets/Rahul.png';
import melita from '../assets/Melita.png';

const About: React.FC = () => {
  return (
    <div className="text-center p-10 font-sans">
      <h1 className="text-4xl font-bold mb-5 text-teal-700">About Us</h1>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-2 font-serif">Our Mission</h2>
        <div className="border-2 border-gray-300 rounded-lg p-5 mx-auto max-w-2xl">
          <p className="text-lg leading-6 font-serif">
            At ElderMate, we believe that no one should feel alone, especially our elders. We're committed to building meaningful relationships between seniors and compassionate individuals who provide companionship, assistance, and emotional support.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-2 font-serif">What we do?</h2>
        <div className="border-2 border-gray-300 rounded-lg p-5 mx-auto max-w-2xl">
          <p className="text-lg leading-6 font-serif">
            Our platform connects young people and volunteers with the elderly to foster a sense of family, making sure that seniors feel loved, valued, and supported throughout their golden years.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-2 font-serif">Founders</h2>
        <div className="flex justify-center flex-wrap gap-10">
          <div className="text-center w-full max-w-xs border-2 border-gray-300 rounded-lg">
            <img src={rahul} alt="Rahul Mistry" className="w-36 h-36 rounded-lg mb-3 p-3 mx-auto" />
            <h3 className="text-2xl mb-2 font-serif">Rahul Mistry</h3>
            <p className="text-base">I am just a Tech!</p>
          </div>
          <div className="text-center w-full max-w-xs border-2 border-gray-300 rounded-lg">
            <img src={melita} alt="Melita Castelino" className="w-36 h-36 rounded-lg mb-3 p-3 mx-auto" />
            <h3 className="text-2xl mb-2 font-serif">Melita Castelino</h3>
            <p className="text-base">Hello</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
