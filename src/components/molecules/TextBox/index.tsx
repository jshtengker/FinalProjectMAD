import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextBox = ({textBoxStyle, label, textStyleCandidate}) => {
  

  return (
    <View style ={[styles.box, textBoxStyle]}>
      <Text style={[textStyleCandidate]}>{label}</Text>
    </View>
  )
}

export default TextBox

const styles = StyleSheet.create({
    box :{
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 5,
        marginBottom: 10,
        borderWidth: 1,
        paddingBottom: 150
    }
})