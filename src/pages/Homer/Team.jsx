import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FootO from '../../Components/FootO';
import Foot from '../../Components/Foot';
import {image11, image12, image13, image14} from '../../assets';

const Team = () => {
  const location = useLocation();

  const teamMembers = [
    {
      name: 'Mr. Oladipo Augustus',
      position: 'CEO/Director',
      image: image11,
    },
    {
      name: 'Mr. Oveh Emmanuel',
      position: 'COO',
      image: image13,
    },
    {
      name: 'Mr. Onyewuchi Jack Emmanuel',
      position: 'CTO',
      image: image12,
    },
    {
      name: 'Mrs. Felix Merry Augustus',
      position: 'Co-Director',
      image: image14,
    },
  ];

  return (
    <div className="team-section py-10">
      <nav className="text-sm md:text-base text-center mb-2">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <span className="mx-2">{'>'}</span>
        {location.pathname === '/teams' && (
          <span className="font-semibold text-gray-900">Team</span>
        )}
      </nav>
      <div className="w-3/4 border-t border-gray-400 mx-auto mb-6"></div>
      <h2 className="text-center text-3xl font-bold mb-3">Meet Our Team</h2>
      <h5 className="px-6 md:px-8 text-xl md:text-2xl font-bold mb-3">
        Meet the Experts Behind Our Success
      </h5>
      <p className="px-6 md:px-8 mb-6">
        At IMG Energies Limited, our reputation and accomplishments are rooted in the expertise and dedication of our exceptional team.
      </p>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member text-center p-6 shadow-xl rounded-lg ">
              <img  
      src={member.image}
      alt={member.name}
      className="mx-auto w-auto h-[250px] object-cover mb-4 transform transition duration-300 hover:scale-105 rounded-xl   "
    />
        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
        <p className="text-gray-600">{member.position}</p>
      </div>
        ))}
      </div>
      <p className="text-left py-4 px-6 md:px-8 mb-3">
        These individuals bring a wealth of experience, specialized skills, and an in-depth understanding of oil and gas operations. Together, they ensure the delivery of premium services and a client-focused approach that drives success.
      </p>
      <p className="text-left py-4 px-6 md:px-8">
        Our professional workforce spans multiple disciplines, including engineering, finance, technology, and administration. The team features certified engineers, accountants, computer scientists, and experienced technicians. Complemented by adept clerical, secretarial, safety, medical, and support staff, our team is prepared to address the dynamic needs of the oil and gas industry.
      </p>
      <p className="text-left px-6 md:px-8 mb-3">
        With a commitment to excellence, innovation, and customer satisfaction, we are confident in our ability to provide outstanding solutions. Connect with us today to experience our services and elevate your company’s performance.
      </p>
      <FootO />
      <Foot />
    </div>
  );
};

export default Team;
