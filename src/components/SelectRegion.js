import React from "react";

export default function SelectRegion({ setRegion }) {
  return (
    <select
      className="select"
      defaultValue={"DEFAULT"}
      onChange={(event) => setRegion(event.target.value)}
    >
      <option value={""}>Filter by Region</option>
      <option value={"Africa"}>Africa</option>
      <option value={"Americas"}>America</option>
      <option value={"Asia"}>Asia</option>
      <option value={"Europe"}>Europe</option>
      <option value={"Oceania"}>Oceania</option>
    </select>
  );
}
