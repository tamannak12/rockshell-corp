import React, { useRef } from "react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Head from "../components/navbar";
import Slide from "../components/Carousel";
import Catalog from "./Catalog";
import About from "./About";
import { Down } from "../components/footer";
import MapEmbed from "../components/Map";
import { Proof } from "./proof";

const HeroPage = () => {
  const catalogRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div>
      <Head catalogRef={catalogRef} aboutRef={aboutRef} />
      <div className="m-4 mt-16 text-black py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl text-center font-bold">
            Welcome to{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(to right, #002949, #48BDE8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-center"
            >
              ROCKSHELL CORP
            </span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            Rockshell Corp is a leading manufacturer for Innovative Heating,
            Cooling and Effluent/Chemical recovery solutions in India. Rockshell
            continues to innovate & strives to save operational cost for its
            customers. It also endeavours to create a cleaner environment across
            the globe through its products and services.
          </p>
        </div>
        {/* <div className="m-6 flex justify-center">
          <Button
            gradientMonochrome="info"
            className="w-32 h-18 rounded-lg flex items-center justify-center mr-2"
          >
            Contact Us
          </Button>
          <Button
            outline
            gradientMonochrome="info"
            className="w-32 h-18 rounded-lg flex items-center justify-center ml-2"
          >
            Get Solution
          </Button>
        </div> */}
      </div>
      <div className="m-12 -mt-14">
        <Slide />
      </div>
      <div className="m-12 mt-28" ref={catalogRef}>
        <Catalog />
      </div>
      <div className="m-12 mt-28" ref={aboutRef}>
        <About />
      </div>
      <div className="m-12 mt-4">
        <Proof />
      </div>
      <div className="m-12 mt-28">
        <Down />
      </div>
    </div>
  );
};

export default HeroPage;
