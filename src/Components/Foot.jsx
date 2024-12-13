import React from 'react';
import { Link } from 'react-router-dom'; 

function Foot() {
  const scrollToTop = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <footer className="bg-yellow-500 text-white py-4 px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="grid grid-cols-3 gap-4 md:flex md:space-x-4 mb-4 md:mb-0">
          <Link to="/" className="hover:underline" onClick={scrollToTop}>HOME</Link>
          <Link to="/about" className="hover:underline" onClick={scrollToTop}>ABOUT US</Link>
          <Link to="/services" className="hover:underline" onClick={scrollToTop}>SERVICES</Link>
          <Link to="/company" className="hover:underline" onClick={scrollToTop}>COMPANY</Link>
          <Link to="/contact" className="hover:underline" onClick={scrollToTop}>CONTACT US</Link>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[16px] font-extralight">
            © Copyright 2025 IMG Energies Limited | Import <br /> Web Design: NEONTECH 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Foot;

