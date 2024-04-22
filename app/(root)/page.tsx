"use client";
import React, { useEffect, useState } from "react";
import Slider from "../components/ui/swiper/swiper";
import iPhone13ProImage from "../../public/assets/images/Apple iPhone 12.png";
import SamsungGalaxyS21UltraImage from "../../public/assets/images/Samsung Galaxy S21 Ultra.jpeg";
import GooglePixel6ProImage from "../../public/assets/images/woman-surrounded-by-bags-pile.jpg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HomeChart from "../components/ui/chart/HomeChart";

function Home() {
  const [typedText, setTypedText] = useState("");
  const router = useRouter();

  useEffect(() => {
    const textForTyping = "Welcome to TRENDY-TROVE";
    let indexCurrent = 0;
    const typingIntervel = setInterval(() => {
      setTypedText(textForTyping.substring(0, indexCurrent));
      indexCurrent++;
      if (indexCurrent > textForTyping.length) {
        clearInterval(typingIntervel);
      }
    }, 100);
    return () => clearInterval(typingIntervel);
  }, []);

  const handleNavigate = () => {
    router.push("/products");
  };

  return (
    <div>
      <div className="relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image alt="img" src={GooglePixel6ProImage} />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">{typedText}</h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
          <HomeChart />

          <span
            onClick={() => router.push("/products")}
            className="bg-yellow-400 mt-6 text-gray-900 cursor-pointer hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
