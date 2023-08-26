import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsSafe2Fill, BsTwitter, BsDiscord } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [sticky, setSticky] = useState(false);

  const stickNavbar = () => {
    window.scrollY > 100 ? setSticky(true) : setSticky(false);
  };

  window.addEventListener("scroll", stickNavbar);

  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

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
        <div
          onClick={goTop}
          className="flex items-center text-color--secondary italic text-3xl cursor-pointer"
        >
          <BsSafe2Fill />
          <p>
            Be<span className="font-bold">$</span>afe
          </p>
        </div>
        {/**Center part */}
        <div>
          <ul className="gap-6 hidden md:flex md:flex-row md:text-xl xl:text-2xl ">
            <li className="hover:text-color--secondary transition duration-300 cursor-pointer">
              <Link to="/besafe/">Home</Link>
            </li>

            <li className="hover:text-color--secondary transition duration-300 cursor-pointer">
              <a href="#market">Market</a>
            </li>

            <li className="hover:text-color--secondary transition duration-300 cursor-pointer">
              <a className="" href="#chooseus">
                Choose Us
              </a>
            </li>
            <li className="hover:text-color--secondary transition duration-300 cursor-pointer">
              <a href="#join">Join</a>
            </li>
          </ul>
        </div>

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
            <Link to="/besafe/">
              <li
                className="hover:text-color--secondary transition duration-300 cursor-pointer"
                onClick={() => setNav(!nav)}
              >
                Home
              </li>
            </Link>

            <li
              className="hover:text-color--secondary transition duration-300 cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <a href="#market">Market</a>
            </li>

            <li
              className="hover:text-color--secondary transition duration-300 cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <a className="" href="#chooseus">
                Choose Us
              </a>
            </li>
            <li
              className="hover:text-color--secondary transition duration-300 cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <a href="#join">Join</a>
            </li>
          </ul>
          <div className="flex flex-col gap-3 items-center h-full justify-center">
            <Link to="/SignIn">
              <button
                onClick={() => setNav(!nav)}
                className="border-2 text-color--secondary border-color--secondary rounded-full w-32 h-8 text-sm font-bold hover:bg-color--secondary hover:text-white transition"
              >
                Sign In
              </button>
            </Link>
            <Link to="/SignUp">
              <button
                onClick={() => setNav(!nav)}
                className="border-2 text-white bg-color--secondary font-bold border-color--secondary rounded-full w-32 h-8 text-sm hover:text-color--secondary hover:bg-white transition"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        {/**Right part */}

        <div className="hidden md:flex md:flex-row gap-2 ">
          <Link to="/SignIn">
            <button className="border-2 text-color--secondary border-color--secondary rounded-full w-20 h-8 text-sm font-bold hover:bg-color--secondary hover:text-white transition">
              Sign In
            </button>{" "}
          </Link>
          <Link to="/SignUp">
            <button className="border-2 text-white bg-color--secondary font-bold border-color--secondary rounded-full w-20 h-8 text-sm hover:text-color--secondary hover:bg-white transition">
              Sign Up
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
