import React, { useRef, useEffect } from "react";
import fcar1 from "../assets/fcar1.jpg";
import fcar2 from "../assets/fcar2.jpg";
import fcar3 from "../assets/fcar3.jpg";
import fcar4 from "../assets/fcar4.jpg";
import fcar5 from "../assets/fcar5.jpg";
import fcar6 from "../assets/fcar6.jpg";
import fcar7 from "../assets/ffcar7.jpg";
import fcar8 from "../assets/fcar8.jpg";
import fcar9 from "../assets/fcar9.jpg";
import fcar10 from "../assets/fcar10.jpg";
import fcar11 from "../assets/fcar11.jpg";
import fcar12 from "../assets/fcar12.jpg";

const images = [
    fcar1,
    fcar2,
    fcar3,
    fcar4,
    fcar5,
    fcar6,
    fcar7,
    fcar8,
    fcar9,
    fcar10,
    fcar11,
    fcar12,
];

export default function ImgGallery() {
    const galleryRef = useRef(null);

    useEffect(() => {
        const scrollGallery = () => {
            if (galleryRef.current) {
                galleryRef.current.scrollLeft += 2;
                if (
                    galleryRef.current.scrollLeft >=
                    galleryRef.current.scrollWidth - galleryRef.current.clientWidth
                ) {
                    galleryRef.current.scrollLeft = 0;
                }
            }
        };
        const interval = setInterval(scrollGallery, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden w-full bg-gray-100 py-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
                Image Gallery
            </h2>
            <div
                ref={galleryRef}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-hidden overflow-y-hidden px-4"
                style={{ scrollBehavior: "smooth" }}
            >
                {images.map((img, index) => (
                    <div key={index} className="relative group">
                        <img
                            loading="lazy"
                            src={img}
                            alt={`Gallery Image ${index + 1}`}
                            className="h-60 w-full rounded-lg object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}