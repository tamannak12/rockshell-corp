import { Carousel } from "flowbite-react";
import img from "../assets/images/1.jpg";

function Slide() {
  return (
    <div
      style={{
        height: "712px",
        "@media (min-width: 640px)": { height: "200px" },
      }}
    >
      <Carousel
        className="rounded-2xl shadow-2xl shadow-blue-300"
        leftControl
        rightControl
      >
        <img src={img} alt="..." className="w-full h-full object-cover" />
        <img src={img} alt="..." className="w-full h-full object-cover" />
        <img src={img} alt="..." className="w-full h-full object-cover" />
        <img src={img} alt="..." className="w-full h-full object-cover" />
        <img src={img} alt="..." className="w-full h-full object-cover" />
      </Carousel>
    </div>
  );
}

export default Slide;
