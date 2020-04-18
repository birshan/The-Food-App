import React from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Block, Text, Button as GaButton, theme } from "galio-framework";
import Scanimg from "../components/camera.page";
import { GalioProvider } from "galio-framework";
// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

const { width } = Dimensions.get("screen");

class Elements extends React.Component {
  state = {
    "switch-1": true,
    "switch-2": false,
  };

  toggleSwitch = (switchId) =>
    this.setState({ [switchId]: !this.state[switchId] });

  render() {
    return <Scanimg />;
  }
}

export default Elements;
