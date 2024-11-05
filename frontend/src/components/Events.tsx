import React from 'react';
import ev1 from '../assets/Event 1.jpg';
import ev2 from '../assets/Event 2.jpg';
import ev3 from '../assets/Event 3.jpg';

function Events() {
  return (
    <div className="bg-[#fdf9f4]  p-8">
      <h1 className="text-[#517f68] font-serif text-4xl mb-8 text-center">Events</h1>
      <div className="flex justify-center flex-wrap gap-8 overflow-x-auto snap-x snap-mandatory px-4 pb-4 scrollbar-hide">
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <img
              className="w-full max-w-[400px] rounded-lg mb-6"
              src={ev1}
              alt="Group of people with balloons"
            />
            <h2 className="text-[#517f68] font-serif text-4xl mb-4">
              Dance to the Rhythm of Joyful Moments
            </h2>
            <p className="text-gray-600 text-xl mb-6 max-w-2xl">
              Let the music lift your spirits and the company fill your heart, as we create an evening of song and dance.
            </p>
            <button className="px-8 py-3 bg-[#517f68] text-white rounded-md text-lg hover:bg-[#476a59] transition-colors">
              Join Now
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <img
              className="w-full max-w-[400px] rounded-lg mb-6"
              src={ev2}
              alt="Group of people with balloons"
            />
            <h2 className="text-[#517f68] font-serif text-4xl mb-4">
              Embrace the Outdoors, One Step at a Time
            </h2>
            <p className="text-gray-600 text-xl mb-6 max-w-2xl">
              Join us for a refreshing trek and picnic, where nature’s beauty meets delightful company.
            </p>
            <button className="px-8 py-3 bg-[#517f68] text-white rounded-md text-lg hover:bg-[#476a59] transition-colors">
              Join Now
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <img
              className="w-full max-w-[400px] rounded-lg mb-6"
              src={ev3}
              alt="Group of people with balloons"
            />
            <h2 className="text-[#517f68] font-serif text-4xl mb-4">
              Unleash Your Creativity, One Brushstroke at a Time
            </h2>
            <p className="text-gray-600 text-xl mb-6 max-w-2xl">
              Discover the joy of art with fellow creators, crafting memories and masterpieces alike.
            </p>
            <button className="px-8 py-3 bg-[#517f68] text-white rounded-md text-lg hover:bg-[#476a59] transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
