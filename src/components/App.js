import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  cities = ["Goa", "Amsterdam", "New York", "Darjeeling", "Tokyo", "Lonavala"];
  render() {
    return (
      <>
        <ol>
          {this.cities.map((city, index) => (
            <li key={`location${index + 1}`}>{city}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
