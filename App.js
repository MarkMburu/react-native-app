import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";


export default function App() {
  const [courseGoals,setCourseGoals ] = useState([])
  const [isAddMode,setIsAddMode] = useState(false)
 
  const addGoalHandler =(enteredGoal) =>{
    if(enteredGoal.length === 0){
      return;
    }
      setCourseGoals(currentGoals =>
         [...courseGoals,{id:Math.random().toString(),value: enteredGoal}])
         setIsAddMode(false);
  }
  const removeGoalHandler = (goalid) =>{
    console.log("TO BE DELETED:::", goalid)
    console.log(courseGoals)
     setCourseGoals(currentGoals => {
       return currentGoals.filter((goal) => goal.id !== goalid)
     })
     console.log("After rerender",courseGoals)
  }
  const cancelGoalHandler =() =>{
    setIsAddMode(false);
  }
  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode}
       addGoalHandler={addGoalHandler} 
       onCancel={cancelGoalHandler}
       />
      <FlatList
      // Key exrtractor property to extract ids and keys from data that is passed
      keyExtractor={(item,index)=> item.id }
       data={courseGoals} renderItem={itemData =>(
         <GoalItem id={itemData.item.id} onDelete={removeGoalHandler}
          itemData={itemData.item.value}/>
      )} >
    
      </FlatList >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10
  },
  listItem:{
    marginVertical: 10,
    padding: 10,
    backgroundColor:"#ccc",
    borderColor:"black",
    borderWidth: 1
  }
}); 