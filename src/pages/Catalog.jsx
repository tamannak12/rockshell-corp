import { Button } from "flowbite-react";
import React, { useState } from "react";
import img from "../assets/images/heatpump.jpeg";
import img1 from "../assets/images/evaporators.jpeg";
import img2 from "../assets/images/service.jpeg";

function Catalog() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleButtonClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="m-6">
      <div className="flex flex-wrap lg:flex-row justify-around gap-2">
        <Button
          pill
          outline
          gradientMonochrome="info"
          className={`w-full sm:w-auto lg:w-[400px]`}
          onClick={() => handleButtonClick(0)}
        >
          HEAT PUMP
        </Button>
        <Button
          pill
          outline
          gradientMonochrome="info"
          className={`w-full sm:w-auto lg:w-[400px]`}
          onClick={() => handleButtonClick(1)}
        >
          EVAPORATORS
        </Button>
        <Button
          pill
          outline
          gradientMonochrome="info"
          className={`w-full sm:w-auto lg:w-[400px]`}
          onClick={() => handleButtonClick(2)}
        >
          SPECIALIZED SERVICES
        </Button>
      </div>

      <div style={{ display: activeSlide === 0 ? "block" : "none" }}>
        <div className="flex flex-col sm:flex-row items-center mt-6">
          <img
            src={img}
            alt="..."
            className="m-2 w-full sm:w-6/12 rounded-xl shadow-xl object-cover"
          />
          <span className="flex flex-col m-2 text-left font-bold">
            Heat Pump Based Vacuum
            <span className="text-justify text-gray-400 mt-2 font-normal">
              Rockshell Corp's Heat Pumps are meticulously engineered to
              efficiently heat a wide range of substances, including alkaline
              and acidic chemicals, using the most energy-efficient methods
              available. Our heat pumps incorporate specially developed,
              in-house heat exchangers designed for extended durability and
              consistent performance. These heat exchangers are crafted with
              advanced materials and technologies to withstand harsh chemical
              environments, ensuring they maintain optimal function over long
              periods. This innovation not only enhances the longevity of our
              products but also significantly reduces operational costs for our
              clients, offering a sustainable and economical solution for
              various chemical processing needs. In addition to their robust
              design, Rockshell Corp's Heat Pumps are built to adhere to the
              highest standards of safety and environmental responsibility. Our
              cutting-edge technology is geared towards minimizing energy
              consumption while maximizing output, aligning with our commitment
              to creating environmentally friendly solutions. By optimizing the
              heat transfer process, our pumps achieve superior thermal
              efficiency, leading to lower energy bills and a reduced carbon
              footprint. Rockshell Corp continues to innovate within the
              industry, striving to provide the most reliable and efficient
              heating solutions on the market. Our dedicated team of experts
              brings together years of experience and specialized knowledge,
              ensuring that each product meets the rigorous demands of
              industrial applications. Whether it's for heating corrosive
              chemicals or other challenging substances, Rockshell Corp's Heat
              Pumps offer unparalleled performance and reliability, setting a
              new benchmark in the industry. Through continuous research and
              development, we aim to support our customers in achieving their
              operational goals while promoting a cleaner, more sustainable
              environment.
            </span>
          </span>
        </div>
      </div>
      <div style={{ display: activeSlide === 1 ? "block" : "none" }}>
        <div className="flex flex-col sm:flex-row items-center mt-6">
          <img
            src={img1}
            alt="..."
            className="m-2 w-full sm:w-6/12 rounded-xl shadow-xl object-cover"
          />
          <span className="flex flex-col m-2 text-left font-bold">
            Atmospheric Evaporators
            <span className="text-left text-gray-400 mt-2 font-normal">
              Rockshell Corp’s flagship product, the Heat Pump-based Evaporator,
              represents a groundbreaking innovation designed to evaporate
              various process liquids and wastewater in the most
              energy-efficient and eco-friendly manner. These evaporators
              utilize advanced heat pump technology to significantly reduce
              energy consumption compared to traditional evaporation methods. By
              leveraging the principles of heat transfer, our evaporators
              recycle energy within the system, ensuring that the maximum amount
              of heat is reused, thereby minimizing energy waste and operational
              costs. The core of our Heat Pump-based Evaporators is a specially
              engineered heat exchange system developed in-house by our team of
              experts. This system is built to handle a wide range of liquids,
              including those with high levels of impurities and contaminants,
              without compromising on performance or efficiency. The robustness
              and versatility of our evaporators make them ideal for industries
              dealing with complex wastewater and process liquid management
              challenges. In addition to their energy efficiency, our
              evaporators are designed with sustainability in mind. They help
              reduce the environmental impact of industrial processes by
              lowering greenhouse gas emissions and decreasing the volume of
              waste that needs to be treated or disposed of. This aligns with
              Rockshell Corp's commitment to providing eco-friendly solutions
              that not only meet but exceed global environmental standards. Our
              Heat Pump-based Evaporators are also engineered for durability and
              long-term reliability. The use of high-quality materials and
              cutting-edge manufacturing techniques ensures that these
              evaporators can withstand the harsh conditions often encountered
              in industrial settings. This durability translates to lower
              maintenance requirements and longer service life, offering our
              customers a cost-effective solution over the long term. Rockshell
              Corp’s dedication to innovation is evident in the continuous
              improvement and development of our products. Our Heat Pump-based
              Evaporators are the result of extensive research and development,
              incorporating the latest advancements in heat pump technology and
              materials science. By choosing Rockshell Corp’s evaporators,
              industries can achieve greater efficiency, reduce their
              environmental footprint, and enjoy the benefits of reliable,
              long-lasting equipment designed to meet the challenges of modern
              wastewater and liquid processing applications.
            </span>
          </span>
        </div>
      </div>
      <div style={{ display: activeSlide === 2 ? "block" : "none" }}>
        <div className="flex flex-col sm:flex-row items-center mt-6">
          <img
            src={img2}
            alt="..."
            className="m-2 w-full sm:w-6/12 rounded-xl shadow-xl object-cover"
          />
          <span className="flex flex-col m-2 text-left font-bold">
          HVAC systems
            <span className="text-left text-gray-400 mt-2 font-normal">
              Rockshell Corp offers comprehensive turnkey HVAC Annual
              Maintenance Contracts (AMC) for both high side and low side
              systems. Our services are designed to ensure the optimal
              performance and longevity of your HVAC systems. With a strong
              post-sale staff and a team of skilled experts, we are equipped to
              handle all maintenance and service needs with efficiency and
              precision. Our team is trained to use the latest modern tools and
              technologies, ensuring that every aspect of your HVAC system is
              meticulously maintained. We understand that preventive maintenance
              is crucial for avoiding unexpected breakdowns and extending the
              lifespan of your equipment. Therefore, our AMC includes regular
              inspections, routine maintenance tasks, and thorough system
              evaluations to identify and address potential issues before they
              escalate. A key component of our maintenance package is our
              commitment to providing a quick service response. We recognize
              that downtime can be costly, and our team is dedicated to
              minimizing any disruption to your operations. Our responsive
              service ensures that any issues are promptly addressed, keeping
              your HVAC systems running smoothly and efficiently. Rockshell
              Corp's AMC also emphasizes energy efficiency and cost savings.
              Through regular maintenance, we optimize the performance of your
              HVAC systems, helping to reduce energy consumption and operational
              costs. Our expertise in both high side and low side HVAC systems
              ensures that we can provide specialized care tailored to the
              specific needs of your equipment. In addition to technical
              excellence, our team is committed to delivering exceptional
              customer service. We build strong relationships with our clients,
              ensuring open communication and a thorough understanding of their
              unique requirements. By choosing Rockshell Corp for your HVAC
              Annual Maintenance Contract, you can be confident that your
              systems are in capable hands, backed by a team that prioritizes
              reliability, efficiency, and customer satisfaction. In summary,
              Rockshell Corp's turnkey HVAC Annual Maintenance Contracts offer a
              comprehensive solution for maintaining and servicing high side and
              low side HVAC systems. With a focus on preventive maintenance,
              quick response times, energy efficiency, and exceptional customer
              service, we ensure that your HVAC systems perform at their best,
              year-round.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
