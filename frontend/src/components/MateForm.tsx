import React, { useState } from 'react';

export default function MateForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [profession, setProfession] = useState('');
    const [reason, setReason] = useState('');
    const [availability, setAvailability] = useState('');
    const [typeOfEngagement, setTypeOfEngagement] = useState('');
    const [referral, setReferral] = useState('');
    const [skills, setSkills] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const mateData = {
            name,
            age,
            profession,
            reason,
            availability,
            referral,
            skills,
        };

        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mateData),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Profile completed successfully!');
            } else {
                alert(`Failed to complete profile: ${data.message}`);
            }
        } catch (error) {
            alert('An error occurred while completing the profile.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('F:/Eldermate-1/frontend/src/assets/Bg2.png')" }}>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Mate's Info</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age:</label>
                        <input
                            type="text"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="profession" className="block text-sm font-medium text-gray-700">Profession:</label>
                        <select
                            id="profession"
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select Profession</option>
                            <option value="Student">Student</option>
                            <option value="Business">Business</option>
                            <option value="Working">Working</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for providing assistance:</label>
                        <input
                            type="text"
                            id="reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability:</label>
                        <input
                            type="text"
                            id="availability"
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="typeOfEngagement" className="block text-sm font-medium text-gray-700">Type of Engagement:</label>
                        <select
                            id="typeOfEngagement"
                            value={typeOfEngagement}
                            onChange={(e) => setTypeOfEngagement(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        >
                            <option value="">Select Engagement Type</option>
                            <option value="One-One">One-One</option>
                            <option value="Group Activities">Group Activities</option>
                            <option value="Virtual Support">Virtual Support</option>
                            <option value="As Needed">As Needed</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="referral" className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
                        <input
                            type="text"
                            id="referral"
                            value={referral}
                            onChange={(e) => setReferral(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills and Interests:</label>
                        <input
                            type="text"
                            id="skills"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <button type="submit" className="mt-4 w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-500 transition duration-200">Submit</button>
                </form>
            </div>
        </div>
    );
};
