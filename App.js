import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainScreen from "./src/screens/MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import AddMoodEntry from "./src/screens/AddMoodEntry";
import { useEffect, useState } from "react";
import { createTable } from "./database/tables";
import EditMoodScreen from "./src/screens/EditMoodScreen";

const Stack = createStackNavigator();

export default function App() {
  const [refresh, setRefresh] = useState(false);
  
  useEffect(() => {
    createTable();
  },[])
  useEffect(() => {
    console.log("refresh was updated")
  },[refresh])

  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerStyle: {
          backgroundColor: '#39D0E3',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
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
      
          }}
          initialParams={{ setRefresh, refresh }}
        />
        <Stack.Screen
          name="AddMoodEntry"
          component={AddMoodEntry}
          initialParams={{ setRefresh, refresh }}
          />
          <Stack.Screen
          name="EditMoodEntry"
          component={EditMoodScreen}
          initialParams={{ setRefresh, refresh }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
