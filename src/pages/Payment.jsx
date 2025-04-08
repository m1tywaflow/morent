import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carsData from "../data/carsData";
import PayPalPayment from "../components/PayPalPayment";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

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
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [dateError, setDateError] = useState(false);
  const [countryCode, setCountryCode] = useState(countryCodes[0]);

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

  const handleSuccessPayment = async (paymentDetails) => {
    console.log("✅ handleSuccessPayment triggered!", paymentDetails);

    if (!fullName || !phone || !pickupDate || !dropoffDate) {
      console.error("🚨 Ошибка: Форма не заполнена корректно");
      return;
    }

    const rentalData = {
      carName: car.name,
      fullName,
      phone: `${countryCode.code} ${phone}`,
      pickupDate,
      dropoffDate,
      totalPrice,
      paymentId: paymentDetails.id, // ID транзакции PayPal
      timestamp: new Date(),
    };

    try {
      await addDoc(collection(db, "rentals"), rentalData);
      console.log("✅ Данные успешно сохранены в Firestore!");
      navigate("/payment-success");
    } catch (error) {
      console.error("🚨 Ошибка при сохранении в базу:", error);
    }
  };

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

  const today = new Date().toISOString().split("T")[0];
  const isFormValid =
    fullName &&
    isPhoneValid &&
    pickupDate &&
    dropoffDate &&
    (promoCode === "" || promoCode.toUpperCase() === "WANNACAR");

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-blue-500 text-center pt-10 pb-10 font-bold mb-4">
          Rental Payment
        </h2>

        <div className="mb-4 flex flex-col md:flex-row gap-4 items-center">
          <img
            src={car.images[0]}
            alt={car.name}
            className="w-full md:w-110 h-auto rounded-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold">{car.name}</h3>
            <p className="text-blue-600 font-semibold text-lg md:text-xl">
              {car.price} / day
            </p>
          </div>
        </div>

        <form className="space-y-4">
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

          <div className="text-2xl  font-bold text-gray-900">
            Total Price:{" "}
            <span className={discount ? "text-green-600" : "text-black"}>
              {totalPrice} $
            </span>
            {discount > 0 && (
              <p className="text-green-500 text-sm">30% discount applied!</p>
            )}
          </div>
        </form>

        <div className="pt-10 md:pt-20">
          <PayPalPayment
            amount={totalPrice}
            isFormValid={isFormValid}
            onSuccess={handleSuccessPayment}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
