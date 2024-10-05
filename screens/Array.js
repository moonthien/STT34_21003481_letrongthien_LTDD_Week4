import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';

import React, { useState } from 'react'

export default function Array() {
    const [array, setArray] = useState([5, 6, 7])

    function onPress() {
        console.log[array]
        const array1 = array.map((item) => item + 1);
        setArray([...array, ...array1]);
    }

    return (
        <ScrollView>
            <View>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={styles.buttonText}>Press Here</Text>
                </TouchableOpacity>
                {
                    array.map(item =>
                        <Text>
                            {item}
                        </Text>
                    )
                }
            </View>
        </ScrollView>
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