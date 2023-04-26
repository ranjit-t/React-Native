import { StyleSheet, View } from "react-native";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EachCountry from "./Screens/EachCountry";
import Favorites from "./Screens/Favorites";
import SingleRecipe from "./Screens/SingleRecipe";

const Drawer = createDrawerNavigator();

function DrawerNavigation({ route }) {
  // console.log(route.params.id, route.params.country);
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
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
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
          options={{
            // headerShown: false,
            title: "Recipe-Details",
            headerTitleAlign: "center",
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
            animationDuration: 100,
          }}
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
});
