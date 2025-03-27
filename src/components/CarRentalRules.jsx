import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CarRentalRules = () => {
  const [showAll, setShowAll] = useState(false);

  const rules = [
    {
      title: "General Terms",
      items: [
        "The rental vehicle must be used for personal or business transportation only.",
        "Subleasing or lending the vehicle to another party is prohibited.",
        "The renter is responsible for maintaining the vehicle in good condition during the rental period.",
      ],
    },
    {
      title: "Payment and Deposits",
      items: [
        "Rental fees must be paid in full at the time of booking.",
        "A security deposit is required and will be refunded upon return, minus any necessary deductions.",
        "Late returns may incur additional charges.",
      ],
    },
    {
      title: "Driver Requirements",
      items: [
        "The driver must hold a valid driver’s license.",
        "Any additional drivers must be listed in the rental agreement.",
      ],
    },
    {
      title: "Vehicle Maintenance and Repairs",
      items: [
        "The renter must report any mechanical issues or damages immediately.",
        "Unauthorized repairs or modifications are not allowed.",
      ],
    },
    {
      title: "Fuel Policy",
      items: [
        "The vehicle must be returned with the same fuel level as at the time of rental.",
        "A refueling fee may apply if the fuel level is lower upon return.",
      ],
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-6">
      <h2 className="text-3xl font-bold text-blue-600 border-b pb-2 mb-4">
        Car Rental Rules
      </h2>
      <ul className="space-y-4">
        <AnimatePresence>
          {rules.slice(0, showAll ? rules.length : 1).map((rule, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {rule.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 pl-4">
                {rule.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default CarRentalRules;
