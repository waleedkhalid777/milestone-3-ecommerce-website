"use client";
import React, { useEffect, useState } from "react";

const Features = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date().getTime() + 86400000; 

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft("Expired");
        return;
      }

      const hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((distance % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setTimeLeft(`${hours}:${minutes}:${seconds}`);
    };

    const intervalId = setInterval(updateTimer, 1000);
    updateTimer(); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div>
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Our Earbuds?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-10">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Immersive Audio Quality</h3>
            <p>Crystal-clear sound for music, calls, and gaming.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Seamless Connectivity</h3>
            <p>Connect instantly with the latest Bluetooth technology.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Ergonomic Design</h3>
            <p>Perfect fit for all-day comfort.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Long-Lasting Battery</h3>
            <p>Up to 30 hours of listening on a single charge.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
        <p className="text-lg mb-6">Get 20% Off + Free Shipping!</p>
        <div className="text-2xl font-bold">
          Offer ends in:{" "}
          <span id="countdown" aria-live="polite">
            {timeLeft}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Features;
