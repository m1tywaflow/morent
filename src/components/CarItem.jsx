import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const CarItem = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = savedFavorites.some((favCar) => favCar.id === car.id);
    setIsFavorite(isFav);
  }, [car.id]);

  const toggleFavorite = () => {
    let favCars = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favCars = favCars.filter((favCar) => favCar.id !== car.id);
    } else {
      favCars.push(car);
    }

    localStorage.setItem("favorites", JSON.stringify(favCars));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="car-item">
      <img src={car.images[0]} alt={car.name} className="car-image" />
      <h3>{car.name}</h3>
      <p>{car.price} / day</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-500" />}
      </button>
    </div>
  );
};  

export default CarItem;
