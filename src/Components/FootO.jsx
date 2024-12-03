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
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.716489941899!2d5.598261374991012!3d6.300934293688234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTgnMDMuNCJOIDXCsDM2JzAzLjAiRQ!5e0!3m2!1sen!2sng!4v1733151808378!5m2!1sen!2sng"
    className="w-full md:max-w-md h-64 md:h-96"
    style={{ border: '0' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
          <div className="p-6" data-aos="fade-up">
          <h2 className="text-lg font-semibold text-[21px] text-center" >How you can Reach Us</h2>
                <h3 className="text-4xl font-bold text-blue-900 text-center">Contact Information</h3>
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
    );
}

export default FootO;
