import React from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AsianPaints from "../assets/logos/AsianPaints.svg";
import CritiCare from "../assets/logos/CritiCare.svg";
import Hyatt from "../assets/logos/Hyatt.svg";
import Taj from "../assets/logos/Taj.svg";
import Renaissance from "../assets/logos/Renaissance.svg";
import Ramee from "../assets/logos/Ramee.svg";
import Fortune from "../assets/logos/Fortune.svg";
import RoyalTulip from "../assets/logos/RoyalTulip.svg";
import HolidayInn from "../assets/logos/HolidayInn.svg";
import Kohinoor from "../assets/logos/Kohinoor.svg";
import Meritas from "../assets/logos/Meritas.svg";
import PG from "../assets/logos/P&G.svg";
import Cummins from "../assets/logos/Cummins.svg";
import Haldiram from "../assets/logos/Haldiram.svg";
import HUL from "../assets/logos/HUL.svg";
import Marriott from "../assets/logos/Marriott.svg";
import Trident from "../assets/logos/Trident.svg";


const companies = [
    { name: "Asian Paints", logo: AsianPaints },
    { name: "CritiCare Asia", logo: CritiCare },
    { name: "Hyatt", logo: Hyatt },
    { name: "Taj", logo: Taj },
    { name: "Renaissance", logo: Renaissance },
    { name: "Ramee ", logo: Ramee },
    { name: "Fortune ", logo: Fortune },
    { name: "RoyalTulip ", logo: RoyalTulip },
    { name: "HolidayInn ", logo: HolidayInn },
    { name: "Kohinoor ", logo: Kohinoor },
    { name: "Meritas ", logo: Meritas },
    { name: "P&G ", logo: PG },
    { name: "Cummins ", logo: Cummins },
    { name: "Haldiram ", logo: Haldiram },
    { name: "HUL ", logo: HUL },
    { name: "Marriott ", logo: Marriott },
    { name: "Trident ", logo: Trident },
    
  ];


   
  export function Companies() {
    const [shuffledCompanies, setShuffledCompanies] = useState([]);

    useEffect(() => {
        const shuffled = [...companies].sort(() => Math.random() - 0.56);
        setShuffledCompanies(shuffled);
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
    return (
        <div className="container mx-0 px-4 md:px-8">
          <div className="relative mt-6">
            <Slider {...settings}>
              {shuffledCompanies.map((company, idx) => (
                <div key={idx}>
                  <img
                    src={company.logo}
                    className="h-1/2 w-1/2 px-2 dark:brightness-0 dark:invert"
                    alt={company.name}
                  />
                </div>
              ))}
            </Slider>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
          </div>
        </div>
    );
  }