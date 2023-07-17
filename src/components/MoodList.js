import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { getMoods } from "../../database/tables";

const MoodList = () => {
  const [moods, setMoods] = useState([]);
  useEffect(() => {
    getMoods((moods) => {
      console.log("these are the mods", moods);
      setMoods(moods);
    });
  }, []);



    const renderItem = ({ item }) => {
        return (
          <View style={{padding:10}}>
            <Text>{item.date} {item.time}</Text>
            <Text>{item.mood}</Text>
            <Text>{item.note}</Text>
          </View>
        );
      };

  return (
    <FlatList
      data={moods}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16,borderColor: "red", borderWidth: 1,marginTop:20 }}
    />
  );
};

export default MoodList;
