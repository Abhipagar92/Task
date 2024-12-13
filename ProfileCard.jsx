import React from "react";

const ProfileCard = ({ profile, onSummaryClick }) => {
  const { name, photo, description } = profile;

  return (
    <div className="profile-card">
      <img src={photo} alt={`${name}'s photo`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={() => onSummaryClick(profile)}>View on Map</button>
    </div>
  );
};

export default ProfileCard;
