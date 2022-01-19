import React, { useState } from "react";

export default function SearchCountries() {
  // const [name, setName] = useState();
  return (
    <div className="input-container">
      <ion-icon name={"search-outline"}></ion-icon>
      <input type="search" placeholder="Search for a country..." />
    </div>
  );
}
