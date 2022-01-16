import { Fragment } from "react";
import CountriesSection from "./components/CountriesSection";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";

import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Header />
      <SearchSection />
      <CountriesSection />
    </Fragment>
  );
}

export default App;
