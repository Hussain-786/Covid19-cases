import React, {Component} from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap";
import CountryDetail from "./CountryDetail.jsx";
import SearchBox from "./SearchBox.jsx";
import Header from "./Header.jsx";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      countries: [],
      stats: [],
      searchCountry: ""
    }
  }

  async componentDidMount(){
    const countryData = [];
    const response = await fetch("https://api.covid19api.com/summary");
    const countries = await response.json();
    this.setState({countries: countries});
    for(let i = 1; i < countries.Countries.length; i++){
      const country = countries.Countries[i];
      countryData.push(country);
    }
    this.setState({stats: countryData});
  }

render(){
  const filterCountries = this.state.stats.filter((country) => (
    country.Country.toLowerCase().includes(this.state.searchCountry.toLowerCase())
  ));
    return(
      <Container fluid id="container">
        <Header/>
        <SearchBox handleChange={(event) => {
          this.setState({searchCountry: event.target.value});
        }}/>
        <CountryDetail countryList={filterCountries}/>
      </Container>
    );
  }
}

export default App;
