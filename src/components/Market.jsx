import React, { useState } from "react";

function Market(props) {
  function numberWithCommas(x) {
    return x.toLocaleString();
  }

  return (
    <div>
      <div className="md:mt-28 drop-shadow-md rounded-xl  border-[1px] overflow-x-auto">
        <h2 className="mt-4 text-xl md:text-2xl  lg:text-3xl font-bold">
          Today's Cryptocurrency Prices by Market Cap
        </h2>

        {/** Grid for the crypto  */}
        <table className="w-full">
          <tr className=" h-10 w-max mt-5 text-sm md:text-xl bg-color--secondary text-white font-medium">
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Market Cap</th>
          </tr>

          {/**loading the coins */}
          {props.coins.map((coin) => (
            <tr
              key={coin.id}
              className="h-10  text-sm md:text-lg border-b-[1px] border-gray-500/50"
            >
              <th>
                <h4>{coin.market_cap_rank}</h4>
              </th>
              <th className="">
                <h4 className="flex flex-row items-center">
                  <span className="w-6 mr-1">
                    <img
                      className="rounded-full "
                      src={coin.image}
                      alt={coin.name}
                    />
                  </span>
                  <span className="hidden md:block">{coin.name} </span>
                  <span className="uppercase text-xs ml-2 text-gray-600">
                    {coin.symbol}
                  </span>
                </h4>
              </th>
              <th>
                <h4>$ {numberWithCommas(coin.current_price)}</h4>
              </th>
              <th>
                {" "}
                <h4
                  className={
                    coin.market_cap_change_percentage_24h <= 0
                      ? "text-red-600"
                      : "text-green-600"
                  }
                >
                  {coin.market_cap_change_percentage_24h.toFixed(2)}
                </h4>
              </th>
              <th>
                {" "}
                <h4>$ {numberWithCommas(coin.market_cap)}</h4>
              </th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Market;
