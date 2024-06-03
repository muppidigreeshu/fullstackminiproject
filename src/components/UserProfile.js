import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    username: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Here you can fetch the user data based on the userId from an API
    // For this example, we'll just use the userId as part of the username
    setProfileData((prevData) => ({
      ...prevData,
      username: `user_${userId}`
    }));
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div>
      <h2>User Profile for User ID: {userId}</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Username: {profileData.username}</p>
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
    )}
    </div>
    );
}

export default UserProfile;
