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
  <h2 className="text-3xl font-bold text-gray-700 text-center">A Leading Supplier of Oil Country</h2>
  <h2 className="text-4xl font-bold text-blue-900 text-center">Tubular Goods</h2>
  <hr className="mt-2 text-gray-950"/>
  <p className="mt-2 text-black text-start text-[17px]">
    We are committed to providing high-quality services to oil and gas companies by providing
    solutions to their drilling, sourcing, and energy production needs.
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