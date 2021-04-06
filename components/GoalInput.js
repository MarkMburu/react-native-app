import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput,Modal}
    from 'react-native';


function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState("");
    const handleChangeText = (enteredText) => {
        setEnteredGoal(enteredText)
    }
    const addGoal =()=>{
        props.addGoalHandler( enteredGoal)
        setEnteredGoal("")
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal"
                style={styles.input} onChangeText={handleChangeText}
                value={enteredGoal} />
             <View style={styles.buttonContainer}>
            <View style={styles.button}>
                 <Button title="CANCEL" color="red" onPress={props.onCancel} />
            </View>
            <View style={styles.button}>
            <Button title="add" onPress={ addGoal} />
            </View>
            
            </View>
        </View>
        </Modal>
        
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "80%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "60%"

    },
    button:{
        width: '40%' 
    }

});