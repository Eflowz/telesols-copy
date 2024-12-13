import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image1 from '../../assets/pics/oil-rigs.jpg';
import image2 from '../../assets/pics/safety.jpg';

const Safety = () => {
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
            SAFETY MATERIALS
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
            {location.pathname === '/services/Safety-Materials' && (
              <span className="font-semibold text-gray-900">Safety Materials</span>
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
          <h3 className="text-left font-bold mb-4 ">Safety Materials</h3>
          <p className="text-left py-2 mb-3 md:mb-8">
  <span className="font-semibold text-black">Eye/Face Protection:</span> Eyewear and Eyewear Accessories, Faceshields, Goggles <br />
  <span className="font-semibold text-black">Head Protection:</span> Hard Hats, Bump Caps, Rescue Helmets <br />
  <span className="font-semibold text-black">Hearing Protection:</span> Disposable and Reusable Ear Plugs and Dispensers, Ear Muffs <br />
  <span className="font-semibold text-black">Hand Protection:</span> (Gloves) Chemical Resistant, Cold Condition, Cut Resistant, Disposable, General Purpose, Heat Resistant, Leather, Mechanics, Palm Coated, Welding <br />
  <span className="font-semibold text-black">Clothing:</span> Aprons & Sleeves, Bouffants, Chemical Resistant Clothing, Dispensers, Disposable Clothing, Flotation Products, FR and Aluminized Apparel, Gear Bags, General Work Apparel, Hairnets, Performance Apparel, Rainwear, Life Jacket <br />
  <span className="font-semibold text-black">Electrical/Arc Flash Protection:</span> Blankets, Clothing, Kits, Dielectric Overshoes & Boots, Face Shields, Grounding Sets, Labels, Rainwear, Rubber Insulating Gloves <br />
  <span className="font-semibold text-black">Foot Protection:</span> Insulated Boots, Overshoes/Overboots/Oversoles, Socks & Liners, Diver Boots, Chest Waders, Rubber/PVC/Neoprene Boots, Chemical Resistant Boots, Toe/Metatarsal/Shin Guards, Insoles <br />
  <span className="font-semibold text-black">Respiratory:</span> Disposable Respirator, Air Purifying Respirator and Cartridges, PAPRS, SCBAs, Airline Respirators <br />
  <span className="font-semibold text-black">Gas Detection:</span> Multi-Gas & Single-Gas Detectors, Calibration Check Gas Cylinders, Detector Tubes, Test Kits <br />
  <span className="font-semibold text-black">Fire Protection:</span> Fire Barrier Products, Fire Extinguishers, Smoke Alarms, Fire Hoses <br />
  <span className="font-semibold text-black">Safety Storage:</span> Fuel Cans, Safety Cans, Safety Storage Cabinets <br />
  <span className="font-semibold text-black">Spill Control:</span> Chemical Sorbents, Classifiers, Neutralizers, Oil-Only Sorbents, Universal Sorbents, Solidifiers, Spill Kits <br />
  <span className="font-semibold text-black">Facility Safety:</span> Antislip Products, Emergency Eyewash, Noise Control, Signaling Alarms and Lights <br />
  <span className="font-semibold text-black">Matting:</span> Anti-Fatigue, Antimicrobial, Autoclavable, Entrance <br />
  <span className="font-semibold text-black">Lockout Tagout:</span> Circuit Breaker, Hasps, Lockout Kits, Lockout Stations, Padlock Boxes, Padlocks, Plug, Valve, Cable and Pneumatic Lockouts, Tags <br /> <br />
  <span className="font-semibold text-black">Traffic Safety:</span> Barricades, Channelizers, Cones, Convex and Dome Mirrors, Delineator Posts, Flags, Safety Vests, Signs & Sign Posts, Warning Triangles
</p>
        </div>
      </div>
        <FootO />
        <Foot />
    </>
  );
};

export default Safety;
