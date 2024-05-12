/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextBox = ({textBoxStyle, nama, textStyleCandidate, fakultas, nim, namaStyle, fakultasStyle, nimStyle}) => {
  

  return (
    <View style ={[styles.box, textBoxStyle]}>
      <Text style={namaStyle}>{nama}</Text>
      <Text style={fakultasStyle}>{fakultas}</Text>
      <Text style={nimStyle}>{nim}</Text>
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