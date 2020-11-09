import React, { Component } from "react";
import Option from "./Option";
import "../MainForm/Feature.css";
import slugify from "slugify";

class Feature extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <Option
            item={item}
            key={itemHash}
            itemHash={itemHash}
            name={item.name}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
            feature={feature}
            cost={item.cost}
          />
        );
      });
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });
    return features;
  }
}

export default Feature;
