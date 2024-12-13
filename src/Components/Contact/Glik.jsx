import React from 'react';
import image1 from '../../assets/pics/oil-rigs.jpg';


const Glik = () => {
  return (
    <div 
    className="relative bg-cover bg-center h-48 md:h-60"
    style={{ backgroundImage: `url(${image1})` }}
    >
    <div className="absolute inset-0 bg-white opacity-40"></div> 
    <div className="absolute top-[150px] md:top-[190px] inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 px-4 py-2 w-full">
        <h1 className="text-2xl md:text-4xl font-semibold text-black text-center">
            CONTACT US 
        </h1>
        </div>
      </div>
    </div>
)
}

export default Glik