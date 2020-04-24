import React from "react";
import { Button } from "../components";
import { Text, View, StyleSheet, AsyncStorage } from "react-native";

export default class SignOut extends React.Component {
  _signout = async () => {
    console.log("signout pressed");
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.confirmText}>Confirm SignOut</Text>
        <Button onPress={this._signout}>Confirm</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: "25%",
  },
  confirmText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CC4444",
    marginBottom: "5%",
  },
});
