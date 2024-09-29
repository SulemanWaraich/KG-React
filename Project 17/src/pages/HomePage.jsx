import React, { useState } from 'react';
import SearchFilter from '../components/SearchFilter';
import AmbulanceList from '../components/AmbulanceList';

function HomePage() {
  const ambulances = [
    { name: 'ICU Ambulance', price: 100, size: 'Large', equipment: 'ICU Setup', eta: '10 mins' },
    { name: 'General Ambulance', price: 50, size: 'Medium', equipment: 'Basic', eta: '15 mins' },
    { name: 'Air Ambulance', price: 500, size: 'Extra Large', equipment: 'Advanced', eta: '5 mins' },
  ];

  const [filteredAmbulances, setFilteredAmbulances] = useState(ambulances);

  const handleSearch = (results) => {
    setFilteredAmbulances(results);
  };

  return (
    <div>
      <SearchFilter ambulances={ambulances} onSearch={handleSearch} />
      <AmbulanceList ambulances={filteredAmbulances} />
    </div>
  );
}

export default HomePage;
