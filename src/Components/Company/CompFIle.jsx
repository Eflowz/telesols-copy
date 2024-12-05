import React from 'react';
import image1 from '../../assets/pics/compolo.jpg';

const CompFile = () => {
  return (
    <div className="bg-white md:px-113 md:p-12">
      <section className="py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-full">
              <p>
              At IMG Energies Limited, we specialize in delivering comprehensive contracting solutions to organizations within the oil and gas sector, serving government entities as well as private and public enterprises. Our expertise spans a range of critical services, including engineering construction, equipment leasing, procurement of specialized tools and chemicals, and workforce recruitment to support industry operations effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-8"> 
  <section className="py-4">
    <div className="p-6">
      <p className='mb-4'>We serve clients with these principles:</p>
      <ul className="list-none pl-0">
        <li className="flex items-start space-x-2 mb-2">
          <span className="text-blue-600">&#9654;</span>
          <span> Uncompromising Quality Standards
          </span>
        </li>
        <li className="flex items-start space-x-2 mb-2">
          <span className="text-blue-600">&#9654;</span>
          <span>Strong Financial Stability
          </span>
        </li>
        <li className="flex items-start space-x-2 mb-2">
          <span className="text-blue-600">&#9654;</span>
          <span>Cutting-Edge Tools and Technology
          </span>
        </li>
        <li className="flex items-start space-x-2 mb-2">
          <span className="text-blue-600">&#9654;</span>
          <span>Skilled and Committed Professionals
          </span>
        </li>
        <li className="flex items-start space-x-2 mb-2">
          <span className="text-blue-600">&#9654;</span>
          <span>Timely Project Delivery
          </span>
        </li>
        <li className="flex items-start space-x-2 mb-2">
          <span className="text-blue-600">&#9654;</span>
          <span>Exceptional Safety Performance
          </span>
        </li>
      </ul>
    </div>
  </section>
  
  <div className="lg:w-1/2 mb-4 lg:mb-0">
    <img 
      src={image1} 
      alt="Oil and Gas Pipeline" 
      className="hidden lg:block lg:w-[350px] h-auto lg:ml-4 md:mt-12"
    />
  </div>
</div>
<p className='px-4 md:px-5 mb-2'>
With our proven degree of efficiency, we remain focused on exceeding client expectations.
</p>
<h2 className='px-4 md:px-5 '>To explore how we can support your business goals, connect with us online today.</h2>
    </div>
  );
};

export default CompFile;
