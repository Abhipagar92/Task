import React, { useState } from "react";
import { createProfile, updateProfile, deleteProfile } from "../services/api";

const AdminPanel = () => {
  const [formData, setFormData] = useState({ name: "", photo: "", description: "", address: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile(formData);
    alert("Profile created!");
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleInputChange} />
        <input name="photo" placeholder="Photo URL" onChange={handleInputChange} />
        <textarea name="description" placeholder="Description" onChange={handleInputChange} />
        <input name="address" placeholder="Address" onChange={handleInputChange} />
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default AdminPanel;
