import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
    const [submissions, setSubmissions] = useState([]);
    const apiUrl = 'http://localhost:5000/api/submissions';

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await fetch(apiUrl);
                if (response.ok) {
                    const data = await response.json();
                    setSubmissions(data);
                } else {
                    console.error('Error fetching submissions:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching submissions:', error);
            }
        };

        fetchSubmissions();
    }, []);

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                {submissions.map((submission) => (
                    <li key={submission._id}>
                        <h3>{submission.name}</h3>
                        <p>{submission.socialHandle}</p>
                        <div>
                            {submission.images.map((image, index) => (
                                <img key={index} src={`http://localhost:5000/${image}`} alt={`Submission ${index}`} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
