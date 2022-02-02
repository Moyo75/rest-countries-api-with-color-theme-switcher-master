import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
