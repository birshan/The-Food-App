import React from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Block, Button } from "galio-framework";
import { theme, Text } from "galio-framework";
import { argonTheme } from "../constants";
import { Input, Icon } from "../components/";
import { FetchRequest } from "../functions/API/FetchRequest";
export default class CreateMealLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodData: {
        foodName: "pizza",
        servingDescription: "140g per slice",
        servingWeight: 140.0,
        calories: 525,
        carbWeight: 50.0,
        fatWeight: 30.0,
        sugarsWeight: 10.0,
      },
      estWeight: "",
      loading: false,
      jwt: "",
    };
  }

  handleInput = (text) => {
    this.setState((prevState) => ({
      ...prevState,
      estWeight: text,
    }));
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem("userToken");
    this.setState({
      jwt: token,
    });
    const { params } = this.props.navigation.state;
    const foodName = params ? params.foodName : null;
    const servingDescription = params ? params.servingDescription : null;
    const servingWeight = params ? params.servingWeight : null;
    this.setState((prevState) => ({
      ...prevState,
      foodData: {
        foodName: foodName,
        servingDescription: servingDescription,
        servingWeight: servingWeight,
      },
    }));
    console.log(this.state.foodData);
  }

  async saveMeal(foodName, foodWeight) {
    this.setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    if (isNaN(foodWeight)) {
      alert("Error: Weight is not a number");
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        estWeight: this.state.foodData.servingWeight,
      }));
      return;
    }

    if (parseInt(foodWeight) === 0) {
      alert("Error: Weight should be greater than 0");
      this.setState((prevState) => ({
        ...prevState,
        estWeight: this.state.foodData.servingWeight,
        loading: false,
      }));
      return;
    }

    let request = new FetchRequest("POST", "/api/meal", this.state.jwt);
    try {
      let response = await request.saveMeal(foodName, parseInt(foodWeight));
      if (response.ok) {
        console.log(response);
        alert("Meal Added");
        this.setState({
          loading: false,
        });
      }
      this.props.navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <Block flex space={"between"} style={styles.container}>
        <Block flex>
          <Block left style={styles.weighInputContaier}>
            <Text size={18} color={"white"}>
              Enter estimated meal weight: (grams)
            </Text>
            <Input
              placeholder="0"
              iconContent={<Block />}
              type={"number-pad"}
              onChangeText={this.handleInput}
              value={`${this.state.estWeight}`}
            />
          </Block>
          <Block>
            <Block style={styles.horizontal}>
              <Block style={styles.infoContainer}>
                <Text style={styles.smallHeading}>Prediction</Text>
                <Text style={styles.descText}>
                  {this.state.foodData.foodName}
                </Text>
              </Block>
              <Block style={styles.infoContainer}>
                <Text style={styles.smallHeading}>Serving Weight</Text>
                <Text style={styles.descText}>
                  {this.state.foodData.servingWeight}g
                </Text>
              </Block>
            </Block>
            <Block>
              <Text style={styles.smallHeading}>Serving Description</Text>
              <Text style={styles.descText}>
                {this.state.foodData.servingDescription}
              </Text>
            </Block>
          </Block>
        </Block>
        <Block center style={styles.btnContainer}>
          <Button
            loading={this.state.loading}
            color={argonTheme.COLORS.SUCCESS}
            textStyle={{ color: argonTheme.COLORS.BLACK }}
            onPress={() =>
              this.saveMeal(this.state.foodData.foodName, this.state.estWeight)
            }
          >
            Save Meal
          </Button>
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
  weighInputContaier: {
    padding: "3%",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "4%",
  },
  smallHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descText: {
    fontSize: 16,
  },
  infoContainer: {
    width: "45%",
  },
  btnContainer: {
    padding: "3%",
    marginBottom: "5%",
  },
});
