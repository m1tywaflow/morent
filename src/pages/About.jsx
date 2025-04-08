import React from "react";
import manyCars from "../assets/manycars.jpg";
import TeamSection from "../components/TeamSection";
import PartnersSection from "../components/PartnersSection";

const About = () => {
  return (
    <div className="w-full p-6 md:p-8 mx-auto shadow-lg bg-gray-700 rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={manyCars}
            loading="lazy"
            alt="Many Cars"
            className="w-full h-auto pt-20 object-cover rounded-lg"
          />
        </div>

        <div className="flex-1 pt-20 md:pl-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-100 mb-8">
            About Us
          </h1>

          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-blue-500">Our Mission</h2>
            <p className="mt-2 text-lg text-gray-700">
              We strive to provide reliable and affordable car rental services,
              focusing on customer satisfaction and convenience.
            </p>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-blue-500">Our Story</h2>
            <p className="mt-2 text-lg text-gray-700">
              Our company was founded out of a love for cars and travel. We started
              with a small fleet and have since expanded significantly to meet the
              needs of our customers.
            </p>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-blue-500">Our Fleet</h2>
            <p className="mt-2 text-lg text-gray-700">
              We offer a wide selection of vehicles, from economy models to luxury
              options, ensuring that every customer can find the perfect car for
              their needs.
            </p>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-blue-500">
              Customer Commitment
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              We take pride in our exceptional customer service, including 24/7
              support and a straightforward booking process.
            </p>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-blue-500">
              Sustainability Efforts
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              We care about our planet and offer eco-friendly vehicles, including
              hybrid and electric models, to minimize our carbon footprint.
            </p>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-blue-500">
              Community Engagement
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              We actively participate in local community life, supporting various
              initiatives and partnerships that reflect our values.
            </p>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-blue-500">
              Customer Testimonials
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              We take pride in the satisfaction of our customers. Read their stories
              and testimonials to see our high level of service.
            </p>
          </section>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md mt-6 w-full">
        <TeamSection />
      </section>
      <section className="mt-6">
        <PartnersSection />
      </section>
    </div>
  );
};

export default About;