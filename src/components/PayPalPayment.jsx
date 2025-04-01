// import { useState } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { useNavigate } from "react-router-dom";

// const PayPalPayment = ({ amount, isFormValid }) => {
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   return (
//     <PayPalScriptProvider options={{ "client-id": "AfDX_Lp8PBNdxmSjibiD7mCyxwGK2upfLPad4GEjJz-rg1BTYQulloNAKFWN5_MS6QT8gIl-gYUJEC2C" }}>
//       <div className="p-4 border rounded-lg shadow-md bg-yellow-500">
//         <h2 className="text-2xl text-center font-bold text-blue-600 mb-4">Payment via PayPal</h2>

//         {!isFormValid && (
//           <p className="text-red-500 font-bold">Fill in all the details before payment!</p>
//         )}

//         <PayPalButtons
//           style={{ layout: "vertical", color: "blue" }}
//           createOrder={(data, actions) => {
//             if (!isFormValid) {
//               setError("Fill in all fields before making a payment!");
//               return Promise.reject("Form is not valid");
//             }
//             return actions.order.create({
//               purchase_units: [{ amount: { value: amount } }],
//             });
//           }}
//           onApprove={(data, actions) => {
//             return actions.order.capture().then((details) => {
//               console.log("Payment confirmed!", details);
//               navigate("/payment-success");
//             });
//           }}
//           onError={(err) => {
//             setError("Payment error! Please try again.");
//             console.error("PayPal Error:", err);
//           }}
//         />

//         {error && <p className="text-red-500">{error}</p>}
//       </div>
//     </PayPalScriptProvider>
//   );
// };

// export default PayPalPayment;
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPayment = ({ amount, isFormValid, onSuccess }) => {
  const [error, setError] = useState(null);

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AfDX_Lp8PBNdxmSjibiD7mCyxwGK2upfLPad4GEjJz-rg1BTYQulloNAKFWN5_MS6QT8gIl-gYUJEC2C",
      }}
    >
      <div className="p-4 border rounded-lg shadow-md bg-yellow-500">
        <h2 className="text-2xl text-center font-bold text-blue-600 mb-4">
          Payment via PayPal
        </h2>
        <div className="text-center text-xl p-4 md:p-6 lg:p-8">
          <h2 className="text-lg md:text-xl lg:text-2xl">
            Try paying via these PayPal details{" "}
            <span className="text-red-500">(FAKE MONEY)</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg">
            email: sb-gbess39101801@personal.example.com
          </p>
          <p className="text-sm md:text-base lg:text-lg">pass: u-7jF18e</p>
        </div>
        {!isFormValid && (
          <p className="text-red-500 text-center pt-6 pb-4 font-bold">
            Fill in all the details before payment!
          </p>
        )}

        <PayPalButtons
          style={{ layout: "vertical", color: "blue" }}
          createOrder={(data, actions) => {
            if (!isFormValid) {
              setError("Fill in all fields before making a payment!");
              return Promise.reject("Form is not valid");
            }
            return actions.order.create({
              purchase_units: [{ amount: { value: amount } }],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              console.log("✅ Payment confirmed!", details);
              onSuccess(details);
            });
          }}
          onError={(err) => {
            setError("Payment error! Please try again.");
            console.error("🚨 PayPal Error:", err);
          }}
        />

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
