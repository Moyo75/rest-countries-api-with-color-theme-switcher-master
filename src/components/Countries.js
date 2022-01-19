import React from "react";
import Country from "./Country";

export default function Countries({ countries }) {
  return (
    <div className="countries">
      {countries &&
        countries.map((country, index) => (
          <Country country={country} key={index} />
        ))}
    </div>
  );
}
