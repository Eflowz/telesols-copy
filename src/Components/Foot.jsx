import React from 'react';
import { Link } from 'react-router-dom'; 

function Foot() {
  return (
    <footer className="bg-yellow-500 text-white py-4 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="grid grid-cols-3 gap-4 md:flex md:space-x-4 mb-4 md:mb-0">
      <Link to="/" className="hover:underline">HOME</Link>
      <Link to="/About" className="hover:underline">ABOUT US</Link>
      <Link to="/Services" className="hover:underline">SERVICES</Link>
      <Link to="/Company" className="hover:underline">COMPANY</Link>
      <Link to="/Contact" className="hover:underline">CONTACT US</Link>
    </div>
        <div className="text-center md:text-left">
          <p className="text-[16px] font-extralight">
            © Copyright 2025 Img Energies Limited | Import <br /> Web Design: NEONTECH 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
