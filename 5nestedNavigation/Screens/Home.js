import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
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
          renderItem={(country) => {
            return (
              <View style={styles.flatListItem}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={[
                    styles.buttonContainer,
                    { backgroundColor: country.item.color },
                  ]}
                  onPress={() => {
                    handlePress(country.item.id, country.item.name);
                  }}
                >
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
  },
  textContainer: {
    fontSize: 30,
    color: "white",
    elevation: 10,
  },
  pressable: {
    width: 150,
    height: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: 150,
    height: 150,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
