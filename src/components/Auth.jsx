import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import {
  FaUser,
  FaLock,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import bgAuth from "../assets/bgAuth.jpg";

const firebaseConfig = {
  apiKey: "AIzaSyD9RnuJ18udUh_JkIxd9xGvx9mPwVxIOcc",
  authDomain: "carsrent-2233e.firebaseapp.com",
  projectId: "carsrent-2233e",
  storageBucket: "carsrent-2233e.appspot.com",
  messagingSenderId: "324023646593",
  appId: "1:324023646593:web:e7d05c64e738fb0fbf5080",
  measurementId: "G-D9CTQFJ429",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let valid = true;

    setEmailError(false);
    setPasswordError(false);

    if (!email) {
      setError("Email is required.");
      setEmailError(true);
      valid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        setEmailError(true);
        valid = false;
      }
    }

    if (!password) {
      setError("You must fill in all fields.");
      setPasswordError(true);
      valid = false;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setPasswordError(true);
      valid = false;
    }

    return valid;
  };

  const register = async () => {
    if (!validateForm()) return;

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
    if (!validateForm()) return;

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

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const loginWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      setUser(result.user);
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
      className="flex items-center justify-center min-h-screen bg-gradient-to-r gap-10 from-purple-400 to-pink-500"
      style={{ backgroundImage: `url(${bgAuth})` }}
    >
      <div className="bg-gray-400 w-200 p-30 h-150 rounded-2xl hidden md:block">
        <h1 className="text-7xl font-extrabold text-gray-800 text-center mb-6">
          Hello!
        </h1>
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Ready to Hit the Road?
        </h1>
        <p className="text-xl text-center mb-6 pt-6 text-gray-800 leading-relaxed">
          Rent a car in just a few clicks and enjoy the freedom to travel. We
          offer a wide range of vehicles for any purpose – from city rides to
          long-distance journeys. Join thousands of satisfied customers!
        </p>
        <p className="text-2xl text-center text-amber-950 font-medium pt-20">
          Log in or sign up now to start your journey today!
        </p>
      </div>

      <div className="bg-gray-400 p-8 rounded-2xl shadow-lg w-96 text-center relative">
        <h2 className="text-3xl font-bold text-amber-950 mb-4">MORENT</h2>
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
                className={`w-full px-4 py-2 border rounded-lg ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>
            <div className="flex items-center mb-4 relative">
              <FaLock className="mr-2 text-gray-600" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 border rounded-lg pr-10 ${
                  passwordError ? "border-red-500" : "border-gray-300"
                }`}
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
              className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg mb-2 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-600"
            >
              <FaSignInAlt className="mr-2" /> Login
            </button>
            <button
              onClick={register}
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600"
            >
              <FaUserPlus className="mr-2" /> Register
            </button>

            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>
        )}

        <div className="flex items-center pt-8">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="flex flex-col gap-4 justify-center pt-4">
          <button
            onClick={loginWithGoogle}
            className="bg-red-500 text-white px-6 py-3 rounded-lg flex items-center transition-transform duration-300 transform hover:scale-105 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-400"
          >
            <FaGoogle className="mr-3 size-11" /> Login with Google
          </button>

          <button
            onClick={loginWithGithub}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center transition-transform duration-300 transform hover:scale-105 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500"
          >
            <FaGithub className="mr-3 size-11" /> Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
