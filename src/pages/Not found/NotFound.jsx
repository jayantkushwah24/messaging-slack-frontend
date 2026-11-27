import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-8xl font-extrabold text-indigo-600 tracking-wider">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
        Page not found
      </h2>
      <p className="mt-2 text-base text-gray-600 max-w-md">
        Sorry, we couldn’t find the page you’re looking for. It might have been
        moved or deleted.
      </p>
      <div className="mt-8">
        <Link
          to="/auth/signin"
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Go to sign in
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
