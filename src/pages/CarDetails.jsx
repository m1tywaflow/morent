import { useParams, useNavigate } from "react-router-dom";
import carsData from "../data/carsData";
import { FaGasPump, FaCogs, FaUsers } from "react-icons/fa";
import { useState } from "react";
import CarRentalRules from "../components/CarRentalRules";
import { motion, AnimatePresence } from "framer-motion";
const getRandomAvatar = () => {
  const avatars = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/3.jpg",
  ];
  return avatars[Math.floor(Math.random() * avatars.length)];
};

const Stars = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`text-yellow-500 ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const CarDetails = () => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));
  const [showAllComments, setShowAllComments] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const navigate = useNavigate();

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(""); // Clear the selected image when closing
  };

  // comments
  const comments = [
    {
      id: 1,
      user: "John D.",
      text: "Amazing car! Very comfortable and smooth to drive.",
      rating: 5,
    },
    {
      id: 2,
      user: "Sarah K.",
      text: "I loved the fuel efficiency. Highly recommend!",
      rating: 4,
    },
    {
      id: 3,
      user: "Mike L.",
      text: "Great value for the price. Will rent again!",
      rating: 5,
    },
    {
      id: 4,
      user: "Alice W.",
      text: "The best car I've ever rented!",
      rating: 5,
    },
    {
      id: 5,
      user: "Tom R.",
      text: "Very spacious and great for family trips.",
      rating: 4,
    },
    {
      id: 6,
      user: "Emma J.",
      text: "Had a fantastic experience with this car.",
      rating: 5,
    },
    {
      id: 7,
      user: "Chris P.",
      text: "Smooth ride and excellent service.",
      rating: 4,
    },
    {
      id: 8,
      user: "Sophia L.",
      text: "Highly recommend for long drives!",
      rating: 5,
    },
    { id: 9, user: "James T.", text: "Comfortable and stylish!", rating: 4 },
    {
      id: 10,
      user: "Olivia M.",
      text: "I would rent this car again without hesitation.",
      rating: 5,
    },
    {
      id: 11,
      user: "Liam N.",
      text: "Fantastic experience! The car was in perfect condition.",
      rating: 5,
    },

    {
      id: 12,
      user: "Noah B.",
      text: "Great service and a wonderful car!",
      rating: 5,
    },

    {
      id: 13,
      user: "Mia C.",
      text: "This car made my trip so much better!",
      rating: 5,
    },

    {
      id: 14,
      user: "Ava D.",
      text: "I was impressed with the comfort and performance.",
      rating: 5,
    },

    {
      id: 15,
      user: "Isabella E.",
      text: "Perfect for city driving and long trips!",
      rating: 4,
    },

    {
      id: 16,
      user: "Sophia F.",
      text: "I loved every moment of driving this car!",
      rating: 5,
    },
  ];

  // shuffle all comments
  const shuffledComments = shuffleArray([...comments]);

  if (!car) return <p className="text-center text-red-500">Car not found</p>;

  return (
    <div className="min-h-screen p-6 pt-16 bg-gray-100 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full flex flex-col md:flex-row">
        {/* Gallery */}
        {/* <div className="grid grid-cols-3 gap-2">
          <img
            src={car.images[0]}
            alt={`${car.name} image 1`}
            className="w-full h-40 rounded-lg pr-80 cursor-pointer col-span-3"
            onClick={() => openModal(car.images[0])} // Open modal on click
          />
          <img
            src={car.images[1]}
            alt={`${car.name} image 2`}
            className="w-full h-40 rounded-lg cursor-pointer col-span-1"
            onClick={() => openModal(car.images[1])}
          />
          <img
            src={car.images[2]}
            alt={`${car.name} image 3`}
            loading="lazy"
            className="w-full h-40 rounded-lg cursor-pointer col-span-1"
            onClick={() => openModal(car.images[2])}
          />
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <img
            src={car.images[0]}
            alt={`${car.name} image 1`}
            className="w-full h-40 rounded-lg cursor-pointer sm:col-span-2 md:col-span-3"
            onClick={() => openModal(car.images[0])}
          />
          <img
            src={car.images[1]}
            alt={`${car.name} image 2`}
            className="w-full h-40 rounded-lg cursor-pointer"
            onClick={() => openModal(car.images[1])}
          />
          <img
            src={car.images[2]}
            alt={`${car.name} image 3`}
            loading="lazy"
            className="w-full h-40 rounded-lg cursor-pointer"
            onClick={() => openModal(car.images[2])}
          />
        </div>

        {/* Car Information */}
        {/* <div className="md:w-1/2 md:pl-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-blue-600">{car.name}</h1>
          </div>
          <p className="text-gray-600 text-xl mb-15">{car.description}</p>

          <div className="flex justify-between text-gray-600 mt-4">
            <span className="flex items-center gap-1">
              <FaCogs /> {car.gear}
            </span>
            <span className="flex items-center gap-1">
              <FaGasPump /> {car.fuel}
            </span>
            <span className="flex items-center gap-1">
              <FaUsers /> {car.seats}
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Features:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {car.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-semibold text-blue-600">
              {car.price} / day
            </p>
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-4 hover:bg-blue-600 transition"
            onClick={() => navigate(`/payment/${car.id}`)} // Переход на страницу оплаты
          >
            Proceed to payment
          </button>
        </div> */}
        <div className="w-full md:w-1/2 md:pl-6">
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
              {car.name}
            </h1>
          </div>
          <p className="text-gray-600 text-base md:text-xl mb-4 md:mb-6">
            {car.description}
          </p>

          <div className="flex flex-col md:flex-row justify-between text-gray-600 mt-4">
            <span className="flex items-center gap-1 mb-2 md:mb-0">
              <FaCogs /> {car.gear}
            </span>
            <span className="flex items-center gap-1 mb-2 md:mb-0">
              <FaGasPump /> {car.fuel}
            </span>
            <span className="flex items-center gap-1 mb-2 md:mb-0">
              <FaUsers /> {car.seats}
            </span>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Features:</h3>
            <ul className="list-disc list-inside text-gray-600">
              {car.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-lg md:text-xl font-semibold text-blue-600">
              {car.price} / day
            </p>
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-4 hover:bg-blue-600 transition"
            onClick={() => navigate(`/payment/${car.id}`)} // Переход на страницу оплаты
          >
            Proceed to payment
          </button>
        </div>
      </div>
      <CarRentalRules />

      {/* Comments Section */}
      {/* <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-6 pt-30 pb-30">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <AnimatePresence>
          {shuffledComments
            .slice(0, showAllComments ? shuffledComments.length : 3)
            .map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="border-b pb-2 mb-2 overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={getRandomAvatar()}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="font-semibold">{comment.user}</p>
                </div>
                <p className="text-gray-700">{comment.text}</p>
                <Stars rating={comment.rating} />
              </motion.div>
            ))}
        </AnimatePresence>
        {shuffledComments.length > 3 && (
          <button
            className="text-blue-500 mt-2 hover:underline"
            onClick={() => setShowAllComments(!showAllComments)}
          >
            {showAllComments ? "Show Less" : "Show All"}
          </button>
        )}
      </div> */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full mt-6">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <AnimatePresence>
          {shuffledComments
            .slice(0, showAllComments ? shuffledComments.length : 3)
            .map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="border-b pb-4 mb-4 overflow-hidden"
              >
                <div className="flex items-start gap-2 mb-2">
                  <img
                    src={getRandomAvatar()}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full" // Увеличен размер аватара для лучшей видимости
                  />
                  <div>
                    <p className="font-semibold">{comment.user}</p>
                    <p className="text-gray-700">{comment.text}</p>
                    <Stars rating={comment.rating} />
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
        {shuffledComments.length > 3 && (
          <button
            className="text-blue-500 mt-2 hover:underline"
            onClick={() => setShowAllComments(!showAllComments)}
          >
            {showAllComments ? "Show Less" : "Show All"}
          </button>
        )}
      </div>
      {/* Modal for enlarged image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal on click outside the image
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-screen-sm max-h-screen object-contain"
            />
            <button
              className="absolute top-0 right-0 bg-white text-black p-2 rounded-full"
              onClick={closeModal} // Close button for modal
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
