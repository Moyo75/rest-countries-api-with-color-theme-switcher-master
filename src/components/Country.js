import React, { Fragment } from "react";

export default function Country({ country }) {
  const { flag, name, population, region, capital } = country;
  return (
    <Fragment>
      <div className={"country"}>
        <img className={"country_flag"} src={flag} alt={"Country flag"}></img>
        <div className={"country_details"}>
          <h5 className={"country_name"}>{name}</h5>
          <p className={"country_text"}>
            Population: <span>{population}</span>
          </p>
          <p className={"country_text"}>
            Region: <span>{region}</span>
          </p>
          <p className={"country_text"}>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
