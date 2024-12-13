import React, { useState } from "react";
import "./SearchFilter.css";

const SearchFilter = ({ profiles, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProfiles = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(term.toLowerCase()) ||
      (profile.address && profile.address.toLowerCase().includes(term.toLowerCase()))
    );

    onFilter(filteredProfiles);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by name or address..."
        className="search-input"
      />
    </div>
  );
};

export default SearchFilter;