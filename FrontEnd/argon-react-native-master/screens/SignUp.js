import React from "react";
import { Button, Select } from "../components";
import { View, StyleSheet } from "react-native";
import { Block, theme, Text } from "galio-framework";
import { argonTheme } from "../constants";
import { Input, Icon } from "../components/";
import styles from "../components/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserRequest } from "../functions/API/UserRequest";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cnfrmPass: "",
      firstName: "",
      lastName: "",
      role: "ROLE_USER",
      user: true,
      loading: false,
    };
  }
  toggleUser = () => {
    if (this.state.user) {
      this.setState((prevState) => ({
        ...prevState,
        role: "ROLE_PROFESSIONAL",
        user: false,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        role: "ROLE_USER",
        user: true,
      }));
    }
  };

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

  handleSignUp = async () => {
    //validation
    let pass = this.state.password;
    let cnfrmPass = this.state.cnfrmPass;

    if (pass != cnfrmPass) {
      alert("Error: Passwords do not match!");
      this.setState((prevState) => ({
        ...prevState,
        password: "",
        cnfrmPass: "",
      }));
      return;
    }

    let body = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      roles: this.state.role,
      password: this.state.password,
    };
    let request = new UserRequest("POST", "/user", body);

    let response = await request.createUser();
    let data = await response.json();

    if (!response.ok) {
      if (response.status == 409) {
        alert("Input Error: " + data.message);
        this.setState((prevState) => ({
          ...prevState,
          email: "",
        }));
      } else if (response.status(500)) {
        alert("Network Error: Try again later");
      }
    } else {
      alert("User created successfully, Proceed to Sign In");
      this.props.navigation.goBack();
    }
    /*     //API request
    let url = "http://192.168.43.81:8080/user";
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        roles: this.state.role,
        password: this.state.password,
      }),
    };
    console.log("Attempting to create new user");
    try {
      let response = await fetch(url, options);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        alert("User Created");
        this.props.navigation.goBack();
      } else {
        //if there was an error
        console.log("TODO: change to handle other error types");
        let data = await response.json();
        alert("Error " + response.status + ": " + data.message);
        console.log(data);

      }
    } catch (error) {
      console.log(error);
    }
 */
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
              iconContent={<Block />}
              value={this.state.firstName}
              onChangeText={this.handleFName}
            />
          </Block>
          <Block center>
            <Input
              placeholder="Last Name"
              iconContent={<Block />}
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
          <Block style={localStyles.selectContainer}>
            <Block style={localStyles.selectTextArea}>
              <Text style={localStyles.selectBtnText}>User Type: </Text>
              <Text style={localStyles.selectText}>
                {this.state.user ? "Normal User" : "Professional"}
              </Text>
            </Block>
            <TouchableOpacity
              style={localStyles.selectBtn}
              onPress={this.toggleUser}
            >
              <Text style={localStyles.selectBtnText}>Change</Text>
            </TouchableOpacity>
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
  selectContainer: {
    padding: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectBtn: {
    backgroundColor: argonTheme.COLORS.SECONDARY,
    color: argonTheme.COLORS.PRIMARY,
    padding: "3%",
    marginLeft: "1.5%",
    alignItems: "center",
  },
  selectBtnText: {
    fontWeight: "600",
    fontSize: 18,
  },
  selectTextArea: {
    flexDirection: "row",
  },
  selectText: {
    fontWeight: "900",
    color: "white",
    fontSize: 18,
  },
});
