import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Modal,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import NewsItem from "./NewsItem/NewsItem";
import { getArticles } from "../../util";
import { WebView } from "react-native-webview";

export default class NewsItems extends React.Component {
  state = {
    newsData: [],
    isLoading: true,
    initialY: 0,
    modalVisible: false,
    modalData: null,
  };

  componentDidMount() {
    getArticles().then((data) => {
      this.setState({ newsData: data, isLoading: false });
    }),
      (error) => {
        Alert.alert("Error", "Something went wrong!");
      };
  }
  handleItem = (data) => {
    this.setState({ modalData: data, modalVisible: true });
  };
  handleModalClose = () => {
    this.setState({
      modalVisible: false,
      modalData: null,
    });
  };

  //
  render() {
    const modal = this.state.modalData;
    const displayView = this.state.isLoading ? (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{ marginTop: 10 }} children="Please Wait.." />
      </View>
    ) : (
      <FlatList
        horizontal={true}
        contentContainerStyle={{ flexGrow: 1 }}
        ref={(ref) => (this.flatList = ref)}
        data={this.state.newsData}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={16}
        renderItem={(item) => (
          <View key={item.index} style={styles.flatListView}>
            <NewsItem
              data={item.item}
              index={item.index}
              onPress={this.handleItem}
            />
          </View>
        )}
      />
    );
    return (
      <React.Fragment>
        {displayView}
        {modal !== null ? (
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={this.handleModalClose}
          >
            <View>
              <View style={{ backgroundColor: "black", opacity: 0.8 }}>
                <TouchableOpacity onPress={this.handleModalClose}>
                  <Image
                    source={require("../../assets/cross.png")}
                    style={{ marginTop: 2 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ height: Dimensions.get("window").height }}>
                <WebView
                  source={{
                    uri: modal.url,
                  }}
                />
              </View>
            </View>
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  flatListView: {
    flex: 1,
  },
  modalView: {
    margin: 20,
    height: Dimensions.get("window").height,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
