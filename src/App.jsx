import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Company from './pages/Company'
import Contact from './pages/Contact';
import TopBar from './Components/TopBar';
import OilCountry from '../src/pages/Sarvice/OilCountry';
import Qua from './pages/Sarvice/Qua';
import Chemical from './pages/Sarvice/Chemical';
import Procurement from './pages/Sarvice/Procurement';
import WellHead from './pages/Sarvice/WellHead';
import Psupply from './pages/Sarvice/Psupply';
import Pmanage from './pages/Sarvice/Pmanage';
import Electrical from './pages/Sarvice/Electrical';
import Safety from './pages/Sarvice/Safety';
import Industrial from './pages/Sarvice/Industrial';
import Country from './pages/Homer/Country';
import Strategy from './pages/Homer/Strategy';
import Aims from './pages/Homer/Aims';
import Team from './pages/Homer/Team';
import SopBar from './Components/SopBar';



function App() {
  return (
    <Router>
      <SopBar/>
      {/* <TopBar/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/country" element={<Country />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/aims" element={<Aims />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/services/OilCountry" element={<OilCountry />} />
        <Route path="/services/Quality-Assurance" element={<Qua />} />
        <Route path="/services/Chemical-Supplies" element={<Chemical />} />
        <Route path="/services/Procurement" element={<Procurement />} />
        <Route path="/services/WellHead-and-accessories" element={<WellHead />} />
        <Route path="/services/provision-of-technical-manpower-and-personnel-supply" element={<Psupply />} />
        <Route path="/services/Project-Management" element={<Pmanage />} />
        <Route path="/services/Electrical-Materials" element={<Electrical />} />
        <Route path="/services/Safety-Materials" element={<Safety />} />
        <Route path="/services/Industrial-Equipment-and-Tools" element={<Industrial />} />

      </Routes>
    </Router>
  );
}

export default App;
