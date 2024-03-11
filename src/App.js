import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Extra from "./Components/Extra";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#f0efed]">
      <Navbar />
      <Hero />
      <Card />
      <Extra />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
