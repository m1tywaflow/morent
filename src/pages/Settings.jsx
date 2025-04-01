// import React, { useState, useEffect } from "react";
// import { FaCog } from "react-icons/fa";
// import {
//   getAuth,
//   onAuthStateChanged,
//   updateProfile,
//   signOut,
// } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Settings = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [displayName, setDisplayName] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   useEffect(() => {
//     setLoading(true); // Loading before the first render
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setTimeout(() => {
//         // test loading
//         if (currentUser) {
//           setUser(currentUser);
//           setDisplayName(currentUser.displayName || "");
//         } else {
//           setUser(null);
//         }
//         setLoading(false);
//       }, 1000); // 1 sec delay
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   const handleUpdateProfile = async () => {
//     if (!user) return;
//     setError("");
//     setSuccess("");
//     try {
//       await updateProfile(user, { displayName });
//       setSuccess("Profile updated successfully");
//     } catch (err) {
//       setError("Failed to update profile: " + err.message);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate("/");
//     } catch (err) {
//       setError("Failed to log out: " + err.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <FaCog className="text-gray-600 text-6xl animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Settings</h2>

//       {error && <p className="text-red-500">{error}</p>}
//       {success && <p className="text-green-500">{success}</p>}
//       {user ? (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email:</label>
//             <p className="text-gray-900">{user.email}</p>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Display Name:</label>
//             <input
//               type="text"
//               value={displayName}
//               onChange={(e) => setDisplayName(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             onClick={handleUpdateProfile}
//             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mr-4"
//           >
//             Update Profile
//           </button>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </>
//       ) : (
//         <p>Please log in to update your settings.</p>
//       )}
//     </div>
//   );
// };

// export default Settings;
// import React, { useState, useEffect } from "react";
// import { FaCog } from "react-icons/fa";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Settings = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setTimeout(() => {
//         setUser(currentUser);
//         setLoading(false);
//       }, 1000);
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate("/");
//     } catch (err) {
//       setError("Failed to log out: " + err.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <FaCog className="text-gray-600 text-6xl animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Settings</h2>

//       {error && <p className="text-red-500">{error}</p>}
//       {user ? (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email:</label>
//             <p className="text-gray-900">{user.email}</p>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </>
//       ) : (
//         <p>Please log in to update your settings.</p>
//       )}
//     </div>
//   );
// };

// export default Settings;
// import React from "react";
// import { FaCog } from "react-icons/fa";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Settings = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const [user, setUser] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState("");

//   React.useEffect(() => {
//     setLoading(true);
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setTimeout(() => {
//         setUser(currentUser);
//         setLoading(false);
//       }, 1000);
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate("/");
//     } catch (err) {
//       setError("Failed to log out: " + err.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <FaCog className="text-gray-600 text-6xl animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Settings</h2>

//       {error && <p className="text-red-500">{error}</p>}
//       {user ? (
//         <>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email:</label>
//             <p className="text-gray-900">{user.email}</p>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </>
//       ) : (
//         <p>Please log in to update your settings.</p>
//       )}
//     </div>
//   );
// };

// export default Settings;
// import React from "react";
// import { FaCog, FaUserCircle } from "react-icons/fa";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Settings = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const [user, setUser] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState("");

//   React.useEffect(() => {
//     setLoading(true);
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setTimeout(() => {
//         setUser(currentUser);
//         setLoading(false);
//       }, 1000);
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate("/");
//     } catch (err) {
//       setError("Failed to log out: " + err.message);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <FaCog className="text-gray-600 text-6xl animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="w-full  mx-auto p-6 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg rounded-lg mt-10 text-white">
//       <h2 className="text-3xl font-bold mb-4 flex items-center">
//         <FaCog className="mr-2" />
//         Settings
//       </h2>

//       {error && <p className="text-red-300">{error}</p>}
//       {user ? (
//         <>
//           <div className="mb-4 border-b border-white pb-2">
//             <label className="block">Email:</label>
//             <p className="font-semibold">{user.email}</p>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 flex items-center"
//           >
//             <FaUserCircle className="mr-2" />
//             Logout
//           </button>
//         </>
//       ) : (
//         <p>Please log in to update your settings.</p>
//       )}
//     </div>
//   );
// };

// export default Settings;

// import React from "react";
// import { FaCog, FaUserCircle } from "react-icons/fa";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Settings = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const [user, setUser] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState("");

//   React.useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setLoading(true);
//       setTimeout(() => {
//         setUser(currentUser);
//         setLoading(false);
//       }, 1000);
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   const handleLogout = async () => {
//     setError(""); // Reset error state before logout
//     try {
//       await signOut(auth);
//       navigate("/");
//     } catch (err) {
//       setError("Failed to log out. Please try again.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <FaCog className="text-gray-600 text-6xl animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="w-full mx-auto p-6 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg rounded-lg mt-10 text-white">
//       <h2 className="text-3xl font-bold mb-4 flex items-center">
//         <FaCog className="mr-2" />
//         Settings
//       </h2>

//       {error && <p className="text-red-300">{error}</p>}
//       {user ? (
//         <>
//           <div className="mb-4 border-b border-white pb-2">
//             <label className="block">Email:</label>
//             <p className="font-semibold">{user.email}</p>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300 flex items-center"
//           >
//             <FaUserCircle className="mr-2" />
//             Logout
//           </button>
//         </>
//       ) : (
//         <p>Please log in to update your settings.</p>
//       )}
//     </div>
//   );
// };

// export default Settings;

// import React from "react";
// import { FaCog, FaUserCircle } from "react-icons/fa";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const Settings = () => {
//   const auth = getAuth();
//   const navigate = useNavigate();
//   const [user, setUser] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState("");

//   React.useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setLoading(true);
//       setTimeout(() => {
//         setUser(currentUser);
//         setLoading(false);
//       }, 1000);
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   const handleLogout = async () => {
//     setError("");
//     try {
//       await signOut(auth);
//       navigate("/");
//     } catch (err) {
//       setError("Failed to log out. Please try again.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <FaCog className="text-gray-600 text-6xl animate-spin" />
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="flex bg-white shadow-lg rounded-lg w-full max-w-4xl">
//         <div className="w-1/3 bg-gray-200 p-6 flex flex-col justify-center items-center border-r">
//           <h2 className="text-xl font-semibold mb-4">Navigation</h2>
//           <a href="/privacy-policy" className="w-full text-center py-2 my-1 border rounded bg-gray-300 hover:bg-gray-400 transition">Privacy Policy</a>
//           <a href="/home" className="w-full text-center py-2 my-1 border rounded bg-gray-300 hover:bg-gray-400 transition">Home</a>
//           <a href="/help" className="w-full text-center py-2 my-1 border rounded bg-gray-300 hover:bg-gray-400 transition">Help</a>
//           <a href="/events" className="w-full text-center py-2 my-1 border rounded bg-gray-300 hover:bg-gray-400 transition">Events</a>
//         </div>
//         <div className="w-2/3 p-6 flex flex-col justify-center items-center text-center">
//           <h2 className="text-3xl font-bold mb-4 flex items-center">
//             <FaCog className="mr-2" />
//             Settings
//           </h2>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           {user ? (
//             <>
//               <div className="mb-4 border-b pb-2 w-full">
//                 <label className="block text-lg">Email:</label>
//                 <p className="font-semibold text-lg">{user.email}</p>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition flex items-center"
//               >
//                 <FaUserCircle className="mr-2" />
//                 Logout
//               </button>
//             </>
//           ) : (
//             <p>Please log in to update your settings.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg w-full max-w-4xl">
        <div className="w-1/3 bg-gray-200 p-6 flex flex-col justify-center items-center border-r">
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
        <div className="w-2/3 p-6 flex flex-col justify-center items-center text-center">
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
