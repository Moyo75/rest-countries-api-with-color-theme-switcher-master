import React from "react";
import { useNavigate } from "react-router-dom";

export default function Country({ country }) {
  const { flag, name, population, region, capital } = country;

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate("/country", { state: data });
  };

  return (
    <div className={"country"} onClick={() => handleClick(country)}>
      <img className={"country_flag"} src={flag} alt={"Country flag"}></img>
      <div className={"country_details"}>
        <h5 className={"country_name"}>{name}</h5>
        <p className={"country_text"}>
          Population: <span>{population.toLocaleString()}</span>
        </p>
        <p className={"country_text"}>
          Region: <span>{region}</span>
        </p>
        <p className={"country_text"}>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
}
