import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  FaUser,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import bgAuth from "../assets/bgAuth.jpg";
const firebaseConfig = {
  apiKey: "AIzaSyD9RnuJ18udUh_JkIxd9xGvx9mPwVxIOcc",
  authDomain: "carsrent-2233e.firebaseapp.com",
  projectId: "carsrent-2233e",
  storageBucket: "carsrent-2233e.firebasestorage.app",
  messagingSenderId: "324023646593",
  appId: "1:324023646593:web:e7d05c64e738fb0fbf5080",
  measurementId: "G-D9CTQFJ429",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setError("");
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setError("");
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-500"
      style={{ backgroundImage: `url(${bgAuth})` }}
    >
      <div className="bg-gray-400 p-8 rounded-2xl  shadow-lg w-96 text-center relative">
        <h2 className="text-3xl font-bold text-amber-950 mb-4 ">MORENT</h2>
        {user ? (
          <div>
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-full text-lg font-bold">
                {user.email.charAt(0).toUpperCase()}
              </div>
            </div>
            <p className="text-gray-700">Welcome, {user.email}</p>
            <button
              onClick={logout}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg flex items-center justify-center"
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-2">
              <FaUser className="mr-2 text-gray-600" />
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center mb-4 relative">
              <FaLock className="mr-2 text-gray-600" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              onClick={login}
              className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg mb-2 flex items-center justify-center"
            >
              <FaSignInAlt className="mr-2" /> Login
            </button>
            <button
              onClick={register}
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center"
            >
              <FaUserPlus className="mr-2" /> Register
            </button>
            {error && (
              <p className="text-red-500 mt-2">
                {error.includes("auth/email-already-in-use")
                  ? "This email address is already registered. Try logging in."
                  : error}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
