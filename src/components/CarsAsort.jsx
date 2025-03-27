// import React, { useState } from "react";
// import { FaGasPump, FaCogs, FaUser, FaHeart } from "react-icons/fa";
// import car1 from "../assets/car1.svg";
// import car2 from "../assets/car2.svg";
// import car3 from "../assets/car3.svg";
// import car4 from "../assets/car4.svg";
// import car1Row2 from "../assets/car1row2.svg";
// import car2Row2 from "../assets/car2row2.svg";
// import car3Row2 from "../assets/car3row2.svg";
// import car4Row2 from "../assets/car4row2.svg";
// import car1Row3 from "../assets/car1row3.svg";
// import car2Row3 from "../assets/car2row3.svg";
// import car3Row3 from "../assets/car3row3.svg";
// import car4Row3 from "../assets/car4row3.svg";

// const carsData = [
//   {
//     id: 1,
//     name: "Koenigsegg",
//     type: "Sport",
//     image: car1,
//     fuel: "90L",
//     gear: "Manual",
//     seats: "2 People",
//     price: "$99.00",
//   },
//   {
//     id: 2,
//     name: "Nissan GT - R",
//     type: "Sport",
//     image: car2,
//     fuel: "80L",
//     gear: "Manual",
//     seats: "2 People",
//     price: "$80.00",
//   },
//   {
//     id: 3,
//     name: "Rolls - Royce",
//     type: "Sedan",
//     image: car3,
//     fuel: "70L",
//     gear: "Manual",
//     seats: "4 People",
//     price: "$96.00",
//   },
//   {
//     id: 4,
//     name: "Nissan GT - R",
//     type: "Sport",
//     image: car4,
//     fuel: "80L",
//     gear: "Manual",
//     seats: "2 People",
//     price: "$80.00",
//   },
//   {
//     id: 5,
//     name: "All New Rush",
//     type: "SUV",
//     image: car1Row2,
//     fuel: "70L",
//     gear: "Manual",
//     seats: "6 People",
//     price: "$72.00",
//   },
//   {
//     id: 6,
//     name: "CR - V",
//     type: "SUV",
//     image: car2Row2,
//     fuel: "80L",
//     gear: "Manual",
//     seats: "6 People",
//     price: "$80.00",
//   },
//   {
//     id: 7,
//     name: "All New Terios",
//     type: "SUV",
//     image: car3Row2,
//     fuel: "90L",
//     gear: "Manual",
//     seats: "6 People",
//     price: "$74.00",
//   },
//   {
//     id: 8,
//     name: "CR - V",
//     type: "SUV",
//     image: car4Row2,
//     fuel: "80L",
//     gear: "Manual",
//     seats: "6 People",
//     price: "$80.00",
//   },
//   {
//     id: 9,
//     name: "MG ZX Exclusive",
//     type: "Hatchback",
//     image: car1Row3,
//     fuel: "70L",
//     gear: "Manual",
//     seats: "4 People",
//     price: "$76.00",
//   },
//   {
//     id: 10,
//     name: "New MG ZS",
//     type: "SUV",
//     image: car2Row3,
//     fuel: "80L",
//     gear: "Manual",
//     seats: "4 People",
//     price: "$80.00",
//   },
//   {
//     id: 11,
//     name: "MG ZX Excite",
//     type: "Hatchback",
//     image: car3Row3,
//     fuel: "90L",
//     gear: "Manual",
//     seats: "4 People",
//     price: "$74.00",
//   },
//   {
//     id: 12,
//     name: "New MG ZS",
//     type: "SUV",
//     image: car4Row3,
//     fuel: "80L",
//     gear: "Manual",
//     seats: "4 People",
//     price: "$80.00",
//   },
// ];

// const CarsAsort = ({ favorites, setFavorites }) => {
//   const toggleFavorite = (car) => {
//     setFavorites((prev) =>
//       prev.some((fav) => fav.id === car.id)
//         ? prev.filter((fav) => fav.id !== car.id)
//         : [...prev, car]
//     );
//   };

//   return (
//     <div className="p-6 pl-30 max-w-460">
//       {/* section popular  cars */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl -ml-18 font-semibold ">Popular Car</h2>
//         <button className="text-blue-500 hover:underline ">View All</button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {carsData.slice(0, 4).map((car) => (
//           <div
//             key={car.id}
//             className="bg-white p-4 rounded-xl shadow-md text-center"
//           >
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">{car.type}</span>
//               <button onClick={() => toggleFavorite(car)}>
//                 {favorites.some((fav) => fav.id === car.id) ? (
//                   <FaHeart className="text-red-500" />
//                 ) : (
//                   <FaHeart className="text-gray-400" />
//                 )}
//               </button>
//             </div>
//             <img
//               src={car.image}
//               alt={car.name}
//               className="w-full h-32 object-contain"
//             />
//             <h3 className="text-lg font-bold mt-2">{car.name}</h3>
//             <div className="flex justify-around text-gray-600 text-sm mt-2">
//               <span className="flex items-center gap-1">
//                 <FaGasPump /> {car.fuel}
//               </span>
//               <span className="flex items-center gap-1">
//                 <FaCogs /> {car.gear}
//               </span>
//               <span className="flex items-center gap-1">
//                 <FaUser /> {car.seats}
//               </span>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <span className="text-lg font-semibold">
//                 {car.price} <span className="text-gray-500">/ day</span>
//               </span>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                 Rent Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* section recommended cars */}
//       <h2 className="text-xl font-semibold mt-8 mb-4 pt-15  -ml-18">Recommendation Car</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {carsData.slice(4).map((car) => (
//           <div
//             key={car.id}
//             className="bg-white p-4 rounded-xl shadow-md text-center"
//           >
//             <div className="flex justify-between">
//               <span className="text-gray-500 text-sm">{car.type}</span>
//               <button onClick={() => toggleFavorite(car)}>
//                 {favorites.some((fav) => fav.id === car.id) ? (
//                   <FaHeart className="text-red-500" />
//                 ) : (
//                   <FaHeart className="text-gray-400" />
//                 )}
//               </button>
//             </div>
//             <img
//               src={car.image}
//               alt={car.name}
//               className="w-full h-32 object-contain"
//             />
//             <h3 className="text-lg font-bold mt-2">{car.name}</h3>
//             <div className="flex justify-around text-gray-600 text-sm mt-2">
//               <span className="flex items-center gap-1">
//                 <FaGasPump /> {car.fuel}
//               </span>
//               <span className="flex items-center gap-1">
//                 <FaCogs /> {car.gear}
//               </span>
//               <span className="flex items-center gap-1">
//                 <FaUser /> {car.seats}
//               </span>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <span className="text-lg font-semibold">
//                 {car.price} <span className="text-gray-500">/ day</span>
//               </span>
//               <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                 Rent Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarsAsort;

// import React, { useState } from "react";
// import { FaGasPump, FaCogs, FaUser, FaHeart } from "react-icons/fa";
// import carsData from "../data/carsData"; // Загружаем данные о машинах

// const CarsAsort = ({ favorites, setFavorites }) => {
//   const [filters, setFilters] = useState({
//     type: [],
//     capacity: [],
//     maxPrice: 100,
//   });

//   // Функция для изменения фильтра
//   const handleFilterChange = (category, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [category]: prev[category].includes(value)
//         ? prev[category].filter((item) => item !== value)
//         : [...prev[category], value],
//     }));
//   };

//   // Фильтрация машин по выбранным параметрам
//   const filteredCars = carsData.filter((car) => {
//     const price = Number(String(car.price).replace(/[^0-9.]/g, "")); // Безопасное преобразование цены
//     const matchesType = filters.type.length === 0 || filters.type.includes(car.type);
//     const matchesCapacity = filters.capacity.length === 0 || filters.capacity.includes(car.seats.split(" ")[0]);
//     const matchesPrice = price <= filters.maxPrice;

//     return matchesType && matchesCapacity && matchesPrice;
//   });

//   return (
//     <div className="flex">
//       {/* Фильтр */}
//       <aside className="w-1/4 p-4 bg-gray-100 rounded-lg">
//         <h3 className="font-bold text-lg mb-3">Фильтр</h3>

//         {/* Фильтр по типу */}
//         <div className="mb-4">
//           <h4 className="font-semibold">Тип</h4>
//           {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
//             <label key={type} className="block">
//               <input
//                 type="checkbox"
//                 checked={filters.type.includes(type)}
//                 onChange={() => handleFilterChange("type", type)}
//               />{" "}
//               {type}
//             </label>
//           ))}
//         </div>

//         {/* Фильтр по вместимости */}
//         <div className="mb-4">
//           <h4 className="font-semibold">Вместимость</h4>
//           {["2", "4", "6", "8"].map((capacity) => (
//             <label key={capacity} className="block">
//               <input
//                 type="checkbox"
//                 checked={filters.capacity.includes(capacity)}
//                 onChange={() => handleFilterChange("capacity", capacity)}
//               />{" "}
//               {capacity} People
//             </label>
//           ))}
//         </div>

//         {/* Фильтр по цене */}
//         <div className="mb-4">
//           <h4 className="font-semibold">Цена</h4>
//           <input
//             type="range"
//             min="50"
//             max="100"
//             value={filters.maxPrice}
//             onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
//             className="w-full"
//           />
//           <span>${filters.maxPrice}.00</span>
//         </div>
//       </aside>

//       {/* Карточки машин */}
//       <section className="w-3/4 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredCars.length > 0 ? (
//           filteredCars.map((car) => (
//             <div key={car.id} className="bg-white p-4 rounded-xl shadow-md text-center">
//               <div className="flex justify-between">
//                 <span className="text-gray-500 text-sm">{car.type}</span>
//                 <button
//                   onClick={() =>
//                     setFavorites((prev) =>
//                       prev.some((fav) => fav.id === car.id)
//                         ? prev.filter((fav) => fav.id !== car.id)
//                         : [...prev, car]
//                     )
//                   }
//                 >
//                   {favorites.some((fav) => fav.id === car.id) ? (
//                     <FaHeart className="text-red-500" />
//                   ) : (
//                     <FaHeart className="text-gray-400" />
//                   )}
//                 </button>
//               </div>
//               <img src={car.image} alt={car.name} className="w-full h-32 object-contain" />
//               <h3 className="text-lg font-bold mt-2">{car.name}</h3>
//               <div className="flex justify-around text-gray-600 text-sm mt-2">
//                 <span className="flex items-center gap-1"><FaGasPump /> {car.fuel}</span>
//                 <span className="flex items-center gap-1"><FaCogs /> {car.gear}</span>
//                 <span className="flex items-center gap-1"><FaUser /> {car.seats}</span>
//               </div>
//               <div className="flex justify-between items-center mt-4">
//                 <span className="text-lg font-semibold">
//                   {car.price} <span className="text-gray-500">/ day</span>
//                 </span>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
//                   Rent Now
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="col-span-3 text-center text-gray-500">Нет машин по заданным фильтрам</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default CarsAsort;

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
