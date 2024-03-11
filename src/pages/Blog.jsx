import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import bg from "../images/blog,img.png";

const Blog = () => {
    return (
        <div className="">
            <Navbar />
            <div>
                <div className="mt-[-80px] flex items-center justify-center h-screen w-full"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: "cover ",
                        opacity: "90%"
                    }}>
                        <div className="w-100 my-5 mb-5 border-b block text-center text-white ">
                        <h1 className=" text-4xl font-bold">THE MONOGRAM PRESS</h1>
                        <div>
                            <p class="p" className="mb-[1.2rem] ">"Become a better creative. Product updates, in-depth articles about Monogram and the latest news."</p>
                        </div>
                        </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;