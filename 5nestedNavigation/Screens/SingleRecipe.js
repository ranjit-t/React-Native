import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { recipes } from "../Data/Recipes";

const SingleRecipe = ({ route }) => {
  //   console.log(route.params);
  const recipe = recipes.filter(
    (recipe) => recipe.recipeID === route.params.recipeID
  )[0];
  return (
    <View>
      <View style={styles.recipes}>
        <Image
          source={{ uri: recipe.photoURL }}
          style={{ width: "100%", height: 200 }}
        />
        <View style={styles.singlePara}>
          <Text style={styles.titleHeading}>Recipe : </Text>
          <Text style={styles.heading}>{recipe.title}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.titleHeading}>Method : </Text>
          <Text style={styles.heading}>{recipe.description}</Text>
        </View>
        <View style={styles.singlePara}>
          <Text style={styles.titleHeading}>Cooking Time : </Text>
          <Text style={styles.heading}>{recipe.duration} mins</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
  },
  singlePara: {
    flexDirection: "row",
  },
  recipes: {
    alignItems: "center",
  },
  description: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  titleHeading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 10,
  },
});

export default SingleRecipe;
