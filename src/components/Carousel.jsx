import { Carousel } from "flowbite-react";
import img from "../assets/images/1.jpg";
import img2 from "../assets/images/c1.jpg";
import img3 from "../assets/images/c3.jpg";
import img4 from "../assets/images/c2.jpg";
import img5 from "../assets/images/c4.jpg";

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
        <img src={img} alt="..." className="w-full h-full object-fit" />
        <img src={img5} alt="..." className="w-full h-full object-fit" />
        <img src={img3} alt="..." className="w-full h-full object-fit" />
        <img src={img4} alt="..." className="w-full h-full object-fit" />
        <img src={img2} alt="..." className="w-full h-full object-fit" />
      </Carousel>
    </div>
  );
}

export default Slide;
