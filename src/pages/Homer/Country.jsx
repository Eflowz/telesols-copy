import React,{useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image1 from '../../assets/pics/oil-rigs.jpg';
import image2 from '../../assets/pics/procurement.jpg';

const Country = () => {
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
            OUR COUNTRY
        </h1>
        </div>
      </div>
    </div>
      <div className="flex flex-col items-center mt-8 mb-4">
        <div className="mb-4 text-gray-700">
          <nav className="text-sm md:text-base">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">{'>'}</span>
            
            {location.pathname === '/country' && (
              <span className="font-semibold text-gray-900">Country</span>
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
          <h2 className='font-semibold text-lg'>OUR COUNTRY </h2>
      <p className="text-left py-4">
        <p className='italic  mb-3 '> Nigeria: A Nation Rich in Oil and Gas Resources </p>
      
      Located in West Africa, Nigeria continues to play a pivotal role as a leading oil and gas producer. The Niger Delta region remains the primary hub for oil and gas operations, with increasing exploration and production activities expanding into offshore areas. This shift has opened up significant opportunities for companies to invest in the sector, driven by a demand for innovative solutions and reliable partnerships.
      <p className="text-left py-4">
      Currently, Nigeria produces approximately 1.3–1.5 million barrels of crude oil daily, with potential growth in natural gas production to support global energy needs. As part of its economic diversification efforts, the Nigerian government has been advancing policies to boost local content in the industry. By 2024, indigenous participation in oil and gas operations has reached over 42%, with continued support for local businesses through initiatives like the Nigerian Content Intervention Fund. These policies are designed to empower Nigerian companies and create an enabling environment for sustainable growth.
      </p>
      <p className="text-left py-4">
      Additionally, Nigeria's Energy Transition Plan aims to achieve carbon neutrality by 2060, which emphasizes opportunities for businesses like IMG Energies Limited to contribute to the industry's evolving landscape. These initiatives include expanding natural gas utilization and ensuring adherence to zero gas flaring policies, thereby reducing environmental impact and promoting cleaner energy solutions.
      </p>
      <p className="text-left py-4">
      By leveraging these developments, IMG Energies Limited is well-positioned to partner with stakeholders and deliver value-driven services tailored to meet the industry's needs. 
      </p>

      Contact us today to explore how we can support your business goals in this dynamic sector.
        </p>
        </div>
      </div>
        <FootO />
        <Foot />
    </>
  );
};

export default Country;
