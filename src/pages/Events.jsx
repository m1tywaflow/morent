import React from "react";
import exhibition from "../assets/Exhibition.jpg";
import tech from "../assets/tech.jpg";
import gala from "../assets/gala.jpg";

const Events = () => {
  const events = [
    {
      title: "Luxury Car Exhibition",
      date: "April 15, 2025",
      location: "Los Angeles, CA",
      description:
        "Join us for an exclusive luxury car exhibition featuring the latest models from the most prestigious brands. Experience top-of-the-line vehicles and meet the experts.",
      image: exhibition,
    },
    {
      title: "Tech Innovations Conference",
      date: "May 20, 2025",
      location: "San Francisco, CA",
      description:
        "Explore the cutting-edge tech innovations that are shaping the future. Our conference will host leading tech professionals and showcase the latest trends in the industry.",
      image: tech,
    },
    {
      title: "Summer Networking Gala",
      date: "July 30, 2025",
      location: "New York, NY",
      description:
        "A night of networking with industry leaders, entrepreneurs, and innovators. This gala will provide you with excellent opportunities to expand your business network.",
      image: gala,
    },
  ];

  return (
    <div className="w-full py-16 pt-30 bg-gradient-to-r from-blue-100 to-blue-200 text-center">
      {/* Заголовок страницы */}
      <h2 className="text-5xl font-extrabold text-blue-800 mb-8">Upcoming Events</h2>

      {/* Описание страницы */}
      <p className="text-lg text-gray-800 mb-12 px-6 max-w-3xl mx-auto">
        Stay updated with our upcoming events and be part of exclusive experiences. From luxury car exhibitions to tech conferences and networking galas, we bring together professionals and enthusiasts from all industries.
      </p>

      {/* Список событий */}
      <div className="flex flex-wrap justify-center gap-8">
        {events.map((event, index) => (
          <div key={index} className="w-80 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              loading="lazy"
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600 mb-2">{event.title}</h3>
            <p className="text-gray-600 text-lg mb-2">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-gray-700 mb-4">{event.description}</p>
            <p className="text-lg font-semibold text-blue-600">Location: {event.location}</p>
          </div>
        ))}
      </div>

      {/* Призыв к действию */}
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold text-blue-800 mb-6">Join Our Events</h3>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Don’t miss out on these exclusive events. Reserve your spot now and be part of something special. We look forward to seeing you there!
        </p>
        <a
          href="/contact"
          className="inline-block py-3 px-8 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105"
        >
          Contact Us for More Information
        </a>
      </div>
    </div>
  );
};

export default Events;