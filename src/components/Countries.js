import React from "react";
import Country from "./Country";

export default function Countries({ countries, countryInput, region }) {
  return (
    <div className="countries">
      {countries
        ? countries
            .filter((country) => (region ? country.region === region : country))
            .filter(({ name }) => name.toLowerCase().includes(countryInput))
            .map((country, index) => <Country country={country} key={index} />)
        : ""}
    </div>
  );
}
