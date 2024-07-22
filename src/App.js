import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sign from "./components/Sign";
import Cars from "./components/Cars";
import Footer from "./components/Footer";
import Electric from "./components/electric/elctric";
import Cate from "./components/category/Cate";

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <Router>
      <Navbar handleSignIn={handleSignIn} showSignIn={showSignIn} />

      <Routes>
        <Route path="/" element={<Home showSignIn={showSignIn} />} />
        <Route path="/Sign" element={<Sign />} />
      </Routes>
      <Cars />
      <Cate />

      <Electric />
      <Footer />
    </Router>
  );
};

export default App;
