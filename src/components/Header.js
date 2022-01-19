import React from "react";

export default function Header() {
  return (
    <header className={"header"}>
      <nav className={"navbar flex flex__jc-sb"}>
        <h2 className={"main_text"}>Where in the world?</h2>
        <div className={"dark_mode flex flex__ai-c"}>
          <ion-icon name={"moon-outline"} className={"moon_icon"}></ion-icon>
          <p className={"primary_text"}>Dark Mode</p>
        </div>
      </nav>
    </header>
  );
}
