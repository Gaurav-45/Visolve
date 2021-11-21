import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'

export default function Form() {

    const [equation, setequation] = useState("")

    handleChange=(e)=>{
        setequation(e.target.value);
        console.warn(equation)
    }

    handlePress=()=>{
        console.log(equation)
    }

    return (
        <View>
            <Text style={styles.header}>Welcome to Visolve</Text>
            <Text style={styles.subHeader}>Solutions to all your problems!!!</Text>
            <TextInput
                placeholder="Enter a one variable equation"
                style={styles.input}
                name={equation}
                value={equation}
                onChangeText={text=>{setequation(text)}}
            />
            <Button
                title="Solve"
                onPress={()=>console.log(equation)}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    header:{
        fontSize: 30,   
        marginBottom: 30,
        fontWeight:'bold',
        alignItems:'center',
        textAlign: 'center'
    },
    subHeader:{
        alignItems:'center',
        textAlign: 'center',
        marginBottom: 50
    }
})