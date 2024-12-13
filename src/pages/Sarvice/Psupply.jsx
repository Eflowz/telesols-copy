import React, {useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import image1 from '../../assets/pics/oil-rigs.jpg';
import image2 from '../../assets/pics/manpower.jpg'
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';

const Psupply = () => {
  
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
        <h1 className="text-xl md:text-3xl font-semibold text-black text-center uppercase text-wrap">
        Provision of Technical Manpower and Personnel Supply
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
            {location.pathname === '/services/provision-of-technical-manpower-and-personnel-supply' && (
              <span className="font-semibold text-gray-900">Provision of Technical Manpower and Personnel Supply</span>
            )}
          </nav>
        </div>
      <div className="w-3/4 border-t border-gray-400 mb-4"></div>
      </div>
      <div className="mt-4 p-4 md:px-113 mb-8">
        <div className="relative">
          <img
            src={image2}
            alt="Oil Country Tubular Goods"
            className="hidden lg:block float-right mr-8 mb-2 w-[400px] h-auto "
          />
          <h2 className="text-left font-semibold md:text-xl "> Provision of Technical Manpower and Personnel Supply. </h2>

          <p className="mt-2 mb-4">
            The strength of our management capabilities begins with experienced people.
          </p>
          <p className="text-left py-2 mb-3">
          Known for high-competency and accuracy, <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span> helps to reduce manpower constraints—without compromising safety and quality. The high degree of service we provide is the result of an astute understanding of the manpower process acquired from years of hands-on experience. Our diverse experience, coupled with an extensive project library, allows <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span> team to respond quickly thereby providing significant savings in cost and time.
          </p>
          <p className=" mb-4">
          <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span>—in the provision of capable Manpower Services—consists of recruitment & selection, temporary placement or deployment with a functional online portal, and access to a database of candidates from the oil and gas, offshore, shipping, energy, and petrochemical industry where they can register themselves and update their personal details from time to time.
          </p>
          <p className="mb-4">
          <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span> reduces the burden of our clients by providing streamlined Manpower Management services inclusive of pay rolling, travel and logistics, relocation and accommodation, and assistance with visas and immigration in the case of international personnel movement.
          </p>
          
          <p className=" mb-4">
            We are able to achieve these effectively due largely to our pre-existing relationships, capable logistics team knowledge and experience in Nigeria, combined with the strength of our global affiliations. Our recruitment team is highly experienced and understands the uniqueness of every candidate. Thus, we are able to show the candidates’ best qualities to the client in a resume presented in a functional order depending on the requirements of the position.
          </p>
        </div>
        </div>
        <FootO/>
        <Foot/>
      </>

  );
};

export default Psupply;
