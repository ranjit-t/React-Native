import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { countries } from "../Data/Recipes";

const Home = ({ navigation }) => {
  //Press Handler

  const handlePress = (id, country) => {
    navigation.navigate("Country", { id: id, country: country });
    // console.log(id);
  };
  return (
    <View style={styles.homeContainer}>
      <View style={{ height: "100%" }}>
        <FlatList
          style={styles.flatList}
          data={countries}
          keyExtractor={(country) => country.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={(country) => {
            return (
              <View style={styles.flatListItem}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={[
                    styles.buttonContainer,
                    // { backgroundColor: country.item.color },
                  ]}
                  onPress={() => {
                    handlePress(country.item.id, country.item.name);
                  }}
                >
                  <Image
                    source={{
                      uri: country.item.photoURL,
                    }}
                    style={{ width: 150, height: 100 }}
                  />
                  <Text style={styles.textContainer}>{country.item.name}</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    paddingTop: 40,
  },
  flatList: {
    display: "flex",
  },

  flatListItem: {
    margin: 15,
  },
  homeContainer: {
    height: "100%",
    textAlign: "center",
    alignItems: "center",
    // backgroundColor: "#404241",
    backgroundColor: "#fefefe",
  },
  textContainer: {
    fontSize: 20,
    color: "black",
    paddingBottom: 6,
  },
  pressable: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: 150,
    height: 125,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 5,
  },
});

export default Home;
