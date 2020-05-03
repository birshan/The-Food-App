import React from "react";
import { Button, Select } from "../components";
import { View, StyleSheet } from "react-native";
import { Block, theme, Text } from "galio-framework";
import { argonTheme } from "../constants";
import { Input, Icon } from "../components/";
import styles from "../components/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { UserRequest } from "../functions/API/UserRequest";
import { FormUtil } from "../functions/Util/FormUtil";

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
    let email = this.state.email;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let role = this.state.role;

    //check if fields are empty
    let util = new FormUtil();
    if (
      util.isEmpty(pass) ||
      util.isEmpty(email) ||
      util.isEmpty(firstName) ||
      util.isEmpty(lastName)
    ) {
      alert("Error: All fields must be filled!");
      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    if (pass != cnfrmPass) {
      alert("Error: Passwords do not match!");
      this.setState((prevState) => ({
        ...prevState,
        password: "",
        cnfrmPass: "",
        loading: false,
      }));
      return;
    }

    let body = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      roles: role,
      password: pass,
    };
    let request = new UserRequest("POST", "/user", body);
    try {
      let response = await request.createUser();
      if (!response.ok) {
        if (response.status == 409) {
          alert("Input Error: " + data.message);
          this.setState((prevState) => ({
            ...prevState,
            email: "",
            loading: false,
          }));
        } else if (response.status(500)) {
          alert("Network Error: Try again later");
        }
        this.setState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      } else {
        console.log(response);
        alert("User created successfully, Proceed to Sign In");
        this.props.navigation.goBack();
      }
    } catch (error) {
      alert("Error Occured during signup");
      console.log(error);
    }
    this.setState((prevState) => ({
      ...prevState,
      loading: false,
    }));
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
            loading={this.state.loading}
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
