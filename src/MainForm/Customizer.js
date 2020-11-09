import React, { Component } from "react";
import FEATURES from "../STORE/Features";
import Feature from "./Feature";
import "../MainForm/Customizer.css";

class Customizer extends Component {
  state = {
    features: FEATURES,
  };
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Feature
          features={this.state.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      </form>
    );
  }
}

export default Customizer;
