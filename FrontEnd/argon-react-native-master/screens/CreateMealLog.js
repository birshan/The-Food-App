import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Block } from "galio-framework";
import { theme } from "galio-framework";
import { argonTheme } from "../constants";
import { Input, Icon } from "../components/";
export default class CreateMealLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: "Pizza",
      servingDescription: "140g per slice",
      servingWeight: 140.0,
      calories: 525,
      carbWeight: 50.0,
      fatWeight: 30.0,
      sugarsWeight: 10.0,
    };
  }
  async componentWillMount() {
    console.log("Component mounting");
  }
  render() {
    return (
      <Block flex style={styles.container}>
        <Block left>
          <Text>Enter estimated meal weight:</Text>
          <Input placeholder="0" iconContent={<Block />} />
        </Block>
        <Block>
          <Block>
            <Text>Food Prediction</Text>
            <Text>{this.state.foodName}</Text>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: argonTheme.COLORS.PRIMARY,
    alignItems: "center",
  },
  weighInputContaier: {},
});
