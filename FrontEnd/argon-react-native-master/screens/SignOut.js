import React from "react";
import { Button } from "../components";
import { Text, View, StyleSheet } from "react-native";

export default function SignOut() {
  _signout = () => {
    console.log("signout pressed");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.confirmText}>Confirm SignOut</Text>
      <Button>Confirm</Button>
    </View>
  );
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
