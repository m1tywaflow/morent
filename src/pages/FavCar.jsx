// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const FavoriteCars = () => {
//   const [favorites, setFavorites] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(savedFavorites);
//   }, []);

//   const removeFromFavorites = (carId) => {
//     const updatedFavorites = favorites.filter((car) => car.id !== carId);
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-gray-900">Favorite Cars</h1>
//       {favorites.length === 0 ? (
//         <p className="text-gray-500">No favorite cars yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {favorites.map((car) => (
//             <div key={car.id} className="bg-white p-4 rounded-xl shadow-md">
//               <img src={car.images[0]} alt={car.name} className="w-full h-40 rounded-md" />
//               <h3 className="text-lg font-bold mt-2">{car.name}</h3>
//               <p className="text-gray-600">{car.type}</p>
//               <span className="text-lg font-semibold">{car.price} / day</span>
              
//               {/* Кнопка "Удалить из избранного" */}
//               <button
//                 onClick={() => removeFromFavorites(car.id)}
//                 className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
//               >
//                 Remove from Favorites
//               </button>

//               {/* Кнопка "Арендовать" */}
//               <button
//                 onClick={() => navigate(`/car/${car.id}`)}
//                 className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//               >
//                 Rent Now
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FavoriteCars;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const FavoriteCars = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(savedFavorites);
      setLoading(false);
    }, 1000);
  }, []);

  const removeFromFavorites = (carId) => {
    const updatedFavorites = favorites.filter((car) => car.id !== carId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <FaHeart className="text-red-500 text-6xl animate-ping" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900">Favorite Cars</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-2xl pt-10 text-center">No favorite cars yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((car) => (
            <div key={car.id} className="bg-white p-4 rounded-xl shadow-md">
              <img src={car.images[0]} alt={car.name} className="w-full h-40 rounded-md" />
              <h3 className="text-lg font-bold mt-2">{car.name}</h3>
              <p className="text-gray-600">{car.type}</p>
              <span className="text-lg font-semibold">{car.price} / day</span>

              <button
                onClick={() => removeFromFavorites(car.id)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 flex items-center justify-center gap-2"
              >
                <FaHeart /> Remove from Favorites
              </button>

              <button
                onClick={() => navigate(`/car/${car.id}`)}
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Rent Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteCars;
