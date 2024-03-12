import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-[5%] bg-[#1a2456] text-[#efc2b3] flex justify-center items-center">
      <div className="container  m-20 grid gap-8 text-[14px] text-black-300">
        <div className="">
          <div className="mx-auto mb-8 lg:mb-0 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 w-full justify-center">
            <div className="w-full h-full">
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
                <button className="rounded-full ml-2 bg-[#efc2b3] text-[#333333] py-2 px-4 ">
                  Submit
                </button>
              </div>
              <div className="flex md:w-[75%]">
                <FaFacebook size={30} className="mx-2 " />
                <FaInstagram size={30} className="mx-2 " />
                <FaTwitter size={30} className="mx-2 " />
                <FaYoutube size={30} className="mx-2 " />
              </div>
            </div>
            <div>
              <h1 className="mb-2 font-bold">MONOGRAM</h1>
              <div className="block">
                <p>305 King St. W.</p>
                <p>Suite 502</p>
                <p>Kitchener, ON</p>
                <p>Canada</p>
              </div>
            </div>
            <div>
              <h1 className="mb-2 font-bold">QUICK LINKS</h1>
              <div className="block">
                <p>Home</p>
                <p>How it works</p>
                <p>Shop</p>
                <p>Download</p>
              </div>
            </div>
            <div>
              <h1 className="mb-2 font-bold">HELP</h1>
              <div className="block">
                <p>FAQs</p>
                <p>Support Center</p>
                <p>Shipping and Sales</p>
              </div>
            </div>
            <div>
              <h1 className="mb-2 font-bold">INFORMATION</h1>
              <div className="block">
                <p>About us</p>
                <p>Work with us</p>
                <p>Privacy Policy</p>
                <p>Terms of use </p>
                <p>Terms of sale</p>
                <p>Press Kit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
