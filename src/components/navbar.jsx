import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import img from "../assets/images/Rockshell.svg";
import { HiOutlineArrowRight } from "react-icons/hi";

export function Head() {
  return (
    <Navbar className="border border-gray-300 shadow-lg rounded-full p-4 m-2" fluid rounded>
      <NavbarBrand  href="/">
        <img src={img} className=" h-14 " alt="Rockshell Logo" />
        <div className="flex flex-col items-left">
        <span className="  self-center whitespace-nowrap  text-xl font-bold dark:text-white">ROCKSHELL</span>
  <span className="text-gray-700 dark:text-gray-400 -mt-2">CORP.</span></div>
      </NavbarBrand>
      <NavbarCollapse className="m-2 flex justify-between gap-1">
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Heat Pump Solutions</NavbarLink>
        <NavbarLink href="#">Evaporators</NavbarLink>
        <NavbarLink href="#">HVAC Turnkey Maintenance</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
      <div className="flex md:order-2">
      <Button pill gradientMonochrome="info" className="h-14 flex items-center justify-center">Get a Quote
      <HiOutlineArrowRight className=" ml-2 h-6 w-6" /></Button>
        <NavbarToggle />
      </div>
    </Navbar>
  );
}

export default Head;