import React from "react";
import { Button } from "../components";
import { Text, View, StyleSheet } from "react-native";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cnfrmPass: "",
      userType: "",
    };
  }

  handleSignUp = () => {
    this.props.navigation.navigate("SignIn");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.handleSignUp()}>Sign Up</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
