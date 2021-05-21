import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const StreamingQuality = () => {
    return (
        <TouchableOpacity style = {styles.container}>
        <View >
            <Text>StreamingQuality</Text>
        </View>
        </TouchableOpacity>
    )
}

export default StreamingQuality

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        backgroundColor:'grey'
    }
})
