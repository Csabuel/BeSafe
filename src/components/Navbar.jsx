import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsSafe2Fill, BsTwitter, BsDiscord } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [sticky, setSticky] = useState(false);

  const stickNavbar = () => {
    window.scrollY > 100 ? setSticky(true) : setSticky(false);
  };

  window.addEventListener("scroll", stickNavbar);

  return (
    <div>
      {/**Nav bar */}
      <div
        className={`flex flex-row bg-transparent items-center justify-between py-8 px-12 w-full z-50 
        ${
          sticky
            ? "fixed top-0 left-0 right-0 w-full z-50 !bg-color--bg transition "
            : ""
        }  `}
      >
        {/**Left part */}
        <div className="flex items-center text-color--secondary italic text-3xl">
          <BsSafe2Fill />
          <p>
            Be<span className="font-bold">$</span>afe
          </p>
        </div>
        {/**Center part */}
        <div>
          <ul className="gap-6 hidden md:flex md:flex-row md:text-xl xl:text-2xl ">
            <li className="hover:text-color--secondary transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-color--secondary transition duration-300 cursor-pointer">
              Market
            </li>
            <li className="hover:text-color--secondary transition duration-300 cursor-pointer">
              Choose Us
            </li>
            <li className="hover:text-color--secondary transition duration-300 cursor-pointer">
              Join
            </li>
          </ul>
        </div>
        {/**Right part */}

        {nav ? (
          ""
        ) : (
          <div
            className={
              "bg-transparent border border-color--secondary text-color--secondary rounded-full p-2  md:hidden cursor-pointer m-1"
            }
          >
            <HiOutlineMenuAlt2 onClick={() => setNav(!nav)} />
          </div>
        )}

        {nav ? (
          <div className="bg-black/10 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        <div
          className={
            nav
              ? "fixed top-0 left-0 h-screen w-[300px] bg-white/80 drop-shadow-xl z-20 transition-all duration-500"
              : "fixed top-0 left-[-100%] h-screen w-[300px] bg-white drop-shadow-xl z-20 transition-all duration-300"
          }
        >
          <AiOutlineClose
            size={30}
            className="absolute top-4 right-4 cursor-pointer hover:text-color--secondary "
            onClick={() => setNav(!nav)}
          />
          <ul className="flex flex-col items-center justify- mt-[200px] gap-6 ">
            <li
              className="hover:text-color--secondary transition duration-300 cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              Home
            </li>
            <li
              className="hover:text-color--secondary transition duration-300 cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              Market
            </li>
            <li
              className="hover:text-color--secondary transition duration-300 cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              Choose Us
            </li>
            <li
              className="hover:text-color--secondary transition duration-300 cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              Join
            </li>
          </ul>
        </div>

        <div className="hidden md:flex md:flex-row gap-6 ">
          <BsDiscord
            size={30}
            className="hover:text-color--secondary transition duration-300 cursor-pointer"
          />
          <BsTwitter
            size={30}
            className="hover:text-color--secondary transition duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
