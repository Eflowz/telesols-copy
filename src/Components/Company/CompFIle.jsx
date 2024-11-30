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
                As a contracting company, Teresols Nigeria Limited services firms within the oil and gas industry, providing solutions to both government agencies and private and public organizations alike. We handle a variety of activities that help oil and gas companies, including engineering construction, leasing, procurement of oil tools, chemicals and equipment, and labor recruitment.
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
          <span>Guaranteed Quality</span>
        </li>
        <li className="flex items-start space-x-2 mb-2">
          <span className="text-blue-600">&#9654;</span>
          <span>Solid Financial Base</span>
        </li>
        <li className="flex items-start space-x-2 mb-2">
          <span className="text-blue-600">&#9654;</span>
          <span>Sophisticated Equipment</span>
        </li>
        <li className="flex items-start space-x-2 mb-2">
          <span className="text-blue-600">&#9654;</span>
          <span>Highly Experienced and Dedicated Staff</span>
        </li>
        <li className="flex items-start space-x-2 mb-2">
          <span className="text-blue-600">&#9654;</span>
          <span>Early Completion of Projects</span>
        </li>
        <li className="flex items-start space-x-2 mb-2">
          <span className="text-blue-600">&#9654;</span>
          <span>Clean Safety Record</span>
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
<h2>To know more about our company, you may get in touch with us online.</h2>
    </div>
  );
};

export default CompFile;
