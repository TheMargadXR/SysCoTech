import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import bg from "../images/blog,img.png";
import blog1 from "../images/blog1.jpeg";
import blog2 from "../images/blog2.webp";
import blog3 from "../images/blog3.png";
import blog4 from "../images/blog3.png";
import blog5 from "../images/blog4.png";
import { MdBrightness1 } from "react-icons/md";

const cardsData = [
    {
        id: 1,
        photo: blog1,
        title: "CELEBRATING A DECADE OF MONOGRAM",
        text: "1 MIN READ",
        para: "A look into Monogram's journey over the years",
        title1: "HOW TO SET UP AND SHARE CREATOR PROFILES FOR YOUR CONSOLE",
        text1: "2 MIN READ",
        para1: "Learn what a creator profile is, what it does, and how you can exchange profiles with other creatives in the Monogram community!",
    },
    {
        id: 2,
        photo: blog2,
        title: "CELEBRATING A DECADE OF MONOGRAM",
        text: "1 MIN READ",
        para: "A look into Monogram's journey over the years",
        title1: "HOW TO SET UP AND SHARE CREATOR PROFILES FOR YOUR CONSOLE",
        text1: "2 MIN READ",
        para1: "Learn what a creator profile is, what it does, and how you can exchange profiles with other creatives in the Monogram community!",

    },
    {
        id: 3,
        photo: blog3,
        title: "CELEBRATING A DECADE OF MONOGRAM",
        text: "1 MIN READ",
        para: "A look into Monogram's journey over the years",
        title1: "HOW TO SET UP AND SHARE CREATOR PROFILES FOR YOUR CONSOLE",
        text1: "2 MIN READ",
        para1: "Learn what a creator profile is, what it does, and how you can exchange profiles with other creatives in the Monogram community!",

    },
    {
        id: 4,
        photo: blog4,
        title: "CELEBRATING A DECADE OF MONOGRAM",
        text: "1 MIN READ",
        para: "A look into Monogram's journey over the years",
        title1: "HOW TO SET UP AND SHARE CREATOR PROFILES FOR YOUR CONSOLE",
        text1: "2 MIN READ",
        para1: "Learn what a creator profile is, what it does, and how you can exchange profiles with other creatives in the Monogram community!",

    },
    {
        id: 5,
        photo: blog5,
        title: "CELEBRATING A DECADE OF MONOGRAM",
        text: "1 MIN READ",
        para: "A look into Monogram's journey over the years",
        title1: "HOW TO SET UP AND SHARE CREATOR PROFILES FOR YOUR CONSOLE",
        text1: "2 MIN READ",
        para1: "Learn what a creator profile is, what it does, and how you can exchange profiles with other creatives in the Monogram community!",

    },
];

const Blog = () => {
    return (
        <div className="">
            <Navbar />
            <div>

                <div className="mt-[-80px]  relative flex items-center justify-center h-[500px] w-full">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: "cover",
                            opacity: "90%",
                            filter: "brightness(30%)",
                        }}
                    />
                    <div className="w-100 my-5 mb-5 border-b block text-center text-white brightness-100 tracking-wider ">
                        <h1 className="text-4xl font-bold">THE MONOGRAM PRESS</h1>
                        <div>
                            <p className="mb-[1.2rem] px-6">"Become a better creative. Product updates, in-depth articles about Monogram and the latest news."</p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto justify-center">
                <div className="border-t-2 border-b-2 border-black mt-6">
                    <div className="">
                        <ul className="flex gap-4 justify-center p-4 ">
                            <div className="border-r-2 border-black pb-2">
                                <li className="mr-4 hover:text-black  hover:underline duration-100 ">AT MONOGRAM</li>
                            </div>
                            <div className="border-r-2 border-black">
                                <li className="mr-4 hover:text-black hover:underline duration-100">PHOTO</li>
                            </div>
                            <div className="border-r-2 border-black pb-2">
                                <li className=" mr-4 hover:text-black hover:underline duration-100">VIDEO</li>
                            </div>
                            <div className="border-r-2 border-black pb-2">
                                <li className="mr-4 hover:text-black hover:underline duration-100">AUDIO</li>
                            </div>
                            <div>
                                <li className="hover:text-black hover:underline duration-100">PRODUCT</li>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="container mx-auto md:mx-[110px] p-8 mt-6">
                    <div className="grid grid-cols-1  gap-4">
                        {cardsData.map((card) => (
                            <div key={card.id} className="grid grid-cols-1 md:grid-cols-2 " >
                                <img
                                    src={card.photo}
                                    alt={`Card ${card.id}`}
                                    className="w-[570px] h-[440px] object-cover mb-4 border-2"
                                />
                                <div className="text-[#1a2456] ml-4 mr-[60px]">
                                    <h1 className="text-[#1a2456] text-[1.75rem] font-semibold ">{card.title}</h1>
                                    <h3 className="font-semibold">{card.text}</h3>
                                    <p className="text-[1rem] font-light">{card.para}</p>
                                    <h1 className="text-[#1a2456] text-[1.75rem] font-semibold">{card.title1}</h1>
                                    <h3 className="font-semibold">{card.text1}</h3>
                                    <p className="text-[1rem] font-light">{card.para1}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
                </div>

                
            <Footer />
        </div>
    );
}

export default Blog;
