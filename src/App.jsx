import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Market from "./components/Market";

import axios from "axios";
import Chooseus from "./components/Chooseus";
import Footer from "./components/Footer";

function App() {
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

  console.log(coins);

  return (
    <div>
      <Navbar />
      <Hero coins={coins} />
      <Market coins={coins} />
      <Chooseus />
      <Footer />
    </div>
  );
}

export default App;
