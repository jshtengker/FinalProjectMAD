/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TextInput as Input, registerCallableModule} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.textInput} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 6,
    marginLeft: 35,
  },
  textInput: {
    borderColor: '#FFFFFF',
    width: 260,
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    backgroundColor: '#FFFFFF',
    marginLeft: 25,
  },
});