import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

function CountryDetails() {
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
  } = location.state;

  console.log(location.pathname);
  return (
    <div>
      <Header />
      <main className="country_more">
        <button onClick={() => navigate("/")}>
          <span className="arrow">
            <big>
              <big>&#8592;</big>
            </big>
          </span>{" "}
          Back
        </button>
        <section className="flex flex__jc-sb flex__ai-c">
          <figure>
            <img
              src={flag}
              alt="Country Flag"
              className="country_details_flag"
            />
          </figure>
          <figcaption>
            <h2>{name}</h2>
            <div className="flex flex__jc-s flex__ai-fs list_set">
              <ul>
                <li>
                  <p>
                    Native Name: <span>{nativeName}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Population: <span>{population.toLocaleString()}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Region: <span>{region}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Sub Region: <span>{subregion}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Capital: <span>{capital}</span>
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>
                    Top Level Domain: <span>{topLevelDomain}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Currency:{" "}
                    {currencies ? (
                      currencies.map((currency, index, array) => (
                        <span key={index}>
                          {currency.name +
                            `${
                              currency === array[array.length - 1] ? "" : ", "
                            }`}
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
                            `${
                              language === array[array.length - 1] ? "" : ", "
                            }`}
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
    </div>
  );
}

export default CountryDetails;
