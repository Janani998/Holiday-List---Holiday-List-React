import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const cities = ["Goa", "Darjeeling", "Lonavala"];
    return (
      <>
        <ol>
          {cities.map((city, index) => (
            <li key={`location${index + 1}`}>{city}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
