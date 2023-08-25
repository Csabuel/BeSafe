import React from "react";
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import rightPic from "/src/pic/right.png";

function Footer() {
  return (
    <div id="join">
      <footer className=" w-full h-96 md:h-72 drop-shadow-md border-t-[1px] mt-20  overflow-hidden">
        <div className="flex mt-52 md:my-16  gap-6 justify-center ">
          <AiOutlineTwitter
            className="hover:text-color--secondary transition duration-300 cursor-pointer"
            size={50}
          />
          <BsDiscord
            className="hover:text-color--secondary transition duration-300 cursor-pointer"
            size={50}
          />
          <AiOutlineYoutube
            className="hover:text-color--secondary transition duration-300 cursor-pointer"
            size={50}
          />
        </div>
        <div className="flex my-6  gap-6 justify-center relative">
          <img
            className="hidden md:block fixed top-0 -right-20 w-96 "
            src={rightPic}
          />

          <p className="font-semibold text-xl text-gray-700/80 cursor-pointer">
            Privacy
          </p>
          <p className="font-semibold text-xl text-gray-700/80 cursor-pointer">
            Terms of Use
          </p>
          <div className="bg-pink-600 w-52 h-52 fixed -top-24 left-10 rounded-full"></div>
          <div className="bg-purple-400/50 w-52 h-52 fixed -top-24 rotate-45 left-48"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
