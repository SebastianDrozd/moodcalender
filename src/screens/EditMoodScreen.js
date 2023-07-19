import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons"; // Import icons from 'expo/vector-icons'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { updateMood } from "../../database/tables";
const EditMoodScreen = ({navigation,route}) => {
 
  const { mood } = route.params;
  console.log("this is route params",route.params)
  const {setRefresh,refresh} = route.params;
  const [selectedMood, setSelectedMood] = useState(mood.mood);
  const [date, setDate] = useState(mood.date);
  const [time, setTime] = useState(mood.time);
  const [note, setNote] = useState(mood.note);
  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [displayTime, setDisplayTime] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date().toDateString()); // Add this
  const maximumDate = moment(currentDate).toDate();

  const handleConfirm = (date) => {
    setDate(date.toDateString());
  };

  const showDatePicker = () => {
    setDisplayCalendar(true);
  };

  const hideDatePicker = () => {
    setDisplayCalendar(false);
  };

  const handleMoodSelection = (mood) => {
    setSelectedMood(mood);
  };

  const showTimePicker = () => {
    setDisplayTime(true);
  };

  const hideTimePicker = () => {
    setDisplayTime(false);
  };
  const handleTimeConfirm = (time) => {
    console.log("Selected time:", time);
    setTime(time.toLocaleTimeString());
    hideTimePicker();
  };
  const handleSubmit = () => {
    // Implement the submission logic here, e.g., saving the mood entry to the database
    console.log("this will be the new edited mood")
    console.log(selectedMood,date,time,note)
    updateMood({
        id: mood.id,
        date : date,
        time : time,
        mood : selectedMood,
        note : note
    },(success) => {
        if(success){
            console.log("successfully updated mood")
           navigation.goBack();
        }
        else{
            console.log("error updating mood")
        }
    })
    // You can navigate back to the main screen after successful submission
    // navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.moodSelection}>
        <TouchableOpacity
          onPress={() => handleMoodSelection("horrible")}
          style={selectedMood == "horrible" && styles.selected}
        >
          <Image
            style={styles.iconImage}
            source={require("../../assets/icons/5.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMoodSelection("bad")}
          style={selectedMood == "bad" && styles.selected}
        >
          <Image
            style={styles.iconImage}
            source={require("../../assets/icons/4.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMoodSelection("meh")}
          style={selectedMood == "meh" && styles.selected}
        >
          <Image
            style={styles.iconImage}
            source={require("../../assets/icons/3.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMoodSelection("decent")}
          style={selectedMood == "decent" && styles.selected}
        >
          <Image
            style={styles.iconImage}
            source={require("../../assets/icons/2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMoodSelection("happy")}
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
            <Text style={styles.label}>{date}</Text>
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
            <Text style={styles.label}>{time}</Text>
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
          value={note}
          onChangeText={setNote}
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
    marginBottom: 24,
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
    marginBottom: 16,
    marginLeft: 50,
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

export default EditMoodScreen;
