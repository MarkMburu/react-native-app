import React from 'react';
import { StyleSheet,Text, View ,TouchableOpacity} from 'react-native';

function GoalItem(props) {
    const {itemData } = props;

    return (
        // Touchablehighlight TouchableNativeFeedback TouchableWithoutFeedback
        <TouchableOpacity activeOpacity={0.8} onPress={ props.onDelete.bind(this,props.id)}>
        <View style={styles.listItem}>
        <Text >{itemData}</Text>
        </View>
        </TouchableOpacity>
       

    )
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem:{
      marginVertical: 10,
      padding: 10,
      backgroundColor:"#ccc",
      borderColor:"black",
      borderWidth: 1
    }
  }); 