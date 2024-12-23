// Frisbee.jsx
import React, { useState, useEffect } from 'react';
import Balablu from '../assets/Video/Balared.mp4';

const Frisbee = () => {
  const [loading, setLoading] = useState(true);

  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative w-full h-screen">
      {loading && (
        <div className="absolute z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-10 h-10 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
        </div>
      )}

      <video
        src={Balablu}
        autoPlay
        loop
        muted
        className="w-full main object-cover"
        onCanPlayThrough={handleVideoLoad}
      />
      <div className="hidden md:block absolute z-20 top-[270px] left-[200px] transform -translate-y-1/2 p-8 h-[400px] bg-white bg-opacity-90 shadow-lg w-[410px]">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">A Premier Provider of</h2>
        <h2 className="text-4xl font-bold text-blue-600 text-center">Oil Country Tubular Goods</h2>
        <hr className="mt-4 text-gray-950" />
        <p className="mt-4 text-gray-700 text-center text-md">
          We specialize in supplying premium Oil Country Tubular Goods (OCTG) and delivering top-tier solutions to support the sourcing and energy production needs of oil and gas companies.
        </p>
        <div className='text-center'>
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded inline-flex items-center gap-2">
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frisbee;
