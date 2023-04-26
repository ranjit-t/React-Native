import { StyleSheet, View } from "react-native";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EachCountry from "./Screens/EachCountry";
import Favorites from "./Screens/Favorites";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Recipapp">
      <Drawer.Screen name="Countries" component={Country} />
      <Drawer.Screen name="Fav" component={Favorites} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Recipapp">
        <Stack.Screen
          name="Recipapp"
          component={Home}
          options={{
            title: "Recipapp",
            headerTitleStyle: styles.heading,
            headerStyle: styles.heading,
            headerTitleAlign: "center",
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
            animationDuration: 100,
          }}
        />
        {/* <Stack.Screen
          name="Country"
          component={EachCountry}
          options={{
            // headerShown: false,
            headerTitleAlign: "center",
            presentation: "modal",
            animationTypeForReplace: "push",
            animation: "slide_from_right",
            animationDuration: 100,
          }}
        /> */}
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{
            // headerShown: false,
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
  heading: {
    fontSize: 30,
    paddingTop: 40,
    textAlign: "center",
  },
});
