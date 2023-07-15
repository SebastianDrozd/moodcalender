import React from 'react'
import { Button,View,StyleSheet, Pressable ,Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
const AddMood = () => {
    const navigation = useNavigation();
    const onPress = () => {
        console.log("pressed")
        navigation.navigate('AddMoodEntry');
    }
  return (
    <View>
        <Pressable style={styles.addButton} onPress={onPress}>
            <Text style={styles.pressText}>How are you feeling today?</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    addButton: {
        borderRadius: 20,
        backgroundColor: "#50e0ff",
        borderRadius: 10,
        color: "#fff",
    },
    pressText: {
        fontSize: 18,
        fontWeight: 700,
        textAlign: "center",
        color: "#fff",  
        padding: 10,
    }
})
export default AddMood