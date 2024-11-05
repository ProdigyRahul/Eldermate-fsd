import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CompleteProfile: React.FC = () => {
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');
    const [interests, setInterests] = useState('');
    const [languages, setLanguages] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const profileData = {
            name,
            contactNo,
            dateOfBirth,
            gender,
            country,
            state,
            city,
            bio,
            role,
        };

        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profileData),
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
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-[#fdf9f4]" style={{ backgroundImage: "url('F:\Eldermate-fsd\frontend\src\assets\Bg2.png')" }}>
            <div className="border-2 border-ridge-600 rounded-lg bg-[#eee7de] bg-opacity-90 p-8 max-w-lg w-full shadow-lg">
                <h2 className="text-2xl font-serif text-teal-700 mb-4 text-center">Complete Your Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="name" className="block text-left">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="contactNo" className="block text-left">Contact No:</label>
                        <input
                            type="text"
                            id="contactNo"
                            value={contactNo}
                            onChange={(e) => setContactNo(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth" className="block text-left">Date Of Birth:</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender" className="block text-left">Gender:</label>
                        <input
                            type="text"
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country" className="block text-left">Country:</label>
                        <input
                            type="text"
                            id="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state" className="block text-left">State:</label>
                        <input
                            type="text"
                            id="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city" className="block text-left">City:</label>
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio" className="block text-left">Bio:</label>
                        <input
                            type="text"
                            id="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="interests" className="block text-left">Interests:</label>
                        <input
                            type="text"
                            id="interests"
                            value={interests}
                            onChange={(e) => setInterests(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="languages" className="block text-left">Languages:</label>
                        <input
                            type="text"
                            id="languages"
                            value={languages}
                            onChange={(e) => setLanguages(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div className="form-group">
                        <label className="block text-left">Select Your Role:</label>
                        <div className='flex gap-4 mt-2'>
                            <Link to="/mate-details" className='w-full bg-teal-600 text-white rounded-md py-2 text-center'>Mate</Link>
                            <Link to="/grandpalForm" className='w-full bg-teal-600 text-white rounded-md py-2 text-center'>Grandpal</Link>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-teal-600 text-white rounded-md py-2 mt-4">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CompleteProfile;
