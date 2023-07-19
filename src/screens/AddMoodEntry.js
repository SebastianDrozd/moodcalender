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

const AddMoodEntry = ({navigation ,route}) => {
  
  const {setRefresh,refresh} = route.params;
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
    insertMood(currentDate,currentTime,selectedMood,description);
    setRefresh(!refresh);
    navigation.navigate({
      name: 'Home',
      params: { refresh: !refresh},
      merge: true,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling today?</Text>
      <View style={styles.moodSelection}>
        <TouchableOpacity
          onPress={() => setSelectedMood("horrible")}
          style={selectedMood == "horrible" && styles.selected}
        >
          <Image
            style={styles.iconImage}
            source={require("../../assets/icons/5.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedMood("bad")}
          style={selectedMood == "bad" && styles.selected}
        >
          <Image
            style={styles.iconImage}
            source={require("../../assets/icons/4.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedMood("meh")}
          style={selectedMood == "meh" && styles.selected}
        >
          <Image
            style={styles.iconImage}
            source={require("../../assets/icons/3.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedMood("decent")}
          style={selectedMood == "decent" && styles.selected}
        >
          <Image
            style={styles.iconImage}
            source={require("../../assets/icons/2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedMood("happy")}
          style={selectedMood == "happy" && styles.selected}
        >
          <Image
            style={styles.iconImage}
            source={require("../../assets/icons/1.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTime}>
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={styles.label}>{currentDate}</Text>
            {/* Date picker component or other date selection mechanism */}
            <DateTimePickerModal
              isVisible={displayCalendar}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              maximumDate={maximumDate}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.dateTime}>
          <TouchableOpacity onPress={showTimePicker}>
            <Text style={styles.label}>{currentTime}</Text>
          </TouchableOpacity>
          {/* Time picker component or other time selection mechanism */}
          <DateTimePickerModal
            isVisible={displayTime}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
          />
        </View>
      </View>
      <View style={styles.noteContainer}>
        <Text style={styles.label}>Note</Text>
        <TextInput
          style={styles.noteInput}
          multiline
          value={description}
          onChangeText={setDescription}
          placeholder="Write about your day..."
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
  moodSelection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
    marginTop: 16,
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 50,
    marginBottom: 16,
  },
  dateTime: {
    flex: 1,
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 8,
  },
  noteContainer: {
    marginBottom: 32,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 8,
    padding: 12,
    height: 120,
  },
  submitButton: {
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  selected: {
    borderColor: "#50e0ff",
    borderWidth: 2,
    borderRadius: 10,
  },
});


export default AddMoodEntry;
