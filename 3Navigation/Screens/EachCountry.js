import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { recipes } from "../Data/Recipes";

const EachCountry = ({ route }) => {
  const countryRecipes = recipes.filter(
    (recipe) => recipe.countryID === route.params.id
  );

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.heading}>Recipes from {route.params.country}</Text>
      </View>
      <View>
        {countryRecipes.length > 0 ? (
          countryRecipes.map((recipe) => {
            return (
              <View style={styles.recipes} key={recipe.recipeID}>
                <Text style={styles.heading}>{recipe.title}</Text>
                <Image
                  source={{ uri: recipe.photoURL }}
                  style={{ width: "100%", height: 200 }}
                />
              </View>
            );
          })
        ) : (
          <View style={styles.recipes}>
            <Text style={styles.para}>Sorry No Recipes Found</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    textAlign: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    paddingTop: 10,
  },
  para: {
    fontSize: 20,
    paddingTop: 10,
  },
  recipes: {
    marginTop: 10,
    textAlign: "center",
    alignItems: "center",
    paddingBottom: 10,
    borderTopColor: "grey",
    // borderBottomColor: "grey",
    // borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});

export default EachCountry;
