import { useState } from "react";

export default function ContactForm() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-yellow-50 to-yellow-100 p-4">
      <h1 className="text-xl p-4 font-semibold">If you have any additional questions, please contact us here.</h1>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="mb-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
      >
        {isVisible ? "Hide form" : "Show form"}
      </button>
      {isVisible && (
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Contact us</h2>
          <form className="p-6 rounded-2xl shadow-md w-full space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 bg-white p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 p-3 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-3 bg-white h-28 rounded-2xl border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}