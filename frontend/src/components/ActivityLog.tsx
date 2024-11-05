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
            date: '2023-05-01',
            title: 'Volunteered at Food Drive',
            description: 'Helped collect and distribute food to local families in need.',
        },
        {
            id: '2',
            date: '2023-04-15',
            title: 'Participated in Charity Gala',
            description: 'Attended the event and helped with setup and cleanup.',
        },
        {
            id: '3',
            date: '2023-03-25',
            title: 'Organized Community Clean-up',
            description: 'Coordinated a team of volunteers to clean up a local park.',
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