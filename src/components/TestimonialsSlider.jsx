// import React, { useCallback, useEffect, useState } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import men1 from "../assets/men1.jpg"
// import men2 from "../assets/men2.jpg"
// import men3 from "../assets/men3.jpg"
// import men4 from "../assets/men4.jpg"
// import men5 from "../assets/men5.jpg"
// import men6 from "../assets/men6.jpg"
// import girl1 from "../assets/girl1.jpg"
// import girl2 from "../assets/girl2.jpg"
// import girl3 from "../assets/girl3.jpg"
// import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

// const testimonials = [
//   { name: "Max", role: "Client", image: men1, text: "The best service I have ever used!" },
//   { name: "Ann", role: "Client", image: girl1, text: "Very convenient and reliable service!" },
//   { name: "Alex", role: "Client", image: men2, text: "100% satisfied!" },
//   { name: "Kate", role: "Client", image: girl2, text: "Super high quality service!" },
//   { name: "John", role: "Client", image: men3, text: "Wonderful experience!" },
//   { name: "Mary", role: "Client", image: girl3, text: "Fast, convenient, I recommend!" },
//   { name: "Bobi", role: "Client", image: men4, text: "Amazing impression!" },
//   { name: "Charlz", role: "Client", image: men5, text: "Fast, easy, highly recommended!" },
//   { name: "JeryXd", role: "Client", image: men6, text: "Top-quality customer experience!" },

// ];

// const TestimonialsSlider = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
//   const [canScrollPrev, setCanScrollPrev] = useState(false);
//   const [canScrollNext, setCanScrollNext] = useState(false);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setCanScrollPrev(emblaApi.canScrollPrev());
//     setCanScrollNext(emblaApi.canScrollNext());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//     onSelect();
//   }, [emblaApi, onSelect]);

//   return (
//     <div className="relative w-full bg-gray-700 py-10">
//       <h2 className="text-3xl font-bold mb-6 text-center text-amber-100">Reviews</h2>
//       <div className="embla overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="flex-shrink-0 w-96 mx-4 p-8 bg-gray-700 rounded-lg shadow-lg text-center">
//               <img src={testimonial.image} alt={testimonial.name}  className="w-80 h-80 mx-auto rounded-lg object-cover" />
//               <p className="text-xl font-semibold mt-4 text-amber-100">{testimonial.text}</p>
//               <h3 className="text-2xl font-bold mt-2 text-amber-100">{testimonial.name}</h3>
//               <p className="text-amber-100 text-lg">{testimonial.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md ${
//           canScrollPrev ? "opacity-100" : "opacity-50"
//         }`}
//         onClick={() => emblaApi && emblaApi.scrollPrev()}
//         disabled={!canScrollPrev}
//       >
//         <SlArrowLeft />
//       </button>
//       <button
//         className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md ${
//           canScrollNext ? "opacity-100" : "opacity-50"
//         }`}
//         onClick={() => emblaApi && emblaApi.scrollNext()}
//         disabled={!canScrollNext}
//       >
//       <SlArrowRight />
//       </button>
//     </div>
//   );
// };

// export default TestimonialsSlider;

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import men4 from "../assets/men4.jpg";
import men5 from "../assets/men5.jpg";
import men6 from "../assets/men6.jpg";
import girl1 from "../assets/girl1.jpg";
import girl2 from "../assets/girl2.jpg";
import girl3 from "../assets/girl3.jpg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { wrap } from "motion";

const testimonials = [
  {
    name: "Max",
    role: "Client",
    image: men1,
    text: "The best service I have ever used!",
  },
  {
    name: "Ann",
    role: "Client",
    image: girl1,
    text: "Very convenient and reliable service!",
  },
  { name: "Alex", role: "Client", image: men2, text: "100% satisfied!" },
  {
    name: "Kate",
    role: "Client",
    image: girl2,
    text: "Super high quality service!",
  },
  { name: "John", role: "Client", image: men3, text: "Wonderful experience!" },
  {
    name: "Mary",
    role: "Client",
    image: girl3,
    text: "Fast, convenient, I recommend!",
  },
  { name: "Bobi", role: "Client", image: men4, text: "Amazing impression!" },
  {
    name: "Charlz",
    role: "Client",
    image: men5,
    text: "Fast, easy, highly recommended!",
  },
  {
    name: "JeryXd",
    role: "Client",
    image: men6,
    text: "Top-quality customer experience!",
  },
];

const TestimonialsSlider = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [direction, setDirection] = useState(1);

  const setSlide = (newDirection) => {
    const nextItem = wrap(0, testimonials.length, selectedItem + newDirection);
    setSelectedItem(nextItem);
    setDirection(newDirection);
  };

  return (
    <div className="relative w-full  bg-gray-700 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-amber-100">
        Reviews
      </h2>
      <div className="relative w-full">
        <div className="flex justify-center items-center">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
            key={testimonials[selectedItem].name}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.2,
                  type: "spring",
                  visualDuration: 0.3,
                  bounce: 0.4,
                },
              }}
              exit={{ opacity: 0, x: direction * -50 }}
              className="text-center bg-gray-700 p-8 rounded-lg shadow-lg"
            >
              <img
                src={testimonials[selectedItem].image}
                alt={testimonials[selectedItem].name}
                className="w-80 h-80 mx-auto rounded-lg object-cover"
              />
              <p className="text-xl font-semibold mt-4 text-amber-100">
                {testimonials[selectedItem].text}
              </p>
              <h3 className="text-2xl font-bold mt-2 text-amber-100">
                {testimonials[selectedItem].name}
              </h3>
              <p className="text-amber-100 text-lg">
                {testimonials[selectedItem].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={() => setSlide(-1)}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
        >
          <SlArrowLeft />
        </button>
        <button
          onClick={() => setSlide(1)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
        >
          <SlArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
