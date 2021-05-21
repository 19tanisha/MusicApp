import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Equalizer = () => {
    return (
        <TouchableOpacity style = {styles.container}>
        <View >
            <Text>Equalizer</Text>
        </View>
        </TouchableOpacity>
    )
}

export default Equalizer

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        backgroundColor:'grey'
    }
})
