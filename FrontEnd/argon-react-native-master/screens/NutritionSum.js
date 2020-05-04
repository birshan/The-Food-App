import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
import Header from "../components/Header";
import { FetchRequest } from "../functions/API/FetchRequest";
import { serverURL } from "../constants/api";
import { argonTheme } from "../constants";

class NutritionSum extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Source Listing",
      headerStyle: { backgroundColor: "#9400D3" },
      headerTitleStyle: { textAlign: "center", flex: 1 },
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
      jwt: "",
    };
  }

  async componentDidMount() {
    try {
      let token = await AsyncStorage.getItem("userToken");
      let mealRequest = new FetchRequest("GET", "/api/meal", token);
      let mealResponse = await mealRequest.getAllMeals();
      if (mealResponse.ok) {
        let data = await mealResponse.json();
        this.setState({
          dataSource: data,
          loading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then((responseJson) => {
  //         this.setState({
  //             loading: false,
  //             dataSource: responseJson
  //         })
  //     })
  //     .catch(error => console.log(error)) //to catch the errors if any
  // }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
    );
  };
  renderItem = (data) => (
    <View style={styles.list}>
      <Text style={(styles.lightText, { fontSize: 30 })}>
        {data.item.foodName}
      </Text>
      <Text style={(styles.lightText, { color: "blue", textAlign: "right" })}>
        {data.item.calories} kcal
      </Text>
      <Text
        style={(styles.lightText, { color: "blue", textAlign: "right" })}
      >
        Fat Weight {data.item.fatWeight}
      </Text>
      <Text
        style={(styles.lightText, { color: "blue", textAlign: "right" })}
      >
        Carbohydrate Weight {data.item.carbWeight}
      </Text>
    </View>
  );
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.mealID.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: argonTheme.COLORS.PRIMARY,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: argonTheme.COLORS.PRIMARY,
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: argonTheme.COLORS.SECONDARY,
  },
});
export default NutritionSum;
