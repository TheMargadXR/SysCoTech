import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import down from "../images/down.png";
import Registration from "./Registeration";

const Download = () => {
  return (
    <div className="">
      <Navbar />


      <div className="mt-[-80px]  relative flex  items-center h-[500px] w-full">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${down})`,
            backgroundSize: "cover",
            opacity: "90%",
            filter: "brightness(80%)",
          }}
        />
        <div className="ml-[160px] text-white brightness-100 tracking-widest float-start ">
          <h1 className="text-4xl font-bold mb-4">MONOGRAM CREATOR</h1>
          <h1 className="text-2xl font-light tracking-widest">SOFTWARE DOWNLOADS</h1>
        </div>
      </div>



      <Registration />
      <Footer />

    </div>
  );
};
export default Download;
