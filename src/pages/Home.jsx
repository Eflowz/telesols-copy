import React, { useEffect, Suspense } from 'react';
import First from "../Components/First";
import Sech from "../Components/Sech";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServicesIntro from "../Components/ServicesIntro";
import Blum from '../Components/Blum';
import Footer from "../Components/Footer";
import Foot from "../Components/Foot";
const Frisbee = React.lazy(() => import('../Components/Frisbee'));

const Home = () => {
  useEffect(()=> {
    AOS.init({duration:1000});
  }, [])
  return (
    <div>
      <Suspense fallback={<div>Loading video...</div>}>
        <Frisbee />
      </Suspense>
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
