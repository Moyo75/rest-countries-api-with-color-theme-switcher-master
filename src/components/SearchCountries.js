import React from "react";

export default function SearchCountries({ setCountryInput, dark }) {
  return (
    <div className={`${dark ? "dark_mode_input" : ""} input-container`}>
      <ion-icon name={"search-outline"}></ion-icon>
      <input
        type="search"
        onChange={(event) => setCountryInput(event.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
}
