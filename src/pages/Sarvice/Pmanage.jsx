import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image1 from '../../assets/pics/project.jpg';

const Pmanage = () => {
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
            {location.pathname === '/services/Project-Management' && (
              <span className="font-semibold text-gray-900">Project Management</span>
            )}
          </nav>
        </div>
        <div className="w-3/4 border-t border-gray-400 "></div>
      </div>

      <div className="mt-2 p-4 md:px-113 mb-9">
        <div className="relative">
          <img
            src={image1}
            alt="Project Management Image"
            className="hidden lg:block float-right mr-8 w-[400px] h-auto "
          />
          <p className="text-left py-4">
            One of        <span className="text-blue-800 font-semibold">Teresols Nigeria Limited'</span>s project management teams ensure that its clients and business partners are provided with a succinctly clear program, budget, and timeline to drive the project through effective initiation, execution and completion.
          </p>
          <p className="text-left py-4">
          The company’s ability to integrate and apply diverse unique skills, methods, processes, and experience guarantees successful achievement of projects objectives within the stipulated time frame. Transparent evaluations of projects are provided as a pre-determined milestone to keep our clients’ informed regarding project progress and to ensure best value use of resources in order to successfully accomplish the desired result.
          </p>
        </div>
      </div> 
        <FootO />
        <Foot />
    </>
  );
};

export default Pmanage;
