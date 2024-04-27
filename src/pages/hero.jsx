import React from "react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Head from "../components/navbar";
import Slide from "../components/Carousel";

const HeroPage = () => {
  return (
    <div>
      <Head />
      <div className="m-4 mt-16 text-black py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #002949, #48BDE8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ROCKSHELL CORP
            </span>
          </h1>

          <p className="mt-6  text-gray-400 text-lg">
            Rockshell Corp is a leading manufacturer for Innovative Heating,
            Cooling and Effluent/Chemical recovery solutions in India. Rockshell
            continues to innovate & strives to save operational cost for its
            customers. It also endeavours to create a cleaner environment across
            the globe through its products and services.
          </p>
        </div>
        <div className="m-6 flex justify-center">
          <Button
            gradientMonochrome="info"
            className=" w-32 h-18 rounded-lg flex items-center justify-center mr-2"
          >
            Contact Us
          </Button>
          <Button
            outline
            gradientMonochrome="info"
            className=" w-32 h-18  rounded-lg flex items-center justify-center ml-2"
          >
            Get Solution
          </Button>
        </div>
      </div>
      <div className="m-24 -mt-24">
        <Slide/>
      </div>
    </div>
  );
};

export default HeroPage;
