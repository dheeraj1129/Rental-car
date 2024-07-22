import React, { useState, useEffect } from "react";
import CarDetails from "./CarDetails";

function Cars() {
  const [carData, setCarData] = useState([]);
  const [extraCarData, setExtraCarData] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("./jdata/data.json") // Assuming data.json is in the public folder
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched car data:", data);
        setCarData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("./jdata/data.json") // Assuming data2.json is in the public folder
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched extra car data:", data);
        setExtraCarData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleViewDetails = (car) => {
    setSelectedCar(car);
  };

  const getExtraDetails = (car) => {
    return extraCarData.find((extra) => extra.id === car.id);
  };

  return (
    <div className="w-screen flex flex-col items-center h-fit">
      <h1 className="text-4xl font-bold text-center my-8">
        The most searched cars
      </h1>
      {/* search data */}
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="Search Car Name"
        className="border-2 px-2 h-12 w-1/3 rounded-2xl mb-2"
      />
      {/* search data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-4">
        {carData
          .filter((car) => car.title && car.title.includes(query))
          .map((car, index) => (
            <div
              key={index}
              className="car-item text-black p-4 rounded-lg shadow-lg">
              <img
                src={car.image}
                alt={car.title}
                className="w-full object-cover rounded-md"
              />
              <div className="text-2xl font-semibold mb-4">{car.title}</div>
              <div className="text-sm font-semibold mb-4">{car.class}</div>
              <div className="text-lg font-semibold mb-4">{car.Price}</div>
              <button
                className="bg-red-600 px-2 py-1 font-semibold text-white shadow-lg rounded-xl"
                onClick={() => handleViewDetails(car)}>
                View details
              </button>
            </div>
          ))}
      </div>
      <div className="w-screen">
        {selectedCar && (
          <CarDetails
            car={selectedCar}
            extraDetails={getExtraDetails(selectedCar)}
            onClose={() => setSelectedCar(null)}
          />
        )}
      </div>
    </div>
  );
}

export default Cars;
