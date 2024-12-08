
// import React, { useEffect, useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import gsap from 'gsap';
// import image1 from "../assets/pics/1.jpg";
// import image2 from "../assets/pics/2.jpg";
// import image3 from "../assets/pics/3.jpg";

// const Home = () => {
//   const images = [image1, image2, image3];
//   const [currentImage, setCurrentImage] = useState(0);
//   const imageSlicesRefs = useRef([]);

//   // Function to slice image and animate the slices
//   const animateSlices = (index) => {
//     const slices = imageSlicesRefs.current;
//     const tl = gsap.timeline();

//     tl.to(slices[0], { x: '-100%', y: '-100%', duration: 1 })
//       .to(slices[1], { x: '100%', y: '-100%', duration: 1 }, '-=1')
//       .to(slices[2], { x: '-100%', y: '100%', duration: 1 }, '-=1')
//       .to(slices[3], { x: '100%', y: '100%', duration: 1 }, '-=1')
//       .then(() => {
//         // Move to the next image once animation finishes
//         setCurrentImage((prev) => (prev + 1) % images.length);
//       });
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       animateSlices(currentImage);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentImage]);

//   return (
//     <div className="relative w-full h-[600px] overflow-hidden">
//       <AnimatePresence>
//         {images.map((image, index) =>
//           index === currentImage && (
//             <motion.div
//               key={index}
//               className="absolute inset-0 w-full h-full"
//               initial={{ opacity: 1 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {/* Full Image Display */}
//               <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
              
//               {/* Image slices for the transition effect */}
//               <div className="absolute inset-0 w-full h-full opacity-0" id="image-slices">
//                 {[0, 1, 2, 3].map((sliceIndex) => (
//                   <div
//                     key={sliceIndex}
//                     ref={(el) => {
//                       if (!imageSlicesRefs.current[sliceIndex]) {
//                         imageSlicesRefs.current[sliceIndex] = el;
//                       }
//                     }}
//                     className={`absolute w-1/2 h-1/2 bg-cover bg-center`}
//                     style={{
//                       backgroundImage: `url(${image})`,
//                       backgroundPosition: getSliceBackgroundPosition(sliceIndex),
//                       top: sliceIndex < 2 ? '0' : '50%',
//                       left: sliceIndex % 2 === 0 ? '0' : '50%',
//                       clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
//                     }}
//                   ></div>
//                 ))}
//               </div>
//             </motion.div>
//           )
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// // Function to set the background position for each slice
// const getSliceBackgroundPosition = (sliceIndex) => {
//   switch (sliceIndex) {
//     case 0:
//       return 'left top';
//     case 1:
//       return 'right top';
//     case 2:
//       return 'left bottom';
//     case 3:
//       return 'right bottom';
//     default:
//       return 'center';
//   }
// };

// export default Home;


// import React, { useEffect, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import gsap from 'gsap';
// import { IoIosArrowDroprightCircle } from "react-icons/io";
// import image1 from "../assets/pics/1.jpg";
// import image2 from "../assets/pics/2.jpg";
// import image3 from "../assets/pics/3.jpg";
// import image4 from "../assets/pics/2121.jpg";
// import image5 from "../assets/pics/oil1.jpg";
// import image6 from "../assets/pics/oil2.jpg";
// import image7 from "../assets/pics/oil5.jpg";
// import First from "../Components/First";
// import Sech from "../Components/Sech";
// import ServicesIntro from "../Components/ServicesIntro";
// import Blum from '../Components/Blum';
// import Footer from "../Components/Footer";
// import Foot from "../Components/Foot";

// const Home = () => {
//   const images = [
//     { id: 1, src: image1, alt: "Oil Rig 1", gsapEffect: 'sliceHorizontal' },
//     { id: 2, src: image2, alt: "Oil Rig 2", gsapEffect: 'sliceVertical' },
//     { id: 3, src: image3, alt: "Oil Rig 3", gsapEffect: 'slideRight' },
//     { id: 4, src: image4, alt: "Oil Rig 4", gsapEffect: 'slideLeft' },
//     { id: 5, src: image5, alt: "Oil Rig 5", gsapEffect: 'fade' },
//     { id: 6, src: image6, alt: "Oil Rig 6", gsapEffect: 'fade' },
//     { id: 7, src: image7, alt: "Oil Rig 7", gsapEffect: 'sliceVertical' },
//   ];

//   const [currentImage, setCurrentImage] = useState(0);
//   const imgRefs = useRef([]);

//   // GSAP animation setup
//   useEffect(() => {
//     if (imgRefs.current[currentImage]) {
//       switch (images[currentImage].gsapEffect) {
//         case 'sliceHorizontal':
//           gsap.fromTo(
//             imgRefs.current[currentImage],
//             { clipPath: 'inset(50% 0 50% 0)' },
//             { clipPath: 'inset(0% 0 0% 0)', duration: 1 }
//           );
//           break;
//         case 'sliceVertical':
//           gsap.fromTo(
//             imgRefs.current[currentImage],
//             { clipPath: 'inset(0 50% 0 50%)' },
//             { clipPath: 'inset(0 0 0 0)', duration: 1 }
//           );
//           break;
//         case 'slideRight':
//           gsap.fromTo(
//             imgRefs.current[currentImage],
//             { x: '-100%' },
//             { x: '0%', duration: 1 }
//           );
//           break;
//         case 'slideLeft':
//           gsap.fromTo(
//             imgRefs.current[currentImage],
//             { x: '100%' },
//             { x: '0%', duration: 1 }
//           );
//           break;
//         case 'rotate':
//           gsap.fromTo(
//             imgRefs.current[currentImage],
//             { rotate: 180 },
//             { rotate: 0, duration: 1 }
//           );
//           break;
//         case 'scale':
//           gsap.fromTo(
//             imgRefs.current[currentImage],
//             { scale: 0.5 },
//             { scale: 1, duration: 1 }
//           );
//           break;
//         case 'fade':
//           gsap.fromTo(
//             imgRefs.current[currentImage],
//             { opacity: 0 },
//             { opacity: 1, duration: 1 }
//           );
//           break;
//         default:
//           break;
//       }
//     }
//   }, [currentImage, images]);

//   // Auto image slider with interval
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length); 
//     }, 8000); 
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div>
//       <div className="relative">
//         <div className="hidden md:block absolute z-10 top-1/2 left-[200px] transform -translate-y-1/2 p-8 h-[400px] bg-white bg-opacity-90 shadow-lg max-w-md">
//           <h2 className="text-2xl font-semibold text-gray-700 text-center">A Premier provider of</h2>
//           <h2 className="text-2xl font-bold text-blue-900 text-center">Oil Country Tubular Goods</h2>
//           <hr className="mt-4 text-gray-950" />
//           <p className="mt-4 text-gray-700 text-center text-md">
//             We specialize in supplying premium Oil Country Tubular Goods (OCTG) and delivering top-tier solutions to support the sourcing and energy production needs of oil and gas companies.
//           </p>
//           <Link to='/about'>
//             <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded inline-flex items-center gap-2">
//               Find Out More
//               <IoIosArrowDroprightCircle className="text-2xl mt-1" />
//             </button>
//           </Link>
//         </div>

//         <div className="w-full h-[550px] relative overflow-hidden">
//           <AnimatePresence>
//             {images.map((image, index) =>
//               index === currentImage && (
//                 <motion.img
//                   key={image.id}
//                   src={image.src}
//                   alt={image.alt}
//                   ref={(el) => (imgRefs.current[index] = el)}
//                   className="w-full h-full object-cover absolute"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 1 }}
//                 />
//               )
//             )}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* <First />
//       <Sech />
//       <ServicesIntro />
//       <Blum />
//       <Footer />
//       <Foot /> */}
//     </div>
//   );
// };

// export default Home;



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
        <div className="hidden md:block absolute z-20 top-1/2 left-[200px] transform -translate-y-1/2 p-8 h-[400px] bg-white bg-opacity-90 shadow-lg max-w-md">
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
