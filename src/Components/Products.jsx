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
    <div className="flex justify-center items-center h-screen mt-12 md:mt-6">
      <div className="container mx-[12%] mt-[64%]">
        <div className="mt-[10%]">
          <div className="grid grid-cols-3 gap-10">
            {CardData.map((data) => (
              <div key={data.id} className="flex justify-center items-center">
                <div className="hover:scale-105 duration-300 text-sm md:text-base lg:text-lg xl:text-xl">
                  <img
                    src={images[data.img]}
                    alt=""
                    className="h-full w-full object-cover rounded-md"
                  />
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="font-semibold">{data.title}</h1>
                      <p className="text-base">{data.cost}</p>
                    </div>
                    <p className="text-sm">{data.exp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
