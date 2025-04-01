// import React from "react";
// import firstph from "../assets/previewfirst.svg";
// import secondph from "../assets/previewsecond.svg";

// const Twoadds = () => {
//   return (
//     <div className="flex gap-6 p-6">
//       {/* first card */}
//       <div className="relative w-1/2">
//         <img src={firstph} alt="first car" className="w-full h-auto" />
//         <div className="absolute top-6 left-6 text-white max-w-[60%]">
//           <h2 className="text-5xl font-bold">
//             The Best Platform for Car Rental
//           </h2>
//           <p className="mt-3 text-xl font-semibold max-w-[60%] pt-5">
//             Ease of doing a car rental safely and reliably. Of course at a low
//             price.
//           </p>
//         </div>
//       </div>

//       {/* second card */}
//       <div className="relative w-1/2">
//         <img src={secondph} alt="second car" className="w-full h-auto" />
//         <div className="absolute top-6 left-6 text-white max-w-[60%]">
//           <h2 className="text-5xl font-bold ">
//             Easy way to rent a car at a low price
//           </h2>
//           <p className="mt-3 text-xl font-semibold max-w-[60%] pt-5">
//             Providing cheap car rental services and safe and comfortable
//             facilities.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Twoadds;
import React from "react";
import firstph from "../assets/previewfirst.svg";
import secondph from "../assets/previewsecond.svg";

const Twoadds = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-6">
      {/* first card */}
      <div className="relative w-full md:w-1/2">
        <img src={firstph} alt="first car" className="w-full h-auto rounded-lg" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 rounded-lg text-center w-[90%] md:w-[80%] lg:w-[70%]">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
            The Best Platform for Car Rental
          </h2>
          <p className="mt-2 text-sm md:text-base lg:text-lg font-semibold">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
        </div>
      </div>

      {/* second card */}
      <div className="relative w-full md:w-1/2">
        <img src={secondph} alt="second car" className="w-full h-auto rounded-lg" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-4 rounded-lg text-center w-[90%] md:w-[80%] lg:w-[70%]">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">
            Easy way to rent a car at a low price
          </h2>
          <p className="mt-2 text-sm md:text-base lg:text-lg font-semibold">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Twoadds;