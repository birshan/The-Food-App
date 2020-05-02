import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
import Header from "../components/Header";

class ViewProfile extends React.Component {
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
    };
  }
  componentDidMount() {
    /* Get the param from professional screen */
    // const { params } = this.props.navigation.state;
    // const { id } = params ? params.id : null;
    // const { email } = params ? params.email : null;

    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.1,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
    );
  };
  renderItem = (data) => (
    /*<View>
            <Text style={styles.lightText, { fontSize: 30,color:'#7d0e6a'}}>{data.item.name}</Text>
            <View>
                <Text style={styles.lightText, { color: '#9404d1', textAlign:'right'}}>{data.item.email}</Text>
                <Text style={styles.lightText, { color: '#9404d1', textAlign:'right'}}>{data.item.phone}</Text>
            </View>
        </View>*/

    <TouchableOpacity style={styles.list}>
      <Text style={(styles.lightText, { fontSize: 30, color: "#7d0e6a" })}>
        {data.item.name}
      </Text>
      <View>
        <Text
          style={(styles.lightText, { color: "#9404d1", textAlign: "right" })}
        >
          {data.item.email}
        </Text>
        <Text
          style={(styles.lightText, { color: "#9404d1", textAlign: "right" })}
        >
          {data.item.phone}
        </Text>
      </View>
    </TouchableOpacity>
  );
  render() {
    /* Get the param from professional screen */
    const { params } = this.props.navigation.state;
    const id = params ? params.id : null;
    const email = params ? params.email : null;

    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text bold size={28} color="#32325D">Hello {email}</Text>
          <Text>Id: {email}</Text>
          <Text>Email: {email}</Text>
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
        />
        <Button 
          title="Back to Professional"
          color="#000000"
          onPress={() => this.props.navigation.push('ProfScreen')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ededed",
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff",
  },
});
export default ViewProfile;
