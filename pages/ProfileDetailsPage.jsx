import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProfileDetailsPage.css";

const ProfileDetailsPage = () => {
  const { id } = useParams(); // Retrieve the profile ID from the route
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profiles/${id}`);
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching profile details");
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="profile-details-page">
      {profile ? (
        <div className="profile-details">
          <img src={profile.photo} alt={profile.name} className="profile-photo" />
          <h1>{profile.name}</h1>
          <p><strong>Description:</strong> {profile.description}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <p><strong>Contact Info:</strong> {profile.contactInfo || "Not provided"}</p>
          <p><strong>Interests:</strong> {profile.interests || "Not provided"}</p>
        </div>
      ) : (
        <div className="error">Profile not found</div>
      )}
    </div>
  );
};

export default ProfileDetailsPage;