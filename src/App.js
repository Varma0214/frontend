import React from 'react';
import UserForm from './components/UserForm'; // Adjust the path if needed
import AdminDashboard from './components/AdminDashboard'; // Adjust the path if needed


const App = () => {
    return (
        <div className="App">
            <h1>Social Media Task</h1>
            <UserForm />
            <AdminDashboard />
        </div>
    );
};

export default App;
