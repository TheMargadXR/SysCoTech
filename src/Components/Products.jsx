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
    <div className="">
      <div className="ml-[24%] md:ml-[14%] lg:ml-[12%] flex items-center justify-center">
        <div className="mt-[16%] md:mt-[10%] lg:mt-[10%]  text-sm md:text-base lg:text-lg xl:text-xl">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {CardData.map((data) => (
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
    </div>
  );
};

export default Products;
