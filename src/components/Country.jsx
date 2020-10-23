import React from "react";
import {Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap";

function Country(props){
  return(
    <div>
    <Card id="cardStyle">
      <CardImg className="flags" src={`https://www.countryflags.io/${props.details.CountryCode}/flat/64.png`} alt={props.details.CountryCode}/>
      <CardBody>
        <h1><CardTitle>{props.details.Country}</CardTitle></h1>
        <CardText>Total Confirmed : {props.details.TotalConfirmed}</CardText>
        <CardText>Total Deaths : {props.details.TotalDeaths}</CardText>
        <CardText>Total Recovered : {props.details.TotalRecovered}</CardText>
      </CardBody>
    </Card>
    </div>
  );
}

export default Country;
