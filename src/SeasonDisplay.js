import { Component } from "react";

import snowImg from "./imgs/snowflake-solid.svg";
import sunImg from "./imgs/sun-solid.svg";

class SeasonDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { season: null };
  }

  render() {
    return (
      <div
        style={{
          fontSize: "100px",
          textAlign: "center",
          marginTop: "260px",
          fontWeight: "Bold",
        }}
      >
        <img
          style={{ position: "absolute", top: 100, left: 70, width: "200px" }}
          src={this.state.season === "winter" ? snowImg : sunImg}
          alt="season-1"
        />

        {this.state.season === "winter"
          ? "Brrr, It's chilly!"
          : "Lets hit the beach!"}

        <img
          style={{
            position: "absolute",
            bottom: 100,
            right: 70,
            width: "200px",
          }}
          src={this.state.season === "winter" ? snowImg : sunImg}
          alt="season-2"
        />
      </div>
    );
  }

  componentDidMount() {
    const season = SeasonDisplay.getSeason(
      this.props.lat,
      new Date().getMonth()
    );
    this.setState({
      season: season,
    });
  }

  static getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  };
}

export default SeasonDisplay;
