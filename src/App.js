import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import SearchCountries from "./components/SearchCountries";
import Countries from "./components/Countries";
import SelectRegion from "./components/SelectRegion";

import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const url = "https://restcountries.com/";

function App() {
  const [countries, setCountries] = useState([]);
  const [endPoint, setEndPoint] = useState("v2/all");

  useEffect(() => {
    async function getCountries() {
      const response = await fetch(`${url}${endPoint}`).then((data) =>
        data.json()
      );
      //console.log(response);
      setCountries(response);
    }
    getCountries();
  }, [endPoint]);

  return (
    <div>
      <Header />
      <div className="main">
        <div className="search-select">
          <SearchCountries />
          <SelectRegion setEndPoint={setEndPoint} />
        </div>
        <Countries countries={countries} />
      </div>
    </div>
  );
}

export default App;
