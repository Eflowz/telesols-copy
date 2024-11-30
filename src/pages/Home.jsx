import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import Slider from "react-slick";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/pics/1.jpg";
import image2 from "../assets/pics/2.jpg";
import image3 from "../assets/pics/3.jpg";
import image4 from "../assets/pics/2121.jpg";
import First from "../Components/First";
import Sech from "../Components/Sech";
import ServicesIntro from "../Components/ServicesIntro";
import Blum from '../Components/Blum'
import Footer from "../Components/Footer";
import Foot from "../Components/Foot";


const  Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: false }); 
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { id: 1, src: image1, alt: "Oil Rig 1" },
    { id: 2, src: image2, alt: "Oil Rig 2" },
    { id: 3, src: image3, alt: "Oil Rig 3" },
    { id: 4, src: image4, alt: "Oil Rig 4" },
  ];

  return (
  <div>
    <div className="relative" >
      <div className="hidden md:block absolute z-10 top-1/2 left-[200px] transform -translate-y-1/2 p-8 h-[400px] bg-white bg-opacity-90 shadow-lg max-w-md"  >
  <h2 className="text-2xl font-semibold text-gray-700 text-center">A Leading Supplier of Oil Country</h2>
  <h2 className="text-4xl font-bold text-blue-900 text-center">Tubular Goods</h2>
  <hr className="mt-4 text-gray-950"/>
  <p className="mt-4 text-gray-700 text-center text-md">
    We are committed to providing high-quality services to oil and gas companies by providing
    solutions to their drilling, sourcing, and energy production needs.
  </p>
  <Link to='/about'> 
  <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded inline-flex items-center gap-2">
    Find Out More
    <IoIosArrowDroprightCircle className="text-2xl mt-1"/> 
  </button>
  </Link>
</div>


      <Slider {...settings} className="relative overflow-x-clip">
        {images.map((image) => (
          <div key={image.id} className="w-full h-[550px]">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover " />
          </div>
        ))}
      </Slider>
    </div>

        <First/>
        <Sech/>
        <ServicesIntro/>
        <Blum/>
        <Footer/>
        <Foot/>
  </div>
  );
};

export default Home;
