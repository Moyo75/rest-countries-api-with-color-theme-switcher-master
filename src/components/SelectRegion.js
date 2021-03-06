import React from "react";

export default function SelectRegion({ setRegion, dark }) {
  return (
    <select
      className={`${dark ? "dark_mode_input" : ""} select`}
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
