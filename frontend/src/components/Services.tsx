import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img2 from '../assets/home2.jpg';
import img3 from '../assets/home3.jpg';
import img4 from '../assets/home4.jpg';
import img5 from '../assets/home5.png';

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Sample services data (replace image imports with your actual paths)
  const services = [
    {
      title: 'Experience the Delight of Quality Time',
      description: 'Our Goodfellows are always ready to listen with a caring heart.',
      // Using placeholder image for demonstration
      image: img2
    },
    {
      title: 'Tech-savvy',
      description: 'Young minds helping you navigate the digital world.',
      image: img3
    },
    {
      title: 'Enjoy the company while you walk',
      description: 'Let us explore together, whether it is for a casual stroll or a specific destination.',
      image: img4
    },
    {
      title: 'Need help with daily errands?',
      description: 'Our Young Mates are here to assist you with shopping, appointments, and more.',
      image: img5
    }
  ];


  const scrollContainer = (direction) => {
    const container = document.getElementById('services-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft);
  };

  return (
    <section className="py-12 bg-[#fdf9f4] ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-emerald-800 text-center mb-8">
          Our Services
        </h2>

        <div className="relative">
          <button
            onClick={() => scrollContainer('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 lg:flex hidden"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-800" />
          </button>
          
          <button
            onClick={() => scrollContainer('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 lg:flex hidden"
          >
            <ChevronRight className="w-6 h-6 text-emerald-800" />
          </button>

          <div
            id="services-container"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6"
            onScroll={handleScroll}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[400px] flex-none snap-center bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 md:h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-medium text-emerald-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                  <button className="mt-4 text-emerald-600 font-medium hover:text-emerald-800 transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {services.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  index === Math.floor(scrollPosition / 300) 
                    ? 'bg-emerald-600' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;