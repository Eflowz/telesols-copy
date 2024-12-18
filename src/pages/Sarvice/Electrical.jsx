import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image1 from '../../assets/pics/oil-rigs.jpg';
import image2 from '../../assets/pics/electrical.jpg';

const Electrical = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <><div 
    className="relative bg-cover bg-center h-48 md:h-60"
    style={{ backgroundImage: `url(${image1})` }}
    >
    <div className="absolute inset-0 bg-white opacity-40"></div> 
    <div className="absolute top-[150px] md:top-[190px] inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 px-4 py-2 w-full">
        <h1 className="text-2xl md:text-4xl font-semibold text-black text-center">
            ELECTRICAL MATERIALS
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
            {location.pathname === '/services/Electrical-Materials' && (
              <span className="font-semibold text-gray-900">Electrical Materials</span>
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
          <h3 className="text-left font-bold ">Electrical Materials</h3>
          <p className="text-left py-2  mb-3 md:mb-8">
          Transformers, Lugs, Wire & Cables, Switches, Cable Hubs, Cable Glands, Relays, Junction Boxes, Explosion Proof Junction Boxes, Enclosures, Panel Boards, Couplers, Electrical Conduits, Meters, Multimeters, Electric Motors, Ladder & Cable Trays, Receptacles, Lighting Protection, Fuses, Batteries, Furrules, Capacitors, Connectors, Terminal Blocks, Lighting & Signaling, Ballasts, Light Fixtures, Light Bulbs, Lighting Accessories, Circuit Breaker, Lamps, Adaptors, Extension Cords, Electric Plugs, Industrial Plugs & Sockets
          </p>
          <h3 className="text-left font-bold ">Line Card</h3>
          <p className="text-left py-2">
          Appleton, Okonite, Panduit, Hoffman, Hubbell, ABB, 3M, Weidmuller, Thomas&Betts, Cooper B-Line, Eaton, Southwire, Legrand, Federal Signal, GE, Burndy, General Cable, Phillips, Emerson, Raychem, Killark, Brady, Siemens, Sylvania, Carhartt, Larson Electronics, Herbert Hiller, Steiner Toughguard, MSA, DeWALT, Salisbury, Sperian, BRK, Bulwark, DuPont, Uvex, Swagelok.
          </p>
        </div>
      </div>
        <FootO />
        <Foot />
    </>
  );
};

export default Electrical;
