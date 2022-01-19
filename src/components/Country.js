import React, { Fragment } from "react";

export default function Country({ country }) {
  const { flag, name, population, region, capital } = country;
  //   console.log(country);
  return (
    <Fragment>
      <div className={"card"}>
        <img className={"card-img-top"} src={flag} alt={"Country flag"}></img>
        <div className={"card-body"}>
          <h5 className="card-title mb-3">{name}</h5>
          <p className={"card-text"}>
            Population: <span>{population}</span>
          </p>
          <p className={"card-text"}>
            Region: <span>{region}</span>
          </p>
          <p className={"card-text"}>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
