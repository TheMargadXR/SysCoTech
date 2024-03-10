import React from "react";
import Img1 from "/Users/bokhbatamartuvshin/StarBucks/src/images/co1.png";
import Img2 from "/Users/bokhbatamartuvshin/StarBucks/src/images/co2.png";
import Img3 from "/Users/bokhbatamartuvshin/StarBucks/src/images/co3.png";
import Img4 from "/Users/bokhbatamartuvshin/StarBucks/src/images/co4.png";
import Img5 from "/Users/bokhbatamartuvshin/StarBucks/src/images/co5.png";
import Img6 from "/Users/bokhbatamartuvshin/StarBucks/src/images/co6.png";
import Img7 from "/Users/bokhbatamartuvshin/StarBucks/src/images/co7.png";
import Img8 from "/Users/bokhbatamartuvshin/StarBucks/src/images/co8.png";
import Img9 from "/Users/bokhbatamartuvshin/StarBucks/src/images/co9.png";
import Img10 from "/Users/bokhbatamartuvshin/StarBucks/src/images/co10.png";

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
    img: Img2,
    title: "AUDIO CONSOLE",
    exp: "Ideal for everyday shortcuts. Adaptable to any workflow",
    cost: "$249",
  },
  {
    id: 3,
    img: Img3,
    title: "MINI CONSOLE",
    exp: "Ideal for everyday shortcuts. Adaptable to any workflow",
    cost: "$249",
  },
  {
    id: 4,
    img: Img4,
    title: "MINI CONSOLE",
    exp: "Ideal for everyday shortcuts. Adaptable to any workflow",
    cost: "$249",
  },
  {
    id: 5,
    img: Img5,
    title: "MINI CONSOLE",
    exp: "Ideal for everyday shortcuts. Adaptable to any workflow",
    cost: "$249",
  },
  {
    id: 6,
    img: Img6,
    title: "MINI CONSOLE",
    exp: "Ideal for everyday shortcuts. Adaptable to any workflow",
    cost: "$249",
  },
  {
    id: 7,
    img: Img7,
    title: "MINI CONSOLE",
    exp: "Ideal for everyday shortcuts. Adaptable to any workflow",
    cost: "$249",
  },
  {
    id: 8,
    img: Img8,
    title: "MINI CONSOLE",
    exp: "Ideal for everyday shortcuts. Adaptable to any workflow",
    cost: "$249",
  },
  {
    id: 9,
    img: Img9,
    title: "MINI CONSOLE",
    exp: "Ideal for everyday shortcuts. Adaptable to any workflow",
    cost: "$249",
  },
  {
    id: 10,
    img: Img10,
    title: "MINI CONSOLE",
    exp: "Ideal for everyday shortcuts. Adaptable to any workflow",
    cost: "$249",
  },
];
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
                    src={data.img}
                    alt=""
                    className="h-full w-full object-cover rounded-md"
                  />
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="font-semibold">{data.title}</h1>
                      <p className="text-base" >{data.cost}</p>
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