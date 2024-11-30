import React, { useEffect } from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import image5 from '../assets/pics/1.jpg';

function FootO() {
    useEffect(() => {
      AOS.init() ;
    }, []);

    return (
      <div className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${image5})` }} 
      >
        <div className="flex flex-col md:flex-row justify-between gap-8 p-8 bg-white bg-opacity-80">
        <div className="footer-content mt-4 md:mt-0">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.198661846164!2d3.366429915291447!3d6.622227095211276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93bad39fe281%3A0xf160dff16cac3afb!2s7+Kola+Amodu+Cres%2C+Ikosi+Ketu%2C+Lagos%2C+Nigeria!5e0!3m2!1sen!2sph!4v1548268861903"
    className="w-full md:max-w-md h-64 md:h-96"
    style={{ border: '0' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          <div className="p-6" data-aos="fade-up">
            <h2 className="text-lg font-semibold text-[21px]">How you can Reach Us</h2>
            <h3 className="text-4xl font-bold text-blue-900">Contact Information</h3>
            <p className="text-center md:text-left text-[17px]">
              We'll be happy to respond to your questions and address your concerns. Reaching us is made easy through the following contact details.
            </p>
            <div className="flex items-center mt-6">
              <MdLocationOn className="mr-2 text-yellow-500" size={34} />
              <p>7, Kola Amodu Crescent, Magodo G.R.A., Lagos, Nigeria</p>
            </div>
            <div className="flex items-center mb-2">
              <MdLocationOn className="text-yellow-500 mr-2" size={44} />
              <p className="text-left mt-2">Km 14, Port Harcourt/Aba Expressway, By Oyigri Mega Station, Port Harcourt, Rivers State Nigeria.</p>
            </div>
            <div className="flex items-center mb-2">
              <MdPhone className="text-yellow-500 mr-2" size={34} />
              <p>Phone: +234-819-321-2621 | +234-906-000-8958</p>
            </div>
            <div className="flex items-center mb-2">
              <MdEmail className="text-yellow-500 mr-2" size={34} />
              <p>Email: info@teresolsng.com</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FootO;
