import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";

import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <Router>
      <Header dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home dark={dark} />} />
        <Route path="/:country" element={<CountryDetails dark={dark} />} />
      </Routes>
    </Router>
  );
}

export default App;
