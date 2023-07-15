import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TopDateBar = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 since getMonth() returns zero-based index
  const currentYear = currentDate.getFullYear();
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{currentDate.toLocaleString('default', { month: 'long' })}</Text>
        <Text style={styles.dateText}>{currentDate.toLocaleString('default', { day: '2-digit' })},</Text>
        <Text style={styles.dateText}>{currentYear}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 50,
    backgroundColor: "#50e0ff",
    width: "100%",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dateContainer: {
    flexDirection: "row",
    jusrifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    fontSize: 18,
    fontWeight: 700,
    color: "white",
    marginRight: 3,
    },
});

export default TopDateBar;
