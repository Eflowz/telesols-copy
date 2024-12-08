import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
  };

  return (
    <nav className="bg-[#ffb200]  p-3 relative "> 
      <div className="container mx-auto flex justify-center items-center ">
        <div className="lg:hidden absolute top-[-190px] left-[590px]
        mobile-xzl:left-[330px] 
        mobile-lgo:left-[330px]
        mobile-lg:left-[370px]
        mobile-xal:left-[600px]
        z-40">
          {/* mobile-sm:top-[-240px] */}
          {/* mobile-sm:left-[270px] */}
          <button onClick={toggleMenu} className="text-black text-4xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className="hidden lg:flex space-x-10">
          <Link to="/" className="text-white font-bold hover:underline">
            HOME
          </Link>
          <span className="text-white">|</span>
          <Link to="/about" className="text-white font-bold hover:underline">
            ABOUT US
          </Link>
          <span className="text-white">|</span>
          <Link to="/services" className="text-white font-bold hover:underline">
            SERVICES
          </Link>
          <span className="text-white">|</span>
          <Link to="/company" className="text-white font-bold hover:underline">
            COMPANY
          </Link>
          <span className="text-white">|</span>
          <Link to="/contact" className="text-white font-bold hover:underline">
            CONTACT US
          </Link>
        </div>
                {isOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" 
              onClick={toggleMenu} 
            ></div>
            <div className="absolute top-0 left-0 w-full h-full text-center flex flex-col z-50">
              {/* Close Button */}
              <div className="absolute top-[-150px] right-[30px] mobile-md:right-[157px]">
                <button onClick={toggleMenu} className="bg-white p-2 rounded-full">
                  <FiX className="text-black text-3xl" />
                </button>
              </div>
              <Link 
                to="/" 
                onClick={toggleMenu} 
                className="py-4 text-white font-bold hover:underline animate-drop-in delay-100"
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                onClick={toggleMenu} 
                className="py-4 text-white font-bold hover:underline animate-drop-in delay-200"
              >
                ABOUT US
              </Link>
              <Link 
                to="/services" 
                onClick={toggleMenu} 
                className="py-4 text-white font-bold hover:underline animate-drop-in delay-300"
              >
                SERVICES
              </Link>
              <Link 
                to="/company" 
                onClick={toggleMenu} 
                className="py-4 text-white font-bold hover:underline animate-drop-in delay-400"
              >
                COMPANY
              </Link>
              <Link 
                to="/contact" 
                onClick={toggleMenu} 
                className="py-4 text-white font-bold hover:underline animate-drop-in delay-500"
              >
                CONTACT US
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;