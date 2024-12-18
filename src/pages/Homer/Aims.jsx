import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image1 from '../../assets/pics/oil-rigs.jpg';
import image2 from '../../assets/pics/procurement.jpg';

const Aims = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div 
    className="relative bg-cover bg-center h-48 md:h-60"
    style={{ backgroundImage: `url(${image1})` }}
    >
    <div className="absolute inset-0 bg-white opacity-40"></div> 
    <div className="absolute top-[150px] md:top-[190px] inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 px-4 py-2 w-full">
        <h1 className="text-2xl md:text-4xl font-semibold text-black text-center">
            OUR AIMS
        </h1>
        </div>
      </div>
    </div>
      <div className="flex flex-col items-center mt-8 mb-4">
        <div className="mb-4 text-gray-700">
          <nav className="text-sm md:text-base">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">{'>'}</span>
            
            {location.pathname === '/aims' && (
              <span className="font-semibold text-gray-900">Aims</span>
            )}
          </nav>
        </div>
        <div className="w-3/4 border-t border-gray-400 "></div>
      </div>
      <div className="mt-2 p-4 md:px-113">
        <div className="relative">
          <img
            src={image2}
            alt="Oil Country Tubular Goods"
            className="hidden lg:block float-right mr-8 mb-2 w-[400px] h-auto mt-4"
          />
          <h2 className='font-semibold text-lg'>OUR AIMS</h2>
          <p className="text-left py-4">
            At <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span>, we are driven by clear and actionable goals to ensure excellence and success in all we do.
          </p>
          <ul className='list-decimal ml-6'>
            <li className='mb-2'>
              Cultivating Lasting Partnerships: We aim to foster enduring relationships with our clients by seamlessly integrating diverse technologies and platforms to deliver tailored solutions.
            </li>
            <li className='mb-2'>
              Delivering Value-Driven Solutions: Our focus is on providing innovative business strategies that offer measurable value and a distinct competitive edge in the market.
            </li>
          </ul>
          <p className='mb-3'>
            Guided by these objectives, we channel our passion and dedication into consistently exceeding expectations and ensuring client satisfaction through our premium services.
          </p>
          <p className='mb-2'>
            Reach out today to discover how we can support your company’s needs and drive your success forward.
          </p>
        </div>
      </div>
      <FootO />
      <Foot />
    </>
  );
};

export default Aims;