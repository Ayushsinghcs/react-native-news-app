import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";

import Time from "../../Time/Time";
export default function NewsItem(props) {
  const { data } = props;
  const [scaleValue] = React.useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 600,
      delay: props.index * 350,
      useNativeDriver: true,
    }).start();
  }, []);
  const handlePress = () => {
    const { url, title } = props.data;
    props.onPress({ url, title });
  };

  return (
    <Animated.View style={{ opacity: scaleValue }} use>
      <View
        style={{
          height: Dimensions.get("window").height * 0.5,
        }}
      >
        <Image style={styles.image} source={{ uri: data.urlToImage }} />
      </View>

      <View style={styles.outer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <View style={styles.lastSection}>
          <Text style={styles.source}>{"~ " + data.source.name + " /"}</Text>
          <Time time={data.publishedAt} style={styles.source} />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={handlePress}>
            <ImageBackground
              source={require("../../../assets/image.png")}
              style={styles.imageBackground}
            >
              <View style={styles.footerContainer}>
                <Text style={styles.footerContent} numberOfLines={1}>
                  {data.content}
                </Text>
                <Text style={styles.clickHere}>Click here for more......</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outer: {
    padding: 15,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.5,
  },
  image: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "grey",
    marginTop: 20,
  },
  footer: {
    width: Dimensions.get("window").width,
    bottom: 0,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    paddingRight: 10,
    height: 100,
  },
  imageBackground: {
    opacity: 0.8,
  },
  footerContainer: {
    backgroundColor: "rgba(0,0,0,1)",
    padding: 10,
  },
  footerContent: {
    color: "white",
    fontSize: 12,
  },
  source: {
    fontSize: 14,
    color: "grey",
    marginRight: 10,
  },
  lastSection: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  clickHere: {
    fontSize: 13,
    color: "white",
    marginTop: 5,
  },
});
