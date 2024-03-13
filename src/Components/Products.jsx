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
import CardData from "../Data/Products.json";

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
    <div className="flex items-center justify-center h-full py-32">
      <div className="text-sm md:text-base lg:text-lg xl:text-xl mx-[4%] sm:mx-[12%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:mt-[10%]">
          {CardData.map((data) => (
            <div
              key={data.id}
              className="flex justify-center items-center h-4/6 w-4/6 duration-300"
            >
              <div className="text-sm md:text-base lg:text-lg xl:text-xl">
                <img
                  src={images[data.img]}
                  alt=""
                  className="h-full w-full sm:h-full sm:w-full"
                />
                <div className="flex items-center justify-between">
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
