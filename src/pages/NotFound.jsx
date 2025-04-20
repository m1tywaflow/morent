import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-800">
          404
        </h1>
        <p className="text-xl sm:text-2xl mt-4 font-semibold text-gray-600">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          It seems that the page you are looking for no longer exists or has been moved.
          Please check the URL for any mistakes or return to the homepage.
        </p>
        <Link
          to="/home"
          className="mt-6 inline-block bg-blue-600 text-white px-5 py-3 rounded-xl text-sm sm:text-base hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
