import React, { useState } from 'react';

interface Feedback {
    id: string;
    rating: number;
    comment: string;
}

const RatingAndFeedback: React.FC = () => {
    const [feedback, setFeedback] = useState<Feedback[]>([
        { id: '1', rating: 4, comment: 'Great event, had a lot of fun!' },
        { id: '2', rating: 3, comment: 'Decent event, could use some improvements.' },
    ]);

    const [newFeedback, setNewFeedback] = useState<Feedback>({
        id: '3',
        rating: 0,
        comment: '',
    });

    const handleFeedbackChange = (field: 'rating' | 'comment', value: number | string) => {
        setNewFeedback(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmitFeedback = () => {
        setFeedback(prev => [...prev, newFeedback]);
        setNewFeedback({ id: '4', rating: 0, comment: '' });
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Rating and Feedback</h2>
            <div className="space-y-4">
                <h3 className="text-xl font-medium">Your Feedback</h3>
                {feedback.map(item => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <div className="flex items-center space-x-2">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <svg
                                        key={star}
                                        className={`w-6 h-6 ${item.rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600">{item.comment}</p>
                        </div>
                    </div>
                ))}
                <div className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center">
                    <div>
                        <div className="flex items-center space-x-2">
                            {[1, 2, 3, 4, 5].map(star => (
                                <svg
                                    key={star}
                                    className={`w-6 h-6 ${newFeedback.rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                                    onClick={() => handleFeedbackChange('rating', star)}
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <textarea
                            className="w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Leave a comment..."
                            value={newFeedback.comment}
                            onChange={e => handleFeedbackChange('comment', e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        onClick={handleSubmitFeedback}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RatingAndFeedback;