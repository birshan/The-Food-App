import React from "react";
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    TouchableOpacity
} from "react-native";
//galio
import { Block, Text, theme } from "galio-framework";
import Header from "../components/Header";

class NutritionSum extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Source Listing",
            headerStyle: { backgroundColor: "#9400D3" },
            headerTitleStyle: { textAlign: "center", flex: 1 }
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
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }
    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        );
    }
    renderItem = (data) =>

        <View style={styles.list}>
            <Text style={styles.lightText, { fontSize: 30 }}>{data.item.name}</Text>
            <Text style={styles.lightText, { color: 'blue', textAlign: 'right' }}>{data.item.email}</Text>
        </View>
    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9400D3"
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9400D3"
    },
    list: {
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
    }
});
export default NutritionSum;