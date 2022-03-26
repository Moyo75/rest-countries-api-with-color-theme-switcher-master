import React from "react";

export default function Header(props) {
  const { dark, setDark } = props;
  return (
    <header className={`${dark ? "dark_mode" : ""} header`}>
      <nav className={"navbar flex flex__jc-sb"}>
        <h2 className={"main_text"}>Where in the world?</h2>
        <div
          onClick={() => {
            setDark(!dark);
            console.log(dark);
          }}
          className={"dark__con flex flex__ai-c"}
        >
          <ion-icon name={"moon-outline"} className={"moon_icon"}></ion-icon>
          <p className={"primary_text"}>{dark ? "Light" : "Dark"} Mode</p>
        </div>
      </nav>
    </header>
  );
}
