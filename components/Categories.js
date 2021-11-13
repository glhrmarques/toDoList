import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function Catergories(){

    const pages = [
        {text: 'something 1', key:1},
        {text: 'something 2', key:2},
        {text: 'something 3', key:3},
        {text: 'something 4', key:4},
        {text: 'something 5', key:5},
        {text: 'something 6', key:6},
    ]
    
    return (
        
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        > 
            {pages.map((item,index) => (
                <View style={styles.pagesWrapper}> 
                    <View style={styles.circle} />
                    <Text style={styles.circleText}>{item.text}</Text>
                </View>
            ))}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    
    pagesWrapper: {
     marginTop: 48,
     marginHorizontal: 16,
     alignItems: 'center'
    },

    circle: {
        padding: 40,
        backgroundColor: '#f07167',
        borderRadius: 80,
        opacity: 0.3
    },

    circleText: {
        marginTop: 8,
        fontWeight: 'bold',

    }
})

