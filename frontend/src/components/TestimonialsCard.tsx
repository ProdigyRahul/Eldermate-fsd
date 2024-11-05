import React from 'react';

interface TestimonialCardProps {
    backgroundColor: string;
    imageURL: string;
    clientName: string;
    testimonialText: string;
    rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ backgroundColor, clientName, testimonialText, rating, imageURL }) => {
    return (
        <div className="w-72 p-5 text-[#517f68] rounded-lg shadow-lg text-center mr-5 flex-shrink-0" style={{ backgroundColor }}>
            <div className="flex justify-center mb-4">
                <img src={imageURL} alt={`${clientName}'s testimonial`} className="w-20 h-20 rounded-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{clientName}</h3>
            <p className="text-sm mb-2 line-clamp-2">{testimonialText}</p>
            <div className="text-xl text-yellow-400 mb-2">{'★'.repeat(rating)}</div>
            <button className="bg-white text-inherit border-none py-2 px-3 rounded hover:bg-gray-200 transition duration-300">See More</button>
        </div>
    );
};

export default TestimonialCard;
