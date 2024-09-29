import React, { useState } from "react";

function HowItWorks() {
  const [ambulance, setAmbulance] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const data = [
    {
      id: 1,
      name: "ICU Ambulance",
      price: 100,
      size: "Large",
      equipment: "ICU Setup",
    },
    {
      id: 2,
      name: "General Ambulance",
      price: 50,
      size: "Medium",
      equipment: "Basic",
    },
    {
      id: 3,
      name: "Air Ambulance",
      price: 500,
      size: "Extra Large",
      equipment: "Advanced",
    },
  ];

  const handleSearch = () => {
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(ambulance.toLowerCase())
    );
    setFilteredResults(result);
    setAmbulance('')
  };
  
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10">Search Below</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-gray-100 rounded flex flex-col justify-center items-center space-y-4">
            <p>Enter your location and select the type of service.</p>
            <input
              type="text"
              placeholder="Search For eAmbulance"
              className="border border-black mt-2 px-4 py-1 rounded-lg flex-shrink"
              value={ambulance}
              onChange={(e) => setAmbulance(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="text-xl font-semibold mb-4 bg-blue-700 px-6 py-2 rounded-lg text-white"
            >
              Search
            </button>
          </div>

          <div>
            {filteredResults.length > 0 ? (
              filteredResults.map((ambulance, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-bold">{ambulance.name}</h3>
                <p>Price: ${ambulance.price}</p>
                <p>Size: {ambulance.size}</p>
                <p>Equipment: {ambulance.equipment}</p>
                <p>ETA: {ambulance.eta}</p>
              </div>
              ))
            ) : (
              <p className="text-3xl font-bold uppercase text-center">no results found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
