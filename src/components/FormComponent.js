import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

function FormComponent() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: ''
    });

    const [submittedData, setSubmittedData] = useState(null);

    //const navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    // Uncomment the below line if you want to navigate to a different page
    // navigate('/display', { state: { ...formData } });
    };

    return (
    <div>
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>Email:</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <div>
            <label>Username:</label>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            />
        </div>
        <button type="submit">Submit</button>
        </form>

        {submittedData && (
        <div>
            <h3>Submitted Data</h3>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Username: {submittedData.username}</p>
        </div>
        )}
    </div>
    );
}

export default FormComponent;
