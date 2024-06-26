import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import logo from "../assets/images/Rockshell.svg";
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export function Down() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between gap-6 sm:flex sm:justify-between">
          <div className="flex flex-col">
            <FooterBrand href="/">
              <img src={logo} className="h-14" alt="Rockshell Logo" />
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold dark:text-white">
                  ROCKSHELL
                </span>
                <span className="text-gray-700 dark:text-gray-400 -mt-2">
                  CORP.
                </span>
              </div>
            </FooterBrand>

            <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="Services" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Heat Pump Solutions</FooterLink>
                  <FooterLink href="#">Evaporators</FooterLink>
                  <FooterLink href="#">Specialized Services</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Company" />
                <FooterLinkGroup col>
                  <FooterLink href="#">About us</FooterLink>
                  
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Clients</FooterLink>
                  <FooterLink href="#">Certificates</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:flex sm:flex-col sm:items-center">
            <iframe
              title="Google Map"
              className="w-full h-48 md:h-64 lg:h-80 lg:w-[700px]"
              frameBorder="0"
              loading="lazy"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.493021452407!2d72.88237437767785!3d19.10055205188065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86e4dfdd08d%3A0x2a61bcfb82743272!2sV%20T%20M%20Building%2C%20Safed%20Pul%2C%20Saki%20Naka%2C%20Mumbai%2C%20Maharashtra%20400072!5e0!3m2!1sen!2sin!4v1714537249424!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="ROCKSHELL CORP™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon
              href="https://www.linkedin.com/company/rockshell-corp-energy-efficient-solutions/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
