import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MoodOptionsModal from "./MoodOptionsModal";
import { deleteMood } from "../../database/tables";
const MoodItem = ({ entry }) => {
  const { date, time, mood, note,id } = entry;
  const [moodPic, setMoodPic] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (mood === "happy") {
      setMoodPic(require("../../assets/icons/1.png"));
    } else if (mood === "decent") {
      setMoodPic(require("../../assets/icons/2.png"));
    } else if (mood === "meh") {
      setMoodPic(require("../../assets/icons/3.png"));
    } else if (mood === "unhappy") {
      setMoodPic(require("../../assets/icons/4.png"));
    } else if (mood === "horrible") {
      setMoodPic(require("../../assets/icons/5.png"));
    }
  }, []);

  const setModalOn = () => {
    setModalVisible(true);
  };

  const handleDelete = () => {
    // Implement the delete logic using the selectedMood state
    // For example, delete the mood from the database
    console.log("This is mood that will be deleted",id)
    deleteMood(id, (success) => {
      if (success) {
        console.log('Mood deleted successfully');
        // Perform any additional actions after successful deletion, if needed
      } else {
        console.log('Failed to delete mood');
      }
      
    });
    
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.iconImage} source={moodPic} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.moodStatus}>{mood}</Text>
          <Text style={styles.note}>{note}</Text>
        </View>
      </View>
      <View style={styles.dotDiv}>
        <TouchableOpacity onPress={setModalOn}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color="black"
          />
        
        </TouchableOpacity>
        <MoodOptionsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onDelete={handleDelete}
        
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    width: 350,
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    marginRight: 8,
  },
  time: {
    fontSize: 14,
    color: "#666666",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  moodStatus: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#009688",
    marginBottom: 8,
  },
  note: {
    fontSize: 14,
    color: "#666666",
  },
  iconImage: {
    width: 50,
    height: 50,
  },
});

export default MoodItem;
