import React, { useEffect } from 'react'
import image1 from '../assets/pics/1.jpg';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Blum = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="relative flex flex-col md:flex-row items-center h-screen bg-cover bg-center md:gap-7 gap-0" style={{ backgroundImage: `url(${image1})` }}>     
        <div className="bg-blue-900 bg-opacity-90 p-8 text-white w-full md:w-1/2 h-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mobile-lg:text-md"> Struggling with Inconsistent Supply Chains?
          </h2> 
          <p className='mb-3 text-xl '>
            {/* mobile-lgo:text-sm mobile-xzl:text-sm mobile-lg:text-sm */}
          In the oil and gas industry, delays, poor-quality supplies, and logistical challenges can mean missed deadlines, increased costs, and lost opportunities. We understand that managing procurement for critical operations is no small task.
    <br />
    <br />
          At IMG Energies Limited, we turn supply chain challenges into seamless solutions:

          </p>
          <ul className="list-disc ml-6 text-[16px] ">
            {/* mobile-lgo:text-sm mobile-xzl:text-sm mobile-lg:text-sm */}
            <li>We have access a trusted network of vetted suppliers to ensure the timely delivery of quality equipment, tools, and materials.
            </li>
            <li>Every product we supply meets industry compliance and certification requirements.
            </li>
            <li>From order placement to final delivery, we manage the process end-to-end, so you can focus on your operations.</li>
            <li>Our Solutions are customized to fit your project's unique needs, ensuring cost-effectiveness and efficiency</li>
          </ul>
        </div>
     {/* card */}
<div className="hidden md:block p-3 md:p-11 md:h-[400px] bg-white w-full md:w-2/4 md:mr-10 " data-aos="fade-up">
  <h2 className="text-3xl font-bold text-gray-700 text-center">What Drives Our Passion to Serve</h2>
  <h2 className="text-4xl font-bold text-blue-900 text-center">Mission Statement</h2>
  <hr className="mt-2 border-gray-950" />
  <p className="mt-2 text-black text-start text-[17px]">
    The mission of <strong>IMG Energies Limited</strong> is to provide comprehensive expertise and innovative solutions, ensuring clients benefit from seamless, integrated services tailored to meet the demands of the industry.
  </p>
  <div className="text-center">
    <Link to='/about'>
      <button className="mt-4 bg-yellow-500 hover:bg-blue-950 text-white font-bold py-2 px-3 rounded inline-flex items-center gap-2">
        Find Out More
        <IoIosArrowDroprightCircle className="text-xl mt-1" />
      </button>
    </Link>
  </div>
</div>
{/* end of the card */}



  </div>
    </div>
  )
}

export default Blum;
