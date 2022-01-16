import React, { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const response = await fetch("https://restcountries.com/v2/all").then(
        (data) => data.json()
      );
      //console.log(response);
      setCountries(response);
    }
    getCountries();
  }, []);

  return (
    <div>
      {countries &&
        countries.map((country, index) => (
          <Country country={country} key={index} />
        ))}
    </div>
  );
}
