import React from 'react';
import img2 from '../assets/home2.jpg'
import img3 from '../assets/home3.jpg'
import img4 from '../assets/home4.jpg'
import img5 from '../assets/home5.png'

const services = [
    {
        image: img2,
        title: 'Experience the Delight of Quality Time',
        description: 'Our Goodfellows are always ready to listen with a caring heart.',
        className: 'bg-white'
    },
    {
        image: img3,
        title: 'Tech-savvy',
        description: 'Young minds helping you navigate the digital world.',
        className: 'bg-white'
    },
    {
        image: img4,
        title: 'Enjoy the company while you walk',
        description: 'Let us explore together, whether it is for a casual stroll or a specific destination.',
        className: 'bg-white'
    },
    {
        image: img5,
        title: 'Need help with daily errands?',
        description: 'Our Young Mates are here to assist you with shopping, appointments, and more.',
        className: 'bg-white'
    }
];

const Services = () => {
    return (
        <section className="py-16 bg-[#faf9f6]">
            <div className="container mx-auto">
                <h2 className="text-center text-5xl font-serif text-[#467362] mb-16 px-4">
                    Our Services
                </h2>

                {/* Scrollable container */}
                <div className="relative">
                    <div className="overflow-x-auto flex gap-6 snap-x snap-mandatory px-4 pb-4 scrollbar-hide">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="min-w-[600px] flex-shrink-0 snap-center bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Removed aspect ratio constraint and adjusted image container */}
                                <div className="w-full">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-half h-[700px] object-cover object-center"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-medium text-[#467362] mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

// Optional: Add this CSS to your global styles to customize the scrollbar
const globalStyles = `
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-x: scroll;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
`;