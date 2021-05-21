import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DownloadQuality = () => {
    return (
        <TouchableOpacity style = {styles.container}>
        <View >
            <Text>DownloadQuality</Text>
        </View>
        </TouchableOpacity>
    )
}

export default DownloadQuality

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        backgroundColor:'grey'
    }
})
