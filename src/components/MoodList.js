import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { getMoods } from "../../database/tables";
import MoodItem from "./MoodItem";
import { useFocusEffect } from "@react-navigation/native";

const MoodList = ({ refresh }) => {
  const [moods, setMoods] = useState([]);
  useEffect(() => {
    loadMoods();
  }, [refresh]);

  const loadMoods = () => {
    getMoods((moods) => {
      setMoods(moods);
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      loadMoods();
      console.log(moods);
    }, [])
  );

  const handleMoodDeleted = () => {
    // Called when a mood is deleted in the MoodItem component
    // Update the moods state to reflect the updated list after deletion
    loadMoods();
  };
  const renderItem = ({ item }) => {
    return <MoodItem entry={item} onMoodDeleted={handleMoodDeleted} />;
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
  moodItem: {},
});

export default MoodList;
