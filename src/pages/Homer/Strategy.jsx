import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image1 from '../../assets/pics/oil-rigs.jpg';
import image2 from '../../assets/pics/procurement.jpg';

const Strategy = () => {
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
            OUR STRATEGY
        </h1>
        </div>
      </div>
    </div>
      <div className="flex flex-col items-center mt-8 mb-4">
        <div className="mb-4 text-gray-700">
          <nav className="text-sm md:text-base">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">{'>'}</span>
            {location.pathname === '/strategy' && (
              <span className="font-semibold text-gray-900">Strategy</span>
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
          <h2 className='font-semibold text-lg'>OUR STRATEGY </h2>
{/* Explore Our Strategic Vision */}
          <p className="text-left py-4">
At <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span>,  we lead with innovation and expertise in engineering construction, the supply and maintenance of oil tools, chemicals, equipment, and advanced corrosion control solutions. By cultivating strategic alliances and technical partnerships with globally recognized technology leaders, we ensure the delivery of cutting-edge solutions tailored to our clients' needs.
  </p>
          <p className="text-left py-4">
          Staying ahead of market trends and technological advancements is at the core of our approach. This commitment enables us to offer transformative value to our customers, empowering their operations with the latest innovations that drive efficiency and success.
          </p>
          <p className='text-left py-2'>
          Our skilled team prides itself on delivering excellence and customer satisfaction at every step. Partner with IMG Energies Limited for reliable, forward-thinking solutions in the oil and gas sector. Let us help you achieve your goals with precision and professionalism.
          </p>
        </div>
      </div>
        <FootO />
        <Foot />
    </>
  );
};

export default Strategy;
