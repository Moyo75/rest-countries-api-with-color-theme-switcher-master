import React from "react";

export default function SelectRegion({ setEndPoint }) {
  return (
    <select
      className="select"
      defaultValue={"DEFAULT"}
      onChange={(event) => setEndPoint(`v3.1/region/${event.target.value}`)}
    >
      <option value={"DEFAULT"}>Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
}
