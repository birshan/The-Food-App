import React from "react";
//import { createStackNavigator, createAppContainer, StackNavigator, } from 'react-navigation';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  Button,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

//import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
//import { NutritionSum } from "../screens/NutritionSum";
import { FetchRequest } from "../functions/API/FetchRequest";
import { serverURL } from "../constants/api";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //jessica jones is placeholder for production
    this.state = {
      loading: true,
      dataSource: [],
      userData: {
        firstName: "Jessica",
        lastName: "Jones",
        email: "jessica@dieter.com",
      },
      mealData: [],
      jwtToken: "",
    };
  }
  async componentDidMount() {
    try {
      let token = await AsyncStorage.getItem("userToken");
      // console.log(token);
      let request = new FetchRequest("GET", "/user", token);
      let response = await request.getUserInfo();
      if (!response.ok) {
        //handle errors
        console.log(response);
        alert("Error occured getting user data");
      } else {
        let data = await response.json();
        this.setState({
          userData: data,
        });
      }
      let mealRequest = new FetchRequest("GET", "/api/meal", token);
      let mealResponse = await mealRequest.getAllMeals();
      if (mealResponse.ok) {
        let data = await mealResponse.json();
        this.setState({
          mealData: data,
          loading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
    // console.log(this.state.mealData);
    // const url = "https://jsonplaceholder.typicode.com/users";
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     this.setState({
    //       loading: false,
    //       dataSource: responseJson,
    //     });
    //   })
    //   .catch((error) => console.log(error)); //to catch the errors if any
  }
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

  // renderItem = (data) => (
  //   <View style={styles.list}>
  //     <TouchableOpacity onLongPress={() => this.removeItemValue(data.item.id)}>
  //       <Text bold size={18} color="#2963F6">
  //         {data.item.name}
  //       </Text>
  //       <Text>{data.item.email}</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
  //TODO: COMMENTED OUT FOR EASY DEVELOPMENT
  renderItem = (data) => (
    <View style={styles.list}>
      <TouchableOpacity
        style={styles.listItem}
        onLongPress={() => this.removeItemValue(data.item.mealID)}
      >
        <Text bold size={18} color="#2963F6">
          Food: {data.item.foodName}
        </Text>
        <Text>Date: {data.item.date}</Text>
        <Text>Calories: {data.item.calories} kcal</Text>
      </TouchableOpacity>
    </View>
  );

  // removeItemValue = async (id) => {
  //   const filteredData = this.state.dataSource.filter((item) => item.id !== id);
  //   this.setState({ dataSource: filteredData });

  //   const url = serverURL + "/api/meal/" + id;
  //   try {
  //     const token = await AsyncStorage.getItem("userToken");
  //     let request = new FetchRequest("DELETE", "/api/meal", token);
  //     let response = request.deleteMeal(id);
  //     if (response.ok) {
  //       console.log(response);
  //       alert("Removed food from your meal list");
  //     } else {
  //       console.log("Error occured");
  //       console.log(response);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return;
  // };

  //TODO: COMMENTED OUT FOR EASY DEVELOPMENT
  removeItemValue = async (mealID) => {
    const filteredData = this.state.mealData.filter(
      (item) => item.mealID !== mealID
    );
    this.setState({ mealData: filteredData });

    const url = serverURL + "/api/meal/" + mealID;
    try {
      const token = await AsyncStorage.getItem("userToken");
      let request = new FetchRequest("DELETE", "/api/meal", token);
      let response = request.deleteMeal(mealID);
      if (response.ok) {
        console.log(response);
        alert("Removed food from your meal list");
      } else {
        console.log("Error occured");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
    return;
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: "25%" }}
            >
              <Block flex style={styles.profileCard}>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                      {this.state.userData.firstName +
                        " " +
                        this.state.userData.lastName}
                    </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                      {this.state.userData.email}
                    </Text>
                    <Block>
                      {/* <View style={styles.container}>
                        <FlatList
                          data={this.state.dataSource}
                          ItemSeparatorComponent={this.FlatListItemSeparator}
                          renderItem={(item) => this.renderItem(item)}
                          keyExtractor={(item) => item.id.toString()}
                        />
                      </View>
                      //TODO: COMMENTED OUT FOR EASY DEVELOPMENT */}
                      <View style={styles.container}>
                        <FlatList
                          data={this.state.mealData}
                          ItemSeparatorComponent={this.FlatListItemSeparator}
                          renderItem={(item) => this.renderItem(item)}
                          keyExtractor={(item) => item.mealID.toString()}
                        />
                      </View>
                    </Block>
                  </Block>

                  {/* <Block>
                    <Button title="Go to Nutrition Summary" onPress={() => navigate('Nutrition')}/>
                  </Block> */}
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  smallButton: {
    width: 55,
    height: 28,
  },
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
  },
  nameInfo: {
    marginTop: 35,
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  container: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff",
  },
});

export default Profile;
