import { StyleSheet, Pressable } from "react-native";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EachCountry from "./Screens/EachCountry";
import Favorites from "./Screens/Favorites";
import SingleRecipe from "./Screens/SingleRecipe";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { recipes } from "./Data/Recipes";

const Drawer = createDrawerNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();
  const [existingFavRecipes, setExistingFavRecipes] = useState([]);
  const [FavPressed, setFavPressed] = useState(false);
  // const [ForceLoad, setForceLoad] = useState(false);

  useEffect(() => {
    const gettingStorage = async () => {
      let localItems = await AsyncStorage.getItem("myRecipes");
      let parsedLocalItems = JSON.parse(localItems);
      setExistingFavRecipes(parsedLocalItems);
    };
    gettingStorage();
  }, [FavPressed]);

  const Favclick = async (id) => {
    const favRecipes = recipes.filter((recipe) => recipe.recipeID === id);
    const FavBool = existingFavRecipes.some((recipe) => recipe.recipeID === id);
    setFavPressed((prev) => !prev);

    if (FavBool === false) {
      let localItems = await AsyncStorage.getItem("myRecipes");
      if (localItems === null) {
        await AsyncStorage.setItem("myRecipes", JSON.stringify(favRecipes));
        let newItems = await AsyncStorage.getItem("myRecipes");
        console.log("added new items");
        console.log(JSON.parse(newItems));
      } else {
        localItems = [...JSON.parse(localItems), ...favRecipes];
        await AsyncStorage.setItem("myRecipes", JSON.stringify(localItems));
        let newItems = await AsyncStorage.getItem("myRecipes");
        console.log("added to existing items");
        console.log(JSON.parse(newItems));
      }
    } else {
      console.log(favRecipes);
      let localItems = JSON.parse(await AsyncStorage.getItem("myRecipes"));
      localItems = localItems.filter((item) => item.recipeID !== id);
      await AsyncStorage.setItem("myRecipes", JSON.stringify(localItems));
      let newItems = await AsyncStorage.getItem("myRecipes");
      console.log("removed then new items");
      console.log(JSON.parse(newItems));
    }
    setFavPressed((prev) => !prev);
  };

  //Drawer Function
  function DrawerNavigation({ route }) {
    return (
      <Drawer.Navigator
        initialRouteName="Country"
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          route={route}
          options={{ title: "Categories" }}
        />
        <Drawer.Screen
          name="Fav"
          component={Favorites}
          options={{ title: "Favorites" }}
          initialParams={{ FavPressed: FavPressed }}
        />
      </Drawer.Navigator>
    );
  }

  //Main App Return

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{
          headerStyle: styles.header,
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{
            headerShown: false,
            headerTitleAlign: "center",
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
            animationDuration: 100,
          }}
        />
        <Stack.Screen
          name="Country"
          component={EachCountry}
          options={{
            // headerShown: false,
            title: "Recipes",
            headerTitleAlign: "center",
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
            animationDuration: 100,
          }}
        />
        <Stack.Screen
          name="Recipe"
          component={SingleRecipe}
          options={({ route }) => ({
            title: "Recipe-Details",
            headerTitleAlign: "center",
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
            animationDuration: 100,
            headerRight: () => {
              return (
                <Pressable
                  onPress={() => {
                    Favclick(route.params.recipeID);
                  }}
                >
                  <Ionicons
                    name="star"
                    size={22}
                    style={
                      existingFavRecipes.some(
                        (recipe) => recipe.recipeID === route.params.recipeID
                      )
                        ? [styles.Ionicons, styles.Fav]
                        : [styles.Ionicons]
                    }
                  />
                </Pressable>
              );
            },
          })}
          // options={{
          //   title: "Recipe-Details",
          //   headerTitleAlign: "center",
          //   presentation: "modal",
          //   animationTypeForReplace: "push",
          //   animation: "slide_from_right",
          //   animationDuration: 100,
          //   headerRight: () => {
          //     return (
          //       <Pressable
          //         onPress={() => {
          //           setFavBool((prev) => !prev);
          //         }}
          //       >
          //         <Ionicons
          //           name="star"
          //           size={22}
          //           style={
          //             FavBool
          //               ? [styles.Ionicons, styles.Fav]
          //               : [styles.Ionicons]
          //           }
          //         />
          //       </Pressable>
          //     );
          //   },
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#245953",
  },
  Ionicons: {
    color: "white",
    alignItems: "center",
    opacity: 1,
  },
  Fav: {
    color: "red",
  },
});
