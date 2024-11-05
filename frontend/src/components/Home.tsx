import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/home1.jpg';
import img2 from '../assets/home2.jpg';
import img3 from '../assets/home3.jpg';
import rev1 from '../assets/rev1.png';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';

interface Review {
  text: string;
  author?: string;
}

const Home: React.FC = () => {
  const reviews: Review[] = [
    { text: "Laurentine Castelino is grateful to ElderMate for assisting with daily groceries." },
    { text: "ElderMate's mate taught me how to shop online, making life easier." },
    { text: "My ElderMate companion has been a wonderful source of company and support. We go for walks together and have the best conversations." }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#fdf9f4] font-['Poppins']">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div {...fadeIn} className="flex flex-col items-center space-y-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full mt-8">
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={img1}
                alt="Caring companion with elderly person"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </motion.div>

            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-[#517f68] text-4xl md:text-5xl font-bold leading-tight">
                Everything Grandkids Do!
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-gray-800">
                Spirited, empathetic youth companions for the elderly.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#517f68] text-white text-xl rounded-full shadow-lg hover:bg-[#476a59] transition-all duration-300 font-semibold"
              >
                Join the Trial!
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div {...fadeIn} className="my-20">
          <div className="bg-[#ffc425] rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-2xl md:text-3xl font-medium text-center leading-relaxed">
              We are a team of young graduates with a deep affection for the elderly, 
              dedicated to building meaningful relationships with our "Grandpals."
            </p>
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="space-y-24 my-20">
          <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.img
              src={img2}
              alt="Quality time with elderly"
              className="w-full rounded-2xl shadow-lg object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-[#517f68] text-3xl md:text-4xl font-bold leading-tight">
                Experience the Delight of Quality Time
              </h2>
              <p className="text-xl md:text-2xl font-medium text-gray-800">
                Our Goodfellows are always ready to listen with a caring heart.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-[#517f68] text-3xl md:text-4xl font-bold leading-tight">
                Tech-savvy youth bridge the digital divide
              </h2>
              <p className="text-xl md:text-2xl font-medium text-gray-800">
                Our Young Mates are here to guide you through the digital world.
              </p>
            </div>
            <motion.img
              src={img3}
              alt="Digital assistance"
              className="w-full rounded-2xl shadow-lg object-cover order-1 lg:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.div {...fadeIn} className="mt-24">
          <h2 className="text-[#517f68] text-4xl font-bold text-center mb-12">
            Discover Grandpal's tales.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-[#f2f0e7] rounded-xl p-6 shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={rev1}
                    alt="Review"
                    className="w-24 h-24 rounded-full object-cover shadow-md"
                  />
                </div>
                <p className="text-lg font-medium text-gray-800 text-center leading-relaxed">
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
