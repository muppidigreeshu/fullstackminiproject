import React, { useState, useEffect } from 'react';
import '../styles/globalStyles.css'; // Import global CSS file

function Profile() {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    username: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedProfileData = JSON.parse(localStorage.getItem('profileData'));
    if (savedProfileData) {
      setProfileData(savedProfileData);
    } else {
      setIsEditing(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profileData', JSON.stringify(profileData));
    setIsEditing(false);
  };

  return (
    <div className="container">
      <h2>Profile</h2>
      <div className="form-container">
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
    </div>
  );
}


export default Profile;
