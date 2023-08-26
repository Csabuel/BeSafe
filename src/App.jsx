import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Account from "./components/Account";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/besafe/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Account" element={<Account />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
