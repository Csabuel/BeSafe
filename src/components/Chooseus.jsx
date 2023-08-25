import React from "react";
import { AiFillWallet } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { IoMdFlash } from "react-icons/io";
import { RiNftLine } from "react-icons/ri";
import { FaChessKnight, FaNewspaper } from "react-icons/fa";
import choosePic from "/src/pic/newsletter_bg_light.svg";

function Chooseus() {
  return (
    <div
      id="chooseus"
      className="max-w-6xl m-auto md:mt-28 flex flex-col justify-center items-center"
    >
      <h1 className="my-8 text-3xl md:text-6xl uppercase font-bold  md:mb-10">
        Why{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          choose us
        </span>{" "}
      </h1>
      <div className="mx-4 text-lg md:text-2xl">
        <div className="flex flex-col gap-5 md:grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center">
          <div className="drop-shadow-md rounded-xl  border-[1px] p-2 md:px-8 p flex gap-4 h- md:h-32  items-center">
            <AiFillWallet
              className="bg-gradient-to-r text-white/90  from-purple-400 to-pink-600 rounded-xl w-10 h-10 md:w-16 md:h-16 p-2"
              size={40}
            />
            <div>
              <h3 className="font-semibold">CONNECT YOUR WALLET</h3>
              <p className="text-sm text-gray-700/90">
                Use Trust Wallet, Metamask or to connect to the app.
              </p>
            </div>
          </div>
          <div className="drop-shadow-md rounded-xl  border-[1px] p-2 md:px-8 p flex gap-4 h- md:h-32  items-center">
            <BsPencilSquare
              className="bg-gradient-to-r text-white/90  from-purple-400 to-pink-600 rounded-xl w-10 h-10 md:w-16 md:h-16 p-2"
              size={40}
            />
            <div>
              <h3 className="font-semibold">SELECT YOUR QUANTITY</h3>
              <p className="text-sm text-gray-700/90">
                Upload your crypto and set a title, description and price.
              </p>
            </div>
          </div>
          <div className="drop-shadow-md rounded-xl  border-[1px] p-2 md:px-8 p flex gap-4 h- md:h-32  items-center">
            <IoMdFlash
              className="bg-gradient-to-r text-white/90  from-purple-400 to-pink-600 rounded-xl w-10 h-10 md:w-16 md:h-16 p-2"
              size={40}
            />
            <div>
              <h3 className="font-semibold">CONFIRM TRANSACTION</h3>
              <p className="text-sm text-gray-700/90">
                {" "}
                Earn by selling your crypto on our marketplace.
              </p>
            </div>
          </div>
          <div
            className="
          md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-3 max-w-[600px] justify-self-center
          lg:col-end-4"
          >
            <img src={choosePic} alt="" />
          </div>
          <div className="drop-shadow-md rounded-xl  border-[1px] p-2 md:px-8 p flex gap-4 h- md:h-32  items-center">
            <RiNftLine
              className="bg-gradient-to-r text-white/90  from-purple-400 to-pink-600 rounded-xl w-10 h-10 md:w-16 md:h-16 p-2"
              size={40}
            />
            <div>
              <h3 className="font-semibold">RECEIVE YOUR OWN NFTS</h3>
              <p className="text-sm text-gray-700/90">
                Invest all your crypto at one place on one platform.
              </p>
            </div>
          </div>
          <div className="drop-shadow-md rounded-xl  border-[1px] p-2 md:px-8 p flex gap-4 h- md:h-32  items-center">
            <FaChessKnight
              className="bg-gradient-to-r text-white/90  from-purple-400 to-pink-600 rounded-xl w-10 h-10 md:w-16 md:h-16 p-2"
              size={40}
            />
            <div>
              <h3 className="font-semibold">TAKE A MARKET TO SELL</h3>
              <p className="text-sm text-gray-700/90">
                Discover, collect the right crypto collections to buy or sell.
              </p>
            </div>
          </div>
          <div className="drop-shadow-md rounded-xl  border-[1px] p-2 md:px-8 p flex gap-4 h- md:h-32  items-center">
            <FaNewspaper
              className="bg-gradient-to-r text-white/90  from-purple-400 to-pink-600 rounded-xl w-10 h-10 md:w-16 md:h-16 p-2"
              size={40}
            />
            <div>
              <h3 className="font-semibold"> DRIVE YOUR COLLECTION</h3>
              <p className="text-sm text-gray-700/90">
                We make it easy to Discover, Invest and manage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chooseus;
