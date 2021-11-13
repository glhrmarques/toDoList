import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

export default function Header(props){
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>{props.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: '#0081a7',
        padding: 32,
    },

    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fafafa'
    },

})