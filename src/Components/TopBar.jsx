import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaSquareInstagram } from 'react-icons/fa6';
import logo from '../assets/pics/IMG-Energies-2.png'; 

const TopBar = () => {
  return (
    <div className="w-full bg-white flex flex-col md:grid md:grid-cols-3 justify-between items-center px-6 py-10 border-b">
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src={logo}
          alt=""
          className="absolute w-[350px]
            mobile-xzl:left-[5px] 
            mobile-lgo:left-[10px]
            mobile-xal:left-[170px]"
        />
      </div>
      <div className="flex flex-col text-center md:text-left mt-5 md:mt-0 md:mb-0">
        <div className="flex items-center justify-center md:justify-start">
          <p className="text-black">Feel free to talk to us!</p>
          <PiPhoneCallFill className="ml-2 text-black" />
        </div>
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <p className="text-blue-600 text-md sm:text-md md:text-lg font-bold">+234-812-348-3831</p>
          <span>|</span>
          <p className="text-blue-600 text-md sm:text-md md:text-lg font-bold">+234-905-415-6232</p>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end space-x-4 mt-2 md:mt-0 md:z-0 z-10">
        <a href="#" className="text-blue-600 text-3xl md:text-5xl cursor-pointer">
          <FaFacebook />
        </a>
        <a href="https://x.com/imgenergies? t=gXtDU6iWNiZ7iQtcQtr21A&s=08" target="_blank" className="text-black text-3xl md:text-5xl cursor-pointer">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/imgenergies/profilecard/?igsh=aDY4OXg5NGVkbDR6" target="_blank" className="text-red-500 text-3xl md:text-5xl cursor-pointer">
          <FaSquareInstagram />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
