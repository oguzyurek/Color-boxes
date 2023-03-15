import React, { Component } from "react";
import { choice } from "./helper";
class Box extends Component {
  static defaultProps = {
    allColors: [
      "red",
      "green",
      "aqua",
      "bisque",
      "pink",
      "olive",
      "orange",
      "gray",
      "yellow",
      "white",
    ],
  };
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.allColors) };
    this.handleClick = this.handleClick.bind(this);
  }

  randomColor() {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }

  handleClick() {
    this.randomColor();
    console.log("handle click");
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className="box"
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}

export default Box;
