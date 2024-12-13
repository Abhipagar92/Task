import React, { createContext, useState } from "react";

// Create a context
const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (newProfile) => {
    setProfiles((prevProfiles) => [...prevProfiles, newProfile]);
  };

  const updateProfile = (updatedProfile) => {
    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      )
    );
  };

  const deleteProfile = (profileId) => {
    setProfiles((prevProfiles) =>
      prevProfiles.filter((profile) => profile.id !== profileId)
    );
  };

  return (
    <ProfileContext.Provider
      value={{ profiles, setProfiles, addProfile, updateProfile, deleteProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };