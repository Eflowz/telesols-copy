import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Fline = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center mt-8 mb-4">
         <div className="mb-4 text-gray-700 ">
        <nav className="text-sm md:text-base">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          {location.pathname === '/services' && (
            <>
              <span className="mx-2">{'>'}</span>
              <span className="font-semibold text-gray-900">Services</span>
            </>
          )}
        </nav>
      </div>
      <div className="w-3/4 border-t border-gray-400 mb-4"></div>
      <div className="bg-blue-800 text-white text-center py-3 px-8 rounded-full md:w-full w-3/4 max-w-5xl">
        <p className="italic text-md md:text-xl">
        Our services play a critical role in supporting the oil and gas industry, delivered with unwavering commitment to excellence and superior standards.
        </p>
      </div>
   
    </div>
  );
};

export default Fline;
