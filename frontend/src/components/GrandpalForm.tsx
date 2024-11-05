import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GrandpalForm: React.FC = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [livingStatus, setLivingStatus] = useState('');
    const [disease, setDisease] = useState('');
    const [reason, setReason] = useState('');
    const [children, setChildren] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const grandpalData = {
            name,
            age,
            livingStatus,
            disease,
            reason,
            children
        };

        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(grandpalData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert(`Failed to submit: ${data.message}`);
            }
        } catch (error) {
            alert('An error occurred while submitting the form');
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-[#fdf9f4] " style={{ backgroundImage: "url('F:/Eldermate-1/frontend/src/assets/Bg2.png')" }}>
            <div className="bg-[#eee7de]  bg-opacity-80 rounded-lg shadow-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-4 text-teal-700">Grandpal's Info</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name of the Grandpal:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age of the Grandpal:</label>
                        <input
                            type="text"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="livingStatus" className="block text-sm font-medium text-gray-700">Does the Grandpal live alone?</label>
                        <input
                            type="text"
                            id="livingStatus"
                            value={livingStatus}
                            onChange={(e) => setLivingStatus(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="disease" className="block text-sm font-medium text-gray-700">Does the grandpal have any of the following?</label>
                        <select
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-500 p-2"
                            id="disease"
                            value={disease}
                            onChange={(e) => setDisease(e.target.value)}
                            required>
                            <option value="">Select</option>
                            <option value="Alzheimer's">Alzheimer's</option>
                            <option value="Parkinson's">Parkinson's</option>
                            <option value="Dementia">Dementia</option>
                            <option value="Any other neurological disease">Any other neurological disease</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Why do you think they would need a Goodlfellow?</label>
                        <input
                            type="text"
                            id="reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-500 p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="children" className="block text-sm font-medium text-gray-700">Do they have sons and daughters? If yes please provide details</label>
                        <input
                            type="text"
                            id="children"
                            value={children}
                            onChange={(e) => setChildren(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-500 p-2"
                        />
                    </div>
                    <Link to='/' className="block text-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default GrandpalForm;
