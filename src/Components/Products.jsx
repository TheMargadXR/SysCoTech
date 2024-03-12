import React from "react";
import Img1 from "../images/co1.png";
import Img2 from "../images/co2.png";
import Img3 from "../images/co3.png";
import Img4 from "../images/co4.png";
import Img5 from "../images/co5.png";
import Img6 from "../images/co6.png";
import Img7 from "../images/co7.png";
import Img8 from "../images/co8.png";
import Img9 from "../images/co9.png";
import Img10 from "../images/co10.png";
import cardData from "../Data/Products.json";

const images = {
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
};

const Products = () => {
  return (
    <div className="flex justify-center items-center py-10 h-full text-[#1a2456]">
      <div className="container mx-[4%] sm:mx-[12%] md:mt-[6%]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {cardData.map((data) => (
            <div
              key={data.id}
              className="flex justify-center items-center p-5 duration-300"
            >
              <div className="card text-sm md:text-base lg:text-lg xl:text-xl">
                <img
                  src={images[data.img]}
                  alt=""
                  className="h-4/6 w-full sm:h-5/6 sm:w-5/6 object-cover mb-4"
                />
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold">{data.title}</h1>
                  <p className="text-base">{data.cost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
