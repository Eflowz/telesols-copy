import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image2 from '../../assets/pics/side_img2.jpg';
import image1 from '../../assets/pics/oil-rigs.jpg';

const Qua = () => {
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
            QUALITY ASSURANCE QUALITY CONTROL
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
  <div className="flex flex-col lg:flex-row-reverse items-start">
    <img
      src={image2}
      alt="Oil Country Tubular Goods"
      className="hidden lg:block lg:w-[280px] h-auto lg:ml-4 mb-4 lg:mb-0"
    />
    <div className="text-left">
      <p className="py-4">
        <span className="text-blue-700 font-bold text-lg">IMG Energies Limited</span> understands that customers look for great quality in any product or service. We want our clients to have effective and efficient operations by providing them with quality assurance / quality control services.
      </p>
      <p className="py-4">
        Our highly skilled team is committed to ensuring the highest level of products and services to earn the trust and satisfaction of our clients. We help firms develop their performances through the use of high-quality materials and equipment. We also help clients develop and use technologies that will eliminate the production of defective products.
      </p>
      <div>
  <p className="text-left mb-5">
    Talk to us about your quality control needs by getting in touch with us online.
  </p>
</div>
    </div>
  </div>
</div>

        <FootO />
        <Foot />
    </>
  );
};

export default Qua;
