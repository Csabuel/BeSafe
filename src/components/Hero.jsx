import React from "react";
import btc from "/src/pic/bitcoin.png";
import eth from "/src/pic/ethereum.png";
import { AiOutlineArrowDown } from "react-icons/ai";

function Hero(props) {
  const firstCrypto = props.coins.slice(0, 4);

  function numberWithCommas(x) {
    return x.toLocaleString();
  }

  //console.log(firstCrypto);

  return (
    <div id="hero">
      <div className="mt-40 text-6xl h-96 text-center font-bold relative">
        Your{" "}
        <span className=" capitalize font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          crypto
        </span>{" "}
        is safe with us
        <img
          className=" hidden xl:block absolute animate-bounce left-20  top-2 w-28 h-28 object-fit"
          src={btc}
          alt="bitcoin"
        />
        <div className=" hidden xl:block absolute animate-bounce right-20 top-2 h-28 object-fit">
          <img className="w-28 h-28 object-fit" src={eth} alt="ethereum" />
        </div>
        <div className="mt-24 text-lg  md:grid md:grid-cols-2 xl:grid-cols-4 gap-6 mx-60 hidden">
          {firstCrypto.map((coin) => (
            <div className="flex flex-col items-center" key={coin.id}>
              <img
                className="w-20 h-20 object-fill"
                src={coin?.image}
                alt={coin.name}
              />
              <p className="capitalize">
                {coin.name}{" "}
                <span
                  className={
                    coin.market_cap_change_percentage_24h <= 0
                      ? "text-red-600"
                      : "text-green-600"
                  }
                >
                  {coin?.market_cap_change_percentage_24h.toFixed(2)}%
                </span>
              </p>

              <p>$ {numberWithCommas(coin.current_price)}</p>
            </div>
          ))}
        </div>
        <div>
          <button className="text-lg sm:hidden mt-20 flex items-center gap-2 justify-center mx-auto bg-color--secondary w-48 rounded-full h-12">
            <a href="#market">Check Prices</a>
            <span>
              <AiOutlineArrowDown />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
