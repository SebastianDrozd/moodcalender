import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { insertMood } from "../../database/tables";

const AddMoodEntry = () => {
  const maximumDate = moment(currentDate).toDate();
  const [currentDate, setCurrentDate] = useState(new Date().toDateString()); // Add this
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  ); // Add this
  const [selectedMood, setSelectedMood] = useState(null);
  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [displayTime, setDisplayTime] = useState(false);
  const [description, setDescription] = useState("");


  const hideDatePicker = () => {
    setDisplayCalendar(false);
  };

  const handleConfirm = (date) => {
    console.log("Selected date:", date);
    setCurrentDate(date.toDateString());
    hideDatePicker();
  };

  const showDatePicker = () => {
    setDisplayCalendar(true);
  };

  const showTimePicker = () => {
    setDisplayTime(true);
  };

  const hideTimePicker = () => {
    setDisplayTime(false);
  };
  const handleTimeConfirm = (time) => {
    console.log("Selected time:", time);
    setCurrentTime(time.toLocaleTimeString());
    hideTimePicker();
  };
  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };
  const handleSubmit = () => {
    console.log("submitted");
    console.log(currentDate);
    console.log(currentTime);
    console.log(selectedMood);
    console.log(description);
    insertMood(currentDate,currentTime,selectedMood,description)
  };
  return (
    <View>
      <DateTimePickerModal
        isVisible={displayCalendar}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={maximumDate}
      />
      <DateTimePickerModal
        isVisible={displayTime}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
      <View>
        <Text style={styles.header}>How are you?</Text>
      </View>
      <View>
        <View style={styles.dateTime}>
          <Pressable onPress={showDatePicker}>
            <Text style={styles.date}>{currentDate}</Text>
          </Pressable>
          <Pressable onPress={showTimePicker}>
            <Text style={styles.date}>{currentTime}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.moodIconRow}>
        <TouchableOpacity
          onPress={() => handleMoodSelect("horrible")}
          style={selectedMood == "horrible" && styles.selected}
        >
          <View style={styles.horrible}>
            <Image
              style={styles.iconImage}
              source={require("../../assets/icons/5.png")}
            />
            <Text style={styles.iconSubText}>Horrible</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMoodSelect("unhappy")}
          style={selectedMood == "unhappy" && styles.selected}
        >
          <View style={styles.unhappy}>
            <Image
              style={styles.iconImage}
              source={require("../../assets/icons/4.png")}
            />
            <Text style={styles.iconSubText}>Unhappy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMoodSelect("meh")}
          style={selectedMood == "meh" && styles.selected}
        >
          <View style={styles.meh}>
            <Image
              style={styles.iconImage}
              source={require("../../assets/icons/3.png")}
            />
            <Text style={styles.iconSubText}>Meh</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMoodSelect("decent")}
          style={selectedMood == "decent" && styles.selected}
        >
          <View style={styles.decent}>
            <Image
              style={styles.iconImage}
              source={require("../../assets/icons/2.png")}
            />
            <Text style={styles.iconSubText}>Decent</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMoodSelect("happy")}
          style={selectedMood == "happy" && styles.selected}
        >
          <View style={styles.happy}>
            <Image
              style={styles.iconImage}
              source={require("../../assets/icons/1.png")}
            />
            <Text style={styles.iconSubText}>Happy</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textInputDiv}>
        <TextInput
          style={styles.input}
          placeholder="Add a note about your day!"
          onChangeText={(newText) => {
            setDescription(newText);
          }}
        />
      </View>
      <View style={styles.submit}>
        <Pressable style={styles.subPress} onPress={handleSubmit}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 700,
    marginTop: 10,
    textAlign: "center",
  },
  dateTime: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  date: {
    fontSize: 18,
    fontWeight: 400,
    textDecorationLine: "underline",
  },
  moodIconRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  iconSubText: {
    fontSize: 12,
    fontWeight: 400,
    textAlign: "center",
  },
  selected: {
    borderColor: "#50e0ff",
    borderWidth: 2,
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  submit: {
    backgroundColor: "#50e0ff",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddMoodEntry;
