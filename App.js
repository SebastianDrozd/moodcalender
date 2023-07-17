import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import AddMoodEntry from "./src/screens/AddMoodEntry";
import { useEffect } from "react";
import { createTable } from "./database/tables";

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    createTable();
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{
            headerLeft: null,
            headerStatusBarHeight: 0,
            header: () => null,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="AddMoodEntry"
          component={AddMoodEntry}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
