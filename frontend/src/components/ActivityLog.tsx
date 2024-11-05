import React, { useState } from 'react';

interface ActivityLogItem {
    id: string;
    date: string;
    title: string;
    description: string;
}

const ActivityLog: React.FC = () => {
    const [activityLog, setActivityLog] = useState<ActivityLogItem[]>([
        {
            id: '1',
            date: '2023-07-01',
            title: 'Monsoon Trek',
            description: 'Rainy evening in the mountains was mesmerising.',
        },
        {
            id: '2',
            date: '2024-04-04',
            title: 'Garden Workshop',
            description: 'It was a memorable morning in the garden learning something new',
        },
        {
            id: '3',
            date: '2024-03-25',
            title: 'Young At Heart',
            description: 'Particpated in a fun filled evening with my fellow Mates.',
        },
    ]);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Activity Log</h2>
            <div className="space-y-4">
                {activityLog.map(item => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg p-4">
                        <h3 className="text-lg font-medium">{item.title}</h3>
                        <p className="text-gray-600">{item.date}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityLog;