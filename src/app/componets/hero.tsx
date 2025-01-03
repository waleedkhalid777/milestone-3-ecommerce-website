import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between space-x-8">
        
        <div className="relative w-full md:w-[400px] h-[250px] md:h-[400px] mb-6 md:mb-0">
          <Image
            src="/apple airpods.jpg"
            alt="Airpods"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-3xl lg:text-4xl text-black font-semibold">
          Elevate Your Sound Experience with AirPods
          </h1>
          <p className='text-red-600'>
          the premium nature of the product while emphasizing the audio experience.  It's elegant, to the point, <br /> and designed to attract a customer’s  attention to the key feature: exceptional sound quality.
          </p>
        </div>
      </div>


      
    </div>
  );
};

export default Hero;
