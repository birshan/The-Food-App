import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  AsyncStorage
} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { Block, Text, theme } from "galio-framework";
import { Images, argonTheme } from "../constants";
const { width, height } = Dimensions.get("screen");
import _ from "lodash";
import { FetchRequest } from "../functions/API/FetchRequest";
import { serverURL } from "../constants/api";

class LogFoodSearch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      userData: {
        firstName: "",
        lastName: "",
        email: "",
      },
      //foods which are appearing on the search screen temp
      data: [],
      mealData: [],
      filteredData: [],
      error: null,
      searchTerm: "",
      value: ''
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
          data: data,
          filteredData: data,
          loading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }

    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then((responseJson) => {
    //     this.setState({
    //       loading: false,
    //       data: responseJson,
    //       filteredData: responseJson
    //     })
    //   })
    //   .catch(error => console.log(error)) //to catch the errors if any
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };



  searchFilterFunction = text => {
    const search = text.toLowerCase();

    this.setState({
      value: search,
      filteredData: this.state.data.filter(
        item =>
          (item.foodName.toString().toLowerCase().includes(search))
      )
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        lightTheme
        round
        placeholder="Type to Search Food..."
        value={this.state.value}
        onChangeText={text => this.searchFilterFunction(text)} // function to capture the text
      />
    );
  };

  onPress = async (id, foodName) => {
    const url = serverURL + "/api/meal/" + foodName;
    try {
      const token = await AsyncStorage.getItem("userToken");
      let request = new FetchRequest("SAVE", "/api/meal", token);
      let response = request.saveMeal(foodName,100);
      if (response.ok) {
        console.log(response);
        alert("Added to your meal list");
      } else {
        console.log("Error occured");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
    return;
  }

  /*
  //TODO: ADDING MEAL TO USERS MEAL LOG API REQUEST NOT IMPLEMENTED HERE
  onPress = async (id,foodName) => {
    const url = "http://192.168.1.6:5000/upload_image/";
    const options = {
      headers: {
        "Content-Type": "form-data",
      },
      method: "POST",
      body: url + id + "/" + email,
    };
    console.log(options);

    await fetch(url, options)
      .then((response) => {
        if (response.ok) {
          console.log(response);
          alert("Added food to your meal list");
        } else {
          console.log("Error occured");
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
    return;
  }
   */

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    else {
      return (
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.bgContainer}
            imageStyle={styles.Background}
          >
            <ScrollView>
              <Block flex>
                <View style={styles.container}>
                  <FlatList
                    keyExtractor={item => item.mealID.toString()}
                    data={this.state.filteredData}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => this.onPress(item.mealID.toString(), item.foodName.toString())}>
                        <ListItem
                          title={item.foodName}
                        />
                      </TouchableOpacity>
                      //<Text style={styles.lightText, { fontSize: 20 }}>{item.name} {item.email}</Text>
                    )}
                    extraData={this.state}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                  />
                </View>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  bgContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  Background: {
    width: width,
    height: height / 2
  }
});
export default LogFoodSearch;