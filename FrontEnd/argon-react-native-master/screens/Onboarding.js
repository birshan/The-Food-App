import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  AsyncStorage,
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";
import { Input, Icon } from "../components/";
import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

const { height, width } = Dimensions.get("screen");

class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authInfo: {
        username: "",
        password: "",
      },
      loginProcess: false,
    };
  }
  handleUsername = (text) => {
    this.setState((prevState) => ({
      authInfo: {
        ...prevState.authInfo,
        username: text,
      },
    }));
  };
  handlePassword = (text) => {
    this.setState((prevState) => ({
      authInfo: {
        ...prevState.authInfo,
        password: text,
      },
    }));
  };

  _signInAsync = async (authInfo) => {
    console.log(
      "username: " + authInfo.username + "  password: " + authInfo.password
    );
    this.setState({
      loginProcess: true,
    });
    let url = "http://192.168.1.7:8080/auth";
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        username: authInfo.username,
        password: authInfo.password,
      }),
    };
    console.log("Sending Auth request");
    try {
      let response = await fetch(url, options);
      if (response.ok) {
        let data = await response.json();
        console.log(data.jwt);
        await AsyncStorage.setItem("userToken", data.jwt);
        this.props.navigation.navigate("App");
      } else {
        console.log("Auth failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  _signUp = () => {
    this.props.navigation.navigate("SignOut");
  };

  handleLogin = async (authInfo) => {};

  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block center style={styles.heading}>
          <Text
            h1
            style={{ marginBottom: theme.SIZES.BASE / 2 }}
            color={argonTheme.COLORS.WHITE}
          >
            The Food-App
          </Text>
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around">
            <Block>
              <Block center>
                <Input
                  borderless
                  placeholder="Email"
                  value={this.state.authInfo.username}
                  onChangeText={this.handleUsername}
                  iconContent={
                    <Icon
                      size={16}
                      color={argonTheme.COLORS.ICON}
                      name="ic_mail_24px"
                      family="ArgonExtra"
                      style={styles.inputIcons}
                    />
                  }
                />
              </Block>
              <Block center>
                <Input
                  password
                  borderless
                  value={this.state.authInfo.password}
                  placeholder="Password"
                  onChangeText={this.handlePassword}
                  iconContent={
                    <Icon
                      size={16}
                      color={argonTheme.COLORS.ICON}
                      name="padlock-unlocked"
                      family="ArgonExtra"
                      style={styles.inputIcons}
                    />
                  }
                />
              </Block>
              <Block center>
                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => this._signInAsync(this.state.authInfo)}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Login
                </Button>
              </Block>
            </Block>
            <Block center>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.SECONDARY}
                /* change to function that sends api request */
                onPress={() => this._signUp()}
                textStyle={{ color: argonTheme.COLORS.BLACK }}
              >
                Sign Up
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  heading: {
    zIndex: 2,
    position: "relative",
    marginTop: "-90%",
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: "relative",
    marginTop: "-70%",
  },
  title: {
    marginTop: "-5%",
  },
  subTitle: {
    marginTop: 20,
  },
  inputIcons: {
    marginRight: 12,
  },
});

export default Onboarding;
