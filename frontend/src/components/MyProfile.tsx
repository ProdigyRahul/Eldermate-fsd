import React from 'react';

interface ProfileProps {
    name: string;
    age: number;
    contactNo: string;
    address: string;
    state: string;
    country: string;
    interests: string;
    languagesKnown: string;
    livingStatus: string;
    diseases: string;
    family: string;
}

const Profile: React.FC<ProfileProps> = ({
    name,
    age,
    contactNo,
    address,
    state,
    country,
    interests,
    languagesKnown,
    livingStatus,
    diseases,
    family,
}) => {
    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-500 py-4 px-6">
                <img src="/eldermate-logo.png" alt="ElderMate" className="w-32" />
            </div>
            <div className="p-6 space-y-4">
                <div>
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-gray-600">{age} years old</p>
                </div>
                <div>
                    <p className="font-medium">Contact No:</p>
                    <p>{contactNo}</p>
                </div>
                <div>
                    <p className="font-medium">Address:</p>
                    <p>{address}</p>
                    <p>{state}, {country}</p>
                </div>
                <div>
                    <p className="font-medium">Interests:</p>
                    <p>{interests}</p>
                </div>
                <div>
                    <p className="font-medium">Languages Known:</p>
                    <p>{languagesKnown}</p>
                </div>
                <div>
                    <p className="font-medium">Living Status:</p>
                    <p>{livingStatus}</p>
                </div>
                <div>
                    <p className="font-medium">Diseases:</p>
                    <p>{diseases}</p>
                </div>
                <div>
                    <p className="font-medium">Family:</p>
                    <p>{family}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;