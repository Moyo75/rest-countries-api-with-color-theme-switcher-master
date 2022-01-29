import React from "react";

export default function SearchCountries({ setCountryInput }) {
  return (
    <div className="input-container">
      <ion-icon name={"search-outline"}></ion-icon>
      <input
        type="search"
        onChange={(event) => setCountryInput(event.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
}
