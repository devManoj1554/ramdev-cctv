import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-50 px-6 text-center">
      <div>
        <h1 className="font-heading text-4xl font-bold text-slate-900 sm:text-5xl">
          404
        </h1>

        <p className="mt-2 text-xl font-semibold text-slate-700">
          Page Not Found
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
