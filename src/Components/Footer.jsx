import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'; 
import { PiStrategyDuotone } from "react-icons/pi";
import { TbMapPinPin } from "react-icons/tb";
import { SlNote } from "react-icons/sl";
import { FaUsers } from "react-icons/fa6";
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'; 
import image1 from "../assets/pics/oil5.jpg";
import image5 from '../assets/pics/1.jpg';

const services = [
  {
    title: "Our Country",
    image: image1,
    link: "/country",
    icon: <TbMapPinPin className='text-3xl md:text-7xl ' />, 
  },
  {
    title: "Our Strategy",
    image: image1,
    link: "/strategy",
    icon: <PiStrategyDuotone className='text-3xl md:text-7xl' />, 
  },
  {
    title: "Our Aims",
    image: image1,
    link: "/aims",
    icon: <SlNote className='text-3xl md:text-7xl' />, 
  },
  {
    title: "Meet Our Team",
    image: image1,
    link: "/team",
    icon: <FaUsers className='text-3xl md:text-7xl'/>, 
  },
];

function ServiceCard({ title, image, link, icon }) {
  return (
    <Link to={link}> 
      <div className="relative">
        <img src={image} alt={title} className="mb-4 w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 hover:bg-blue-900 hover:bg-opacity-80 flex flex-col justify-center items-center text-white">
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
      style={{ backgroundImage: `url(${image5})` }} 
    >
      <div className="bg-white bg-opacity-80 py-12 px-6 w-full text-center">
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

          <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
            <div className="footer-content mt-4 md:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.716489941899!2d5.598261374991012!3d6.300934293688234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTgnMDMuNCJOIDXCsDM2JzAzLjAiRQ!5e0!3m2!1sen!2sng!4v1733151808378!5m2!1sen!2sng"
                    className="w-full md:max-w-xl h-64 md:h-96"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>
            <div className=" p-6 " data-aos="fade-up">
                <h2 className="text-lg font-semibold text-[21px]" >How you can Reach Us</h2>
                <h3 className="text-4xl font-bold text-blue-900">Contact Information</h3>
                <p className='text-center md:text-left text-[17px]'>
                We'll be happy to respond to your questions and address your concerns. Reaching us is made easy through the following contact details.
                </p>
        <div className="flex items-center mt-5 mb-2">
        <MdLocationOn className=" ml-[-10px] text-yellow-500" size={40} />
        <p>7, Osayomore street, oko central road, benin city, Edo State, Nigeria</p>
      </div>
  
      <div className="flex items-center mb-2">
        <MdPhone className="text-yellow-500  mr-2" size={34} />
        <p>Phone: +234-812-348-3831, +234-905-415-6232</p>
      </div>
      <div className="flex items-center mb-2">
        <MdEmail className="text-yellow-500  mr-2" size={34} />
        <p>Email: info@imgenergies.com</p>
      </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
