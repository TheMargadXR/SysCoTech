// Footer.js
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mt-[5%] bg-[#1a2456] text-[#efc2b3]">
      <div className="container mx-auto py-16 grid gap-8 text-[14px] text-black-300">
        <div className=" mx-auto mb-8 lg:mb-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="">
            <h1 className="mb-2 font-bold">MONOGRAM</h1>
            <div className="block">
              <p className="hover:underline">305 King St. W.</p>
              <p className="hover:underline">Suite 502</p>
              <p className="hover:underline">Kitchener, ON</p>
              <p className="hover:underline">Canada</p>
            </div>
          </div>
          <div>
            <h1 className="mb-2 font-bold">QUICK LINKS</h1>
            <div className="block">
              <p className="hover:underline">Home</p>
              <p className="hover:underline">How it works</p>
              <p className="hover:underline">Shop</p>
              <p className="hover:underline">Download</p>
            </div>
          </div>
          <div>
            <h1 className="mb-2 font-bold">HELP</h1>
            <div className="block">
              <p className="hover:underline">FAQs</p>
              <p className="hover:underline">Support Center</p>
              <p className="hover:underline">Shipping and Sales</p>
            </div>
          </div>
          <div>
            <h1 className="mb-2 font-bold">INFORMATION</h1>
            <div className="block">
              <p className="hover:underline">About us</p>
              <p className="hover:underline">Work with us</p>
              <p className="hover:underline">Privacy Policy</p>
              <p className="hover:underline">Terms of use </p>
              <p className="hover:underline">Terms of sale</p>
              <p className="hover:underline">Press Kit</p>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <h1 className="mb-2 flex font-bold">SUBSCRIBE TO MONOGRAM</h1>
            <p>
              Master productivity with Creative Console and get all the latest
              Monogram news.
            </p>
            <div className="flex my-4">
              <input
                placeholder="Email address"
                className="w-full md:w-auto border rounded py-2 px-3 text-gray-700 focus:shadow-outline"
                id="username"
                type="text"
              />
              <button className="rounded-[14px] ml-2 bg-[#ff8b68] text-black py-2 px-4 hover:bg-[#ee6338] hover:scale-105">
                Submit
              </button>
            </div>
            <div className="flex md:w-[75%]">
              <FaFacebookSquare size={30} className="mx-2 hover:scale-105" />
              <FaInstagramSquare size={30} className="mx-2 hover:scale-105" />
              <FaTwitterSquare size={30} className="mx-2 hover:scale-105" />
              <FaYoutubeSquare size={30} className="mx-2 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
