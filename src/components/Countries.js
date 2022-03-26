import React from "react";
import Country from "./Country";

import PuffLoader from "react-spinners/PuffLoader";

const darkBlue = "#202c37";
const white = "#ccc";

export default function Countries({ countries, countryInput, region, dark }) {
  // console.log(countryInput.toLowerCase());
  return (
    <div className={`${dark ? "borderDarkBlue" : "borderWhite"} countries`}>
      {countries ? (
        countries
          .filter((country) => (region ? country.region === region : country))
          .filter(({ name }) =>
            name.toLowerCase().startsWith(countryInput.toLowerCase())
          )
          .map((country, index) => (
            <div>
              <Country dark={dark} country={country} key={index} />
            </div>
          ))
      ) : (
        <PuffLoader loading={true} color={`${dark ? darkBlue : white}`} />
      )}
    </div>
  );
}
