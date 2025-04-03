import React from "react";
import lv from "../assets/lv.jpg";
import prada from "../assets/prada.jpg";
import bmw from "../assets/bmw.jpg";
import sony from "../assets/sony.jpg"

const PartnersSection = () => {
  const partners = [
    { name: "Louis Vuitton", logo: lv },
    { name: "Prada", logo: prada },
    { name: "BMW", logo: bmw },
    { name: "Sony", logo: sony },
  ];

  return (
    <div className="w-full py-10 bg-gray-700  text-center">
      <h2 className="text-3xl font-bold mb-6 text-amber-100">These are our best partners.</h2>
      <div className="flex flex-wrap justify-center gap-20">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="w-80 p-8 bg-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl hover:ring-4 hover:ring-amber-300"
          >
            <img
              loading="lazy"
              src={partner.logo}
              alt={partner.name}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-bold mt-3 text-amber-100">{partner.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
