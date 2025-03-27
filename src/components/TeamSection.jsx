import React from "react";
import people1 from "../assets/people4.jpg";
import people2 from "../assets/people2.jpg";
import people3 from "../assets/people3.jpg";
import people4 from "../assets/people1.jpg";

const TeamSection = () => {
  const team = [
    { name: "Mitywa Flow", role: "Specialist", image: people1 },
    { name: "Bob Richardson", role: "Manager", image: people2 },
    { name: "Ann Hamerson", role: "Marketer", image: people3 },
    { name: "Jacob Smith", role: "Technician", image: people4 },
  ];

  return (
    <div className="w-full py-10 bg-gray-700 text-center">
      <h2 className="text-3xl font-bold mb-6 text-amber-100">Our Team</h2>
      <div className="flex flex-wrap justify-center gap-40">
        {team.map((member, index) => (
          <div
            key={index}
            className="w-70 p-4 bg-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-3 hover:shadow-2xl hover:ring-4 hover:ring-amber-300"
          >
            <img
              loading="lazy"
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-bold mt-3 text-amber-100">
              {member.name}
            </h3>
            <p className="text-amber-100 text-2xl">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection; 