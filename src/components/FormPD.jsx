import { useState, useEffect } from "react";
import { FaExchangeAlt } from "react-icons/fa";

function FormPD() {
  const getCurrentDate = () => new Date().toISOString().split("T")[0];
  const getCurrentTime = () => new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

  const [pickUp, setPickUp] = useState({ location: "", date: getCurrentDate(), time: getCurrentTime() });
  const [dropOff, setDropOff] = useState({ location: "", date: getCurrentDate(), time: getCurrentTime() });

  const swapLocations = () => {
    setPickUp(dropOff);
    setDropOff(pickUp);
  };

  useEffect(() => {
    if (dropOff.date < pickUp.date) {
      setDropOff({ ...dropOff, date: pickUp.date });
    }
  }, [pickUp.date]);

  return (
    <div className="flex items-center gap-6 p-6">
      {/* Pick-Up Block */}
      <div className="p-6 w-1/2 bg-white shadow-lg rounded-2xl border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-blue-500 text-lg">●</span>
          <h3 className="text-lg font-semibold">Pick - Up</h3>
        </div>
        <div className="flex justify-between items-center border-b pb-2 mb-2 text-gray-600">
          <span className="font-medium">Locations</span>
          <span className="font-medium">Date</span>
          <span className="font-medium">Time</span>
        </div>
        <div className="flex gap-4">
          <select
            className="w-1/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            value={pickUp.location}
            onChange={(e) => setPickUp({ ...pickUp, location: e.target.value })}
          >
            <option value="">Select your city</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
          </select>
          <input
            type="date"
            className="w-1/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            value={pickUp.date}
            onChange={(e) => setPickUp({ ...pickUp, date: e.target.value })}
          />
          <input
            type="time"
            className="w-1/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            value={pickUp.time}
            onChange={(e) => setPickUp({ ...pickUp, time: e.target.value })}
          />
        </div>
      </div>

      {/* Swap Button */}
      <button
        onClick={swapLocations}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
      >
        <FaExchangeAlt size={20} />
      </button>

      {/* Drop-Off Block */}
      <div className="p-6 w-1/2 bg-white shadow-lg rounded-2xl border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-blue-500 text-lg">●</span>
          <h3 className="text-lg font-semibold">Drop - Off</h3>
        </div>
        <div className="flex justify-between items-center border-b pb-2 mb-2 text-gray-600">
          <span className="font-medium">Locations</span>
          <span className="font-medium">Date</span>
          <span className="font-medium">Time</span>
        </div>
        <div className="flex gap-4">
          <select
            className="w-1/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            value={dropOff.location}
            onChange={(e) => setDropOff({ ...dropOff, location: e.target.value })}
          >
            <option value="">Select your city</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
          </select>
          <input
            type="date"
            className="w-1/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            value={dropOff.date}
            min={pickUp.date}
            onChange={(e) => setDropOff({ ...dropOff, date: e.target.value })}
          />
          <input
            type="time"
            className="w-1/3 p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            value={dropOff.time}
            onChange={(e) => setDropOff({ ...dropOff, time: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

export default FormPD;
