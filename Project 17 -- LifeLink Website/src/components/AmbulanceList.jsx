function AmbulanceList({ ambulances }) {
  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ambulances.map((ambulance, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-bold">{ambulance.name}</h3>
            <p>Price: ${ambulance.price}</p>
            <p>Size: {ambulance.size}</p>
            <p>Equipment: {ambulance.equipment}</p>
            <p>ETA: {ambulance.eta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AmbulanceList;
