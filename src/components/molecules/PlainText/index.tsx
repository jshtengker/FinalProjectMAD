/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlainText = ({label}) => {
  return (
    <View>
      <Text style={styles.textStyle}>{label}</Text>
      
    </View>
  )
}

export default PlainText

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color: "#000000"
  },
  textStyle2: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "600",
    fontSize: 24,
    color: "#000000",
    textAlign: "center",
    lineHeight: 36,
  },
})