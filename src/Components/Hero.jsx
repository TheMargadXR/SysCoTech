import React from "react";
import backgroundImage from "../images/BG.jpg";

const Hero = () => {
  return (
    <div className="mt-[-80px] h-screen w-full">
      <div
        className="flex items-center justify-center h-screen w-full relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="text-[#efc2b3] relative z-10">
          <div className="max-w-[800px] mt-[-96px] w-full text-center">
            <h1 className="text-5xl font-bold">
              A CONSOLE FOR <br />
              EVERY WORKFLOW
            </h1>
            <p className="mt-4 text-3xl">
              Discover the perfect console for yours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
