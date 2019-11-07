import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import countries from './countries.json'
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

class App extends Component{
  constructor(){
    super();
    this.state = { 
        countires: countries
      };
    }

  render() {
    return(
      <div className="App">
        <div className="contents-container">     
          <div className="header">
            <h2>WikiCountries</h2> 
          </div>
          <div className="country-container">
            <div className="countrylist-container">
              {this.state.countires.map( (country,i) =>(
                <CountryList key={i} country={country}  index={i} />
              ))} 
            </div>
            <div className="countrydetail-container">
              <Switch>
                <Route exact path="/country/:name" component={CountryDetail} />
              </Switch>
            </div>
          </div>

        </div>
      </div>
    )}
}

export default App;
