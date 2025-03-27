import { FaCheckCircle, FaCar, FaRocket } from "react-icons/fa";

export default function AboutMorent() {
  return (
    <div className="bg-amber-50 w-screen flex flex-col items-center pb-20 pt-30 px-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
          <FaCar className="text-blue-500" /> About MORENT
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          MORENT is a modern and convenient car rental service designed for those who value comfort, 
          reliability, and freedom of movement. We offer a wide selection of vehicles to suit every taste 
          – from budget-friendly city cars to premium and sports models.
        </p>
      </div>

      <div className="mt-8 max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">🌟 Why Choose Us?</h2>
        <ul className="space-y-4">
          {[
            "Wide selection – we have cars for every need and budget.",
            "Easy booking – rent a car in just a few clicks.",
            "Transparent conditions – no hidden fees or unexpected charges.",
            "24/7 support – always ready to assist you on the road.",
            "Insurance & safety – all vehicles are insured and regularly maintained."
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700 text-lg">
              <FaCheckCircle className="text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-xl font-semibold text-blue-600 flex items-center gap-2">
        MORENT – your freedom to move! <FaRocket className="text-orange-500" />
      </div>
    </div>
  );
}
