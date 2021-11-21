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
    
})