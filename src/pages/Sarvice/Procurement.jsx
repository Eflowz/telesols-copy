import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image1 from '../../assets/pics/procurement.jpg';

const Procurement = () => {
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
            {location.pathname === '/services/Procurement' && (
              <span className="font-semibold text-gray-900">Procurement</span>
            )}
          </nav>
        </div>
        <div className="w-3/4 border-t border-gray-400 "></div>
      </div>
      <div className="mt-2 p-4 md:px-113">
        <div className="relative">
          <img
            src={image1}
            alt="Oil Country Tubular Goods"
            className="hidden lg:block float-right mr-8 mb-2 w-[400px] h-auto mt-4"
          />
          <p className="text-left py-4">
            One of        <span className="text-blue-800 font-semibold">Teresols Nigeria Limited</span>          core competency area is in Procurement. Hence, with a devoted supply chain professionals, shipping and logistics professionals, as well as effective warehouse capabilities for stock holding, Teresols Nigeria Limited has been able to sustain its relationship with major International Oil Companies in Nigeria (IOCs) in the area of providing different commodities and equipment. The commodities Teresols Nigeria Limited supplies include but are not limited to safety & electrical materials and industrial tools and equipment.
          </p>
          <p className="text-left py-4">
          Teresols Nigeria Limited also provides Wellhead, Christmas Tree equipment, spares & accessories, and several equipment on oil platform and rigs. The company has also introduced the innovative anti-theft suds, nuts and bolt systems to its clients in order to prevent unauthorized unfastening of their tools and equipment. To this end, Teresols Nigeria Limited has established a strategic relationship and alliances with different Original Equipment Manufacturers (OEM) globally to ensure seamless procurement of high-quality products with competitive prices and on-time delivery of such products.
          </p>
        </div>
      </div>
        <FootO />
        <Foot />
    </>
  );
};

export default Procurement;
