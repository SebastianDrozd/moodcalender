import React, { useEffect, useState } from "react";
import { FlatList, View, Text,StyleSheet } from "react-native";
import { getMoods } from "../../database/tables";
import MoodItem from "./MoodItem";

const MoodList = ({refresh}) => {
    
  const [moods, setMoods] = useState([]);
  useEffect(() => {
    console.log("refresh in moodlist",refresh)
    getMoods((moods) => {
      console.log("these are the mods", moods);
      setMoods(moods);
    });
  }, [refresh]);



    const renderItem = ({ item }) => {
        return (
          <MoodItem entry={item} />
        );
      };

  return (
    <FlatList
      data={moods}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ width: "100%", padding: 16 }}
    />
  );
};

const styles = StyleSheet.create({
    moodItem: {

    },
});

export default MoodList;
