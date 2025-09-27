import React from "react";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import { assets } from "../../assets/assets";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="relative bg-[#D2E6E4] pt-10 pb-10">
      {/* Top wave */}
      <div className="absolute -top-7 left-0 w-full overflow-hidden leading-[0] z-0 ">
        <svg
          className="w-full h-[80px] hidden md:block"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#D2E6E4"
            d="M0,220 C60,160 1080,0 1440,96 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      <LayoutWrapper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 relative z-10">
          <div className="flex flex-col">
            <img
              src={assets.logo}
              alt="Logo"
              className="w-40 md:w-48 object-contain"
            />
            <div className="mt-6 space-y-3 text-[#0B7077] text-sm">
              <p className="flex items-center gap-2 font-semibold">
                <i className="fa-solid fa-location-dot" /> Address:
              </p>
              <p className="ml-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p className="flex items-center gap-2 font-medium">
                <i className="fa-solid fa-phone" /> Tel: +9229341037
              </p>
              <p className="flex items-center gap-2 font-medium">
                <i className="fa-solid fa-clock" /> Hours: 8 to 20
              </p>
              <p className="flex items-center gap-2 font-medium">
                <i className="fa-solid fa-envelope" /> info@onlearn.com
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-[#0B7077] font-semibold text-lg">Categories</h3>
            <p className="text-[#0B7077] hover:text-[#095e62] cursor-pointer transition">
              Counseling
            </p>
            <p className="text-[#0B7077] hover:text-[#095e62] cursor-pointer transition">
              Health & Fitness
            </p>
            <p className="text-[#0B7077] hover:text-[#095e62] cursor-pointer transition">
              Individual Development
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-[#0B7077] font-semibold text-lg">Links</h3>
            <p className="text-[#0B7077] hover:text-[#095e62] cursor-pointer transition">
              About Us
            </p>
            <p className="text-[#0B7077] hover:text-[#095e62] cursor-pointer transition">
              Blog
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[#0B7077] font-semibold text-lg mb-3">
              Stay Up to Date
            </h3>
            <p className="text-[#0B7077] mb-3 text-sm">
              Subscribe to get the latest courses and updates.
            </p>
            <form className="flex flex-col md:flex-row gap-3 md:gap-0 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 px-4 rounded-lg shadow-md border border-gray-200 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="h-12 md:absolute md:right-0 md:top-0 px-5 bg-[#0B7077] text-white font-semibold rounded-lg hover:bg-[#095e62] transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex gap-4 justify-center sm:justify-start">
            <Icon
              icon="lets-icons:insta"
              className="text-2xl text-[#0B7077] cursor-pointer hover:text-[#095e62] transition"
            />
            <Icon
              icon="ph:facebook-logo"
              className="text-2xl text-[#0B7077] cursor-pointer hover:text-[#095e62] transition"
            />
            <Icon
              icon="ri:twitter-x-fill"
              className="text-2xl text-[#0B7077] cursor-pointer hover:text-[#095e62] transition"
            />
            <Icon
              icon="mdi:youtube"
              className="text-2xl text-[#0B7077] cursor-pointer hover:text-[#095e62] transition"
            />
          </div>
          <p className="text-sm text-[#0B7077]">
            &copy; {new Date().getFullYear()} Naveen Kumar. All rights reserved.
          </p>
        </div>
      </LayoutWrapper>

      {/* Decorative swirl */}
      <img
        src={assets.gift_card_header_swrill}
        alt="swirl"
        className="absolute bottom-0 right-0 w-full max-w-[500px] md:max-w-[600px] object-contain z-0 pointer-events-none"
      />
    </footer>
  );
};

export default Footer;
