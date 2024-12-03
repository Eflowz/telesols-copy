import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaSquareInstagram } from 'react-icons/fa6';
import logo from '../assets/pics/IMG-Energies-2.png'; 



const TopBar = () => {
  return (
    <div className="w-full bg-white flex flex-col md:flex-row justify-between items-center px-6 py-10 border-b ">
      <div className="flex items-center mb-4 md:mb-0 ">
        <img src={logo}  alt="" className="absolute w-[350px]
       mobile-xzl:left-[5px] 
      mobile-lgo: left-[10px]
      mobile-xal:left-[170px]"
        />
      </div>
        <div className="flex flex-col text-center md:text-left mt-5 md:mt-0 md:mb-0">
        <div className="flex items-center justify-center ">
          <p className="text-gray-600 ">Feel free to talk to us!</p>
          <PiPhoneCallFill className="ml-2 text-gray-600" />
        </div>
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <p className="text-black text-md sm:text-md md:text-lg font-semibold">+234-812-348-3831</p>
          <span>|</span>
          <p className="text-black text-md sm:text-md md:text-lg font-semibold">+234-905-415-6232</p>
        </div>
        
      </div>
        <div className="flex items-center space-x-4 md:mt-0 mt-2">
        <a href="#" className="text-blue-600 text-3xl md:text-5xl">
          <FaFacebook />
        </a>
        <a href="https://x.com/imgenergies? t=gXtDU6iWNiZ7iQtcQtr21A&s=08" target="_blank" className="text-black text-3xl md:text-5xl">
          <FaSquareXTwitter />
        </a>

        <a href="https://www.instagram.com/imgenergies/profilecard/?igsh=aDY4OXg5NGVkbDR6" target="_blank" className="text-red-500 text-3xl md:text-5xl">
          <FaSquareInstagram />
        </a>
      </div>
      
      </div>
  );
};

export default TopBar;

// // instagram

// // twitter