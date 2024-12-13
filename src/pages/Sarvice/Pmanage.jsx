import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import image1 from '../../assets/pics/oil-rigs.jpg';
import image2 from '../../assets/pics/project.jpg';

const Pmanage = () => {
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
            PROJECT MANAGEMENT
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
            {location.pathname === '/services/Project-Management' && (
              <span className="font-semibold text-gray-900">Project Management</span>
            )}
          </nav>
        </div>
        <div className="w-3/4 border-t border-gray-400 "></div>
      </div>

      <div className="mt-2 p-4 md:px-113 mb-9">
  <div className="flex flex-col lg:flex-row-reverse items-start">
    <img
      src={image2}
      alt="Project Management Image"
      className="hidden lg:block lg:w-[400px] h-auto lg:ml-8 mb-4 lg:mb-0"
    />
    <div className="text-left">
      <p className="py-4">
        One of <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span>'s project management teams ensures that its clients and business partners are provided with a succinctly clear program, budget, and timeline to drive the project through effective initiation, execution, and completion.
      </p>
      <p className="py-4">
        The company’s ability to integrate and apply diverse unique skills, methods, processes, and experience guarantees successful achievement of project objectives within the stipulated time frame. Transparent evaluations of projects are provided as a pre-determined milestone to keep our clients informed regarding project progress and to ensure best value use of resources in order to successfully accomplish the desired result.
      </p>
    </div>
  </div>
</div>

        <FootO />
        <Foot />
    </>
  );
};

export default Pmanage;
