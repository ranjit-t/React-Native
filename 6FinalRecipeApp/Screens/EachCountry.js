import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { recipes } from "../Data/Recipes";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EachCountry = ({ route }) => {
  const countryRecipes = recipes.filter(
    (recipe) => recipe.countryID === route.params.id
  );

  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.heading}>Recipes from {route.params.country}</Text>
      </View>
      <View>
        {countryRecipes.length > 0 ? (
          countryRecipes.map((recipe) => {
            return (
              <View style={styles.recipesElevation} key={recipe.recipeID}>
                <Pressable
                  // android_ripple={{ color: "#245953" }}
                  style={({ pressed }) =>
                    pressed
                      ? [styles.normalView, styles.pressed]
                      : [styles.normalView]
                  }
                  onPress={() => {
                    navigation.navigate("Recipe", {
                      id: 1,
                      country: "country",
                      recipeID: recipe.recipeID,
                    });
                  }}
                >
                  <View style={styles.recipes}>
                    <Image
                      source={{
                        uri:
                          recipe.photoURL ||
                          "https://static.vecteezy.com/system/resources/previews/015/239/031/non_2x/set-of-food-hand-drawn-line-art-illustration-for-design-element-simple-drawing-for-kids-design-theme-vector.jpg",
                      }}
                      style={{ width: "95%", height: 200 }}
                    />
                    <Text style={styles.para}>{recipe.title}</Text>
                  </View>
                </Pressable>
              </View>
            );
          })
        ) : (
          <View style={styles.recipes}>
            <Text style={styles.para}>Sorry No Recipes Found</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    textAlign: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 10,
  },
  para: {
    fontSize: 20,
    paddingTop: 10,
  },
  recipes: {
    marginVertical: 10,
    textAlign: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  recipesElevation: {
    marginVertical: 10,
    borderRadius: 0,
    shadowColor: "#black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2, // This is only used for Android
  },
  normalView: {
    opacity: 1,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default EachCountry;
