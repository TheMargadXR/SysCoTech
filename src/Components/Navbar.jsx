import React, { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { PiRectangleThin } from "react-icons/pi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";




const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="sticky top-4 z-40 ">
      <div className="flex justify-between items-center max-w-full m-4 px-4 h-12 text-[#ec9b82] bg-[#1a2456]  ">
        <div className="flex items-center"><div><PiRectangleThin size={30} /></div><h1 className="text-[#ff8b68] flex">MONOGRAM </h1></div>
        <ul className="hidden md:flex items-center text-xs">
          <li className="hover:text-[#fe7a52] hover:scale-110 duration-100 p-4">HOW IT WORKS</li>
          <li className="p-4 hover:text-[#fe7a52] hover:scale-110 duration-100">WORKFLOWS</li>
          <li className="p-4 hover:text-[#fe7a52] hover:scale-110 duration-100">DOWNLOAD</li>
          <li className="p-4 hover:text-[#fe7a52] hover:scale-110 duration-100">BLOG</li>
          <li className="p-4 hover:text-[#fe7a52] hover:scale-110 duration-100">SUPPORT</li>
          <li className="p-4 hover:text-[#fe7a52] hover:scale-110 duration-100">SHOP</li>
          <li className="mr-[-12px]"><div><IoBagOutline size={20} /> </div></li>
          <li className="p-4 flex hover:text-[#fe7a52]">USD <MdArrowDropDown   /></li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}  />}
        </div>

      </div>
      <div className="block md:hidden ">
        
        <div className={!nav ? 'fixed h-full left-0 top-0 w-[50%] text-[#c4745c] bg-[#1a2456] ease-in-out duration-500' : 'fixed left-[-100%] hidden md:flex '}>
          <ul className="p-4 items-center">
            <div className="flex items-center ">
              <li className="flex text-2xl items-center m-4 "><PiRectangleThin size={40} className="mr-2 ml-2" />Monogram </li>
              <div onClick={handleNav} className="ml-4">
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
              </div>
            </div>

            <li className="p-4 border-b border-[#4052ac]">HOW IT WORKS</li>
            <li className="p-4 border-b border-[#4052ac]">WORKFLOWS</li>
            <li className="p-4 border-b border-[#4052ac] ml-10">AUDIO CONSOLE</li>
            <li className="p-4 border-b border-[#4052ac] ml-10">PHOTO CONSOLE</li>
            <li className="p-4 border-b border-[#4052ac] ml-10">VIDEO CONSOLE</li>
            <li className="p-4 border-b border-[#4052ac] ml-10">MINI CONSOLE</li>
            <li className="p-4 border-b border-[#4052ac]">DOWNLOAD</li>
            <li className="p-4 border-b border-[#4052ac]">BLOG</li>
            <li className="p-4 border-b border-[#4052ac]">SUPPPORT</li>
            <li className="p-4 border-b border-[#4052ac]">SHOP</li>
          </ul>
        </div>

      </div>
     

    </div>


  )
}
export default Navbar