import React from 'react';
import { TbMapPinPin } from 'react-icons/tb';
import { PiStrategyDuotone } from 'react-icons/pi';
import { SlNote } from 'react-icons/sl';
import { FaUsers } from 'react-icons/fa';
import {image1, image2, image3, image4, image5, image6, image7, image8, image9, image10} from '../../assets';
import { Link } from 'react-router-dom';



const services = [
  {
    title: "Chemical Supplies",
    image: image3,
    link: "/services/Chemical-Supplies",
    icon: <SlNote className='text-7xl' />, 
  },
  {
    title: "Oil Country Tubular Goods",
    image: image1,
    link: "/services/OilCountry",
    icon: <TbMapPinPin className='text-7xl ' />, 
  },
  {
    title: "Procurement",
    image: image4,
    link: "/services/Procurement",
    icon: <FaUsers className='text-7xl'/>, 
  },
  {
    title: "Quality Assurance / Quality Control",
    image: image2,
    link: "/services/Quality-Assurance",
    icon: <PiStrategyDuotone className='text-7xl' />, 
  },
  {
    title: "WellHead, Christmas Tree Equipment, Spares, and Accessories",
    image: image5,
    link: "/services/WellHead-and-accessories ",
    icon: <FaUsers className='text-7xl'/>, 
  },
  {
    title: "Provision of Technical Manpower and Personnel Supply",
    image: image6,
    link: "/services/provision-of-technical-manpower-and-personnel-supply",
    icon: <FaUsers className='text-7xl'/>, 
  },
  {
    title: "Electrical Materials",
    image: image8,
    link: "/services/Electrical-Materials",
    icon: <FaUsers className='text-7xl'/>, 
  },
  {
    title: "Project Management",
    image: image7,
    link: "/services/Project-Management",
    icon: <FaUsers className='text-7xl'/>, 
  },
  {
    title: "Industrial Equipment and Tools",
    image: image10,
    link: "/services/Industrial-Equipment-and-Tools",
    icon: <FaUsers className='text-7xl'/>, 
  },
  {
    title: "Safety Materials",
    image: image9,
    link: "/services/Safety-Materials",
    icon: <FaUsers className='text-7xl'/>, 
  },
];

const ServicesGallery = () => {
  return (
    <div className="container mx-auto px-4 md:px-113 py-8">
        <h2><span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span> offers the following services:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {services.map((service, index) => (
          <Link 
            to={service.link} 
            key={index} 
            className="group relative block overflow-hidden ">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-10">
              <div className="text-center">
                <h3 className="mt-2 text-white font-semibold text-2xl ">
                  {service.title}
                </h3>
                <div className="text-white group-hover:opacity-10">
                  {/* {service.icon} */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    <p className=' mt-6'> 
    We are dedicated to delivering exceptional services tailored to meet the unique needs of our clients. With extensive experience in the oil and gas industry, we are well-equipped to provide innovative solutions that drive success for your business.
    <br />
    <br />
        For any inquiries about our offerings don't hesitate to reach out. We look forward to collaborating with you and becoming a trusted partner in achieving your goals.
      </p>
    </div>
  );
};

export default ServicesGallery;
