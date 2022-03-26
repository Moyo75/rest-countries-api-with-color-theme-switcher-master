import React from "react";
import { Link } from "react-router-dom";

export default function Country({ country, dark }) {
  const { flag, name, population, region, capital } = country;

  return (
    <Link
      className={`${dark ? "dark_mode" : ""} country`}
      to={`/${name.split(" ").join("-")}`}
      state={{ country }}
    >
      <img className={"country_flag"} src={flag} alt={"Country flag"}></img>
      <div className={` country_details`}>
        <h5 className={"country_name"}>{name}</h5>
        <p className={"country_text"}>
          Population: <span>{population.toLocaleString()}</span>
        </p>
        <p className={"country_text"}>
          Region: <span>{region ? region : "None"}</span>
        </p>
        <p className={"country_text"}>
          Capital: <span>{capital ? capital : "None"}</span>
        </p>
      </div>
    </Link>
  );
}
