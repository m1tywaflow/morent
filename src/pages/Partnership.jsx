import React from "react";
import lv from "../assets/lv.jpg";
import prada from "../assets/prada.jpg";
import bmw from "../assets/bmw.jpg";
import sony from "../assets/sony.jpg";

const Partnership = () => {
  return (
    <div className="w-full py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-8">Our Partners</h2>
      
      <p className="text-xl text-gray-700 mb-12 px-6 max-w-4xl mx-auto">
        We are proud to collaborate with the best companies and brands in our industry. 
        Our partners are not only large international corporations but also companies 
        that share our values of quality, innovation, and striving for excellence. 
        We are confident that working together with such leaders helps us create incredible 
        opportunities for our clients.
      </p>
      
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-blue-600 mb-6">Why do we choose our partners wisely?</h3>
        <ul className="list-none space-y-4 text-gray-700 text-lg">
          <li><strong>Quality and Trust:</strong> Our partners are companies with an impeccable reputation, leading their fields.</li>
          <li><strong>Innovation:</strong> Collaboration with market leaders gives us access to the latest technologies and solutions, enabling us to offer relevant products.</li>
          <li><strong>Responsibility:</strong> We choose partners who adhere to high standards of social responsibility and ethical norms.</li>
        </ul>
      </div>
      
      <div className="my-12">
        <h3 className="text-3xl font-semibold text-blue-600 mb-6">Our Esteemed Partners</h3>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-60 p-6 bg-white rounded-lg shadow-lg">
            <img loading="lazy" src={lv} alt="Louis Vuitton" className="w-full h-36 object-cover rounded-lg" />
            <h4 className="text-2xl font-bold mt-4 text-gray-800">Louis Vuitton</h4>
          </div>
          <div className="w-60 p-6 bg-white rounded-lg shadow-lg">
            <img loading="lazy" src={prada} alt="Prada" className="w-full h-36 object-cover rounded-lg" />
            <h4 className="text-2xl font-bold mt-4 text-gray-800">Prada</h4>
          </div>
          <div className="w-60 p-6 bg-white rounded-lg shadow-lg">
            <img loading="lazy" src={bmw} alt="BMW" className="w-full h-36 object-cover rounded-lg" />
            <h4 className="text-2xl font-bold mt-4 text-gray-800">BMW</h4>
          </div>
          <div className="w-60 p-6 bg-white rounded-lg shadow-lg">
            <img loading="lazy" src={sony} alt="Sony" className="w-full h-36 object-cover rounded-lg" />
            <h4 className="text-2xl font-bold mt-4 text-gray-800">Sony</h4>
          </div>
          
        </div>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold text-blue-600 mb-6">Partner with Us</h3>
        <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
          If you are interested in partnering with our company, we are always open to discussing 
          new opportunities. We are confident that working together can lead to significant achievements and growth. 
          Contact us to learn more about how we can collaborate.
        </p>
        <a
          href="/contact"
          className="inline-block py-2 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Partnership;
