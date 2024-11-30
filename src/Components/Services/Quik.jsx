import React from 'react';
import image1 from '../../assets/pics/nh_banner.jpg';


const Quik = () => {
  return (
    <div 
    className="relative bg-cover bg-center h-64 md:h-80"
    style={{ backgroundImage: `url(${image1})` }}
    >
    <div className="absolute inset-0 bg-white opacity-40"></div> 
    <div className="absolute top-[210px] md:top-[265px] inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-50 px-4 py-2 w-full">
        <h1 className="text-2xl md:text-4xl font-semibold text-black text-center">
            SERVICES
        </h1>
        </div>
      </div>
    </div>
)
}

export default Quik