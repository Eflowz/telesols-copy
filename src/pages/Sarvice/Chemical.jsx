import React, {useEffect}from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image1 from '../../assets/pics/oil-rigs.jpg';
import image2 from '../../assets/pics/chemical.jpg';

const Chemical = () => {
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
            CHEMICAL SUPPLIES
        </h1>
        </div>
      </div>
    </div>
      <div className="flex flex-col items-center mt-8 mb-4">
        <div className="mb-4 text-gray-700">
          <nav className="text-sm md:text-base">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">{'>'}</span>
            <Link to="/services" className="text-blue-600 hover:underline">Services</Link>
            <span className="mx-2">{'>'}</span>
            {location.pathname === '/services/Chemical-Supplies' && (
              <span className="font-semibold text-gray-900">Chemical Supplies</span>
            )}
          </nav>
        </div>
        <div className="w-3/4 border-t border-gray-400 mb-4"></div>
        <div className="bg-blue-800 text-white text-center py-3 px-8 rounded-full md:w-full w-3/4 max-w-5xl">
          <p className="italic text-md md:text-xl">
          Our commitment lies in high levels of safety, health, and environmental protection for all parties involved.
          </p>
        </div>
      </div>
      <div className="mt-4 p-4 md:px-113">
        <div className="relative">
          <img
            src={image2}
            alt="Oil Country Tubular Goods"
            className="hidden lg:block float-right mr-8 mb-2 w-[350px] h-auto mt-4"
          />
          <p className="text-left py-4">
            The entire team at         <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span>         places great importance on the safety of our people, our customers, and the environment. We know, understand, and follow industry standards to ensure such safety. At the same time, we strive hard to meet the expectations of our clients at every opportunity that presents itself.
          </p>
          <p className="text-left py-4">
          Our company constantly reviews HSE procedures. We aim for perfection and will do our best to get you to the level of quality you desire and deserve. It is our constant goal to get the job done right.
          </p>
        </div>
      </div>
        <div>
            <p className=" px-4 md:px-113 text-left mb-5">
            For further inquiries about our chemical supplies and other services, please contact us today.
            </p>
          </div>
        <FootO />
        <Foot />
    </>
  );
};

export default Chemical;
