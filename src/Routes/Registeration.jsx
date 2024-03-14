import React from "react";
import Apple from "../images/appleLog.png";
import windows from "../images/windows.png";

const Registration = () => {
  return (
    <div className="mx-4 md:mx-[164px] my-8 block md:p-1 md:mb-0 px-4">
      <div className="border-t-2 border-b-2 border-[#1a2456]">
        <div className="">
          <ul className="flex gap-4 justify-center items-center p-3 ">
            <div className="border-r-2 border-[#1a2456] ">
              <li className="mr-4 text-[#1a2456] font-bold  duration-100 ">
                MONOGRAM CREATOR
              </li>
            </div>
            <div className="border-r-2 border-[#1a2456]">
              <li className="mr-4 text-[#1a2456] duration-100">CREATOR BETA</li>
            </div>
            <div>
              <li className="text-[#1a2456] cursor duration-100">
                CREATOR ALPHA
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="w-full bg-[#efc2b3] my-8 md:h-[500px] py-[5em] ">
        <div className="flex justify-center text-center">
          <h1 className="text-[#1a2456] font-bold text-3xl tracking-wider text-[2rem]">
            MONOGRAM CREATOR
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="mx-auto max-w-[35em] text-center text-[#1a2456] px-4">
            Want to try the latest features and help improve app performance?
            Sign up for the Monogram Creator Beta program here.
          </p>
        </div>
        <div className="justify-between py-4 max-w-full md:max-w-[40em] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="flex py-0 text-center mb-4 md:mb-0">
            <div className="grid grid-cols-1 justify-center mx-auto">
              <p className="mb-[1rem] mt-0 text-center">
                <img
                  src={Apple}
                  alt=""
                  className="h-[5em] mb-[1em] align-middle mx-auto"
                />
                MacOS 12+
              </p>
              <p className="mb-[1.2rem] mt-0 block text-center">
                <button className="bg-[#1a2456]  hover:bg-black duration-100 text-white font-bold py-2 px-4 rounded-full">
                  MAC DOWNLOAD
                </button>
              </p>
            </div>
          </div>
          <div className="flex py-0 text-center mb-4 md:mb-0">
            <div className="grid grid-cols-1 mx-auto">
              <p className="mb-[1rem] mt-0 text-center">
                <img
                  src={windows}
                  alt=""
                  className="h-[5em] mb-[1em] align-middle mx-auto"
                />
                Windows 10, 64 bit
              </p>
              <p className="mb-[1.2rem] mt-0 text-center">
                <button className="bg-[#1a2456]  hover:bg-black duration-100 text-white font-bold py-2 px-4 rounded-full">
                  WINDOWS DOWNLOAD
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-2 mt-[-40px] md:mt-0">
          <p className="underline font-thin hover:text-[black] duration-150">
            Release Notes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
