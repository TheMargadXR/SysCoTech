import React from "react";
import backgroundImage from "../images/BG.jpg";

const Hero = () => {
  return (
    <div className="mt-[-80px] h-4/6 w-full">
      <div
        className="flex items-center justify-center h-screen w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover ",
        }}
      >
        <div className="text-black">
          <div className="max-w-[800px] mt-[-96px] w-full text-center">
            <h1 className="text-5xl font-bold text-[#efc2b3] items-center">
              A CONSOLE FOR <br></br>EVERY WORKFLOW
            </h1>
            <p className="mt-4 text-[#efc2b3]">
              Discover the perfect console for yours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
