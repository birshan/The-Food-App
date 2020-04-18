import React from "react";
import Scanimg from "../components/camera.page";

class Camera extends React.Component {
  toggleSwitch = (switchId) =>
    this.setState({ [switchId]: !this.state[switchId] });

  render() {
    return <Scanimg />;
  }
}

export default Camera;
