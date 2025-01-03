"use client";
import React from "react";
import { FaFacebook, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const form = event.currentTarget;
    const formData = new FormData(form);

    
    formData.append("access_key", "b325d847-70fc-4189-98ad-2d958fe2549d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.error("Error:", data);
        setResult(data.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("Submission failed. Please try again.");
    }
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-gray-200 px-4 sm:px-8">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 bg-slate-600 w-full max-w-5xl p-6 sm:p-8 rounded-xl shadow-lg text-white">
        
        <div className="flex flex-col space-y-6 md:space-y-10 w-full md:w-1/2">
          <div>
            <h1 className="font-bold text-3xl md:text-4xl tracking-wide">
              Contact Us
            </h1>
            <p className="pt-2 text-cyan-100 text-sm md:text-base">
              Reach out to us for any inquiries or assistance. We are here to
              help!
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhoneAlt aria-label="Phone Icon" />
            <span>+(123) 456-789</span>
          </div>

          <div className="flex items-center space-x-4">
            <MdOutlineMailOutline />
            <span>ecommerce.xyz@gmail.com</span>
          </div>

          <div className="flex items-center space-x-4">
            <FaLocationDot />
            <span>Giaic IT Course, Governor House, Karachi</span>
          </div>

          <div className="flex space-x-4 text-2xl">
            <FaFacebook className="hover:text-blue-500" />
            <IoLogoInstagram className="hover:text-blue-500" />
            <FaTwitter className="hover:text-blue-500" />
            <FaLinkedin className="hover:text-blue-500" />
          </div>
        </div>

        
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-600 w-full md:w-1/2">
          <form onSubmit={onSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="text-sm">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full ring-1 ring-gray-300 px-2 py-2 outline-none focus:ring-2 focus:ring-teal-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full ring-1 ring-gray-300 px-2 py-2 outline-none focus:ring-2 focus:ring-teal-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                className="w-full ring-1 ring-gray-300 px-2 py-2 outline-none focus:ring-2 focus:ring-teal-300 rounded-md"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-block self-end bg-red-800 text-white rounded-lg font-bold px-6 py-2"
            >
              Send Message
            </button>
          </form>
          {result && <p className="mt-4 text-center text-sm">{result}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
