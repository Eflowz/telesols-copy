import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'; 
import { PiStrategyDuotone } from "react-icons/pi";
import { TbMapPinPin } from "react-icons/tb";
import { SlNote } from "react-icons/sl";
import { FaUsers } from "react-icons/fa6";
import image202 from '../assets/pics/Map.png';
import image303 from '../assets/pics/Phone.png';
import image404 from '../assets/pics/Mail.png';
import image505 from '../assets/pics/21.jpg'
import {image3,image7 } from '../assets/index';


const services = [
  {
    title: "Our Country",
    image: image7,
    link: "/country",
    icon: <TbMapPinPin className='text-3xl md:text-5xl ' />, 
  },
  {
    title: "Our Strategy",
    image: image3,
    link: "/strategy",
    icon: <PiStrategyDuotone className='text-3xl md:text-5xl' />, 
  },
  {
    title: "Our Aims",
    image: image7,
    link: "/aims",
    icon: <SlNote className='text-3xl md:text-5xl' />, 
  },
  {
    title: "Meet Our Team",
    image: image3,
    link: "/teams",
    icon: <FaUsers className='text-3xl md:text-5xl'/>, 
  },
];

function ServiceCard({ title, image, link, icon }) {
  return (
    <Link to={link}> 
      <div className="relative" data-aos="fade-up">
        <img src={image} alt={title} className="mb-4 w-full h-full object-cover opacity-80"  />
        <div className="absolute inset-0  bg-black bg-opacity-50 hover:bg-opacity-60 flex flex-col justify-center items-center text-white">
          {icon} 
          <h3 className="text-md md:text-2xl font-bold mb-2 ">{title}</h3>
          <hr className="w-1/2 border-white mb-2" />
        </div>
      </div>
    </Link>
  );
}

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${image505})` }} 
    >
      <div className="bg-white bg-opacity-80 py-12 px-6 w-full text-center" >
        <div className="container mx-auto max-w-6xl">
          <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} >
                <ServiceCard
                  title={service.title}
                  image={service.image}
                  link={service.link}
                  icon={service.icon} 
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="flex flex-col md:flex-row w-full">
    <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6669.506785124199!2d5.595951699184275!3d6.301547162970146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d38708cf921d%3A0xe8cbb8ec69e29e12!2sIMG%20ENERGIES%20LTD!5e0!3m2!1sen!2sng!4v1733700564142!5m2!1sen!2sng"
            className="w-full h-64 md:h-96"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
    <div className="w-full md:w-1/2 p-6" data-aos="fade-up">
        <h2 className="text-lg font-semibold text-[21px] text-center">How you can Reach Us</h2>
        <h3 className="text-4xl font-bold text-blue-900 text-center">Contact Information</h3>
        <p className='text-center md:text-left text-[17px]'>
            We'll be happy to respond to your questions and address your concerns. Reaching us is made easy through the following contact details.
        </p>
        <div className="mt-5">
            <div className="flex flex-col md:flex-row items-center mb-4">
                <img src={image202} alt="Location" className="w-12 h-12 mb-2 md:mb-0 md:mr-4" />
                <p className="text-center md:text-left">
                    7, Osayomore street, oko central road, Benin City, Edo State, Nigeria
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-4">
                <img src={image303} alt="Phone" className="w-8 h-12 mb-2 md:mb-0 md:mr-4 " />
                <p className="text-center md:text-left">
                    Phone: +234-812-348-3831, +234-905-415-6232
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center mb-4">
                <img src={image404} alt="Email" className="w-12 h-12 mb-2 md:mb-0 md:mr-4" />
                <p className="text-center md:text-left">
                    Email: info@imgenergies.com
                </p>
            </div>
        </div>
    </div>
</div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
