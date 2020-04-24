import React from "react";
import { Button } from "../components";
import { Text, View, StyleSheet } from "react-native";
import { Block, theme } from "galio-framework";
import { argonTheme } from "../constants";
import { Input, Icon } from "../components/";
import styles from "../components/styles";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cnfrmPass: "",
      userType: "",
      firstName: "",
      lastName: "",
      loading: false,
    };
  }

  handleEmail = (text) => {
    this.setState((prevState) => ({
      ...prevState,
      email: text,
    }));
  };
  handleFName = (text) => {
    this.setState((prevState) => ({
      ...prevState,
      firstName: text,
    }));
  };
  handleLName = (text) => {
    this.setState((prevState) => ({
      ...prevState,
      lastName: text,
    }));
  };
  handlePWord = (text) => {
    this.setState((prevState) => ({
      ...prevState,
      password: text,
    }));
  };
  handleConPass = (text) => {
    this.setState((prevState) => ({
      ...prevState,
      cnfrmPass: text,
    }));
  };

  handleSignUp = () => {
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <View style={localStyles.container}>
        <Block style={localStyles.formArea}>
          <Block center>
            <Input
              placeholder="Email"
              value={this.state.email}
              onChangeText={this.handleEmail}
              iconContent={
                <Icon
                  size={16}
                  color={argonTheme.COLORS.ICON}
                  name="ic_mail_24px"
                  family="ArgonExtra"
                  style={localStyles.inputIcons}
                />
              }
            />
          </Block>
          <Block center>
            <Input
              placeholder="First Name"
              value={this.state.firstName}
              onChangeText={this.handleFName}
            />
          </Block>
          <Block center>
            <Input
              placeholder="Last Name"
              value={this.state.lastName}
              onChangeText={this.handleLName}
            />
          </Block>
          <Block center>
            <Input
              password
              placeholder="Password"
              value={this.state.password}
              onChangeText={this.handlePWord}
              iconContent={
                <Icon
                  size={16}
                  color={argonTheme.COLORS.ICON}
                  name="padlock-unlocked"
                  family="ArgonExtra"
                  style={localStyles.inputIcons}
                />
              }
            />
          </Block>
          <Block center>
            <Input
              password
              placeholder="Re-enter Password"
              value={this.state.cnfrmPass}
              onChangeText={this.handleConPass}
              iconContent={
                <Icon
                  size={16}
                  color={argonTheme.COLORS.ICON}
                  name="padlock-unlocked"
                  family="ArgonExtra"
                  style={localStyles.inputIcons}
                />
              }
            />
          </Block>
        </Block>
        <Block style={localStyles.footer}>
          <Button
            style={localStyles.signupBtn}
            onPress={() => this.handleSignUp()}
          >
            Sign Up
          </Button>
        </Block>
      </View>
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: argonTheme.COLORS.PRIMARY,
    flex: 1,
  },
  formArea: {
    paddingHorizontal: theme.SIZES.BASE,
  },
  signupBtn: {
    width: "80%",
    height: theme.SIZES.BASE * 3,
    alignItems: "center",
    backgroundColor: argonTheme.COLORS.SUCCESS,
  },
  footer: {
    alignItems: "center",
    width: "100%",
  },
  inputIcons: {
    marginRight: 12,
  },
});
