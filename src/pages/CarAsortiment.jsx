import React, { useState, useEffect } from "react";
import { FaGasPump, FaCogs, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import carsData from "../data/carsData";
import Twoadds from "../components/Twoadds";
import TickerSlider from "../components/TickerSlider";

const CarAsortiment = ({ favorites, setFavorites }) => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ type: [], maxPrice: 349 });
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300); // Имитируем задержку загрузки
    return () => clearTimeout(timer);
  }, [filters]);
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const resetFilters = () => {
    setFilters({ type: [], maxPrice: 349 });
  };

  const filteredCars = carsData.filter((car) => {
    const price = Number(car.price.replace(/[^0-9.]/g, ""));
    const matchesType =
      filters.type.length === 0 || filters.type.includes(car.type);
    const matchesPrice = price <= filters.maxPrice;
    return matchesType && matchesPrice;
  });
  const handleFavoriteClick = (car) => {
    setFavorites((prev) => {
      const isFavorite = prev.some((fav) => fav.id === car.id);
      const updatedFavorites = isFavorite
        ? prev.filter((fav) => fav.id !== car.id)
        : [...prev, car];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      setNotification(
        isFavorite
          ? ` ${car.name} removed from favorites`
          : ` ${car.name} added to favorites`
      );
      return updatedFavorites;
      
    });
    setTimeout(() => setNotification(""), 2000);
  };

  const handleRentNowClick = (car) => {
    setNotification(`You have selected ${car.name || "unknown car"} for rent!`);
    setTimeout(() => {
      setNotification("");
      navigate(`/car/${car.id}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden pb-30 bg-gray-100 relative">
      <div className="w-screen overflow-hidden ">
        <TickerSlider />
      </div>
      <div className="relative z-10">
        <Twoadds />
        <h1 className="text-3xl font-bold text-gray-900 pl-6 ">
          Car Collection
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter */}
          <aside className="w-full lg:w-1/4 p-4 bg-white rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3 text-blue-500">Filter</h3>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">Type</h4>
              {["Sport", "SUV", "Sedan", "Hatchback"].map((type) => (
                <label key={type} className="block text-blue-600">
                  <input
                    type="checkbox"
                    checked={filters.type.includes(type)}
                    onChange={() => handleFilterChange("type", type)}
                    className="mr-2"
                  />
                  {type}
                </label>
              ))}
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">Price</h4>
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
              <span className="block text-center font-bold mt-2 text-green-900">
                ${filters.maxPrice}.00
              </span>
            </div>
            <button
              onClick={resetFilters}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
            >
              Reset Filters
            </button>
          </aside>

          {/* Car List */}
          <section className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <p className="text-center text-gray-500 col-span-3">
                Loading cars...
              </p>
            ) : filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white p-4 rounded-xl shadow-md text-center"
                >
                  <div className="flex justify-between">
                    <span className="text-gray-500 text-sm">
                      {car.type || "Unknown"}
                    </span>
                    <button onClick={() => handleFavoriteClick(car)}>
                      <FaHeart
                        className={`${
                          favorites.some((fav) => fav.id === car.id)
                            ? "text-red-500"
                            : "text-gray-400"
                        } transition-colors duration-300`}
                      />
                    </button>
                  </div>
                  <img
                    src={car.images?.[0] || "fallback-image.jpg"}
                    alt={car.name || "Unknown car"}
                    className="w-full h-40 rounded-md mt-2 "
                  />
                  <h3 className="text-lg font-bold mt-2">
                    {car.name || "Unknown car"}
                  </h3>
                  <div className="flex justify-around text-gray-600 text-sm mt-2">
                    <span className="flex items-center gap-1">
                      <FaGasPump /> {car.fuel || "Unknown"}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCogs /> {car.gear || "Unknown"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold">
                      {car.price || "Not specified"}{" "}
                      <span className="text-gray-500">/ day</span>
                    </span>
                    <button
                      onClick={() => handleRentNowClick(car)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
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
        {/* Notification */}
        {notification && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg transition-transform">
            {notification}
          </div>
        )}
        <p className="text-center pt-10 text-gray-400">
          The list of cars will be expanded in the near future
        </p>
        {notification && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg transition-transform">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarAsortiment;


