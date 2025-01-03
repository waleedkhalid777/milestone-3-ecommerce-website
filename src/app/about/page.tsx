import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20 lg:px-40 ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-black text-7xl font-extrabold text-center hover:text-blue-600 mb-6 cursor-pointer">About Us</h1>
        <div className="bg-white shadow-lg rounded-lg p-8 ">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to <span className="font-bold text-black">[Pure Podz]</span>, your ultimate destination for premium-quality AirPods and accessories.
            <br />
            <br />
            We’re passionate about delivering cutting-edge audio technology that enhances your lifestyle and keeps you connected in style.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Founded with a vision to combine innovation and convenience, we offer a curated selection of AirPods, cases, chargers, and more—all designed to elevate your listening experience. Whether you’re a music enthusiast, a fitness fanatic, or simply looking to stay ahead of tech trends, we’ve got you covered.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            At <span className="font-bold text-black">[Pure Podz]</span>, we prioritize customer satisfaction above all. From seamless shopping to fast delivery and exceptional after-sales support, we’re committed to making your journey with us as smooth as the sound you love.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Thank you for choosing <span className="font-bold text-black">[Pure podz]</span>. Plug in, power up, and embrace the sound of the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
