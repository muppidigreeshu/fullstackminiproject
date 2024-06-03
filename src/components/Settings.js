import React, { useState, useEffect } from 'react';
import '../styles/globalStyles.css';
function Settings() {
    const [settingsData, setSettingsData] = useState({
      theme: 'light',
      notifications: true
    });
    const [isEditing, setIsEditing] = useState(false);
  
    useEffect(() => {
      const savedSettingsData = JSON.parse(localStorage.getItem('settingsData'));
      if (savedSettingsData) {
        setSettingsData(savedSettingsData);
      } else {
        setIsEditing(true);
      }
    }, []);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setSettingsData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('settingsData', JSON.stringify(settingsData));
      setIsEditing(false);
    };
  
    return (
      <div className="container">
        <h2>Settings</h2>
        <div className="form-container">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Theme:</label>
                <select
                  name="theme"
                  value={settingsData.theme}
                  onChange={handleChange}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={settingsData.notifications}
                    onChange={handleChange}
                  />
                  Enable Notifications
                </label>
              </div>
              <button type="submit">Save</button>
            </form>
          ) : (
            <div>
              <p>Theme: {settingsData.theme}</p>
              <p>Notifications: {settingsData.notifications ? 'Enabled' : 'Disabled'}</p>
              <button onClick={() => setIsEditing(true)}>Edit Settings</button>
            </div>
          )}
        </div>
      </div>
    );
  }
  

export default Settings;
