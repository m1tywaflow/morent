import React, { useState, useEffect } from "react";
import { FaCog, FaUserCircle } from "react-icons/fa";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      setTimeout(() => {
        setUser(currentUser);
        setLoading(false);
      }, 1000);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    setError("");
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      setError("Failed to log out. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <FaCog className="text-gray-600 text-6xl animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg w-full max-w-4xl">
        <div className="w-full md:w-1/3 bg-gray-200 p-6 flex flex-col justify-center items-center border-b md:border-r md:border-b-0">
          <h2 className="text-xl font-semibold mb-4">Navigation</h2>
          <a
            href="/privacy-policy"
            className="w-full text-center py-2 my-1 border rounded bg-gray-300 hover:bg-gray-400 transition"
          >
            Privacy Policy
          </a>
          <a
            href="/home"
            className="w-full text-center py-2 my-1 border rounded bg-gray-300 hover:bg-gray-400 transition"
          >
            Home
          </a>
          <a
            href="/help"
            className="w-full text-center py-2 my-1 border rounded bg-gray-300 hover:bg-gray-400 transition"
          >
            Help
          </a>
          <a
            href="/events"
            className="w-full text-center py-2 my-1 border rounded bg-gray-300 hover:bg-gray-400 transition"
          >
            Events
          </a>
        </div>
        <div className="w-full md:w-2/3 p-6 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaCog className="mr-2" />
            Settings
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {user ? (
            <>
              <div className="mb-4 border-b pb-2 w-full">
                <label className="block text-lg">Email:</label>
                <p className="font-semibold text-lg">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition flex items-center"
              >
                <FaUserCircle className="mr-2" />
                Logout
              </button>
            </>
          ) : (
            <p>Please log in to update your settings.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
