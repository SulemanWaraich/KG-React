import React, { useState } from 'react';

function SearchFilter({ ambulances, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleSearch = () => {
    let filteredData = ambulances.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOption === 'price') {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'availability') {
      filteredData.sort((a, b) => a.eta.localeCompare(b.eta));
    }

    onSearch(filteredData);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for an eAmbulance"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md" 
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Sort by:</label>
        <select 
          className="mt-1 p-3 border border-gray-300 rounded-md"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="price">Price</option>
          <option value="availability">Availability</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
