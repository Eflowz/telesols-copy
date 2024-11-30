import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image1 from '../../assets/pics/assurance.jpg';

const Qua = () => {
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col items-center mt-8 mb-4">
        <div className="mb-4 text-gray-700">
          <nav className="text-sm md:text-base">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">{'>'}</span>
            <Link to="/services" className="text-blue-600 hover:underline">Services</Link>
            <span className="mx-2">{'>'}</span>
            {location.pathname === '/services/Quality-Assurance' && (
              <span className="font-semibold text-gray-900">Quality Assurance Quality Control</span>
            )}
          </nav>
        </div>
        <div className="w-3/4 border-t border-gray-400 mb-4"></div>
        <div className="bg-blue-800 text-white text-center py-3 px-8 rounded-full md:w-full w-3/4 max-w-5xl">
          <p className="italic text-md md:text-xl">
          Helping you ensure high-quality products and services.
          </p>
        </div>
      </div>
      <div className="mt-4 p-4 md:px-113">
        <div className="relative">
          <img
            src={image1}
            alt="Oil Country Tubular Goods"
            className="hidden lg:block float-right mr-4 mb-2 w-[350px] h-auto mt-4"
          />
          <p className="text-left py-4">
            <span className="text-blue-800 font-semibold">Teresols Nigeria Limited</span>        understands that customers look for great quality in any product or service. We want our clients to have effective and efficient operations by providing them with quality assurance / quality control services.
          </p>
          <p className="text-left py-4">
          Our highly skilled team is committed to ensuring the highest level of products and services to earn the trust and satisfaction of our clients. We help firms develop their performances through the use of high-quality materials and equipment. We also help clients develop and use technologies that will eliminate the production of defective products
          </p>
        </div>
        
      </div>
        <div>
            <p className=" px-4 md:px-113 text-left mb-5">
            Talk to us about your quality control needs by getting in touch with us online.
            </p>
          </div>
        <FootO />
        <Foot />
    </>
  );
};

export default Qua;
