import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function Count() {
    const [count, setCount] = useState(0);
    function onPress() {
        setCount(count + 1);
    }

    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.button} >
                <Text style={styles.buttonText}> Press Here </Text>
            </TouchableOpacity>

            < Text style={styles.titleText} > Count : {count} </Text>
        </View>
    );


}
const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: "blue",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 50
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }


});