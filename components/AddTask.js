import React, { useState } from 'react'
import  { Pressable, Text, View, StyleSheet, TextInput, Button } from 'react-native'

export default function AddTask({addHandler}) {
    
    const [text, setText] = useState('');
    
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View style={styles.inputWrapper}>
            <TextInput
                style={styles.input}
                placeholder={'Create your task'}
                onChangeText={changeHandler}       
            />

            <Pressable style={styles.button} onPress={() => addHandler(text)}>
                <Text style={styles.buttonText}>Add new task</Text>
            </Pressable>
            <View style={styles.divisor}/>
        </View>
    )
};

const styles = StyleSheet.create({
  
    input: {
        borderWidth: 1,
        padding: 18,
        borderRadius: 8,
        marginTop: 28,
        borderColor: '#3d3d3d',

    },

    button: {
        padding: 18,
        backgroundColor: '#f07167',
        marginTop: 20,
        borderRadius: 8,

    },

    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fafafa',
    }
})