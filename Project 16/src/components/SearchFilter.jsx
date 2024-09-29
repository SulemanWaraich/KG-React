import React, { useState } from "react";

function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ambulance, setAmbulance] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const data = [
    { id: 1, name: 'ICU Ambulance', price: 100, size: 'Large', equipment: 'ICU Setup' },
    { id: 2, name: 'General Ambulance', price: 50, size: 'Medium', equipment: 'Basic'},
    { id: 3, name: 'Air Ambulance', price: 500, size: 'Extra Large', equipment: 'Advanced'},
  ];

  return <div>SearchFilter</div>;
}

export default SearchFilter;
