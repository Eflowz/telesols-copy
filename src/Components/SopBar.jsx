import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from '../assets/pics/IMG-Energies-3.png'; 


const SopBar = () => {
  return (
    <div className="bg-white py-[40px] border-b ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center md:mb-0">
        <a href="/">
          <img
            src={logo} 
            alt="Logo"
            className="w-[330px] md:w-[400px]
            mobile-lgi:mr-12
            mobile-mdi:mr-12
            "            
            />
        </a>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:text-right text-center">
        <div className="flex items-center mb-2 md:mb-0 justify-center md:justify-end mt-8 md:mt-0 ">
            <div>
              <div className="flex flex-row items-center ml-[120px] ">
            <p className="text-gray-500 text-md md:text-xl mr-4">
              Feel free to talk to us!
            </p>
            <FiPhone className="text-xl text-black mr-2" />
              </div>
              <p className="text-blue-600 font-bold text-md md:text-xl">
                +234-905-415-6232,
                +234-812-348-3831 
              </p>
            </div>
        <div class="w-px h-10 bg-gray-300 mx-2"></div>
        </div>
        <div className="flex items-center justify-center md:justify-end mt-2 md:mt-0 md:z-0 z-10">
            <a href="https://www.linkedin.com/company/imgenergies/" target="_blank" className="text-blue-600 text-3xl md:text-5xl cursor-pointer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/imgenergies? t=gXtDU6iWNiZ7iQtcQtr21A&s=08" target="_blank" className="text-black text-3xl md:text-5xl cursor-pointer">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/imgenergies/profilecard/?igsh=aDY4OXg5NGVkbDR6" target="_blank" className="text-red-500 text-3xl md:text-5xl cursor-pointer">
          <FaSquareInstagram />
        </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SopBar;
