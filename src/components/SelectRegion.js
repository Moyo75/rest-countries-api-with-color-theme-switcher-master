import React, { useState } from "react";

export default function SelectRegion({ setEndPoint }) {
  const [region, setRegion] = useState();

  // const handleChange = (event) => {
  //   setEndPoint(event.target.value);
  // };

  return (
    <select
      className="select"
      value={region}
      onChange={(event) => setEndPoint(`v3.1/region/${event.target.value}`)}
    >
      <option disabled selected hidden>
        Filter by Region
      </option>
      <option className="padding-option" value="africa">
        Africa
      </option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
