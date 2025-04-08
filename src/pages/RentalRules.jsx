import React from "react";
import imgKeys from "../assets/imgKey.jpg";

const RentalRules = () => {
  return (
    <div className="w-full bg-amber-100 py-12">
      <div className="max-w-6xl mx-auto p-6 md:p-8 shadow-lg rounded-lg flex flex-col md:flex-row items-center bg-amber-100">
        {/* img*/}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src={imgKeys}
            alt="Car keys"
            loading="lazy"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* text */}
        <div className="w-full md:w-2/3 md:pl-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Rental Rules
          </h1>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✔️</span>
              All drivers must be at least 21 years old.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✔️</span>A valid driver's
              license is required.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✔️</span>
              Insurance coverage is mandatory.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✔️</span>
              Fuel policy: Full-to-Full.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✔️</span>
              Late returns may incur additional fees.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-blue-500">✔️</span>
              Vehicles must be returned in the same condition as rented.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RentalRules;
