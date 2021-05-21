import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const LanguagePref = () => {
    return (
        <TouchableOpacity style = {styles.container}>
        <View >
            <Text>LanguagePref</Text>
        </View>
        </TouchableOpacity>
    )
}

export default LanguagePref

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        backgroundColor:'grey'
    }
})
