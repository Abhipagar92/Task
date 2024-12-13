import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import MapComponent from "./MapComponent";
import "./HomePage.css";

const HomePage = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Fetch profiles from the backend
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/profiles"); // Replace with your backend URL
        setProfiles(response.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="home-page">
      <h1>Welcome to Profile Explorer</h1>
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile._id}
            profile={profile}
            onSummaryClick={() => handleSummaryClick(profile)}
          />
        ))}
      </div>

      {selectedProfile && (
        <div className="map-section">
          <h2>Location for {selectedProfile.name}</h2>
          <MapComponent address={selectedProfile.address} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
