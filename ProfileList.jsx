import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import MapView from "./MapView";
import { fetchProfiles } from "../services/api";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetchProfiles().then(setProfiles);
  }, []);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="profile-list">
      <div className="cards-container">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummaryClick={handleSummaryClick}
          />
        ))}
      </div>
      {selectedProfile && <MapView address={selectedProfile.address} />}
    </div>
  );
};

export default ProfileList;
