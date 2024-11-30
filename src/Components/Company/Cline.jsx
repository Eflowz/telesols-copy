import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Cline = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center mt-8 mb-4">
         <div className="mb-4 text-gray-700 ">
        <nav className="text-sm md:text-base">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          {location.pathname === '/company' && (
            <>
              <span className="mx-2">{'>'}</span>
              <span className="font-semibold text-gray-900">Company</span>
            </>
          )}
        </nav>
      </div>
      <div className="w-3/4 border-t border-gray-400 mb-4"></div>
      <div className="bg-blue-800 text-white text-center py-3 px-8 rounded-full md:w-full w-3/4 max-w-5xl">
        <p className="italic text-xl md:text-xl">
        Learn more about what we do.
        </p>
      </div>
   
    </div>
  );
};

export default Cline;
