/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlainText = ({label, label2,Secretary, Treasurer,Parlementary, Sport,Health, Spiritual, EditorGema, Argiculture,PublicRelation, Education, labelKategoriPresiden}) => {
  return (
    <View>
      <Text style={styles.textStyle}>{label}</Text>
      <Text style={styles.textStyle2}>{label2}</Text>
      <Text style={styles.textStyle3}>{Secretary}</Text>
      <Text style={styles.textStyle4}>{Treasurer}</Text>
      <Text style={styles.textStyle5}>{Parlementary}</Text>
      <Text style={styles.textStyle6}>{Sport}</Text>
      <Text style={styles.textStyle7}>{Health}</Text>
      <Text style={styles.textStyle8}>{Spiritual}</Text>
      <Text style={styles.textStyle9}>{EditorGema}</Text>
      <Text style={styles.textStyle10}>{Argiculture}</Text>
      <Text style={styles.textStyle11}>{PublicRelation}</Text>
      <Text style={styles.textStyle12}>{Education}</Text>
      <Text style={styles.textStyle}>{labelKategoriPresiden}</Text>
    </View>
  )
}

export default PlainText

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 25,
    color: "#000000",
    paddingBottom: -20,
    textAlign: 'center'
  },
  textStyle2: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "600",
    fontSize: 24,
    color: "#000000",
    textAlign: "center",
    lineHeight: 29,
    paddingBottom: 10,
    paddingTop: -20
  },
  textStyle3: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 25,
    color: "#000000",
    paddingBottom: -20,
    textAlign: 'center'
  },
  textStyle4: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 25,
    color: "#000000",
    paddingBottom: -20,
    textAlign: 'center'
  },
  textStyle5: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 25,
    color: "#000000",
    paddingBottom: -20,
    textAlign: 'center'
  },
  textStyle6: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 25,
    color: "#000000",
    paddingBottom: -20,
    textAlign: 'center'
  },
  textStyle7: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 25,
    color: "#000000",
    paddingBottom: -20,
    textAlign: 'center'
  },
  textStyle8: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 25,
    color: "#000000",
    paddingBottom: -20,
    textAlign: 'center'
  },
  textStyle9: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 25,
    color: "#000000",
    paddingBottom: -20,
    textAlign: 'center'
  },
  textStyle10: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 25,
    color: "#000000",
    paddingBottom: -20,
    textAlign: 'center'
  },
  textStyle11: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 25,
    color: "#000000",
    paddingBottom: -20,
    textAlign: 'center'
  },
  textStyle12: {
    fontFamily: 'Poppins-Medium',
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 25,
    color: "#000000",
    paddingBottom: -20,
    textAlign: 'center'
  },
})