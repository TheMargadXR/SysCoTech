import React from "react";
import Img1 from "/Users/bokhbatamartuvshin/StarBucks/src/images/img1.png";
import Img2 from "/Users/bokhbatamartuvshin/StarBucks/src/images/img2.png";
import Img3 from "/Users/bokhbatamartuvshin/StarBucks/src/images/img3.png";
import Img4 from "/Users/bokhbatamartuvshin/StarBucks/src/images/img4.png";
import { FaStar } from "react-icons/fa6";

const CardData = [
  {
    id: 1,
    img: Img1,
    title: "MINI CONSOLE",
    exp: "Ideal for everyday shortcuts. Adaptable to any workflow",
    cost: "$249",
  },
  {
    id: 2,
    img: Img4,
    title: "AUDIO CONSOLE",
    exp: "Ideal for music & audio. Adaptable to any workflow",
    cost: "$449",
  },
  {
    id: 3,
    img: Img3,
    title: "PHOTO CONSOLE",
    exp: "Ideal for Photo & Video. Adaptable to any workflow",
    cost: "$599",
  },
  {
    id: 4,
    img: Img2,
    title: "VIDEO CONSOLE",
    exp: "Ideal for Video & Film. Adaptable to any workflow",
    cost: "$899",
  },
];

const Card = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-[12%] md:mt-[6%]">
        {/* body section */}
        <div className="">
          <div className="grid grid-cols-2 gap-10">
            {/* card section */}
            {CardData.map((data) => (
              <div key={data.id} className="flex justify-center items-center hover:scale-105 duration-300">
                <div className="card text-sm md:text-base lg:text-lg xl:text-xl">
                  <img
                    src={data.img}
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

export default Card;
