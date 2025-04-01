// import React, { useRef } from "react";
// import mainPhoto from "../assets/main.jpg";
// import carfull from "../assets/carfullscreen.jpg";
// import TestimonialsSlider from "../components/TestimonialsSlider";
// import FAQPage from "../components/FAQPage";
// // import TeamSection from "../components/TeamSection";
// import TickerSlider from "../components/TickerSlider";
// import MapComponent from "../components/MapComponent";
// import AboutMorent from "../components/AboutMorent";
// import PartnersSection from "../components/PartnersSection";
// const Home = () => {
//   const topRef = useRef(null); // Create a ref to the top of the page

//   const scrollToTop = () => {
//     if (topRef.current) {
//       topRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the top
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900  overflow-x-hidden">
//       <div ref={topRef} className="relative w-full h-screen overflow-hidden">
//         <div
//           className="absolute inset-0 bg-fixed bg-center bg-cover"
//           style={{ backgroundImage: `url(${mainPhoto})` }}
//         ></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 text-white p-4">
//           <h2 className="text-3xl font-bold mb-4">
//             Take the car of your dreams
//           </h2>
//           <a
//             href="/rent"
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
//           >
//             Rent the car
//           </a>
//         </div>
//       </div>
      
//       <PartnersSection/>
//       <TestimonialsSlider />
      
//       <TickerSlider />
//       {/* Section for carfull Image */}
//       <div className="relative w-full">
//         <img className="w-full" loading="lazy" src={carfull} alt="car" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 text-white p-4">
//           <h2 className="text-3xl font-bold mb-4">
//             Don't miss your chance and rent a car right now!
//           </h2>
//           <a
//             href="/rent"
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
//           >
//             Rent the car
//           </a>
//         </div>
//       </div>
      
//       <FAQPage />

//       {/* Back to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-10 h-10 w-10  right-10  bg-black text-white rounded-full  shadow-md hover:bg-blue-700 transition"
//         aria-label="Scroll to top"
//       >
//         ↑
//       </button>
//       <div>
//         <AboutMorent />
//       </div>
//       <div className="pb-30 bg-amber-50 w-screen ">
//         <MapComponent />
//         <p className="text-gray-400 max-w-100 ml-190 text-center text-1xl  pt-10">
//           At the moment we have only three car rental points, but we are sure
//           that with your support there will soon be many more. Thank you all!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useRef } from "react";
import mainPhoto from "../assets/main.jpg";
import carfull from "../assets/carfullscreen.jpg";
import TestimonialsSlider from "../components/TestimonialsSlider";
import FAQPage from "../components/FAQPage";
import TickerSlider from "../components/TickerSlider";
import MapComponent from "../components/MapComponent";
import AboutMorent from "../components/AboutMorent";
import PartnersSection from "../components/PartnersSection";

const Home = () => {
  const topRef = useRef(null); // Create a ref to the top of the page

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the top
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 overflow-x-hidden">
      <div ref={topRef} className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${mainPhoto})` }}
        ></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 text-white p-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Take the car of your dreams
          </h2>
          <a
            href="/rent"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Rent the car
          </a>
        </div>
      </div>

      <PartnersSection />
      <TestimonialsSlider />
      <TickerSlider />

      {/* Section for carfull Image */}
      <div className="relative w-full">
        <img className="w-full h-auto" loading="lazy" src={carfull} alt="car" />
        <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 text-white p-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Don't miss your chance and rent a car right now!
          </h2>
          <a
            href="/rent"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Rent the car
          </a>
        </div>
      </div>

      <FAQPage />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 h-10 w-10 right-10 bg-black text-white rounded-full shadow-md hover:bg-blue-700 transition"
        aria-label="Scroll to top"
      >
        ↑
      </button>

      <AboutMorent />

      <div className="pb-30 bg-amber-50 w-full">
        <MapComponent />
        <p className="text-gray-400 max-w-2xl mx-auto text-center text-lg pt-10 px-4">
          At the moment we have only three car rental points, but we are sure
          that with your support there will soon be many more. Thank you all!
        </p>
      </div>
    </div>
  );
};

export default Home;