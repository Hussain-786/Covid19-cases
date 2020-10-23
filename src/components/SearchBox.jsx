import React from "react";

function SearchBox(props){
  return(
    <div className="searchDiv">
      <center>
        <input type="search" className="search" placeholder="Enter Country Name..." onChange={props.handleChange}/>
      </center>
    </div>
  );
}

export default SearchBox;
