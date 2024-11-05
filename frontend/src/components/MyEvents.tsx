import React, { useState } from 'react';

interface Event {
    id: string;
    name: string;
    date: string;
    location: string;
    type: 'participated' | 'upcoming';
}

const MyEvents: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([
        { id: '1', name: 'Volunteer Fair', date: '2023-05-15', location: 'Community Center', type: 'participated' },
        { id: '2', name: 'Food Drive', date: '2023-06-20', location: 'Local Park', type: 'participated' },
        { id: '3', name: 'Charity Gala', date: '2023-07-10', location: 'Grand Hotel', type: 'upcoming' },
    ]);

    return (
        <div className="space-y-6">
            <h2 className="text-[#517f68] font-serif text-4xl mb-8 text-center">My Events</h2>
            <div className="space-y-4">
                <h3 className="text-xl font-medium">Participated Events</h3>
                {events.filter(event => event.type === 'participated').map(event => (
                    <div key={event.id} className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <h4 className="text-lg font-medium">{event.name}</h4>
                            <p className="text-gray-600">{event.date} - {event.location}</p>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
            <div className="space-y-4">
                <h3 className="text-xl font-medium">Upcoming Events</h3>
                {events.filter(event => event.type === 'upcoming').map(event => (
                    <div key={event.id} className="bg-white shadow-lg rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <h4 className="text-lg font-medium">{event.name}</h4>
                            <p className="text-gray-600">{event.date} - {event.location}</p>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                            RSVP
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEvents;