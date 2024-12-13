import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image2 from '../../assets/pics/tubular.jpg';
import image1 from '../../assets/pics/oil-rigs.jpg';

const OilCountry = () => {
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
            OIL COUNTRY TUBULAR GOODS
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
            {location.pathname === '/services/OilCountry' && (
              <span className="font-semibold text-gray-900">Oil Country Tubular Goods</span>
            )}
          </nav>
        </div>
        <div className="w-3/4 border-t border-gray-400 mb-4"></div>
        <div className="bg-blue-800 text-white text-center py-3 px-8 rounded-full md:w-full w-3/4 max-w-5xl">
          <p className="italic text-md md:text-xl">
            We procure professional-grade oil country tubular goods for your needs.
          </p>
        </div>
      </div>
      <div className="mt-4 p-4 md:px-113">
        <div className="relative">
          <img
            src={image2}
            alt="Oil Country Tubular Goods"
            className="hidden lg:block float-right mr-4 mb-2 w-[350px] h-auto mt-4"
          />
          <p className="text-left py-4">
          <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span> can help firms procure oil country tubular goods for their operations. Our procurement team is more than capable of finding cost-effective yet quality materials in the region. These include the three types of seamless tubes:
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-8">
          <section className="py-4">
            <div className="p-6">
              <ul className="list-none pl-0">
                <li className="flex items-start space-x-2 mb-2">
                  <span className="text-blue-600">&#9654;</span>
                  <span>Drill Pipes</span>
                </li>
                <li className="flex items-start space-x-2 mb-2">
                  <span className="text-blue-600">&#9654;</span>
                  <span>Casing Pipes</span>
                </li>
                <li className="flex items-start space-x-2 mb-2">
                  <span className="text-blue-600">&#9654;</span>
                  <span>Tubing</span>
                </li>
              </ul>
            </div>
          </section>
        
        </div>
        <div>
            <p className="px-4 text-left mb-5">
              Our team communicates with the clients, taking note of the measurements and specifications of the tubular goods they need. We make sure to deliver the right materials to the site in tempered and quenched condition.
            </p>
            <p className="px-4 text-left mb-5">
              If you have questions about our material procurement services, particularly our oil country tubular goods, please contact us today.
            </p>
          </div>
      </div>
        <FootO />
        <Foot />
    </>
  );
};

export default OilCountry;
