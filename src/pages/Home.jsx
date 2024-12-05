import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { IoIosArrowDroprightCircle } from "react-icons/io";
import image1 from "../assets/pics/1.jpg";
import image2 from "../assets/pics/2.jpg";
import image3 from "../assets/pics/3.jpg";
import image4 from "../assets/pics/2121.jpg";
import image5 from "../assets/pics/oil1.jpg";
import image6 from "../assets/pics/oil2.jpg";
import image7 from "../assets/pics/oil5.jpg";
import First from "../Components/First";
import Sech from "../Components/Sech";
import ServicesIntro from "../Components/ServicesIntro";
import Blum from '../Components/Blum'
import Footer from "../Components/Footer";
import Foot from "../Components/Foot";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false });
  }, []);

  const images = [
    { id: 1, src: image1, alt: "Oil Rig 1", animation: 'fade' },
    { id: 2, src: image2, alt: "Oil Rig 2", animation: 'zoom' },
    { id: 3, src: image3, alt: "Oil Rig 3", animation: 'slideRight' },
    { id: 4, src: image4, alt: "Oil Rig 4", animation: 'fade' },
    { id: 5, src: image5, alt: "Oil Rig 5", animation: 'slideUp' },
    { id: 6, src: image6, alt: "Oil Rig 6", animation: 'flip' },
    { id: 7, src: image7, alt: "Oil Rig 7", animation: 'fade' },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); 
    }, 8000); 
    return () => clearInterval(interval);
  }, [images.length]);

  const getAnimation = (animationType) => {
    switch (animationType) {
      case 'fade':
        return { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
      case 'zoom':
        return { initial: { scale: 0 }, animate: { scale: 1 }, exit: { scale: 0 } };
      case 'slideRight':
        return { initial: { x: '-100vw' }, animate: { x: 0 }, exit: { x: '100vw' } };
      case 'slideLeft':
        return { initial: { x: '100vw' }, animate: { x: 0 }, exit: { x: '-100vw' } };
      case 'slideUp':
        return { initial: { y: '100vh' }, animate: { y: 0 }, exit: { y: '-100vh' } };
      case 'rotate':
        return { initial: { rotate: 180 }, animate: { rotate: 0 }, exit: { rotate: -180 } };
      case 'flip':
        return { initial: { rotateY: 180 }, animate: { rotateY: 0 }, exit: { rotateY: 180 } };
      case 'scale':
        return { initial: { scale: 0.5 }, animate: { scale: 1 }, exit: { scale: 0.5 } };
      default:
        return {};
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="hidden md:block absolute z-10 top-1/2 left-[200px] transform -translate-y-1/2 p-8 h-[400px] bg-white bg-opacity-90 shadow-lg max-w-md">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">A Premier provider of</h2>
          <h2 className="text-2xl font-bold text-blue-900 text-center">Oil Country Tubular Goods</h2>
          <hr className="mt-4 text-gray-950" />
          <p className="mt-4 text-gray-700 text-center text-md">
            We specialize in supplying premium Oil Country Tubular Goods (OCTG) and delivering top-tier solutions to support the sourcing and energy production needs of oil and gas companies.
          </p>
          <Link to='/about'>
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded inline-flex items-center gap-2">
              Find Out More
              <IoIosArrowDroprightCircle className="text-2xl mt-1" />
            </button>
          </Link>
        </div>

        <div className="w-full h-[550px] relative overflow-hidden">
          <AnimatePresence>
            {images.map((image, index) =>
              index === currentImage && (
                <motion.img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover absolute"
                  initial={getAnimation(image.animation).initial}
                  animate={getAnimation(image.animation).animate}
                  exit={getAnimation(image.animation).exit}
                  transition={{ duration: 1 }}
                />
              )
            )}
          </AnimatePresence>
        </div>
      </div>

      <First />
      <Sech />
      <ServicesIntro />
      <Blum />
      <Footer />
      <Foot />
    </div>
  );
};

export default Home;
