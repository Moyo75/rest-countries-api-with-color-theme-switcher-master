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
  const [countryInput, setCountryInput] = useState("");

  // Try and catch...
  useEffect(() => {
    async function getCountries() {
      const response = await _fetch(`${url}${endPoint}`);
      // console.log(response);
      setCountries(response);
    }
    getCountries();
  }, [endPoint, countryInput]);

  async function _fetch(request) {
    const fetchResult = await fetch(request);
    // console.log(fetchResult);

    if (fetchResult.ok) {
      const result = await fetchResult.json();
      return result;
    }

    const errorMessage = {
      type: "Error",
      message: fetchResult.message || "Something went wrong",
      code: fetchResult.code || "",
      data: fetchResult.data || "",
    };

    const error = new Error();
    error.info = errorMessage;

    return error;
  }

  return (
    <div>
      <Header />
      <div className="main">
        <div className="search-select">
          <SearchCountries setCountryInput={setCountryInput} />
          <SelectRegion setEndPoint={setEndPoint} />
        </div>
        <Countries countryInput={countryInput} countries={countries} />
      </div>
    </div>
  );
}

export default App;
