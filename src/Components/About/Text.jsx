import React from 'react';
import image1 from '../../assets/pics/thumb-5.jpg';

const Text = () => {
  return (
    <div className='mt-4 p-4 md:px-113'>
         <div className="relative">
        <img 
          src={image1} 
          alt="oops" 
          className="hidden lg:block float-right mr-4 mb-2 w-[350px] h-auto "
        />
      <p className='text-left py-4'>
        <span className='text-blue-800 font-semibold'>Teresols Nigeria Limited</span> is an indigenous company serving clients within the oil and gas industries. Since January 4, 1994, we have been duly registered in Nigeria, following applicable laws and ensuring the provision of quality services.
      </p>
      </div>
     

        <p className='text-left py-4'>
          <span className='text-blue-800 font-semibold'>Teresols Nigeria Limited</span> is a wholly Nigerian Contracting Company set up in 1994 to provide services to the Oil and Gas industry with its corporate head-office at Magodo G.R.A in Lagos, Nigeria. The founder, Mr. Temitope Abere, possesses a great deal of experience in the business world, sits atop the board of other very successful companies, and is particularly knowledgeable of the vast Nigerian business environment. He’s brought his wealth of experience and ingenuity into the leadership of the company.
        </p>

      <p className='text-left py-4'>
        The company has established a strategic relationship and alliances with different Original Equipment Manufacturers (OEM) globally to ensure that our products are procured directly from the manufacturers. <span className='text-blue-800 font-semibold'>Teresols Nigeria Limited</span> has distinguished itself from our competitors by being customer-centric, providing quality products at competitive prices with a high level of professionalism from our staff.
      </p>

      <p className='text-left py-4'>
        Our Board of Directors, consisting of indigenous individuals, lead the way in paving the path to success. A united effort to meet and exceed the expectations of our clients through our services is our key to achieving our goals.
      </p>

      <p className='text-left py-4'>
        <strong>Client</strong><br />
        Chevron Nigeria Limited (CNL), Shell Petroleum Development Company (SPDC), Mobil Producing Nigeria Unlimited (MPU), Addax Petroleum Development Nigeria Limited (APDNL), Sterling Oil Exploration & Energy Production Co. Limited
      </p>

      <p className='text-left py-4'>
        <strong>Target Market/Areas</strong><br />
        Oil and Gas Companies, FMCG Companies, Construction Companies, Utilities Companies
      </p>

      <p className='text-left py-4'>
        To learn more about our company and what we can offer you, get in touch with us today!
      </p>
    </div>
  );
}

export default Text;
