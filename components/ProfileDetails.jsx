import React from "react";
import "./ProfileDetails.css";

const ProfileDetails = ({ profile }) => {
  if (!profile) {
    return <div className="error">Profile not found</div>;
  }

  return (
    <div className="profile-details">
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <h1>{profile.name}</h1>
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Contact Info:</strong> {profile.contactInfo || "Not provided"}</p>
      <p><strong>Interests:</strong> {profile.interests || "Not provided"}</p>
    </div>
  );
};

export default ProfileDetails;
