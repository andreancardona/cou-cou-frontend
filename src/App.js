import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CouCouContainer from "./containers/CouCouContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CouCouContainer />
      </div>
    );
  }
}

export default App;
