import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

function CountryDetails(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    flag,
    name,
    population,
    region,
    capital,
    nativeName,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = location.state.country;

  console.log(location);

  return (
    <main className={`${props.dark ? "very_dark_mode" : ""} country_more`}>
      <button
        className={`${props.dark ? "dark_mode" : ""}`}
        onClick={() => navigate("/")}
      >
        <span className="arrow">
          <big>
            <big>&#8592;</big>
          </big>
        </span>{" "}
        Back
      </button>
      <section
        className={`${
          props.dark ? "very_dark_mode" : ""
        } flag_details flex flex__jc-sb flex__ai-c`}
      >
        <figure>
          <img src={flag} alt="Country Flag" className="country_details_flag" />
        </figure>
        <figcaption>
          <h2>{name}</h2>
          <div className="flex flex__jc-s flex__ai-fs list_set">
            <ul>
              <li>
                <p>
                  Native Name: <span>{nativeName ? nativeName : "None"}</span>
                </p>
              </li>
              <li>
                <p>
                  Population:{" "}
                  <span>
                    {population ? population.toLocaleString() : "None"}
                  </span>
                </p>
              </li>
              <li>
                <p>
                  Region: <span>{region ? region : "None"}</span>
                </p>
              </li>
              <li>
                <p>
                  Sub Region: <span>{subregion ? subregion : "None"}</span>
                </p>
              </li>
              <li>
                <p>
                  Capital: <span>{capital ? capital : "None"}</span>
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p>
                  Top Level Domain:{" "}
                  <span>{topLevelDomain ? topLevelDomain : "None"}</span>
                </p>
              </li>
              <li>
                <p>
                  Currency:{" "}
                  {currencies ? (
                    currencies.map((currency, index, array) => (
                      <span key={index}>
                        {currency.name +
                          `${currency === array[array.length - 1] ? "" : ", "}`}
                      </span>
                    ))
                  ) : (
                    <span>None</span>
                  )}
                </p>
              </li>
              <li>
                <p>
                  Languages:{" "}
                  {languages ? (
                    languages.map((language, index, array) => (
                      <span key={index}>
                        {language.name +
                          `${language === array[array.length - 1] ? "" : ", "}`}
                      </span>
                    ))
                  ) : (
                    <span>None</span>
                  )}
                </p>
              </li>
            </ul>
          </div>
          <p className="border_countries">
            Border Countries:{" "}
            {borders ? (
              borders.map((border, index) => (
                <span key={index} className="border_country">
                  {border}
                </span>
              ))
            ) : (
              <span>None</span>
            )}
          </p>
        </figcaption>
      </section>
    </main>
  );
}

export default CountryDetails;
