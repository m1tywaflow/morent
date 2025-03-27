import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
import carsData from "../data/carsData";
import PayPalPayment from "../components/PayPalPayment";
const countryCodes = [
  { code: "+1", name: "USA/Canada", maxLength: 10 },
  { code: "+44", name: "UK", maxLength: 10 },
  { code: "+49", name: "Germany", maxLength: 11 },
  { code: "+33", name: "France", maxLength: 9 },
  { code: "+48", name: "Poland", maxLength: 9 },
  { code: "+380", name: "Ukraine", maxLength: 9 },
];

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carsData.find((c) => c.id === parseInt(id));

  // Handle case where car is not found
  if (!car) {
    return (
      <p className="text-center text-red-500 text-xl font-bold">
        Car not found
      </p>
    );
  }

  const [days, setDays] = useState(1);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [dateError, setDateError] = useState(false);
  // const [cardNumber, setCardNumber] = useState("");
  // const [cardExpiry, setCardExpiry] = useState("");
  // const [cvc, setCvc] = useState("");
  const [countryCode, setCountryCode] = useState(countryCodes[0]);
  // const [paypalVisible, setPaypalVisible] = useState(false);
  const pricePerDay = parseFloat(car.price.replace("$", "") || 0);
  const totalPrice = isNaN(pricePerDay)
    ? "Error"
    : (pricePerDay * days * (1 - discount)).toFixed(2);

  const applyPromo = () => {
    setDiscount(promoCode.toUpperCase() === "WANNACAR" ? 0.3 : 0);
  };

  useEffect(() => {
    if (pickupDate && dropoffDate) {
      const pickup = new Date(pickupDate);
      const dropoff = new Date(dropoffDate);
      const differenceInDays = (dropoff - pickup) / (1000 * 3600 * 24);
      setDays(differenceInDays > 0 ? differenceInDays : 1);
      setDateError(differenceInDays < 0);
    }
  }, [pickupDate, dropoffDate]);

  // const formatCardNumber = (value) => {
  //   return value
  //     .replace(/\D/g, "")
  //     .replace(/(\d{4})/g, "$1 ")
  //     .trim()
  //     .slice(0, 19);
  // };

  // const handleCardExpiryChange = (e) => {
  //   const value = e.target.value.replace(/\D/g, "");
  //   const formattedValue =
  //     value.length > 2 ? `${value.slice(0, 2)}/${value.slice(2, 4)}` : value;
  //   setCardExpiry(formattedValue);
  // };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > countryCode.maxLength) {
      value = value.slice(0, countryCode.maxLength);
    }
    setPhone(value);
  };
  const handleCountryCodeChange = (e) => {
    const newCountryCode = countryCodes.find((c) => c.code === e.target.value);
    if (newCountryCode) {
      let newPhone = phone.replace(/\D/g, "");
      if (newPhone.length > newCountryCode.maxLength) {
        newPhone = newPhone.slice(0, newCountryCode.maxLength);
      }
      setCountryCode(newCountryCode);
      setPhone(newPhone);
    }
  };

  const isPhoneValid =
    phone.replace(/\D/g, "").length === countryCode.maxLength;
  // const isCardValid = cardNumber.replace(/\D/g, "").length === 16;
  // const isCvcValid = cvc.replace(/\D/g, "").length === 3;
  // const isCardExpiryValid = () => {
  //   const currentDate = new Date();
  //   const [month, year] = cardExpiry.split("/").map(Number);
  //   return (
  //     currentDate.getFullYear() % 100 < year ||
  //     (currentDate.getFullYear() % 100 === year &&
  //       currentDate.getMonth() + 1 < month)
  //   );
  // };
  const today = new Date().toISOString().split("T")[0];
  const isFormValid =
  fullName &&
  isPhoneValid &&
  pickupDate &&
  dropoffDate &&
  promoCode === "" || promoCode.toUpperCase() === "WANNACAR";

  function handleSubmit(e) {
    e.preventDefault();
    if (isFormValid) {
      navigate("/payment-success");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-blue-500 text-center pb-10 font-bold mb-4">
          Rental Payment
        </h2>

        <div className="mb-4 flex gap-18 items-center space-x-4">
          <img
            src={car.images[0]}
            alt={car.name}
            className="w-90 h-30 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold">{car.name}</h3>
            <p className="text-blue-600 font-semibold  text-xl">{car.price} / day</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="border p-2 rounded w-full"
            required
            minLength={3}
          />
          <div className="flex space-x-2">
            <select
              value={countryCode.code}
              onChange={handleCountryCodeChange}
              className="border p-2 rounded"
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} ({c.name})
                </option>
              ))}
            </select>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone number"
              className={`border p-2 rounded w-full ${
                !isPhoneValid ? "border-red-500" : ""
              }`}
              required
            />
          </div>
          {!isPhoneValid && (
            <p className="text-red-500 text-sm">Enter a valid phone number</p>
          )}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="border p-2 rounded w-full"
              required
              min={today}
            />
            <input
              type="date"
              value={dropoffDate}
              onChange={(e) => setDropoffDate(e.target.value)}
              className={`border p-2 rounded w-full ${
                dateError ? "border-red-500" : ""
              }`}
              required
              min={pickupDate || today}
            />
          </div>
          {dateError && (
            <p className="text-red-500 text-sm">
              Drop-off date cannot be earlier than pick-up date.
            </p>
          )}
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="border p-2 rounded w-full"
          />
          <button
            type="button"
            onClick={applyPromo}
            className="bg-green-600 text-white p-2 rounded w-full hover:bg-green-700 transition"
          >
            Apply Promo Code
          </button>
          {/* <select
            value={paymentMethod}
            onChange={(e) => {
              setPaymentMethod(e.target.value);
              setPaypalVisible(e.target.value === "paypal");
            }}
            className="border p-2 rounded w-full"
          >
            <option value="card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>

          {paymentMethod === "card" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-gray-50 p-4 rounded-lg"
            >
              <h3 className="text-lg font-semibold mb-2">Card Details</h3>
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) =>
                  setCardNumber(formatCardNumber(e.target.value))
                }
                className={`border p-2 rounded w-full mb-2 ${
                  !isCardValid ? "border-red-500" : ""
                }`}
                maxLength="19"
                required
              />
              {!isCardValid && (
                <p className="text-red-500 text-sm">
                  Card number must be 16 digits
                </p>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardExpiry}
                  onChange={handleCardExpiryChange}
                  className={`border p-2 rounded w-full ${
                    !isCardExpiryValid() ? "border-red-500" : ""
                  }`}
                  maxLength="5"
                  required
                />
                <input
                  type="text"
                  placeholder="CVC (3 digits)"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className={`border p-2 rounded w-full ${
                    !isCvcValid ? "border-red-500" : ""
                  }`}
                  maxLength="3"
                  required
                />
              </div>
              {(!isCardExpiryValid() || !isCvcValid) && (
                <p className="text-red-500 text-sm">
                  Please enter a valid expiry date and CVC
                </p>
              )}
            </motion.div>
          )} */}
          <div className="text-2xl  font-bold text-gray-900">
            Total Price:{" "}
            <span className={discount ? "text-green-600" : "text-black"}>
              {totalPrice} $
            </span>
            {discount > 0 && (
              <p className="text-green-500 text-sm">30% discount applied!</p>
            )}
          </div>

          {/* <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
            disabled={!isFormValid}
          >
            Place Order
          </button> */}
        </form>
        <div className="pt-20">
          {" "}
          <PayPalPayment amount={totalPrice} isFormValid={isFormValid} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
