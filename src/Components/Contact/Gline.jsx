import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Gline = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center mt-8 mb-4">
         <div className="mb-4 text-gray-700 ">
        <nav className="text-sm md:text-base">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          {location.pathname === '/contact' && (
            <>
              <span className="mx-2">{'>'}</span>
              <span className="font-semibold text-gray-900">Contact Us</span>
            </>
          )}
        </nav>
      </div>
        <div className="w-3/4 border-t border-gray-400 mb-4"></div>
    </div>
  );
};

export default Gline;
