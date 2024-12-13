import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import image1 from '../../assets/pics/oil-rigs.jpg';
import image2 from '../../assets/pics/accessories.jpg'
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';

const WellHead = () => {
  
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
        <div className="bg-white bg-opacity-50 px-4 py-4 w-full">
        <h1 className="text-xl -mt-2 md:-mt-0 md:text-3xl font-semibold text-black text-center uppercase">
        Wellhead, Christmas Tree Equipment, Spares, and Accessories
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
            {location.pathname === '/services/WellHead-and-accessories' && (
              <span className="font-semibold text-gray-900"> Wellhead, Christmas Tree Equipment, Spares, and Accessories</span>
            )}
          </nav>
        </div>
      <div className="w-3/4 border-t border-gray-400 mb-4"></div>
      </div>
      <div className="mt-4 p-4 md:px-113 mb-8">
  <div className="flex flex-col lg:flex-row-reverse items-start">
    <img
      src={image2}
      alt="Oil Country Tubular Goods"
      className="hidden lg:block lg:w-[330px] h-auto lg:ml-8 mb-4 lg:mb-0"
    />
    <div className="text-left">
      <h2 className="font-semibold">Wellhead, Christmas Tree Equipment, Spares, and Accessories</h2>
      <p className="py-2">
        Pumps, Actuators, Safety Relief Actuator, Pilot Assembly, Pilot Repair Kit, Pump Repair Kit, CCU, CCU Repair Kit, Top Sub Assembly, Gate and Seat Assembly, Regulators, Desander and Accumulators, Flanges, Flanges Guard, Back Pressure Valves, Check Valves, Needle valves, Ball Valves, Gate Valves, Multiple Orifice Valves, Relief Valves, Non return Valves, Pressure Gauges, Gaskets, Studs and Nuts, Plugs, Valve Removal Plugs, Bull Plugs, Bleeder Plugs, Tubing, Pressure Sensor, Hoses, O-ring, Connectors, O-ring, Component Parts for Control O-Matic Units, SSV Complete Unit, Christmas Tree Bonnet, Anti-theft Studs, Nuts and Bolts & Security Key.
      </p>
    </div>
  </div>
</div>

        <FootO/>
        <Foot/>
      </>

  );
};

export default WellHead;
