import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPage.css";

const AdminPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    photo: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch profiles from the backend
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/profiles");
        setProfiles(response.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      try {
        await axios.put(`http://localhost:5000/api/profiles/${editId}`, formData);
        setProfiles((prev) =>
          prev.map((profile) =>
            profile._id === editId ? { ...profile, ...formData } : profile
          )
        );
        setIsEditing(false);
        setEditId(null);
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    } else {
      try {
        const response = await axios.post("http://localhost:5000/api/profiles", formData);
        setProfiles((prev) => [...prev, response.data]);
      } catch (error) {
        console.error("Error adding profile:", error);
      }
    }

    setFormData({ name: "", address: "", description: "", photo: "" });
  };

  const handleEdit = (profile) => {
    setIsEditing(true);
    setEditId(profile._id);
    setFormData({
      name: profile.name,
      address: profile.address,
      description: profile.description,
      photo: profile.photo,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/profiles/${id}`);
      setProfiles((prev) => prev.filter((profile) => profile._id !== id));
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel</h1>

      <form className="profile-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
          required
        ></textarea>
        <input
          type="text"
          name="photo"
          value={formData.photo}
          onChange={handleInputChange}
          placeholder="Photo URL"
          required
        />
        <button type="submit">{isEditing ? "Update" : "Add"} Profile</button>
      </form>

      <div className="profile-list">
        {profiles.map((profile) => (
          <div className="profile-item" key={profile._id}>
            <img src={profile.photo} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <p>{profile.address}</p>
            <button onClick={() => handleEdit(profile)}>Edit</button>
            <button onClick={() => handleDelete(profile._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
