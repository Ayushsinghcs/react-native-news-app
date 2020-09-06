import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import NewsItems from "./component/NewsItems/NewsItems";
export default function App() {
  // React.useEffect(() => {
  //   const news = async () => {
  //     const response = await axios
  //       .get(
  //         "https://newsapi.org/v2/top-headlines?country=us&apiKey=79af8a0825ba4443adf9c1f76f8913cb"
  //         // "https://jsonplaceholder.typicode.com/photos",
  //       )
  //       .then((res) => {
  //         setData(res.data);
  //       });
  //   };
  //   news();
  // }, []);
  // const data = [
  //   {
  //     id: 1,
  //     title:
  //       "‘Can’t see heavens falling’ for need of elected Cong president: Khurshid ",
  //     description:
  //       "The reason for 60% of the new COVID-19 cases these days is that people are careless in following the epidemic prevention guidelines. They are interacting with each other closely in public and workplaces, Indore administration said",
  //     footerContent:
  //       "60% of new cases due to peoples carelessness: Indore administration",
  //   },
  //   {
  //     id: 2,
  //     title: "Ayush ",
  //     description:
  //       "The reason for 60% of the new COVID-19 cases these days is that people are careless in following the epidemic prevention guidelines. They are interacting with each other closely in public and workplaces, Indore administration said",
  //     footerContent:
  //       "60% of new cases due to peoples carelessness: Indore administration",
  //   },
  // ];
  // newsData.map((data) => {
  //   console.log(data.url);
  // });
  return (
    <View style={styles.container}>
      <NewsItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 35,
  },
});
