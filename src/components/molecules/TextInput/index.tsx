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
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 5,
    marginLeft: 50,
  },
  textInput: {
    borderColor: '#FFFFFF',
    width: 260,
    borderRadius: 10,
    paddingLeft: 20,
    paddingVertical: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    backgroundColor: '#FFFFFF',
    marginLeft: 45,
    marginBottom: 15
  },
});