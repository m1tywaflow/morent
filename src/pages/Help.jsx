import React from "react";

const Help = () => {
  return (
    <div className="w-full py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
        Help Center
      </h2>

      <p className="text-xl text-gray-700 mb-12 px-6 max-w-4xl mx-auto">
        Welcome to the MORENT Help Center! Here, you'll find answers to
        frequently asked questions, guides, and other helpful resources to
        assist you with using our services. If you need further assistance,
        don't hesitate to contact us.
      </p>

      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-blue-600 mb-6">
          Frequently Asked Questions
        </h3>
        <div className="space-y-8 text-left max-w-3xl mx-auto">
          <div>
            <h4 className="text-2xl font-bold text-gray-800">
              How can I make a reservation?
            </h4>
            <p className="text-gray-700 mt-2">
              To make a reservation, log into your account, navigate to the
              "Rent" section, select your desired product, and follow the
              checkout steps.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-gray-800">
              What payment methods do you accept?
            </h4>
            <p className="text-gray-700 mt-2">
              We accept various payment methods, including credit cards, debit
              cards, and PayPal.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-gray-800">
              How do I cancel my booking?
            </h4>
            <p className="text-gray-700 mt-2">
              You can cancel your booking by logging into your account,
              navigating to your reservations, and selecting the option to
              cancel. Please check our cancellation policy for specific terms.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-blue-600 mb-6">
          Need Further Assistance?
        </h3>
        <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
          If you can't find the answer to your question here or need additional
          help, feel free to reach out to our customer support team. We're here
          to assist you!
        </p>
        <a
          href="/contact"
          className="inline-block py-2 px-6 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Contact Support
        </a>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-3xl font-semibold text-blue-600 mb-6">
          Stay Updated
        </h3>
        <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
          For the latest updates, tips, and news about our services, follow us
          on social media or subscribe to our newsletter.
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="https://t.me/mitywanoname"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 transition duration-300"
          >
            Telegram
          </a>
          <a
            href="https://x.com/dimanihao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/m1tywa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 transition duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
