// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-600 py-10 px-6 md:px-20 border-t ">
//       <div className="container mx-auto flex justify-between gap-8 text-center md:text-left">
//         {/* Logo and Description */}
//         <div className="md:col-span-1">
//           <h2 className="text-2xl font-bold text-blue-600">MORENT</h2>
//           <p className="mt-2 text-sm max-w-xs mx-auto md:mx-0">
//             Our vision is to provide convenience and help increase your sales
//             business.
//           </p>
//         </div>

//         {/* About Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">About</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="/how-it-works" className="hover:text-blue-600">
//                 How it works
//               </a>
//             </li>
//             <li>
//               <a href="/partnership" className="hover:text-blue-600">
//                 Partnership
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Community Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Community</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="/events" className="hover:text-blue-600">
//                 Events
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Socials Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Socials</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a href="https://discord.com/users/536292789013708800" className="hover:text-blue-600">
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://www.instagram.com/m1tywa/" className="hover:text-blue-600">
//                 Instagram
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/dimanihao" className="hover:text-blue-600">
//                 Twitter
//               </a>
//             </li>
//             <li>
//               <a href="https://t.me/mitywanoname" className="hover:text-blue-600">
//                 Telegram
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-8 border-t pt-4 text-sm flex flex-col md:flex-row justify-between items-center text-center">
//         <p>©2025 MORENT. All rights reserved</p>
//         <div className="flex space-x-4 mt-2 md:mt-0">
//           <a href="/privacy-policy" className="hover:text-blue-600">
//             Privacy & Policy
//           </a>
//           <a href="#" className="hover:text-blue-600">
//             Terms & Condition
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-20 border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
        {/* Logo and Description */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-blue-400">MORENT</h2>
          <p className="mt-2 text-sm max-w-xs mx-auto md:mx-0">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* About Section */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/how-it-works" className="hover:text-blue-400 transition duration-300">
                How it works
              </a>
            </li>
            <li>
              <a href="/partnership" className="hover:text-blue-400 transition duration-300">
                Partnership
              </a>
            </li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Community</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/events" className="hover:text-blue-400 transition duration-300">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Socials</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://discord.com/users/536292789013708800" className="hover:text-blue-400 transition duration-300">
                Discord
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/m1tywa/" className="hover:text-blue-400 transition duration-300">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com/dimanihao" className="hover:text-blue-400 transition duration-300">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://t.me/mitywanoname" className="hover:text-blue-400 transition duration-300">
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-sm flex flex-col md:flex-row justify-between items-center text-center">
        <p>©2025 MORENT. All rights reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/privacy-policy" className="hover:text-blue-400 transition duration-300">
            Privacy & Policy
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;