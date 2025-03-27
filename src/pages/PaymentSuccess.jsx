import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center text-green-600 mb-4"
        >
          <FaCheckCircle size={50} />
        </motion.div>
        <h2 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h2>
        <p className="text-gray-700 mb-6 text-lg">
          Your car rental order has been placed successfully. Thank you for choosing us!
        </p>
        <Link 
          to="/rent" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          Return to Rentals
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;