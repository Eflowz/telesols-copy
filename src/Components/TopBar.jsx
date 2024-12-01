import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaSquareInstagram } from 'react-icons/fa6';

const TopBar = () => {
    return (
    <div className="bg-white shadow-md">
   <div className="flex flex-col md:flex-row justify-center items-center gap-2 py-2">
   <div className="flex items-center relative overflow-hidden h-10 space-x-2 max-w-full">
  <PiPhoneCallFill className="text-blue-950 text-xl sm:text-xl md:text-2xl" />
  <p className="animated-text text-sm sm:text-sm md:text-lg font-bold whitespace-nowrap flex items-center">
    Feel free to talk to us! &nbsp;
    <span className="phone-numbers text-black text-sm sm:text-sm md:text-lg font-semibold">
      +234-812-348-3831 | +234-905-415-6232
    </span>
  </p>
</div>
        <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="text-blue-600 text-2xl md:text-4xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-black text-2xl md:text-4xl">
          <FaSquareXTwitter />
          </a>
          <a href="#" className="text-red-500 text-2xl md:text-4xl">
          <FaSquareInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
