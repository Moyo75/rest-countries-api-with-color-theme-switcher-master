import React from "react";

export default function Header() {
  return (
    <header className={"header"}>
      <h2 className={"main_text"}>Where in the world</h2>
      <div>
        <ion-icon name={"moon-outline"} className={"moon_icon"}></ion-icon>
        <p className={"primary_text"}>Dark Mode</p>
      </div>
    </header>
  );
}
