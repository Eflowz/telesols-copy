import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'; 
import { PiStrategyDuotone } from "react-icons/pi";
import { TbMapPinPin } from "react-icons/tb";
import { SlNote } from "react-icons/sl";
import { FaUsers } from "react-icons/fa6";
import image1 from "../assets/pics/oil5.jpg";
import image2 from '../assets/pics/Map.png';
import image3 from '../assets/pics/Phone.png';
import image4 from '../assets/pics/Mail.png';
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
    link: "/teams",
    icon: <FaUsers className='text-3xl md:text-7xl'/>, 
  },
];

function ServiceCard({ title, image, link, icon }) {
  return (
    <Link to={link}> 
      <div className="relative" data-aos="fade-left">
        <img src={image} alt={title} className="mb-4 w-full h-full object-cover opacity-80"  />
        <div className="absolute inset-0 hover:bg-blue-800 hover:bg-opacity-60 flex flex-col justify-center items-center text-white">
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

          <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
            <div className="footer-content mt-4 md:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.732205636943!2d5.593505270703599!3d6.29887761181313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d22ea5419045%3A0xfed39f3e7fbfc3fd!2s7%20Oko%20Central%20Rd%2C%20Oka%2C%20Benin%20City%20300102%2C%20Edo!5e0!3m2!1sen!2sng!4v1733604879307!5m2!1sen!2sng"
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
                <div className="flex flex-col md:flex-row items-center mb-4">
    <img src={image2} alt="Location" className="w-12 h-12 mb-2 md:mb-0 md:mr-4" />
    <p className="text-center md:text-left">
      7, Osayomore street, oko central road, Benin City, Edo State, Nigeria
    </p>
  </div>
  <div className="flex flex-col md:flex-row items-center mb-4">
    <img src={image3} alt="Phone" className="w-8 h-12 mb-2 md:mb-0 md:mr-4 " />
    <p className="text-center md:text-left">
      Phone: +234-812-348-3831, +234-905-415-6232
    </p>
  </div>
  <div className="flex flex-col md:flex-row items-center mb-4">
    <img src={image4} alt="Email" className="w-12 h-12 mb-2 md:mb-0 md:mr-4" />
    <p className="text-center md:text-left">
      Email: info@imgenergies.com
    </p>
  </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
