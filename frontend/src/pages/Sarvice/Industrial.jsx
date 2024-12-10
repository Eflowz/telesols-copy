import React from 'react'
import SupplierList from '../Industrial/SupplierList'
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image1 from '../../assets/pics/industrial.jpg';
import image2 from '../../assets/pics/nh_banner.jpg';

const Industrial = () => {
  const location = useLocation();


  return (
    <div>
      <div 
    className="relative bg-cover bg-center h-64 md:h-80"
    style={{ backgroundImage: `url(${image2})` }}
    >
    <div className="absolute inset-0 bg-white opacity-40"></div> 
    <div className="absolute top-[210px] md:top-[265px] inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-50 px-4 py-2 w-full">
        <h1 className="text-2xl md:text-4xl font-semibold text-black text-center mb-6">
            INDUSTRIAL EQUIPMENT AND TOOLS
        </h1>
        </div>
      </div>
    </div>
      <div className="flex flex-col items-center mt-8 mb-4">
        <div className="mb-4 text-gray-700">
          <nav className="text-sm md:text-base mobile-md:W-2/4 mobile-md:px-5">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2">{'>'}</span>
            <Link to="/services" className="text-blue-600 hover:underline">Services</Link>
            <span className="mx-2">{'>'}</span>
            {location.pathname === '/services/Industrial-Equipment-and-Tools' && (
              <span className="font-semibold text-gray-900 ">Industrial Equipments and Tools</span>
            )}
          </nav>
        </div>
        <div className="w-3/4 border-t border-gray-400 "></div>
      </div>
      <div className="mt-4 p-4 md:px-113">
        <div className="relative">
          <img
            src={image1}
            alt="Oil Country Tubular Goods"
            className="hidden lg:block float-right mr-4 mb-2 w-[350px] h-auto mt-4"
          />
          <h3 className='font-bold text-left text-xl'>Industrial Equipment and Tools</h3>
          <p className="text-left py-4">
          Ball Valves, Gate Valves, Compressors, Gaskets, Lubricants, Cathodic Protection Materials, Gauges, Tubing, Thermowells, Seals, Regulators, Calibrators, Bolts, Rods, Anchors, Adhesives, Clamps, Bearings, Bushings, Actuators, Couplings, Transducers, Fasteners, Pumps, Filters, Transmitter, Hose Nozzles, Thermocouples, Tie Cables, Screw Drivers, Pliers, Bender, Wrench, Cutting Discs, Grinders, Grinding Wheels, Bench Plane, Measuring Tapes, Machine Vises, Hammers, Chisels, Hex Keys & Drivers, Tool Sets, Tool Boxes, Levels, Electric Drills, Plexiglass, Sanding Abrasives, Blades, Hoses, Hose Reels, Pipe Fittings & Pipe, Tube Benders, Drive Belts, Sealants, Flowmeters, Heat Exchangers, Punches, Hooks, Slings, Signs
          </p>
        </div>
      </div>
      <h2 className='px-5 md:px-113 font-bold '>Line Card</h2>
      <SupplierList/>
      <FootO/>
      <Foot/>
    </div>
  )
}

export default Industrial