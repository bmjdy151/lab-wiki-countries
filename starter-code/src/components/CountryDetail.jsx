import React from "react";
import countries from '../countries.json'
import { Link } from "react-router-dom";

export default function CountryDetail(props) {
  const currentCountry = countries.filter(country => country.name.common === props.match.params.name);
  console.log("currentCountry",currentCountry);
    return (
        <div className='countryDetailContainer'>
          <h1>{props.match.params.name}</h1>
          <div className="countryDetailContents">
            <p>Capital</p>
            <p className="second-element">{currentCountry[0].capital[0]}</p>
          </div>
          <div className="countryDetailContents">
            <p>Area</p>
            <p className="second-element">{currentCountry[0].area}km 2</p>
          </div>
          <div className="countryDetailContents">
            <p>Borders</p>
            <ul className="second-element">
            {currentCountry[0].borders.map((border) => {
              const currentBorderCountry = countries.filter(country => country.cca3 === border);
              const currentBorderCountryName = currentBorderCountry[0].name.common;
                return (
                    <li><Link to={`/country/${currentBorderCountryName}`}>{currentBorderCountryName}</Link></li>
                );
              })
            }
            </ul>
          </div>
        </div>

    );
}
