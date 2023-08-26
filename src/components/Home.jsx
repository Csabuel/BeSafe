import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
//components

import Hero from "./Hero";
import Market from "./Market";
import Chooseus from "./Chooseus";

function Home() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Hero coins={coins} />
      <Market coins={coins} />
      <Chooseus />
    </div>
  );
}

export default Home;
