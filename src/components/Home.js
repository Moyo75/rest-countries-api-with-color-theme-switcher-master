import React, { useState, useEffect, Fragment } from "react";

import Header from "./Header";
import SearchCountries from "./SearchCountries";
import Countries from "./Countries";
import SelectRegion from "./SelectRegion";

import "../styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const url = "https://restcountries.com/v2/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [countryInput, setCountryInput] = useState("");

  useEffect(() => {
    async function getCountries() {
      const response = await _fetch(`${url}`);
      setCountries(response);
    }
    getCountries();
  }, [countryInput, region]);

  async function _fetch(request) {
    const fetchResult = await fetch(request);

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
    <Fragment>
      <Header />
      <div className="main">
        <div className="search-select">
          <SearchCountries setCountryInput={setCountryInput} />
          <SelectRegion setRegion={setRegion} />
        </div>
        <Countries
          countryInput={countryInput}
          countries={countries}
          region={region}
        />
      </div>
    </Fragment>
  );
}

export default App;
