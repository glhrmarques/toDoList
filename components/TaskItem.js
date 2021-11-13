import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

export default function TaskItem({item, deleteHandler}){
    return (
        <Pressable style={styles.button} onPress={() => deleteHandler(item.key)}>
            <Text style={styles.buttonText}>{item.text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({

    button: {
     backgroundColor: '#cecece',
     padding: 16,
     marginTop: 28,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },


})