import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Line = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center mt-8 mb-4">
         <div className="mb-4 text-gray-700 ">
        <nav className="text-sm md:text-base">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          {location.pathname === '/about' && (
            <>
              <span className="mx-2">{'>'}</span>
              <span className="font-semibold text-gray-900">About Us</span>
            </>
          )}
        </nav>
      </div>
      <div className="w-3/4 border-t border-gray-400 mb-4"></div>

      {/* Blue Container with Text */}
      <div className="bg-blue-800 text-white text-center py-3 px-8 rounded-full md:w-full w-3/4 max-w-5xl">
        <p className="italic text-md md:text-xl">
        procuring the future today, excellence in service delivery
        </p>
      </div>
   
    </div>
  );
};

export default Line;
