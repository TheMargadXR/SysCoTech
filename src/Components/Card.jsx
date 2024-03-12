import React from "react";
import Img1 from "../images/img1.png";
import Img2 from "../images/img2.png";
import Img3 from "../images/img3.png";
import Img4 from "../images/img4.png";
import cardData from "../Data/Card.json";

const images = {
  Img1,
  Img2,
  Img3,
  Img4,
};

const Card = () => {
  return (
    <div className="flex justify-center items-center h-full text-[#1a2456]">
      <div className="container mx-[4%] sm:mx-[12%] md:mt-[6%]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {cardData.map((data) => (
            <div
              key={data.id}
              className="flex justify-center items-center  duration-300"
            >
              <div className="card text-sm md:text-base lg:text-lg xl:text-xl">
                <img
                  src={images[data.img]}
                  alt=""
                  className="h-full w-full object-cover"
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
  );
};

export default Card;
