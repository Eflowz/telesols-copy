import React, { useEffect } from 'react'
import image1 from '../assets/pics/1.jpg';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Blum = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="relative flex flex-col md:flex-row items-center h-screen bg-cover bg-center md:gap-7 gap-0" style={{ backgroundImage: `url(${image1})` }}>     
        <div className="bg-blue-900 bg-opacity-90 p-8 text-white w-full md:w-1/2 h-full flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Hydrogen Sulfide <span className="text-white">Scavengers</span></h2>
          <ul className="list-disc ml-6 text-lg">
            <li>Drilling Lubricants</li>
            <li>Emulsion Breakers (Demulsifiers)</li>
            <li>Paraffin Control Products</li>
            <li>Corrosion Inhibitors</li>
            <li>Microbiocides</li>
            <li>Scale Inhibitors</li>
            <li>Surfactants</li>
            <li>Oxygen Scavengers</li>
            <li>Defoamers / Anti-foamers</li>
            <li>Oil Slick Dispersant</li>
            <li>Degreasers</li>
            <li>Top Hole Detergents</li>
          </ul>
        </div>
            {/* card */}
        <div className="p-3 md:p-11 md:h-[400px] bg-white w-full md:w-2/4 md:mr-10 overflow-y-scroll" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-gray-700 text-center"> What Drives Our Passion to Serve</h2>
  <h2 className="text-4xl font-bold text-blue-900 text-center">Mission Statement</h2>
  <hr className="mt-2 text-gray-950"/>
  <p className="mt-2 text-black text-start text-[17px]">
  The mission of <strong>IMG Energies  Limited</strong> is to enable our customers to find in one company the experience and expertise to deliver end-to-end business solutions and technology.
  </p>
      <div className="">
        <Link to='/about'>
      <button className="mt-4 bg-yellow-500 hover:bg-blue-950 text-white font-bold py-2 px-3 rounded inline-flex items-center gap-2 mx-auto">
        Find Out More
        <IoIosArrowDroprightCircle className="text-xl mt-1"/> 
      </button>
        
        </Link>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Blum;
