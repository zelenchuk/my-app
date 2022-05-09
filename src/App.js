import { Component } from "react";

import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMessage: "",
    };
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return (
        <div
          style={{
            color: "red",
            background: "black",
            fontSize: "100px",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          Error: {this.state.errorMessage}
        </div>
      );
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay lat={this.state.latitude} />;
    }

    return <Loader />;
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords } = position;

        // console.log(coords);

        this.setState({
          latitude: coords.latitude,
        });
      },
      (err) => {
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }

  componentDidUpdate() {}

  componentWillUnmount() {}
}

export default App;
