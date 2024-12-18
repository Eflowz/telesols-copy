import React from 'react';
import image1 from '../../assets/pics/getber.jpg';

const Text = () => {
  return (
    <div className='mt-4 p-4 md:px-113'>
        <div className="relative">
        <img 
          src={image1} 
          alt="oops" 
          className="hidden lg:block float-right mr-2 mb-2 w-[350px] h-auto mt-8"
        />
      <p className='text-left py-4'>
      Established on November 12, 2024, and headquartered in Benin City, Edo State, Nigeria, <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span> is a proudly indigenous company committed to delivering exceptional services to clients in the oil and gas industry. Operating in compliance with all applicable laws, we are dedicated to maintaining the highest standards of quality and professionalism.
      </p>
      </div>
        <p className='text-left py-4'>
        Founded by Mr. Oladipo Augustus, a seasoned business leader with extensive knowledge of Nigeria’s dynamic business landscape, <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span> benefits from his visionary leadership and vast expertise. Under his guidance, the company has achieved significant strides in innovation, customer focus, and operational excellence.
        </p>

      <p className='text-left py-4'>
      To ensure the delivery of superior products and services, <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span> has forged strategic partnerships with reputable Original Equipment Manufacturers (OEMs) worldwide, guaranteeing direct procurement from trusted sources. This approach enables us to offer competitive pricing without compromising on quality.
      </p>

      <p className='text-left py-4'>
      Our success is driven by a customer-focused philosophy, a highly skilled workforce, and a commitment to professionalism in every aspect of our operations. Guided by an all-indigenous Board of Directors, we work collaboratively to not only meet but consistently exceed our clients’ expectations.
      </p>
      <p className='text-left py-4 '>
        <strong>Target Markets</strong><br />
        We provide tailored solutions to a diverse range of industries, including: 
        <br />
        <ul className='list-disc ml-6 mt-2'>
          <li>  Oil and Gas Companies </li>
          <li>FMCG (Fast-Moving Consumer Goods) Companies</li>
        <li>
        Construction Firms
        </li>
          <li>Utility Providers</li>
        </ul>
      </p>

      <p className='text-left py-4'>
      For more information about <span className='text-blue-700 font-bold text-lg'>IMG Energies Limited</span> and how we can serve your business needs, contact us today. Let us partner with you to achieve unparalleled success in your industry.
      </p>
    </div>
  );
}

export default Text;
