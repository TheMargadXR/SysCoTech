import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import down from "../images/down.png";

const Download = () => {
  return (
    <div className="">
      <Navbar />
      <div className="">
      <div className="mt-[-80px] flex items-center justify-center h-screen w-full"
        style={{
          backgroundImage: `url(${down})`,
          backgroundSize: "cover ",
        }}>
        
      </div>
      </div>
      <Footer />

    </div>
  );
};
export default Download;
