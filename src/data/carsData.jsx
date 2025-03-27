import car1 from "../assets/car1.svg";
import car2 from "../assets/car2.svg";
import car3 from "../assets/car3.svg";
import car4 from "../assets/car4.svg";
import car1Row2 from "../assets/car1row2.svg";
import car2Row2 from "../assets/car2row2.svg";
import car3Row2 from "../assets/car3row2.svg";
import car4Row2 from "../assets/car4row2.svg";
import car1Row3 from "../assets/car1row3.svg";
import car2Row3 from "../assets/car2row3.svg";
import car3Row3 from "../assets/car3row3.svg";
import car4Row3 from "../assets/car4row3.svg";
import regera1 from "../assets/regera1.jpg";
import regera2 from "../assets/regera2.jpg";
import gtr1 from "../assets/grt1.jpg"
import gtr2 from "../assets/gtr2.jpg"
import rols1 from "../assets/rols1.jpg"
import rols2 from "../assets/rols2.jpg"
import gtr3 from "../assets/gtr3.jpg"
import gtr4 from "../assets/gtr4.jpg"
import rush1 from "../assets/rush1.jpg"
import rush2 from "../assets/rush2.jpg"
import crv1 from "../assets/crv1.jpg"
import crv2 from "../assets/crv2.jpg"
import crv3 from "../assets/crv3.jpg"
import crv4 from "../assets/crv4.jpg"
import terios1 from "../assets/terios1.jpg"
import terios2 from "../assets/terios2.jpg"
import mg1 from "../assets/mg1.jpg"
import mg2 from "../assets/mg2.jpg"
import mg3 from "../assets/mg3.jpg"
import mg4 from "../assets/mg4.jpg"
import excite1 from "../assets/extice1.jpg"
import excite2 from "../assets/extice2.jpg"
import zs1 from "../assets/zs1.jpg"
import zs2 from "../assets/zs2.jpg"
const carsData = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    images: [car1, regera1, regera2],
    fuel: "90L",
    gear: "Manual",
    seats: "2 People",
    price: "$345.00",
    description:
      "A high-performance Swedish hypercar with cutting-edge aerodynamics and extreme speed capabilities.",
    features: [
      "Top speed: 400 km/h",
      "0-100 km/h: 2.8 sec",
      "Horsepower: 1500 HP",
      "Fuel consumption: 14 L/100 km",
      "Designed for track racing and high-speed driving",
    ],
    isFavorite: false,
  },
  {
    id: 2,
    name: "Nissan GT-R",
    type: "Sport",
    images: [car2, gtr1, gtr2],
    fuel: "80L",
    gear: "Manual",
    seats: "2 People",
    price: "$120.00",
    description:
      "A legendary Japanese sports car known for its powerful engine and precision handling.",
    features: [
      "Top speed: 330 km/h",
      "0-100 km/h: 2.9 sec",
      "Horsepower: 600 HP",
      "Fuel consumption: 11 L/100 km",
      "Ideal for both city driving and track racing",
    ],
    isFavorite: false,
  },
  {
    id: 3,
    name: "Rolls-Royce",
    type: "Sedan",
    images: [car3, rols1, rols2],
    fuel: "70L",
    gear: "Manual",
    seats: "4 People",
    price: "$220.00",
    description:
      "A luxurious sedan offering unmatched comfort, handcrafted interiors, and a whisper-quiet ride.",
    features: [
      "Top speed: 250 km/h",
      "0-100 km/h: 5.0 sec",
      "Horsepower: 563 HP",
      "Fuel consumption: 13 L/100 km",
      "Designed for ultimate luxury and prestige",
    ],
    isFavorite: false,
  },
  {
    id: 4,
    name: "Nissan GT-R",
    type: "Sport",
    images: [car4, gtr3, gtr4],
    fuel: "80L",
    gear: "Manual",
    seats: "2 People",
    price: "$130.00",
    description:
      "A true icon of speed and power, delivering outstanding performance on both city roads and racetracks.",
    features: [
      "Top speed: 330 km/h",
      "0-100 km/h: 2.9 sec",
      "Horsepower: 600 HP",
      "Fuel consumption: 11 L/100 km",
      "Perfect for both urban roads and track racing",
    ],
    isFavorite: false,
  },
  {
    id: 5,
    name: "All New Rush",
    type: "SUV",
    images: [car1Row2, rush1, rush2],
    fuel: "70L",
    gear: "Manual",
    seats: "6 People",
    price: "$80.00",
    description:
      "A reliable and spacious SUV, perfect for family trips and off-road adventures.",
    features: [
      "Top speed: 175 km/h",
      "0-100 km/h: 11.0 sec",
      "Horsepower: 103 HP",
      "Fuel consumption: 7.5 L/100 km",
      "Ideal for long trips and off-road terrain",
    ],
    isFavorite: false,
  },
  {
    id: 6,
    name: "CR-V",
    type: "SUV",
    images: [car2Row2, crv1, crv2],
    fuel: "80L",
    gear: "Manual",
    seats: "6 People",
    price: "$74.00",
    description:
      "A stylish and practical SUV, combining efficiency, comfort, and advanced safety features.",
    features: [
      "Top speed: 210 km/h",
      "0-100 km/h: 8.9 sec",
      "Horsepower: 190 HP",
      "Fuel consumption: 6.5 L/100 km",
      "Designed for daily city driving and family trips",
    ],
    isFavorite: false,
  },
  {
    id: 7,
    name: "All New Terios",
    type: "SUV",
    images: [car3Row2, terios1, terios2],
    fuel: "90L",
    gear: "Manual",
    seats: "6 People",
    price: "$74.00",
    description:
      "A compact yet spacious SUV, offering excellent fuel efficiency and a smooth ride on any terrain.",
    features: [
      "Top speed: 180 km/h",
      "0-100 km/h: 10.5 sec",
      "Horsepower: 105 HP",
      "Fuel consumption: 7.8 L/100 km",
      "Built for both city and off-road adventures",
    ],
    isFavorite: false,
  },
  {
    id: 8,
    name: "CR-V",
    type: "SUV",
    images: [car4Row2, crv3, crv4],
    fuel: "80L",
    gear: "Manual",
    seats: "6 People",
    price: "$80.00",
    description:
      "An SUV designed for both urban and off-road adventures, featuring an advanced suspension system and a roomy interior.",
    features: [
      "Top speed: 210 km/h",
      "0-100 km/h: 8.9 sec",
      "Horsepower: 190 HP",
      "Fuel consumption: 6.5 L/100 km",
      "Ideal for long trips and urban commutes",
    ],
    isFavorite: false,
  },
  {
    id: 9,
    name: "MG ZX Exclusive",
    type: "Hatchback",
    images: [car1Row3, mg1, mg2],
    fuel: "70L",
    gear: "Manual",
    seats: "4 People",
    price: "$76.00",
    description:
      "A modern hatchback with a sleek design, responsive handling, and efficient fuel consumption.",
    features: [
      "Top speed: 190 km/h",
      "0-100 km/h: 9.5 sec",
      "Horsepower: 120 HP",
      "Fuel consumption: 5.9 L/100 km",
      "Designed for city driving and daily commutes",
    ],
    isFavorite: false,
  },
  {
    id: 10,
    name: "New MG ZS",
    type: "SUV",
    images: [car2Row3, mg3, mg4],
    fuel: "80L",
    gear: "Manual",
    seats: "4 People",
    price: "$80.00",
    description:
      "A stylish and versatile SUV, offering comfort, safety, and cutting-edge technology for everyday use.",
    features: [
      "Top speed: 200 km/h",
      "0-100 km/h: 10.2 sec",
      "Horsepower: 140 HP",
      "Fuel consumption: 6.7 L/100 km",
      "Ideal for city and highway driving",
    ],
    isFavorite: false,
  },
  {
    id: 11,
    name: "MG ZX Excite",
    type: "Hatchback",
    images: [car3Row3, excite1, excite2],
    fuel: "90L",
    gear: "Manual",
    seats: "4 People",
    price: "$74.00",
    description:
      "An energetic hatchback with a bold design, perfect for city driving and weekend getaways.",
    features: [
      "Top speed: 185 km/h",
      "0-100 km/h: 9.8 sec",
      "Horsepower: 115 HP",
      "Fuel consumption: 5.5 L/100 km",
      "Designed for urban mobility and efficiency",
    ],
    isFavorite: false,
  },
  {
    id: 12,
    name: "New MG ZS",
    type: "SUV",
    images: [car4Row3, zs1, zs2],
    fuel: "80L",
    gear: "Manual",
    seats: "4 People",
    price: "$92.00",
    description:
      "A compact SUV that combines elegance and practicality, making it an excellent choice for urban commuting and weekend escapes.",
    features: [
      "Top speed: 200 km/h",
      "0-100 km/h: 10.2 sec",
      "Horsepower: 140 HP",
      "Fuel consumption: 6.7 L/100 km",
      "Ideal for modern drivers and families",
    ],
    isFavorite: false,
  },
];
export default carsData;
