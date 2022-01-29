import React from "react";
import Country from "./Country";

export default function Countries({ countries, countryInput }) {
  return (
    <div className="countries">
      {countries
        ? countries
            .filter(({ name }) => name.toLowerCase().includes(countryInput))
            .map((country, index) => <Country country={country} key={index} />)
        : ""}
    </div>
  );
}
