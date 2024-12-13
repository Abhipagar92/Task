import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "./ProfileContext";
import HomePage from "./HomePage";
import AdminPage from "./AdminPage";
import ProfileDetailsPage from "./ProfileDetailsPage";
import "./App.css";

const App = () => {
  return (
    <ProfileProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/profile/:id" element={<ProfileDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </ProfileProvider>
  );
};

export default App;

/*
import React, { useState, useEffect , } from "react";
import ProfileCard from "./components/ProfileCard";
import AdminPanel from "./components/AdminPanel";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  const [profiles, setProfiles] = useState([]); 
  const [selectedProfile, setSelectedProfile] = useState(null);

  
  // Fetch profiles from the backend
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
       const response = await axios.get("http://localhost:5000/api/profiles");  // Replace with your backend URL
        setProfiles(response.data);  
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Profile Explorer</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin Panel</Link>
          </nav>
        </header>

        <main>
          <Routes>
            
            <Route
              path="/"
              element={
                <div className="profile-list">
                  {profiles.map((profile) => (
                    <ProfileCard
                      key={profile._id}
                      profile={profile}
                      onSummary={() => handleProfileSelect(profile)}
                    />
                  ))}
                
                {selectedProfile && (
                    <div className="map-section">
                       <MapComponent address={selectedProfile.address} />   }
                    </div>  
                  )} 
                </div>
              }
            />

            
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; 2024 Profile Explorer</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
 */

