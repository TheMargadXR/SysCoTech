import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import bg from "../images/blog,img.png";
import blog1 from "../images/blog1.jpeg";
import blog2 from "../images/blog2.webp";
import blog3 from "../images/blog3.png";
import blog4 from "../images/blog3.png";
import blog5 from "../images/blog4.png";
import { MdBrightness1 } from "react-icons/md";
import cardsData from "../Data/Blog.json";
import menuData from "../Data/menu.json";

const images = {
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
};

const Blog = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <div className="mt-[-80px]  relative flex items-center justify-center h-[500px] w-full">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              opacity: "90%",
              filter: "brightness(30%)",
            }}
          />
          <div className="w-100 my-5 mb-5 border-b block text-center text-white brightness-100 tracking-wider ">
            <h1 className="text-4xl font-bold">THE MONOGRAM PRESS</h1>
            <div>
              <p className="mb-[1.2rem] px-6">
                "Become a better creative. Product updates, in-depth articles
                about Monogram and the latest news."
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto justify-center">
          <div className="border-t-2 border-b-2 border-black mt-6">
            <div className="">
              <ul className="flex gap-4 justify-center p-4 ">
                {menuData.map((menus) => (
                  <div className="border-r-2 border-black pb-2 flex">
                    <li className="mr-4 hover:text-black  hover:underline duration-100 ">
                      {menus.name}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div className="container mx-auto md:mx-[120px] p-8 mt-6">
            <div className="grid grid-cols-1  gap-40">
              {cardsData.map((card) => (
                <div key={card.id} className="grid grid-cols-1 md:grid-cols-2 ">
                  <img
                    src={images[card.img]}
                    alt={`Card ${card.id}`}
                    className="w-[570px] h-[440px] object-cover mb-4 border-2"
                  />
                  <div className="text-[#1a2456] ml-4 mr-[60px]">
                    <h1 className="text-[#1a2456] text-[1.75rem] font-semibold ">
                      {card.title}
                    </h1>
                    <h3 className="font-semibold">{card.text}</h3>
                    <p className="text-[1rem] font-light">{card.para}</p>
                    <h1 className="text-[#1a2456] text-[1.75rem] font-semibold">
                      {card.title1}
                    </h1>
                    <h3 className="font-semibold">{card.text1}</h3>
                    <p className="text-[1rem] font-light">{card.para1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
