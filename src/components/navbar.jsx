import React, { useState, useEffect } from 'react';
import { Button, Navbar, NavbarBrand } from 'flowbite-react';
import img from '../assets/images/Rockshell.svg';
import { HiOutlineArrowRight, HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const NavbarLink = ({ to, onClick, children, className }) => (
  <a
    href={to}
    onClick={onClick}
    className={`block ${className}`}
  >
    {children}
  </a>
);

export function Head({ catalogRef, aboutRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact') {
      setActiveLink('Contact');
    } else {
      setActiveLink('Home');
    }
  }, [location.pathname]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link, ref) => {
    setActiveLink(link);
    setIsOpen(false); // Close the navbar on link click in mobile view
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar className="border border-gray-300 shadow-lg rounded-full p-4 m-2" fluid>
        <NavbarBrand href="/">
          <img src={img} className="h-14" alt="Rockshell Logo" />
          <div className="flex flex-col ml-2">
            <span className="text-xl font-bold dark:text-white">ROCKSHELL</span>
            <span className="text-gray-700 dark:text-gray-400 -mt-1">CORP.</span>
          </div>
        </NavbarBrand>
        <div className="flex items-center md:order-2">
          <Link to="/contact">
            <Button
              pill
              gradientMonochrome="info"
              className="h-14 flex items-center justify-center mr-2 hidden lg:flex"
            >
              Get a Quote
              <HiOutlineArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 lg:hidden"
            onClick={toggleNavbar}
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
        <div className={`hidden lg:flex lg:items-center lg:w-auto`}>
          <ul className="flex flex-col lg:flex-row lg:justify-between gap-6 mt-2 lg:mt-0 list-none p-0">
            <li>
              <NavbarLink
                to="/"
                onClick={() => handleLinkClick('Home', null)}
                className={`py-2 px-4 ${activeLink === 'Home' ? 'text-blue-500 font-bold' : 'text-gray-700'} lg:text-gray-900 lg:dark:text-white`}
              >
                Home
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                to="#"
                onClick={() => handleLinkClick('About', aboutRef)}
                className={`py-2 px-4 ${activeLink === 'About' ? 'text-blue-500 font-bold' : 'text-gray-700'} lg:text-gray-900 lg:dark:text-white`}
              >
                About
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                to="#"
                onClick={() => handleLinkClick('Services', catalogRef)}
                className={`py-2 px-4 ${activeLink === 'Services' ? 'text-blue-500 font-bold' : 'text-gray-700'} lg:text-gray-900 lg:dark:text-white`}
              >
                Services
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                to="/contact"
                onClick={() => handleLinkClick('Contact', null)}
                className={`py-2 px-4 ${activeLink === 'Contact' ? 'text-blue-500 font-bold' : 'text-gray-700'} lg:text-gray-900 lg:dark:text-white`}
              >
                Contact
              </NavbarLink>
            </li>
          </ul>
        </div>
      </Navbar>
      {isOpen && (
        <div className="lg:hidden border border-gray-300 shadow-lg p-4 m-2">
          <ul className="flex flex-col gap-2 list-none p-0">
            <li>
              <NavbarLink
                to="#"
                onClick={() => handleLinkClick('Home', null)}
                className={`py-2 px-4 ${activeLink === 'Home' ? 'text-blue-500 font-bold' : 'text-gray-700'} lg:text-gray-900 lg:dark:text-white`}
              >
                Home
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                to="#"
                onClick={() => handleLinkClick('About', aboutRef)}
                className={`py-2 px-4 ${activeLink === 'About' ? 'text-blue-500 font-bold' : 'text-gray-700'} lg:text-gray-900 lg:dark:text-white`}
              >
                About
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                to="#"
                onClick={() => handleLinkClick('Services', catalogRef)}
                className={`py-2 px-4 ${activeLink === 'Services' ? 'text-blue-500 font-bold' : 'text-gray-700'} lg:text-gray-900 lg:dark:text-white`}
              >
                Services
              </NavbarLink>
            </li>
            <li>
              <NavbarLink
                to="/contact"
                onClick={() => handleLinkClick('Contact', null)}
                className={`py-2 px-4 ${activeLink === 'Contact' ? 'text-blue-500 font-bold' : 'text-gray-700'} lg:text-gray-900 lg:dark:text-white`}
              >
                Contact
              </NavbarLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Head;
