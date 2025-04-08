import React, { useState } from "react";
import { FaGasPump, FaCogs, FaHeart } from "react-icons/fa";
import carsData from "../data/carsData";

const CarsAsort = ({ favorites, setFavorites }) => {
  const [filters, setFilters] = useState({
    type: [],
    maxPrice: 349,
  });
  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  // filter cars of yours 
  const filteredCars = carsData.filter((car) => {
    const price = Number(String(car.price).replace(/[^0-9.]/g, ""));
    const matchesType =
      filters.type.length === 0 || filters.type.includes(car.type);
    const matchesPrice = price <= filters.maxPrice;

    return matchesType && matchesPrice;
  });

  return (
    <div className="flex">
      {/* filter */}
      <aside className="w-1/4 p-4 bg-gray-100 rounded-lg max-w-90">
        <h3 className="font-bold text-lg mb-3">Filter</h3>

        {/* filter of type */}
        <div className="mb-4 text-[#596780]">
          <h4 className="font-semibold text-[#90A3BF]">Type</h4>
          {["Sport", "SUV", "Sedan", "Hatchback"].map((type) => (
            <label key={type} className="block">
              <input
                type="checkbox"
                checked={filters.type.includes(type)}
                onChange={() => handleFilterChange("type", type)}
              />{" "}
              {type}
            </label>
          ))}
        </div>

        {/* filter price */}
        <div className="mb-4">
          <h4 className="font-semibold">Price</h4>
          <input
            type="range"
            min="70"
            max="400"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value })
            }
            className="w-full"
          />
          <span>${filters.maxPrice}.00</span>
        </div>
      </aside>

      {/* cars cards */}
      <section className="w-3/4 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-40">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white p-4 rounded-xl shadow-md text-center"
            >
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">{car.type}</span>
                <button
                  onClick={() =>
                    setFavorites((prev) =>
                      prev.some((fav) => fav.id === car.id)
                        ? prev.filter((fav) => fav.id !== car.id)
                        : [...prev, car]
                    )
                  }
                >
                  {favorites.some((fav) => fav.id === car.id) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaHeart className="text-gray-400" />
                  )}
                </button>
              </div>
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-32 object-contain"
              />
              <h3 className="text-lg font-bold mt-2">{car.name}</h3>
              <div className="flex justify-around text-gray-600 text-sm mt-2">
                <span className="flex items-center gap-1">
                  <FaGasPump /> {car.fuel}
                </span>
                <span className="flex items-center gap-1">
                  <FaCogs /> {car.gear}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-semibold">
                  {car.price} <span className="text-gray-500">/ day</span>
                </span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Rent Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            There are no cars matching the specified filters.
          </p>
        )}
      </section>
    </div>
  );
};

export default CarsAsort;
