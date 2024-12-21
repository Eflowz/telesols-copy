import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';


const Hang = () => {
  return (
    <div className="hidden md:block absolute z-20 top-1/2 left-[200px] transform -translate-y-1/2 p-8 h-[400px] bg-white bg-opacity-90 shadow-lg w-[410px]">
    <h2 className="text-2xl font-semibold text-gray-700 text-center">A Premier Provider of</h2>
    <h2 className="text-4xl font-bold text-blue-600 text-center">Oil Country Tubular Goods</h2>
    <hr className="mt-4 text-gray-950" />
    <p className="mt-4 text-gray-700 text-center text-md">
      We specialize in supplying premium Oil Country Tubular Goods (OCTG) and delivering top-tier solutions to support the sourcing and energy production needs of oil and gas companies.
    </p>
    <div className='text-center'>
    <Link to='/about'>
      <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded inline-flex items-center gap-2">
        Find Out More
        <IoIosArrowDroprightCircle className="text-2xl mt-1" />
      </button>
    </Link>
    </div>
  </div>
  )
}

export default Hang