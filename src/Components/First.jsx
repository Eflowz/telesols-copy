import React, { useEffect } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { Link } from 'react-router-dom';

const First = () => {
  useEffect(() => {
    AOS.init({ duration: 1900, once: false }); 
  }, []);

  return (
    <div>
        <div className="block md:hidden p-4 " data-aos="fade-up" >
  <h2 className="text-3xl font-bold text-gray-700 text-center">A Premier Provider Of  </h2>
  <h2 className="text-4xl font-bold text-blue-600 text-center">Oil Country Tubular Goods</h2>
  <hr className="mt-2 text-gray-950"/>
  <p className="mt-2 text-black text-start text-[17px]">
  We specialize in supplying premium Oil Country Tubular Goods (OCTG) and delivering top-tier solutions to support the sourcing and energy production needs of oil and gas companies.
  </p>
  <div className="text-center">
    <Link to='/about'>
  <button className="mt-4 bg-yellow-500 hover:bg-blue-950 text-white font-bold py-2 px-3 rounded inline-flex items-center gap-2 mx-auto">
    Find Out More
    <IoIosArrowDroprightCircle className="text-xl mt-1"/> 
  </button>
    </Link>
</div>
<hr className='mt-6'/>
</div>
    </div>
  )
}

export default First