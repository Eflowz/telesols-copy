import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import image1 from "../assets/pics/oil2.jpg";
import image2 from "../assets/pics/oil5.jpg";
import image3 from "../assets/pics/oil3.jpg";
import image4 from "../assets/pics/oil4.jpg";

const services = [
  {
    title: "Oil Country",
    subtitle: "Tubular Goods",
    image: image1,
    link: "#",
  },
  {
    title: "Quality Assurance",
    subtitle: "Quality Control",
    image: image2,
    link: "#",
  },
  {
    title: "Chemical",
    subtitle: "Supplies",
    image: image3,
    link: "#",
  },
  {
    title: "View More",
    subtitle: "Services",
    image: image4, 
    link: "#",
  },
];

const ServicesIntro = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false }); 
  }, []);

  return (
    <div className="bg-blue-100 py-12 px-6 text-center md:text-left md:mt-[80px]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
          What We Can Do for You
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mt-2">
          Services We Offer
        </h1>
        <hr className='h-px my-2 border-0 dark:bg-gray-700'/>
        <p className="mt-4 text-black max-w-3xl text-[17px]">
          Our company has several years' worth of experience in the oil and gas industry. 
          This is why we are confident we’ll be able to provide you with great quality 
          services that address your company needs. We are proud to offer the following 
          services to our clients:
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white shadow-md overflow-hidden relative hover:bg-blue-800 hover:text-white" 
              data-aos="fade-up" 
            >
              <div className="relative">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 text-white text-center">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-2xl font-bold">{service.subtitle}</p>
                </div>
              </div>
              <div className="p-4">
                <a href={service.link} className="block mt-2 text-black font-semibold text-center hover:bg-blue-800 hover:text-white">
                  Click Here »
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesIntro;
