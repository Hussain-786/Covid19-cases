import React from 'react';
import Country from "./Country.jsx";

function CountryDetail(props){
    return(
      <div className="countryDetails">
        {props.countryList.map(country => <Country key={country.CountryCode} details={country} />)}
      </div>
    );
}

export default CountryDetail;
