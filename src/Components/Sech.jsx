import React from 'react';
import image1 from "../assets/pics/side_img1.jpg";
import image2 from "../assets/pics/side_img2.jpg";


const Sech = () => {
    return (
    <div className="flex flex-col md:flex-row items-center justify-between py-2 mr-10">
    <div className="hidden md:block md:w-1/2 relative">
    <img 
        src={image1} 
        alt="Description" 
        className="w-[260px] h-auto  absolute top-[-100px] left-40 z-10" 
    />
    <img 
        src={image2} 
        alt="Description" 
        className="w-[250px] h-auto absolute top-[-70px] right-[80px] z-20" 
    />
    </div>
    <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-10 md:ml-[-90px]">
    <p className="text-2xl text-black text-left ml-3">Welcome to</p>
    <h2 className="text-5xl font-bold text-blue-700 text-left ml-3">Teresols Nigeria Limited</h2>
    <p className="mt-4 text-black text-left ml-3 text-[17px]">
        High-quality products are necessary in the oil and gas industry. Additionally, review of operational procedures is necessary for safety in the workplace. Teresols Nigeria Limited is a contracting company that puts your company need first.
        <p className='mt-2'>
          Get in touch with a representative today to get started with our services!
        </p>
      </p>
    </div>
  </div>  
  );
};

export default Sech;
