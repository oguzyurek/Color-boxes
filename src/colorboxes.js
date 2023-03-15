import React, { Component } from "react";
import Box from "./box";

class Colorboxes extends Component {
  static defaultProps = {
    maxBoxes: 16,
  };
  constructor(props) {
    super(props);
  }

  render() {
    const boxes = Array.from({ length: this.props.maxBoxes }).map(() => (
      <Box />
    ));
    return <div className="boxes">{boxes}</div>;
  }
}

export default Colorboxes;
