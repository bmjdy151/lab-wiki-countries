import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CountryList extends Component {

render(){
  const {name} = this.props.country;
  console.log(name.common);
  return(
    <div className="box">
      <Link to={`/country/${name.common}`}><p>{name.common}</p></Link>
    </div>
    );
  }
}

