import React from "react";

const HowItWorks = () => {
  return (
    <div className="w-full py-16 bg-gray-100 text-center">
      {/* Заголовок страницы */}
      <h2 className="text-4xl font-extrabold text-blue-600 mb-8">How It Works</h2>

      {/* Описание процесса */}
      <p className="text-xl text-gray-700 mb-12 px-6 max-w-4xl mx-auto">
        Our process is simple, transparent, and efficient. Whether you're renting a car or accessing one of our services,
        we make sure that everything is clear and straightforward. Here’s how it works:
      </p>

      {/* Шаги работы */}
      <div className="flex flex-wrap justify-center gap-16 mb-12">
        {/* Шаг 1 */}
        <div className="w-80 p-8 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Step 1: Sign Up</h3>
          <p className="text-gray-700 text-lg">
            Create an account with us to start your journey. It's quick, easy, and secure. You’ll have full access to our services right away.
          </p>
        </div>

        {/* Шаг 2 */}
        <div className="w-80 p-8 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Step 2: Choose Your Service</h3>
          <p className="text-gray-700 text-lg">
            Select the service that best fits your needs. From renting luxury cars to exploring exclusive packages, we have a wide range of options for you.
          </p>
        </div>

        {/* Шаг 3 */}
        <div className="w-80 p-8 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Step 3: Book & Confirm</h3>
          <p className="text-gray-700 text-lg">
            Once you've made your choice, simply book and confirm your service. We’ll take care of the rest and ensure everything runs smoothly.
          </p>
        </div>

        {/* Шаг 4 */}
        <div className="w-80 p-8 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Step 4: Enjoy Your Service</h3>
          <p className="text-gray-700 text-lg">
            Enjoy the experience! Whether it's the luxury car rental or another premium service, we guarantee you'll have a great time.
          </p>
        </div>
      </div>

      {/* Призыв к действию */}
      <div className="text-center">
        <h3 className="text-3xl font-semibold text-blue-600 mb-6">Ready to Get Started?</h3>
        <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
          It's time to experience the best. If you're ready to take the next step, sign up and start your journey with us today!
        </p>
        <a
          href="/rent"
          className="inline-block py-2 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
        >
          List of cars
        </a>
      </div>
    </div>
  );
};

export default HowItWorks;
