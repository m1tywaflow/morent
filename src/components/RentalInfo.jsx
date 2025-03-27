import React from "react";

const RentalInfo = ({ rental, onCancel }) => {
  return (
    <div className="w-full bg-gray-100 p-4 mt-8 rounded-lg shadow">
      <h3 className="text-2xl font-semibold mb-4">Your Rental</h3>
      {rental ? (
        <>
          <p><strong>Car Model:</strong> {rental.carModel}</p>
          <p><strong>Rental Duration:</strong> {rental.rentalDays} days</p>
          <p><strong>Total Amount:</strong> {rental.totalAmount}</p>
          <button
            onClick={onCancel}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Cancel Rental
          </button>
        </>
      ) : (
        <p>You don't have any active rentals at the moment.</p>
      )}
    </div>
  );
};

export default RentalInfo;
