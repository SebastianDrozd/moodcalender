import React from 'react'
import { Button,View,StyleSheet, Pressable ,Text,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
const AddMood = () => {
    const navigation = useNavigation();
    const onPress = () => {
        console.log("pressed")
        navigation.navigate('AddMoodEntry');
    }
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.iconContainer}>
      <Ionicons name="add-circle-outline" size={40} color="white" />
      </View>
      <View style={styles.textDiv}>
      <Text style={styles.buttonText}>How are you feeling today?</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: '#A70FF0',
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 24,
      flexDirection: 'row', // Arrange icon and text in a row
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginBottom: 16,
    },
    iconContainer: {
       // Add spacing between icon and text
    },
    textDiv: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
      fontSize: 16,
      color: '#ffffff',
      fontWeight: 'bold',
    },
  });
  
export default AddMood