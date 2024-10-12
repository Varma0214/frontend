import React, { useState } from 'react';
import './UserForm.css';

function UserForm() {
    const [name, setName] = useState('');
    const [mediaHandle, setMediaHandle] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Here, you would add logic to submit the data to your database
        console.log('Submitted Data:', { name, mediaHandle, images });

        // Reset the form after submission
        setName('');
        setMediaHandle('');
        setImages([]);
    };

    return (
        <div className="user-form">
            <h1>User Submission Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Name:
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Social Media Handle:
                        <input 
                            type="text" 
                            value={mediaHandle} 
                            onChange={(e) => setMediaHandle(e.target.value)} 
                            required 
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Upload Images:
                        <input 
                            type="file" 
                            multiple 
                            onChange={(e) => setImages([...e.target.files])} 
                            required 
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;
