/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextBox = ({textBoxStyle, nama, textStyleCandidate, fakultas, nim, namaStyle, fakultasStyle, nimStyle, children, label, news1Style, label1, news2Style, label2, news3Style, label3,news4Style}) => {
  

  return (
    <View style ={[styles.box, textBoxStyle]}>
      <Text style={namaStyle}>{nama}</Text>
      <Text style={fakultasStyle}>{fakultas}</Text>
      <Text style={nimStyle}>{nim}</Text>
      <Text style={news1Style}>{label}</Text>
      <Text style={news2Style}>{label1}</Text>
      <Text style={news3Style}>{label2}</Text>
      <Text style={news4Style}>{label3}</Text>


      {children}
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