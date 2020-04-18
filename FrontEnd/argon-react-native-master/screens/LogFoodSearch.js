import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Item,
  Input,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  ActivityIndicator,
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import _ from "lodash";
//galio
import { Block, Text, theme } from "galio-framework";

class LogFoodSearch extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = { text: '' };
  //     this.state = {
  //     dataSource: []
  //     }
  // }
  // renderItem = ({ item }) => {

  //     return (

  //         <Text>{item.title}</Text>

  //     )
  // }

  // fetchData(text) {
  //     this.setState({ text });
  //     const url = 'http://www.api.com/?s=';
  //     fetch(url + text)
  //         .then(response => response.json())
  //         .then((responseJson) => {
  //             this.setState({
  //                 dataSource: responseJson.Search,
  //             });
  //         })
  //         .catch((error) => {
  //             console.log(error);
  //         });
  // }

  // render() {
  //     return (
  //         <View style={styles.container}>
  //             <Text SearchBar rounded >
  //                 <Item>
  //                     <Icon name="search" />
  //                     <Input
  //                         placeholder="Type here to search"
  //                         onChangeText={(text) => {
  //                             this.fetchData(text);
  //                         }}
  //                     />
  //                 </Item>
  //                 <Button
  //                     onPress={() => {
  //                         { console.log(this.state.text) }
  //                     }
  //                     }
  //                 >
  //                     <Text>Search</Text>
  //                 </Button>
  //             </Text>
  //             <FlatList
  //                 style={{ flex: 1, width: 300 }}
  //                 data={this.state.dataSource}
  //                 keyExtractor={(item, index) => 'key' + index}
  //                 renderItem={this.renderItem}
  //             />
  //         </View>
  //     );
  // }

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      //foods which are appearing on the search screen temp
      data: [],
      error: null,
      query: "",
      //all the food
      fullData: [],
    };
  }

  contains = ({ name }, query) => {
    if (name.includes(query)) {
      return true;
    }

    return false;
  };

  fetchData(text) {
    this.setState({ text });
    const url = "http://www.api.com/?s=";
    fetch(url + text)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.Search,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    getFoods = (limit = 5, query = "") => {
      return new Promise((resolve, reject) => {
        if (query.length === 0) {
          resolve(_.take(foods, limit));
        } else {
          //const formattedQuery = query.toLowerCase();
          const results = _.filter(foods, (food) => {
            return contains(food, formattedQuery);
          });
          resolve(_.take(results, limit));
        }
      });
    };

    this.setState({ loading: true });

    getFoods(5, this.state.query)
      .then((foods) => {
        this.setState({
          loading: false,
          data: foods,
          fullData: foods,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  handleSearch = (text) => {
    const formatQuery = text.toLowerCase();
    const data = _.filter(this.state.fullData, (food) => {
      return contains(food, formatQuery);
    });
    this.setState({ query: formatQuery, data }, () => this.makeRemoteRequest());
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={this.handleSearch}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                title={`${item.name}`}
                avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
          />
        </View>
      </ScrollView>
    );
  }
}

export default LogFoodSearch;
