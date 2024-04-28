import { Button } from "flowbite-react";
import React, { useState } from "react";
import img from "../assets/images/1.jpg";

function Catalog() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleButtonClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div>
      <div className="m-6 flex text-blue-400 justify-around gap-2">
        {" "}
        <Button
          pill
          outline
          gradientMonochrome="info"
          className=" w-full h-full  flex items-center justify-center "
          onClick={() => handleButtonClick(0)}
        >
          HEAT PUMP
        </Button>
        <Button
          pill
          outline
          gradientMonochrome="info"
          className=" w-full  h-full flex items-center justify-center "
          onClick={() => handleButtonClick(1)}
        >
          EVAPORATORS
        </Button>
        <Button
          pill
          outline
          gradientMonochrome="info"
          className=" w-full h-full  flex items-center  justify-center "
          onClick={() => handleButtonClick(2)}
        >
          SPECIALIZED SERVICES
        </Button>
      </div>

      <div style={{ display: activeSlide === 0 ? "block" : "none" }}>
        <div className="flex items-center">
          <img
            src={img}
            alt="..."
            className="m-2  w-6/12 rounded-xl shadow-xl object-cover"
          />
          <span className="flex flex-col m-2 text-left font-bold">
            Heat Pump Based Vacuum/ Atmospheric Evaporators
            <span className="text-left text-gray-400 mt-2 font-normal">
              Rockshell Corp’s flagship product Heat pump based evaporators are
              truly innovation pioneered to evaporate different kind of process
              liquids and waste water etc in most energy efficient and
              eco-friendly manner.
            </span>
          </span>
        </div>
      </div>
      <div style={{ display: activeSlide === 1 ? "block" : "none" }}>
        <div className="flex items-center">
          <img
            src={img}
            alt="..."
            className="m-2  w-6/12 rounded-xl shadow-xl object-cover"
          />
          <span className="flex flex-col m-2 text-left font-bold">
            Heat Pump Based Vacuum
            <span className="text-left text-gray-400 mt-2 font-normal">
              Rockshell Corp’s flagship product Heat pump based evaporators are
              truly innovation pioneered to evaporate different kind of process
              liquids and waste water etc in most energy efficient and
              eco-friendly manner.
            </span>
          </span>
        </div>
      </div>
      <div style={{ display: activeSlide === 2 ? "block" : "none" }}>
        <div className="flex items-center">
          <img
            src={img}
            alt="..."
            className="m-2  w-6/12 rounded-xl shadow-xl object-cover"
          />
          <span className="flex flex-col m-2 text-left font-bold">
            Heat Pump 
            <span className="text-left text-gray-400 mt-2 font-normal">
              Rockshell Corp’s flagship product Heat pump based evaporators are
              truly innovation pioneered to evaporate different kind of process
              liquids and waste water etc in most energy efficient and
              eco-friendly manner.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
