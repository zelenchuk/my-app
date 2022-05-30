import { Component } from "react";
import loaderImg from "./imgs/loader.gif";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          fontSize: "100px",
          marginTop: "270px",
          textAlign: "center",
        }}
      >
        <img src={loaderImg} alt="my_loader" />
        <br />

        {this.props.text}
      </div>
    );
  }
}

Loader.defaultProps = {
  text: "Loading ...",
};

export default Loader;
