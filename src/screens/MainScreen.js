import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import axios from "axios";
import TopDateBar from "../components/TopDateBar";
import AddMood from "../components/AddMood";
const MainScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://10.0.0.234:3000/api/v1/quotes/random"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
        <TopDateBar/>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Quote of the day!</Text>
        {data ? <Text style={styles.quote}>{data.quote_body}</Text> : <Text>loading...</Text>}
      </View>
      <View style={styles.addMod}>
      <AddMood/>
      </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: StatusBar.currentHeight+10,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    padding: 20,
    backgroundColor: "#50e0ff",
    borderRadius: 10,
    width: "90%",
  },
  header: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 10,
    textAlign: "center",
    color: "#fff",
    textDecorationLine: "underline",
  },
  quote:{
        fontSize: 18,
        lineHeight: 25,
        fontWeight: 500,
        color: 'white',
  },
  addMod: {
    marginTop: 20,
    width: '90%',
  }
});

export default MainScreen;
